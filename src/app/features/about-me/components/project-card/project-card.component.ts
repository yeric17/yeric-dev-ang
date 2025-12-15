import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { getTechnologyColor, getTechnologyImage } from '../../utils/technology-colors';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  project = input.required<Project>();
  currentImageIndex = 0;
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = ''; // Restaurar scroll del body
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  previousImage(): void {
    const images = this.project().images;
    this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
  }

  nextImage(): void {
    const images = this.project().images;
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
  }

  getTechColor(technology: string): string {
    return getTechnologyColor(technology);
  }

  getTechImage(technology: string): string | undefined {
    return getTechnologyImage(technology);
  }

  onModalBackdropClick(event: MouseEvent): void {
    // Cerrar solo si se hace clic en el backdrop, no en el contenido
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
