import { Injectable } from '@angular/core';
import { Theme, light, dark } from '../themes/themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }
  
  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setActiveTheme(theme: Theme) {
    this.active = theme;
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      )
    });
  }
}
