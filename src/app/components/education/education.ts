import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationList: EducationModel[] = [
    {
      id: 1,
      icon: 'assets/education.svg',
      institution: 'Anhanguera Educacional',
      courseName: 'Arquitetura de Microsserviços',
      courseType: 'MBA',
      period: 'Setembro 2025 - Março 2026',
    },
    {
      id: 2,
      icon: 'assets/education.svg',
      institution: 'Anhanguera Educacional',
      courseName: 'Engenharia de Software',
      courseType: 'Pós Graduação',
      period: 'Março 2025 - Setembro 2025',
    },
    {
      id: 3,
      icon: 'assets/education.svg',
      institution: 'UNOPAR - Universidade Norte do Paraná',
      courseName: 'Análise e Desenvolvimento de Sistemas',
      courseType: 'Graduação',
      period: 'Julho 2022 - Dezembro 2024',
    },
  ];
}
