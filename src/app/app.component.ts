import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from './material-module';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  title = 'Sleep Diary';
  shouldRun = true;
  reason = '';

  close(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }
}
