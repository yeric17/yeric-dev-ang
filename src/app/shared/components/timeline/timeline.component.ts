import { Component, input } from '@angular/core';
import { TimeLineInfo } from './models/timeline.model';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timeLines = input.required<TimeLineInfo[]>();
}
