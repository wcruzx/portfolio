import { Component, inject } from '@angular/core';
import { EducationModel } from '../../models/EducationModel';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly i18n = inject(I18nService);

  educationList: EducationModel[] = [
    {
      id: 4,
      institution: 'UNIPDS',
      courseName: { pt: 'Engenharia de IA Aplicada', en: 'Applied AI Engineering' },
      courseType: { pt: 'Pós Graduação', en: 'Postgraduate' },
      period: { pt: 'Julho 2026 - Atualmente', en: 'July 2026 - Present' },
    },
    {
      id: 1,
      institution: 'Anhanguera Educacional',
      courseName: { pt: 'Arquitetura de Microsserviços', en: 'Microservices Architecture' },
      courseType: 'MBA',
      period: { pt: 'Setembro 2025 - Março 2026', en: 'September 2025 - March 2026' },
    },
    {
      id: 2,
      institution: 'Anhanguera Educacional',
      courseName: { pt: 'Engenharia de Software', en: 'Software Engineering' },
      courseType: { pt: 'Pós Graduação', en: 'Postgraduate' },
      period: { pt: 'Março 2025 - Setembro 2025', en: 'March 2025 - September 2025' },
    },
    {
      id: 3,
      institution: 'UNOPAR - Universidade Norte do Paraná',
      courseName: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
      courseType: { pt: 'Graduação', en: 'Undergraduate' },
      period: { pt: 'Julho 2022 - Dezembro 2024', en: 'July 2022 - December 2024' },
    },
  ];
}
