import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { TranslationKey } from '../../i18n/ui-text';

interface MenuItem {
  id: number;
  labelKey: TranslationKey;
  target: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(I18nService);
  private readonly destroyRef = inject(DestroyRef);

  readonly isMenuOpen = signal(false);
  readonly activeSection = signal('home');

  readonly menuItems: MenuItem[] = [
    { id: 1, labelKey: 'nav.home', target: 'home' },
    { id: 2, labelKey: 'nav.about', target: 'about' },
    { id: 3, labelKey: 'nav.experience', target: 'experience' },
    { id: 4, labelKey: 'nav.projects', target: 'projects' },
    { id: 5, labelKey: 'nav.contact', target: 'contact' },
  ];

  constructor() {
    // Destaca no menu a seção que está no meio da tela
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeSection.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const item of this.menuItems) {
        const el = document.getElementById(item.target);
        if (el) observer.observe(el);
      }
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  scrollToSection(event: Event, target: string) {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  getLogo(): string {
    return '{WC}';
  }
}
