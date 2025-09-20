import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { RecommendationsComponent } from './components/recommendations/recommendations';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Home,
    About,
    Education,
    Experience,
    SkillsComponent,
    RecommendationsComponent,
    ProjectsComponent,
    ContactComponent,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-v2');
}
