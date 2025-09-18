import { Component } from '@angular/core';
import { SkillModel, SKILLS_DATA } from '../../models/SkillsModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  standalone: true
})
export class SkillsComponent {
  skills: SkillModel[] = SKILLS_DATA;
}