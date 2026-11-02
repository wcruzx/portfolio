import { Component, DestroyRef, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// idle: cursor piscando no prompt | typing: comando sendo digitado | output: Maven e Spring subindo
type Phase = 'idle' | 'typing' | 'output';

const SEEN_KEY = 'terminal-intro-seen';
const ENTER_PAUSE_MS = 350; // pausa do "Enter" entre digitar e a saída aparecer
const FONT_TIMEOUT_MS = 800;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Sem animação (servidor, visita repetida ou movimento reduzido) o terminal já aparece pronto
  readonly phase = signal<Phase>('output');
  readonly animated = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));

    if (isBrowser && this.shouldAnimate()) {
      this.animated.set(true);
      this.phase.set('idle');
      afterNextRender(() => this.start());
    }
  }

  // Fim da digitação: "aperta Enter" e mostra a saída do comando
  onTyped(): void {
    if (this.phase() !== 'typing') return;
    this.timer = setTimeout(() => this.phase.set('output'), ENTER_PAUSE_MS);
  }

  onSuccessEnd(): void {
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {}
  }

  private shouldAnimate(): boolean {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
      return !sessionStorage.getItem(SEEN_KEY);
    } catch {
      return true;
    }
  }

  // Espera a JetBrains Mono para o texto não "pular" de fonte no meio da animação
  private async start(): Promise<void> {
    const timeout = new Promise((resolve) => setTimeout(resolve, FONT_TIMEOUT_MS));
    try {
      await Promise.race([document.fonts.load('13px "JetBrains Mono"'), timeout]);
    } catch {}
    this.phase.set('typing');
  }
}
