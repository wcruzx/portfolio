export interface SkillModel {
  name: string;
  iconPath: string;
  category?: string;
}

export const SKILLS_DATA: SkillModel[] = [
  {
    name: 'Angular',
    iconPath: 'assets/angular.svg',
    category: 'Frontend',
  },
  {
    name: 'Bootstrap',
    iconPath: 'assets/bootstrap.svg',
    category: 'Frontend',
  },
  {
    name: 'C#',
    iconPath: 'assets/csharp.svg',
    category: 'Backend',
  },
  {
    name: 'CSS3',
    iconPath: 'assets/css3.svg',
    category: 'Frontend',
  },
  {
    name: '.NET Core',
    iconPath: 'assets/dotnetcore.svg',
    category: 'Backend',
  },
  {
    name: 'Git',
    iconPath: 'assets/git.svg',
    category: 'Tools',
  },
  {
    name: 'GitHub',
    iconPath: 'assets/github.svg',
    category: 'Tools',
  },
  {
    name: 'HTML5',
    iconPath: 'assets/html5.svg',
    category: 'Frontend',
  },
  {
    name: 'Java',
    iconPath: 'assets/java.svg',
    category: 'Backend',
  },
  {
    name: 'JavaScript',
    iconPath: 'assets/javascript.svg',
    category: 'Frontend',
  },
  {
    name: 'PostgreSQL',
    iconPath: 'assets/postgresql.svg',
    category: 'Database',
  },
  {
    name: 'Oracle',
    iconPath: 'assets/oracle.svg',
    category: 'Database',
  },
  {
    name: 'H2',
    iconPath: 'assets/h2.png',
    category: 'Database',
  },
  {
    name: 'Postman',
    iconPath: 'assets/postman.svg',
    category: 'Tools',
  },
  {
    name: 'React',
    iconPath: 'assets/react.svg',
    category: 'Frontend',
  },
  {
    name: 'Spring',
    iconPath: 'assets/spring.svg',
    category: 'Backend',
  },
  {
    name: 'SASS',
    iconPath: 'assets/sass.svg',
    category: 'Frontend',
  },
  {
    name: 'Maven',
    iconPath: 'assets/maven.svg',
    category: 'Backend',
  },
  {
    name: 'NodeJS',
    iconPath: 'assets/nodejs.svg',
    category: 'Backend',
  },
  {
    name: 'TypeScript',
    iconPath: 'assets/typescript.svg',
    category: 'Frontend',
  },
];
