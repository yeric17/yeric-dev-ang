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






    @HostListener('window:scroll', ['$event'])
    onScroll = (event: any) => {
        let currentSection: string|null = null;
        const children = this.element.nativeElement.children;

        const current = children.length - [...children].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 120 ) - 1

        const id = children[current]?.id;

        if (id) {
            currentSection = id;
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}