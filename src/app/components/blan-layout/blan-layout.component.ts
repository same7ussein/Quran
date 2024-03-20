import { NavBlankComponent } from './../nav-blank/nav-blank.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blan-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,FooterComponent,NavBlankComponent],
  templateUrl: './blan-layout.component.html',
  styleUrls: ['./blan-layout.component.scss']
})
export class BlanLayoutComponent {

}
