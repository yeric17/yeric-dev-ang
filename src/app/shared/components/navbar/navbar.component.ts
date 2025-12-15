import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarService } from './services/navbar.services';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected navbarListContainer = viewChild('navbarListContainer', {read: ElementRef});
  activatedRoute = inject(ActivatedRoute)
  navbarService = inject(NavbarService);
  
  currentFragment = this.navbarService.fragment;
  
  protected isActive = signal<boolean>(false);

  @HostListener('document:mouseup', ['$event'])
  public clickOutside(event:Event) {
    if (!this.navbarListContainer()?.nativeElement.contains(event.target)) {
      this.isActive.set(false);
    }
  }

  // ngOnInit(): void {
  //   this.activatedRoute.fragment.subscribe((fragment) => {
  //     this.navbarService.setCurrentFragment(fragment);
  //   })
  // }
}
