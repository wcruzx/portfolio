import { Component, inject } from '@angular/core';
import { TypingTitleDirective } from '../shared/typing-title.directive';
import { RecommendationModel, RECOMMENDATIONS_DATA } from '../../models/RecommendationModel';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-recommendations',
  imports: [TypingTitleDirective],
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.scss'],
  standalone: true,
})
export class RecommendationsComponent {
  protected readonly i18n = inject(I18nService);
  recommendations: RecommendationModel[] = RECOMMENDATIONS_DATA;
}
