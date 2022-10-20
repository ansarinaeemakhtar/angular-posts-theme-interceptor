import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _theme: ThemeService, public _loader: LoaderService) { }

  ngOnInit(): void {
    this.setLightBulb();
  }

  setLightBulb() {
    // this._theme.isDarkTheme() ? this.faLightBulb = this.faRegularLightBulb : this.faLightBulb = this.faSolidLightBulb;
  }

  toggleTheme () {
    this._theme.isDarkTheme() ? this._theme.setLightTheme() : this._theme.setDarkTheme();
    this.setLightBulb();
  }

}
