import { SkillModel, SKILLS_DATA } from './SkillsModel';

export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: SkillModel[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: ProjectModel[] = [
  {
    id: 1,
    image: 'assets/project1.png',
    title: 'Sistema de Empreendedorismo Jurídico',
    description:
      'Sistema com o objetivo de fomentar a inovação e a autonomia dos profissionais do direito.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'TypeScript')!,
    ],
    liveUrl: 'http://sej.oabms.org.br/',
    githubUrl: 'http://sej.oabms.org.br/',
  },
  {
    id: 2,
    image: 'assets/project2.png',
    title: 'Sistema Municipal de Gestão de Estágio',
    description:
      'Sistema para inscrição e gerenciamento de estágios da Prefeitura de Campo Grande, que oferece vagas remuneradas para estudantes de nível profissionalizante, médio e superior.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'PostgreSQL')!,
      SKILLS_DATA.find((skill) => skill.name === 'Oracle')!,
    ],
    liveUrl: 'https://estagio.campogrande.ms.gov.br/home',
    githubUrl: 'https://estagio.campogrande.ms.gov.br',
  },
  {
    id: 3,
    image: 'assets/project3.png',
    title: 'Sistema de Agendamento de Castração',
    description:
      'Sistema de agendamento de castração do município de Campo Grande para controle e marcação de procedimentos de castração animal.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'PostgreSQL')!,
      SKILLS_DATA.find((skill) => skill.name === 'Oracle')!,
    ],
    liveUrl: 'https://castracao.campogrande.ms.gov.br',
    githubUrl: 'https://castracao.campogrande.ms.gov.br',
  },
  {
    id: 4,
    image: 'assets/project4.png',
    title: 'Chess Game',
    description: 'O Chess Game é uma aplicação de xadrez multijogador através do navegador Web.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'React')!,
      SKILLS_DATA.find((skill) => skill.name === 'NodeJS')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
    ],
    liveUrl: 'https://github.com/wcruzx/chess-game',
    githubUrl: 'https://github.com/wcruzx/chess-game',
  },
  {
    id: 5,
    image: 'assets/project5.png',
    title: 'Nunes Sports',
    description:
      'Sistema de gerenciamento de produtos desenvolvido para um desafio técnico, ele permite a exibição, criação, edição e delete de produtos.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'React')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'Spring')!,
      SKILLS_DATA.find((skill) => skill.name === 'H2')!,
    ],
    liveUrl: 'https://github.com/wcruzx/NunesSports',
    githubUrl: 'https://github.com/wcruzx/NunesSports',
  },
  {
    id: 6,
    image: 'assets/project6.png',
    title: 'API RESTful - ViaCEP',
    description:
      'O projeto é uma API RESTful, que consulta o endereço com base em um CEP fornecido e calcula o frete conforme a região do Brasil.',
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'Spring')!,
      SKILLS_DATA.find((skill) => skill.name === 'Maven')!,
      SKILLS_DATA.find((skill) => skill.name === 'Postman')!,
    ],
    liveUrl: 'https://github.com/wcruzx/findcep',
    githubUrl: 'https://github.com/wcruzx/findcep',
  },
];
