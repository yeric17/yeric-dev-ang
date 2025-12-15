import { Directive, ElementRef, HostListener, inject, input, Input, output, Output, TemplateRef, viewChildren, ViewContainerRef } from "@angular/core";
import { SectionComponent } from "../../features/about-me/components/section/section.component";

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    spiedTags = input.required<string[]>();
    sectionChange = output<string|null>();
    private currentSection: string|null = null;
    element = inject(ElementRef);

    children:any
    childrenReversed:any
    constructor(){
        this.children = this.element.nativeElement.children;
    }



    @HostListener('window:scroll', ['$event'])
    onScroll = (event: any) => {
        let currentSection: string|null = null;

        // Verificar si estamos cerca del final de la página
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

        if (isNearBottom) {
            // Si estamos cerca del final, activar la última sección
            const lastChild = this.children[this.children.length - 1];
            currentSection = lastChild?.id || null;
        } else {
            const current = this.children.length - [...this.children].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 120 ) - 1
            const id = this.children[current]?.id;

            if (id) {
                currentSection = id;
            }
        }

        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}