import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'preferred_language';

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY);
    const browserLanguage = this.translate.getBrowserLang();
    const defaultLanguage = savedLanguage || (browserLanguage?.match(/en|es/) ? browserLanguage : 'en');
    
    this.translate.setDefaultLang('en');
    this.translate.use(defaultLanguage);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(this.STORAGE_KEY, language);
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'es' : 'en';
    this.setLanguage(newLang);
  }
}
