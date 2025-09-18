import { Component } from '@angular/core';
import { ProjectModel, PROJECTS_DATA } from '../../models/ProjectModel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  standalone: true
})
export class ProjectsComponent {
  projects: ProjectModel[] = PROJECTS_DATA;
}