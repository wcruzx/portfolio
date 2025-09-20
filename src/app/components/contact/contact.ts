import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactModel, CONTACT_INFO } from '../../models/ContactModel';
import { EmailService } from '../../services/email.service';
import { AlertService } from '../../services/alert.service';
import { AlertComponent } from '../shared/alert.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent],
})
export class ContactComponent {
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
      console.log('Nome vazio');
      this.alertService.showError('Por favor, preencha o campo Nome');
      return;
    }

    if (!this.contactData.email?.trim()) {
      this.alertService.showError('Por favor, preencha o campo Email');
      return;
    }

    if (!this.validateEmail(this.contactData.email)) {
      this.alertService.showError('Por favor, insira um email válido');
      return;
    }

    if (!this.contactData.message?.trim()) {
      this.alertService.showError('Por favor, preencha o campo Mensagem');
      return;
    }

    this.isSubmitting = true;

    try {
      await this.emailService.sendEmail(this.contactData);
      this.alertService.showSuccess('Mensagem enviada com sucesso!');
      this.resetForm();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      this.alertService.showError('Erro ao enviar mensagem. Por favor, tente novamente.');
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
