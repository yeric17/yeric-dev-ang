import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./layouts/base-layout/base-layout.component').then(m => m.BaseLayoutComponent),
        children: [
            {
                path: 'about-me',
                loadComponent: () => import('./features/about-me/about-me.component').then(m => m.AboutMeComponent)
            },
            {
                path: 'projects',
                loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent)
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'about-me'
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
