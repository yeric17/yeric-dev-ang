import { Component, input } from '@angular/core';
import { Skill } from '../../data/skills.data';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  skill = input.required<Skill>();
  color = input<string>('#4da6ff');
}
