import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  label: string;
  target: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(target: string) {
    if (target === 'curriculo') {
      this.viewCV();
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }

  viewCV() {
    window.open('assets/curriculo.pdf', '_blank');

    this.isMenuOpen = false;
  }

  menuItems: MenuItem[] = [
    { id: 1, label: 'Home', target: 'home' },
    { id: 2, label: 'Sobre', target: 'about' },
    { id: 3, label: 'Experiências', target: 'experience' },
    { id: 4, label: 'Projetos', target: 'projects' },
    { id: 5, label: 'Contato', target: 'contact' },
    { id: 6, label: 'Currículo', target: 'curriculo' },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  specialItems: MenuItem[] = [{ id: 6, label: 'Currículo', target: 'curriculo' }];

  getLogo(): string {
    return '{Dev}';
  }
}
