import { Component } from '@angular/core';
import { ExperienceModel } from '../../models/ExperienceModel';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences: ExperienceModel[] = [
    {
      id: 1,
      period: 'Março 2025 - Agosto 2025',
      company: 'Laboratório de Inovação e Tecnologia Jurídica da OAB/MS',
      jobTitle: 'Software Developer',
    },
    {
      id: 2,
      period: 'Abril 2024 - Dezembro 2024',
      company: 'AGETEC - Agência Municipal de Tecnologia da Informação e Inovação',
      jobTitle: 'Software Developer',
    },
    {
      id: 3,
      period: 'Junho 2023 - Março 2024',
      company: 'Inovvati Tecnologia',
      jobTitle: 'Support and Systems Analyst',
    },
  ];
}
