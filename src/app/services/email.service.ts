import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { ContactModel } from '../models/ContactModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_vv3qm1l'; 
  private readonly TEMPLATE_ID = 'template_gruh1rh';
  private readonly USER_ID = 'KvC7QaKWhd50BBsCS';

  constructor() {
    emailjs.init(this.USER_ID);
  }

  async sendEmail(contactData: ContactModel): Promise<void> {
    const templateParams = {
      from_name: contactData.name,
      reply_to: contactData.email,
      message: contactData.message
    };

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.USER_ID
      );
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  }
}