import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { TranslationKey, UI_TEXT } from './ui-text';

export type Lang = 'pt' | 'en';

/** Texto que pode ser igual nos dois idiomas (string) ou traduzido ({ pt, en }). */
export type Localized = string | Record<Lang, string>;

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly languages: Lang[] = ['pt', 'en'];
  readonly lang = signal<Lang>(this.readSavedLang());

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.lang() === 'pt' ? 'pt-BR' : 'en';
    });
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Navegação privada ou armazenamento bloqueado: o idioma vale só para esta visita.
    }
  }

  /** Texto fixo da interface. */
  t(key: TranslationKey): string {
    return UI_TEXT[this.lang()][key];
  }

  /** Texto vindo dos dados (experiências, projetos etc.). */
  pick(value: Localized): string {
    return typeof value === 'string' ? value : value[this.lang()];
  }

  private readSavedLang(): Lang {
    if (!this.isBrowser) return 'pt';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  }
}
