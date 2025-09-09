import profile from "./assets/profile.png";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import java from "./assets/techstack/java.png";
import spring from "./assets/techstack/spring.png";
import csharp from "./assets/techstack/csharp.png";
import net from "./assets/techstack/net.png";
import postgressql from "./assets/techstack/postgressql.png";
import oracle from "./assets/techstack/oracle.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import typescript from "./assets/techstack/typescript.png";
import angular from "./assets/techstack/angular.png";

import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Profissional", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Contato", href: "#contact" },
];

export const personalDetails = {
  name: "Wéverson Cruz",
  tagline: "Desenvolvo soluções para a Web",
  img: profile,
  about: `Graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Engenharia de Software, tenho experiência nas áreas de Suporte em Sistemas e Desenvolvimento de Software, com vivência em linguagens de programação, bancos de dados e testes de qualidade.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/weversoncruz",
  github: "https://github.com/wcruzx",
  whatsapp: "https://wa.me/67991410218",
};

export const workDetails = [
  {
    Position: "Software Developer",
    Company: `Laboratório de Inovação e Tecnologia Jurídica da OAB/MS`,
    Location: "Campo Grande - MS",
    Type: "Integral",
    Duration: "Março 2025 - Agosto 2025",
  },
  {
    Position: "Software Developer",
    Company: `AGETEC - Agência Municipal de Tecnologia da Informação e Inovação`,
    Location: "Campo Grande - MS",
    Type: "Estágio",
    Duration: "Abril 2024 - Dezembro 2024",
  },
  {
    Position: "Support and Systems Analyst",
    Company: `Inovvati Tecnologia`,
    Location: "Campo Grande - MS",
    Type: "Integral",
    Duration: "Junho 2023 - Março 2024",
  },
];

export const eduDetails = [
  {
    Position: "Pós Graduação – Engenharia de Software",
    Company: `Anhanguera Educacional`,
    Location: "Brasil",
    Type: "Online",
    Duration: "Março 2025 - Setembro 2025",
  },
  {
    Position: "Análise e Desenvolvimento de Sistemas",
    Company: "UNOPAR - Universidade Norte do Paraná",
    Location: "Brasil",
    Type: "EAD",
    Duration: "Jan 2022 - Dez 2024",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  typescript: typescript,
  angular: angular,
  react: react,
  tailwind: tailwind,
  java: java,
  spring: spring,
  csharp: csharp,
  net: net,
  postgressql: postgressql,
  oracle: oracle,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
};

export const projectDetails = [
  {
    title: "Sistema de Empreendedorismo Jurídico",
    image: projectImage7,
    description: `Fomentar a inovação e a autonomia dos profissionais do direito, oferecendo um ambiente digital integrado para gestão de projetos, networking, desenvolvimento profissional e acesso a conteúdos da OAB/MS, promovendo a transformação digital no setor jurídico.`,
    techstack: "Angular, Typescript, HTML e CSS",
    previewLink: "https://sej.oabms.org.br/",
    githubLink: "",
  },
  {
    title: "Sistema Municipal de Gestão de Estágio",
    image: projectImage1,
    description: `Durante a minha experiência profissional de estágio, participei da manutenção deste projeto.`,
    techstack: "HTML/CSS, Java, PostgreSQL",
    previewLink: "https://estagio.campogrande.ms.gov.br",
    githubLink: "",
  },
  {
    title: "Sistema de Agendamento de Castração",
    image: projectImage5,
    description: `Durante a minha experiência profissional de estágio, participei da manutenção deste projeto.`,
    techstack: "HTML/CSS, Java, PostgreSQL",
    previewLink: "https://castracao.campogrande.ms.gov.br/",
    githubLink: "",
  },
  {
    title: "Testes Manuais e Automatizados",
    image: projectImage6,
    description: `Teste Manuais e Automatizados nos principais portais e sistemas do municipio, garantindo a qualidade de entrega dos serviços ao cidadão.`,
    techstack: "Selenium IDE",
    previewLink: "https://www.campogrande.ms.gov.br/",
    githubLink: "https://www.campogrande.ms.gov.br/",
  },
  {
    title: "Chess Game",
    image: projectImage2,
    description: `O Chess Game é uma aplicação de xadrez multijogador através do navegador Web.`,
    techstack: "HTML/CSS, JavaScript, React, Node",
    previewLink: "https://github.com/wcruzx/chess-game",
    githubLink: "https://github.com/wcruzx/chess-game",
  },
  {
    title: "Nunes Sports",
    image: projectImage3,
    description: `Sistema de gerenciamento de produtos desenvolvido para um desafio técnico, ele permite a exibição, criação, edição e delete de produtos.`,
    techstack: "HTML/CSS, React, Bootstrap, Java, Spring, H2",
    previewLink: "https://github.com/wcruzx/NunesSports",
    githubLink: "https://github.com/wcruzx/NunesSports",
  },
  {
    title: "API RESTful - ViaCEP",
    image: projectImage4,
    description: `O projeto é uma API RESTful, que consulta o endereço com base em um CEP fornecido e calcula o frete conforme a região do Brasil.`,
    techstack: "Java, SpringBoot, Maven, Postman",
    previewLink: "https://github.com/wcruzx/findcep",
    githubLink: "https://github.com/wcruzx/findcep",
  },
];

export const contactDetails = {
  email: "weversoncruzz@gmail.com",
  phone: "+55 67 991410218",
};
