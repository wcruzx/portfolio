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
    id: 1,
    avatar: 'assets/claudiani.jpeg',
    name: 'Claudiani Tomicha',
    position: 'Test Analyst - (Quality Assurance)',
    relationship: 'Trabalhava na mesma equipe',
    description: 'Tive a oportunidade de trabalhar com Weverson por quase um ano, durante esse período como estagiário, demonstrou proatividade, dedicação e compromisso em suas atividades. No desenvolvimento de softwares cumpriu prazos com eficiência e qualidade. Já em sua breve atuação em testes de qualidade, destacou-se pela contribuição em melhorias no fluxo de front-end.Recomendo-o com confiança, certo de que possui grande potencial e um ótimo colega de equipe.'
  },
  {
    id: 2,
    avatar: 'assets/pablo.jpeg',
    name: 'Pablo Cavalcante',
    position: 'Gerente de T.I.',
    relationship: 'supervisionava Wéverson diretamente',
    description: 'Um profissional proativo e com muita força de vontade. Já tem uma ótima inteligência emocional e acredito que será um bom arquiteto ou gestor no futuro.'
  }
];