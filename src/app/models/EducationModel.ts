import { Localized } from '../i18n/i18n.service';

export interface EducationModel {
  id: number;
  institution: string;
  courseName: Localized;
  courseType: Localized;
  period: Localized;
}
