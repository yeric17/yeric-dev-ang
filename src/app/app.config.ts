import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(
        routes,withViewTransitions(),
        withComponentInputBinding(),
        withInMemoryScrolling({anchorScrolling: 'enabled'})
      ),
      provideHttpClient(),
      provideTranslateService({
        loader: provideTranslateHttpLoader({
          prefix: '/i18n/',
          suffix: '.json'
        })
      })
    ]
};
