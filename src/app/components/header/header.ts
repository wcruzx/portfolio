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
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false; // Fecha o menu após clicar
    }
  }

  menuItems: MenuItem[] = [
    { id: 1, label: 'Home', target: 'home' },
    { id: 2, label: 'Sobre', target: 'about' },
    { id: 3, label: 'Experiências', target: 'experience' },
    { id: 4, label: 'Projetos', target: 'projects' },
    { id: 5, label: 'Contato', target: 'contact' },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getLogo(): string {
    return '{Dev}';
  }
}
