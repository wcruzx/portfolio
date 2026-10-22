import { Component, inject } from '@angular/core';
import { ExperienceModel } from '../../models/ExperienceModel';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly i18n = inject(I18nService);

  experiences: ExperienceModel[] = [
    {
      id: 1,
      current: true,
      period: { pt: 'Outubro 2025 - Atualmente', en: 'October 2025 - Present' },
      company: 'Kratos Sistemas',
      jobTitle: 'Software Developer',
    },
    {
      id: 2,
      period: { pt: 'Março 2025 - Agosto 2025', en: 'March 2025 - August 2025' },
      company: {
        pt: 'Laboratório de Inovação e Tecnologia Jurídica da OAB/MS',
        en: 'Legal Innovation and Technology Lab, OAB/MS',
      },
      jobTitle: 'Software Developer',
    },
    {
      id: 3,
      period: { pt: 'Abril 2024 - Dezembro 2024', en: 'April 2024 - December 2024' },
      company: {
        pt: 'AGETEC - Agência Municipal de Tecnologia da Informação e Inovação',
        en: 'AGETEC - Municipal Agency for Information Technology and Innovation',
      },
      jobTitle: 'Software Developer',
    },
    {
      id: 4,
      period: { pt: 'Junho 2023 - Março 2024', en: 'June 2023 - March 2024' },
      company: 'Inovvati Tecnologia',
      jobTitle: 'Support and Systems Analyst',
    },
  ];
}
