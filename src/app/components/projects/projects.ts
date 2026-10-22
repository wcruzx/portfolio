import { Component, inject } from '@angular/core';
import { ProjectModel, PROJECTS_DATA } from '../../models/ProjectModel';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  standalone: true,
})
export class ProjectsComponent {
  protected readonly i18n = inject(I18nService);
  projects: ProjectModel[] = PROJECTS_DATA;
}
