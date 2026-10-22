// Textos fixos da interface, por idioma.
const pt = {
  'nav.home': 'Home',
  'nav.about': 'Sobre',
  'nav.experience': 'Experiências',
  'nav.projects': 'Projetos',
  'nav.contact': 'Contato',
  'nav.cv': 'Currículo',
  'nav.menu': 'Menu',
  'nav.close': 'Fechar',
  'nav.sections': 'Seções',
  'nav.language': 'Idioma',

  'about.title': 'Sobre mim()',
  'about.text':
    'Me chamo <strong>Wéverson Cruz,</strong> sou graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Engenharia de Software, tenho experiência nas áreas de Suporte em Sistemas e Desenvolvimento de Software, com vivência em linguagens de programação, bancos de dados e testes de qualidade.',

  'experience.title': 'Experiências',
  'recommendations.title': 'Recomendações',
  'skills.title': 'Habilidades',
  'skills.backend': 'Back-end',
  'skills.frontend': 'Front-end',
  'skills.database': 'Banco de dados',
  'skills.cloudTools': 'Cloud e ferramentas',
  'projects.title': 'Projetos',
  'projects.live': 'Live',
  'projects.code': 'Código fonte',
  'education.title': 'Educação',

  'contact.title': 'Contato',
  'contact.address': 'Campo Grande, MS - Brasil',
  'contact.name': 'Nome',
  'contact.namePlaceholder': 'Seu nome',
  'contact.email': 'Email',
  'contact.emailPlaceholder': 'seu.email@exemplo.com',
  'contact.message': 'Mensagem',
  'contact.messagePlaceholder': 'Digite sua mensagem',
  'contact.send': 'Enviar mensagem',
  'contact.clear': 'Limpar',
  'contact.errorName': 'Por favor, preencha o campo Nome',
  'contact.errorEmail': 'Por favor, preencha o campo Email',
  'contact.errorEmailInvalid': 'Por favor, insira um email válido',
  'contact.errorMessage': 'Por favor, preencha o campo Mensagem',
  'contact.success': 'Mensagem enviada com sucesso!',
  'contact.errorSend': 'Erro ao enviar mensagem. Por favor, tente novamente.',

  'footer.by': 'Desenvolvido por',
};

export type TranslationKey = keyof typeof pt;

const en: Record<TranslationKey, string> = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.cv': 'Resume',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.sections': 'Sections',
  'nav.language': 'Language',

  'about.title': 'About me()',
  'about.text':
    'My name is <strong>Wéverson Cruz.</strong> I hold a degree in Systems Analysis and Development and a postgraduate degree in Software Engineering. I have experience in Systems Support and Software Development, working with programming languages, databases and quality testing.',

  'experience.title': 'Experience',
  'recommendations.title': 'Recommendations',
  'skills.title': 'Skills',
  'skills.backend': 'Back-end',
  'skills.frontend': 'Front-end',
  'skills.database': 'Databases',
  'skills.cloudTools': 'Cloud and tools',
  'projects.title': 'Projects',
  'projects.live': 'Live',
  'projects.code': 'Source code',
  'education.title': 'Education',

  'contact.title': 'Contact',
  'contact.address': 'Campo Grande, MS - Brazil',
  'contact.name': 'Name',
  'contact.namePlaceholder': 'Your name',
  'contact.email': 'Email',
  'contact.emailPlaceholder': 'your.email@example.com',
  'contact.message': 'Message',
  'contact.messagePlaceholder': 'Type your message',
  'contact.send': 'Send message',
  'contact.clear': 'Clear',
  'contact.errorName': 'Please fill in the Name field',
  'contact.errorEmail': 'Please fill in the Email field',
  'contact.errorEmailInvalid': 'Please enter a valid email',
  'contact.errorMessage': 'Please fill in the Message field',
  'contact.success': 'Message sent successfully!',
  'contact.errorSend': 'Could not send the message. Please try again.',

  'footer.by': 'Developed by',
};

export const UI_TEXT = { pt, en };
