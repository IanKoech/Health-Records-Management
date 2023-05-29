import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMostVisits]'
})
export class MostVisitsDirective implements OnChanges {
  @Input('appMostVisits') visits: number;
  
  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visits && changes.visits.currentValue) {
      const visits = changes.visits.currentValue;
      if (visits > 5) { // Change this threshold as per your requirement
        this.highlightRow();
      } else {
        this.resetRow();
      }
    }
  }

  private highlightRow(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  private resetRow(): void {
    this.elementRef.nativeElement.style.backgroundColor = '';
    this.elementRef.nativeElement.style.fontWeight = '';
  }
}
