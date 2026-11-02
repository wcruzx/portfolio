import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Digita o título letra por letra quando ele aparece na tela (uma vez por carregamento).
 * A animação fica no CSS global (.title-typing em styles.scss); aqui só se conta as letras
 * e liga as classes. Sem JavaScript ou com movimento reduzido, o título aparece normal.
 */
@Directive({
  selector: '[appTypingTitle]',
  host: { '(animationend)': 'onAnimationEnd($event)' },
})
export class TypingTitleDirective {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      this.el.classList.add('title-typing');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          this.el.style.setProperty('--n', String(this.el.textContent?.length ?? 0));
          this.el.classList.add('is-typing');
        },
        { threshold: 0.5 },
      );
      observer.observe(this.el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  // Depois do cursor sumir, a largura volta ao normal (assim a troca de idioma não corta o texto)
  onAnimationEnd(event: AnimationEvent): void {
    if (event.target !== this.el || !event.animationName.includes('title-caret-off')) return;
    this.el.classList.remove('title-typing', 'is-typing');
  }
}
