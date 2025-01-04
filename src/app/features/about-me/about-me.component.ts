import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { SectionComponent } from './components/section/section.component';
import { Skill, skills } from './data/skills.data';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@Component({
  selector: 'app-about-me',
  imports: [BannerComponent, SectionComponent, SkillCardComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  yearsOfExperienceDeveloper: number;
  yearsOfExperienceData: number;

  protected skills = signal<Skill[]>(skills);

  protected frontendSkills = computed(() => this.skills().filter(skill => skill.type === 'frontend'));
  protected backendSkills = computed(() => this.skills().filter(skill => skill.type === 'backend'));
  protected databaseSkills = computed(() => this.skills().filter(skill => skill.type === 'database'));
  protected testingSkills = computed(() => this.skills().filter(skill => skill.type === 'testing'));
  protected devopsSkills = computed(() => this.skills().filter(skill => skill.type === 'devops'));

  constructor() {
    const startDateDeveloper = new Date('2022-11-01');
    const startDateData = new Date('2016-07-01');
    const currentDate = new Date();
    this.yearsOfExperienceDeveloper = this.diffDateInYears(startDateDeveloper, currentDate);
    this.yearsOfExperienceData = this.diffDateInYears(startDateData, currentDate);
  }

  diffDateInYears(start: Date, end: Date): number {
      let diff = (end.getTime() - start.getTime()) / 1000;
      diff /=   60 * 60 * 24;
      diff /= 365.25;
      return Math.abs(Math.round(diff));
  }


}
