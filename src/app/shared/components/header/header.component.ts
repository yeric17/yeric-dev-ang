import { Component, signal, HostListener, ElementRef, viewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang = signal<string>('en');
  isDropdownOpen = signal<boolean>(false);
  
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '/flags/flag-united-states.svg' },
    { code: 'es', name: 'Español', flag: '/flags/flag-spain.svg' }
  ];

  dropdownContainer = viewChild('dropdownContainer', { read: ElementRef });

  constructor(private languageService: LanguageService) {
    this.currentLang.set(this.languageService.getCurrentLanguage());
  }

  getCurrentLanguage(): Language {
    return this.languages.find(lang => lang.code === this.currentLang()) || this.languages[0];
  }

  toggleDropdown(): void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  selectLanguage(langCode: string): void {
    this.languageService.setLanguage(langCode);
    this.currentLang.set(langCode);
    this.isDropdownOpen.set(false);
  }

  @HostListener('document:mouseup', ['$event'])
  clickOutside(event: Event): void {
    if (this.dropdownContainer() && !this.dropdownContainer()?.nativeElement.contains(event.target)) {
      this.isDropdownOpen.set(false);
    }
  }
}
