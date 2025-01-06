import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    currentFragment = signal<string|null>(null);

    fragment = this.currentFragment.asReadonly();

    setCurrentFragment(fragment: string|null): void {
        this.currentFragment.set(fragment);
    }

    getCurrentFragment(): string|null {
        return this.currentFragment();
    }
}