import { Component } from '@angular/core';
import { RecommendationModel, RECOMMENDATIONS_DATA } from '../../models/RecommendationModel';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.scss'],
  standalone: true
})
export class RecommendationsComponent {
  recommendations: RecommendationModel[] = RECOMMENDATIONS_DATA;
}