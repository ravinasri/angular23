import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {

  @Input() data: Array<string> = [];
  toppings = new FormControl([]);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppings.value as string[];
    this.removeFirst(toppings, topping);
    this.toppings.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  updateView() {
    /**
     * View will not update even @Input() data change as we appied       	  
     * 	 * ChangeDetectionStrategy.OnPush.
     *  To update view, we must run change 	
     *  * detection manuallly by clicking on "Trigger Change Detection"
     * button
     */
    this.ref.detach();
    this.ref.reattach();
    this.ref.markForCheck();
    this.ref.detectChanges();
    this.ref.checkNoChanges();
  }

}
