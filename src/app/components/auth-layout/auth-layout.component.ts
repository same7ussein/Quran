import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule,NavAuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

}
