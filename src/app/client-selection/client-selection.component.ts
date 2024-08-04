import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-client-selection',
  templateUrl: './client-selection.component.html',
  styleUrls: ['./client-selection.component.css']
})
export class ClientSelectionComponent {
  constructor(private themeService: ThemeService) {}

  onClientChange(event: any) {
    const client = event.target.value as 'Client A' | 'Client B' | 'Client C';
    const theme = this.themeService.getTheme(client);
    document.body.className = '';
    document.body.classList.add(theme.background);
    const header = document.querySelector('header');
    if (header) {
      header.className = '';
      header.classList.add(theme.header);
    }
  }
}
