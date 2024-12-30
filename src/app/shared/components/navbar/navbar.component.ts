import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected navbarListContainer = viewChild('navbarListContainer', {read: ElementRef});

  protected isActive = signal<boolean>(false);

  @HostListener('document:mouseup', ['$event'])
  public clickOutside(event:Event) {
    if (!this.navbarListContainer()?.nativeElement.contains(event.target)) {
      this.isActive.set(false);
    }
  }
}
