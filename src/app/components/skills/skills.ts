import { Component, inject } from '@angular/core';
import { SkillModel, SKILLS_DATA } from '../../models/SkillsModel';
import { I18nService } from '../../i18n/i18n.service';
import { TranslationKey } from '../../i18n/ui-text';

interface SkillGroup {
  labelKey: TranslationKey;
  skills: SkillModel[];
}

// Ordem e agrupamento das categorias do SkillsModel
const GROUPS: { labelKey: TranslationKey; categories: string[] }[] = [
  { labelKey: 'skills.backend', categories: ['Backend'] },
  { labelKey: 'skills.frontend', categories: ['Frontend'] },
  { labelKey: 'skills.database', categories: ['Database'] },
  { labelKey: 'skills.cloudTools', categories: ['Cloud', 'Tools'] },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  standalone: true,
})
export class SkillsComponent {
  protected readonly i18n = inject(I18nService);

  groups: SkillGroup[] = GROUPS.map((group) => ({
    labelKey: group.labelKey,
    skills: SKILLS_DATA.filter((skill) => group.categories.includes(skill.category ?? '')),
  })).filter((group) => group.skills.length > 0);
}
