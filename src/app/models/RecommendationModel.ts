import { Localized } from '../i18n/i18n.service';

export interface RecommendationModel {
  id: number;
  avatar: string;
  name: string;
  position: Localized;
  relationship: Localized;
  description: Localized;
}

export const RECOMMENDATIONS_DATA: RecommendationModel[] = [
  {
    id: 3,
    avatar: 'assets/jose.jpeg',
    name: 'Jose Antonio Pinto dos Santos',
    position: 'Senior Backend Engineer',
    relationship: { pt: 'Trabalhava na mesma equipe', en: 'Worked on the same team' },
    description: {
      pt: 'Tive o privilégio de trabalhar com o Wéverson e o que mais me impressiona nele é o equilíbrio entre a capacidade analítica, investigando a fundo os problemas para entender suas origens e promover soluções pontuais e o espírito de equipe. Além de sua competência técnica, ele possui uma excelente comunicação e trabalho em equipe, tornando o ambiente profissional muito mais colaborativo. Ele é sem dúvidas um ativo de peso para qualquer empresa.',
      en: 'I had the privilege of working with Wéverson, and what impresses me most is his balance between analytical skill, digging deep into problems to understand their origins and deliver targeted solutions, and team spirit. Beyond his technical competence, he communicates very well and works great in a team, making the work environment much more collaborative. He is without a doubt a major asset to any company.',
    },
  },
  {
    id: 4,
    avatar: 'assets/leandro.jpeg',
    name: 'Leandro Arruda',
    position: 'Senior Software Developer',
    relationship: { pt: 'Trabalhava na mesma equipe', en: 'Worked on the same team' },
    description: {
      pt: 'Tive a oportunidade de acompanhar a trajetória profissional do Wéverson e sempre me chamou atenção a dedicação com que encara os desafios da área de desenvolvimento. É um profissional muito comprometido, com forte conhecimento em Java e uma preocupação constante em entregar soluções bem estruturadas e de qualidade. Além da competência técnica, é alguém que está sempre buscando evoluir, aprender novas tecnologias e se manter atualizado. Sem dúvida, é um profissional que agrega valor a qualquer equipe e que tem potencial para assumir desafios cada vez maiores na carreira.',
      en: "I've had the opportunity to follow Wéverson's career, and the dedication he brings to development challenges has always stood out to me. He is a very committed professional, with strong Java knowledge and a constant concern for delivering well-structured, high-quality solutions. Beyond his technical skills, he is always looking to grow, learn new technologies and stay up to date. He is without a doubt a professional who adds value to any team and has the potential to take on ever greater challenges in his career.",
    },
  },
  {
    id: 1,
    avatar: 'assets/claudiani.jpeg',
    name: 'Claudiani Tomicha',
    position: 'Test Analyst - (Quality Assurance)',
    relationship: { pt: 'Trabalhava na mesma equipe', en: 'Worked on the same team' },
    description: {
      pt: 'Tive a oportunidade de trabalhar com Weverson por quase um ano, durante esse período, demonstrou proatividade, dedicação e compromisso em suas atividades. No desenvolvimento de softwares cumpriu prazos com eficiência e qualidade. Já em sua breve atuação em testes de qualidade, destacou-se pela contribuição em melhorias no fluxo de front-end.Recomendo-o com confiança, certo de que possui grande potencial e um ótimo colega de equipe.',
      en: 'I had the opportunity to work with Weverson for almost a year. During that time he showed proactivity, dedication and commitment in his work. In software development he met deadlines efficiently and with quality. In his brief time in quality testing, he stood out for contributing improvements to the front-end flow. I recommend him with confidence; he has great potential and is a great teammate.',
    },
  },
  {
    id: 2,
    avatar: 'assets/pablo.jpeg',
    name: 'Pablo Cavalcante',
    position: { pt: 'Especialista em Eng. Software', en: 'Software Engineering Specialist' },
    relationship: { pt: 'supervisionava Wéverson diretamente', en: 'Supervised Wéverson directly' },
    description: {
      pt: 'Um profissional proativo e com muita força de vontade. Já tem uma ótima inteligência emocional e acredito que será um bom arquiteto ou gestor no futuro.',
      en: 'A proactive professional with a lot of willpower. He already has great emotional intelligence, and I believe he will be a good architect or manager in the future.',
    },
  },
];
