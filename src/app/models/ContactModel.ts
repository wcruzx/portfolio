export interface ContactModel {
  name: string;
  email: string;
  message: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin: string;
  github: string;
}

export const CONTACT_INFO: ContactInfo = {
  phone: '+5567991410218',
  email: 'weversoncruzz@gmail.com',
  address: 'Campo Grande, MS - Brasil',
  linkedin: 'https://www.linkedin.com/in/weversoncruz',
  github: 'https://github.com/wcruzx',
};
