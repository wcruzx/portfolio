import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(I18nService);
}
