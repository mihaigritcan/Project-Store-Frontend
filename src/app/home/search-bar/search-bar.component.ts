import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  search() {
    const searchTerm = (document.querySelector('input') as HTMLInputElement).value;
    this.searchEvent.emit(searchTerm);
  }
}
