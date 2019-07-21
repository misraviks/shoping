import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective
{
    @HostBinding('class.open') isOpen:boolean=false;

// constructor(private el:ElementRef,private renderer:Renderer2) {}
// @HostListener('mouseenter') mouseover(eventData:Event)
//   {
//     //this.renderer.addClass(this.el.nativeElement,'open');\
//     this.toggle=true;
    
//   }
//   @HostListener('mouseleave') mouseleave(eventData:Event)
//   {
//     //this.renderer.removeClass(this.el.nativeElement,'open');
//     this.toggle=false;
    
//   }

constructor(private elRef: ElementRef) {}
//   @HostListener('click') toggleOpen()
//   {
//     this.isOpen=!this.isOpen;
//   }
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log(event.target);
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}