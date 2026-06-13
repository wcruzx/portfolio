export interface RecommendationModel {
  id: number;
  avatar: string;
  name: string;
  position: string;
  relationship: string;
  description: string;
}

export const RECOMMENDATIONS_DATA: RecommendationModel[] = [

  {
    id: 3,
    avatar: 'assets/jose.jpeg',
    name: 'Jose Antonio Pinto dos Santos',
    position: 'Senior Backend Engineer',
    relationship: 'Trabalhava na mesma equipe',
    description: 'Tive o privilégio de trabalhar com o Wéverson e o que mais me impressiona nele é o equilíbrio entre a capacidade analítica, investigando a fundo os problemas para entender suas origens e promover soluções pontuais e o espírito de equipe. Além de sua competência técnica, ele possui uma excelente comunicação e trabalho em equipe, tornando o ambiente profissional muito mais colaborativo. Ele é sem dúvidas um ativo de peso para qualquer empresa.'
  },
  {
    id: 4,
    avatar: 'assets/leandro.jpeg',
    name: 'Leandro Arruda',
    position: 'Senior Software Developer',
    relationship: 'Trabalhava na mesma equipe',
    description: 'Tive a oportunidade de acompanhar a trajetória profissional do Wéverson e sempre me chamou atenção a dedicação com que encara os desafios da área de desenvolvimento. É um profissional muito comprometido, com forte conhecimento em Java e uma preocupação constante em entregar soluções bem estruturadas e de qualidade. Além da competência técnica, é alguém que está sempre buscando evoluir, aprender novas tecnologias e se manter atualizado. Sem dúvida, é um profissional que agrega valor a qualquer equipe e que tem potencial para assumir desafios cada vez maiores na carreira.'
  },
  {
    id: 1,
    avatar: 'assets/claudiani.jpeg',
    name: 'Claudiani Tomicha',
    position: 'Test Analyst - (Quality Assurance)',
    relationship: 'Trabalhava na mesma equipe',
    description: 'Tive a oportunidade de trabalhar com Weverson por quase um ano, durante esse período, demonstrou proatividade, dedicação e compromisso em suas atividades. No desenvolvimento de softwares cumpriu prazos com eficiência e qualidade. Já em sua breve atuação em testes de qualidade, destacou-se pela contribuição em melhorias no fluxo de front-end.Recomendo-o com confiança, certo de que possui grande potencial e um ótimo colega de equipe.'
  },
  {
    id: 2,
    avatar: 'assets/pablo.jpeg',
    name: 'Pablo Cavalcante',
    position: 'Especialista em Eng. Software',
    relationship: 'supervisionava Wéverson diretamente',
    description: 'Um profissional proativo e com muita força de vontade. Já tem uma ótima inteligência emocional e acredito que será um bom arquiteto ou gestor no futuro.'
  }
];