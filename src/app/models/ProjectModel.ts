import { Localized } from '../i18n/i18n.service';
import { SkillModel, SKILLS_DATA } from './SkillsModel';

export interface ProjectModel {
  id: number;
  title: Localized;
  description: Localized;
  image: string;
  technologies: SkillModel[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: ProjectModel[] = [
  {
    id: 8,
    image: 'assets/project8.png',
    title: 'Kratos Sistemas',
    description: {
      pt: 'Sistema ERP online, Emissão de NFe, NFCe, MDFe, controle de estoque, Boleto e conciliação Bancária, Fluxo de Caixa, Compras, Pagamentos etc.',
      en: 'Online ERP system: electronic invoices (NFe, NFCe, MDFe), inventory control, bank slips and bank reconciliation, cash flow, purchasing, payments and more.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'Azure')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'Vue.js')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'Spring')!,
      SKILLS_DATA.find((skill) => skill.name === 'SQL Server')!,
      SKILLS_DATA.find((skill) => skill.name === 'PostgreSQL')!,
      SKILLS_DATA.find((skill) => skill.name === 'Docker')!,
    ],
    liveUrl: 'https://www.sistemakratos.com.br/',
    githubUrl: 'https://github.com',
  },
  {
    id: 7,
    image: 'assets/project7.png',
    title: 'Landing Page - FGTS Inovac',
    description: {
      pt: 'Landing page desenvolvida para apresentar e promover um serviço financeiro de antecipação do saque do FGTS.',
      en: 'Landing page built to present and promote a financial service for advancing FGTS withdrawals.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'TypeScript')!,

    ],
    liveUrl: 'https://wcruzx.github.io/fgts-inovac/',
    githubUrl: 'https://github.com/wcruzx/fgts-inovac',
  },
  {
    id: 1,
    image: 'assets/project1.2.png',
    title: {
      pt: 'Sistema de Empreendedorismo Jurídico',
      en: 'Legal Entrepreneurship System',
    },
    description: {
      pt: 'Sistema com o objetivo de fomentar a inovação e a autonomia dos profissionais do direito.',
      en: 'System that fosters innovation and autonomy for legal professionals.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'SASS')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'TypeScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'C#')!,
      SKILLS_DATA.find((skill) => skill.name === '.NET Core')!,
      SKILLS_DATA.find((skill) => skill.name === 'SQL Server')!,
    ],
    liveUrl: 'http://sej.oabms.org.br/',
    githubUrl: 'http://sej.oabms.org.br/',
  },
  {
    id: 2,
    image: 'assets/project2.1.png',
    title: {
      pt: 'Sistema Municipal de Gestão de Estágio',
      en: 'Municipal Internship Management System',
    },
    description: {
      pt: 'Sistema para inscrição e gerenciamento de estágios da Prefeitura de Campo Grande, que oferece vagas remuneradas para estudantes de nível profissionalizante, médio e superior.',
      en: 'System for applying to and managing internships at the Campo Grande City Hall, which offers paid positions for vocational, high school and university students.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'PostgreSQL')!,
      SKILLS_DATA.find((skill) => skill.name === 'Oracle')!,
      SKILLS_DATA.find((skill) => skill.name === 'Docker')!,
    ],
    liveUrl: 'https://estagio.campogrande.ms.gov.br/home',
    githubUrl: 'https://estagio.campogrande.ms.gov.br',
  },
  {
    id: 3,
    image: 'assets/project3.1.png',
    title: {
      pt: 'Sistema de Agendamento de Castração',
      en: 'Pet Neutering Scheduling System',
    },
    description: {
      pt: 'Sistema de agendamento de castração do município de Campo Grande para controle e marcação de procedimentos de castração animal.',
      en: 'Scheduling system for the city of Campo Grande to manage and book animal neutering procedures.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'Angular')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'PostgreSQL')!,
      SKILLS_DATA.find((skill) => skill.name === 'Oracle')!,
      SKILLS_DATA.find((skill) => skill.name === 'Docker')!,
    ],
    liveUrl: 'https://castracao.campogrande.ms.gov.br',
    githubUrl: 'https://castracao.campogrande.ms.gov.br',
  },
  {
    id: 4,
    image: 'assets/project4.1.png',
    title: 'Chess Game',
    description: {
      pt: 'O Chess Game é uma aplicação de xadrez multijogador através do navegador Web.',
      en: 'Chess Game is a multiplayer chess application played in the web browser.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'React')!,
      SKILLS_DATA.find((skill) => skill.name === 'NodeJS')!,
    ],
    liveUrl: 'https://github.com/wcruzx/chess-game',
    githubUrl: 'https://github.com/wcruzx/chess-game',
  },
  {
    id: 5,
    image: 'assets/project5.1.png',
    title: 'Nunes Sports',
    description: {
      pt: 'Sistema de gerenciamento de produtos desenvolvido para um desafio técnico, ele permite a exibição, criação, edição e delete de produtos.',
      en: 'Product management system built for a technical challenge. It lets you list, create, edit and delete products.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'HTML5')!,
      SKILLS_DATA.find((skill) => skill.name === 'CSS3')!,
      SKILLS_DATA.find((skill) => skill.name === 'JavaScript')!,
      SKILLS_DATA.find((skill) => skill.name === 'React')!,
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'Spring')!,
      SKILLS_DATA.find((skill) => skill.name === 'H2')!,
      SKILLS_DATA.find((skill) => skill.name === 'Docker')!,
    ],
    liveUrl: 'https://github.com/wcruzx/NunesSports',
    githubUrl: 'https://github.com/wcruzx/NunesSports',
  },
  {
    id: 6,
    image: 'assets/project6.1.png',
    title: 'API RESTful - ViaCEP',
    description: {
      pt: 'O projeto é uma API RESTful, que consulta o endereço com base em um CEP fornecido e calcula o frete conforme a região do Brasil.',
      en: 'A RESTful API that looks up an address from a Brazilian postal code (CEP) and calculates shipping based on the region of Brazil.',
    },
    technologies: [
      SKILLS_DATA.find((skill) => skill.name === 'Java')!,
      SKILLS_DATA.find((skill) => skill.name === 'Spring')!,
      SKILLS_DATA.find((skill) => skill.name === 'Maven')!,
      SKILLS_DATA.find((skill) => skill.name === 'Postman')!,
      SKILLS_DATA.find((skill) => skill.name === 'SQL Server')!,
      SKILLS_DATA.find((skill) => skill.name === 'Docker')!,
    ],
    liveUrl: 'https://github.com/wcruzx/findcep',
    githubUrl: 'https://github.com/wcruzx/findcep',
  },
];
