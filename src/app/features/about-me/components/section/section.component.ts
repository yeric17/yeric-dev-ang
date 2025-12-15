import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section',
  imports: [TranslateModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  title = input.required<string>();
  variant = input.required<'light'|'dark'>();
}
