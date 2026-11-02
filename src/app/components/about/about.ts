import { Component, inject } from '@angular/core';
import { TypingTitleDirective } from '../shared/typing-title.directive';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-about',
  imports: [TypingTitleDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(I18nService);
}
