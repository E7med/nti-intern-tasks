import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, WelcomeComponent, AboutUsComponent, ContactUsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
}
