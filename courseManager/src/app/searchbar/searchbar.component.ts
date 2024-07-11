import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() searchEvent = new EventEmitter();
  inputValue: string = '';

  search(){
    this.searchEvent.emit(this.inputValue);
  }
}
