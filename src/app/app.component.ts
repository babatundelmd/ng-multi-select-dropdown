import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-select-dropdown';

  items = [
    { name: 'Derin Chi', image: '', selected: false },
    { name: 'Adeola Mikes', image: '', selected: false },
    { name: 'Homelander', image: '', selected: false },
    { name: 'Chris', image: '', selected: false },
    { name: 'Derek', image: '', selected: false },
    { name: 'Nancy', image: '', email: "nancy@example.com", role: 'developer', selected: false },

  ]

  onSelectionChange(selectedItems: any[]) {
    console.log('selected')
  }



}
