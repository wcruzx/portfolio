import { Localized } from '../i18n/i18n.service';

export interface ExperienceModel {
  id: number;
  period: Localized;
  company: Localized;
  jobTitle: string;
  current?: boolean;
}
