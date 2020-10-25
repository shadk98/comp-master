import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(count: number){
        this.viewContainerRef.clear();
        for (let i=0;i<count;i++){
          this.viewContainerRef.createEmbeddedView(this.templateRef,{});
        }
  }

}
