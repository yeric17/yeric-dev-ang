import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { SectionComponent } from './components/section/section.component';
import { Skill, skills } from './data/skills.data';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { experiences } from './data/experience.data';
import { TimeLineInfo } from '../../shared/components/timeline/models/timeline.model';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ScrollSpyDirective } from '../../core/directives/ScrollSpyDirective';
import { NavbarService } from '../../shared/components/navbar/services/navbar.services';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { projects } from './data/projects.data';
import { Project } from './models/project.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [
    BannerComponent,
    SectionComponent,
    SkillCardComponent,
    TimelineComponent,
    ScrollSpyDirective,
    ProjectCardComponent,
    TranslateModule
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  viewportScroller = inject(ViewportScroller)
  navbarService = inject(NavbarService);
  private translateService = inject(TranslateService);

  yearsOfExperienceDeveloper: number;
  yearsOfExperienceData: number;

  protected skills = signal<Skill[]>(skills);
  protected experience = signal<TimeLineInfo[]>([]);
  protected projects = signal<Project[]>([]);

  protected frontendSkills = computed(() => this.skills().filter(skill => skill.type === 'frontend'));
  protected backendSkills = computed(() => this.skills().filter(skill => skill.type === 'backend'));
  protected databaseSkills = computed(() => this.skills().filter(skill => skill.type === 'database'));
  protected testingSkills = computed(() => this.skills().filter(skill => skill.type === 'testing'));
  protected devopsSkills = computed(() => this.skills().filter(skill => skill.type === 'devops'));

  constructor() {
    const startDateDeveloper = new Date('2022-11-01');
    const startDateData = new Date('2017-01-01');
    const currentDate = new Date();
    this.yearsOfExperienceDeveloper = this.diffDateInYears(startDateDeveloper, currentDate);
    this.yearsOfExperienceData = this.diffDateInYears(startDateData, currentDate);
    this.viewportScroller.setOffset([0, 75]);
    this.loadTranslations();
  }

  private loadTranslations(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.updateExperienceData();
      this.updateProjectsData();
    });
    this.updateExperienceData();
    this.updateProjectsData();
  }

  private updateExperienceData(): void {
    this.experience.set([
      {
        title: this.translateService.instant('experience.ipsos_developer.title'),
        subtitle: this.translateService.instant('experience.ipsos_developer.subtitle'),
        description: this.translateService.instant('experience.ipsos_developer.description'),
        info: this.translateService.instant('experience.ipsos_developer.info')
      },
      {
        title: this.translateService.instant('experience.ipsos_assistant.title'),
        subtitle: this.translateService.instant('experience.ipsos_assistant.subtitle'),
        description: this.translateService.instant('experience.ipsos_assistant.description'),
        info: this.translateService.instant('experience.ipsos_assistant.info')
      }
    ]);
  }

  private updateProjectsData(): void {
    this.projects.set([
      {
        name: this.translateService.instant('projects.dsg_app.name'),
        description: this.translateService.instant('projects.dsg_app.description'),
        technologies: ['Angular', 'Ionic', 'TypeScript', 'Figma'],
        images: [
          'images/portfolio/dsg-app/1.png',
          'images/portfolio/dsg-app/2.png',
          'images/portfolio/dsg-app/3.png',
          'images/portfolio/dsg-app/4.png',
          'images/portfolio/dsg-app/5.png',
          'images/portfolio/dsg-app/6.png',
          'images/portfolio/dsg-app/7.png',
          'images/portfolio/dsg-app/8.png',
          'images/portfolio/dsg-app/9.png',
        ]
      }
    ]);
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    })
  }

  diffDateInYears(start: Date, end: Date): number {
    let diff = (end.getTime() - start.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    diff /= 365.25;
    return Math.abs(Math.round(diff));
  }

  changeSection(section: string | null): void {
    this.navbarService.setCurrentFragment(section);
  }


}
