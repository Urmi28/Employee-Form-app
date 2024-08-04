import { Injectable } from '@angular/core';

interface Theme {
  header: string;
  background: string;
}

type Client = 'Client A' | 'Client B' | 'Client C';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: Record<Client, Theme> = {
    'Client A': { header: 'bg-primary', background: 'bg-white' },
    'Client B': { header: 'bg-success', background: 'bg-light' },
    'Client C': { header: 'bg-danger', background: 'bg-beige' }
  };

  getTheme(client: Client): Theme {
    return this.themes[client];
  }
}

