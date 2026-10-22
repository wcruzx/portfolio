import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactModel, CONTACT_INFO } from '../../models/ContactModel';
import { EmailService } from '../../services/email.service';
import { AlertService } from '../../services/alert.service';
import { AlertComponent } from '../shared/alert.component';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent],
})
export class ContactComponent {
  protected readonly i18n = inject(I18nService);

  contactData: ContactModel = {
    name: '',
    email: '',
    message: '',
  };

  contactInfo = CONTACT_INFO;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  constructor(private emailService: EmailService, private alertService: AlertService) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    // Validação dos campos
    if (!this.contactData.name?.trim()) {
      this.alertService.showError(this.i18n.t('contact.errorName'));
      return;
    }

    if (!this.contactData.email?.trim()) {
      this.alertService.showError(this.i18n.t('contact.errorEmail'));
      return;
    }

    if (!this.validateEmail(this.contactData.email)) {
      this.alertService.showError(this.i18n.t('contact.errorEmailInvalid'));
      return;
    }

    if (!this.contactData.message?.trim()) {
      this.alertService.showError(this.i18n.t('contact.errorMessage'));
      return;
    }

    this.isSubmitting = true;

    try {
      await this.emailService.sendEmail(this.contactData);
      this.alertService.showSuccess(this.i18n.t('contact.success'));
      this.resetForm();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      this.alertService.showError(this.i18n.t('contact.errorSend'));
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
