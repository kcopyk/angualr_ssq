import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]',
  standalone: true
})
export class SampleDirective {

  @Input('appSample') highlightColor: string = '';
  @Input() defaultFontSize: string = '';
  @Input() highlightFontSize: string = '';
  @Input() newText: string = '';
  @Input() textcolor: string ='';

  private originalText: string = ''; 

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalText = this.el.nativeElement.innerText;
    this.highlight(this.highlightColor || 'red', this.highlightFontSize,this.textcolor);
    this.setText(this.newText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', this.defaultFontSize,'darkcyan');
    this.setText(this.originalText);
  }

  private highlight(backgroundColor: string, fontSize: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.fontSize = fontSize;
    this.el.nativeElement.style.color = textColor;
  }
  

  private setText(text: string) {
    this.el.nativeElement.innerText = text;
  }
}
