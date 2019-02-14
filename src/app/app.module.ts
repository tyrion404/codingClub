import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FAQComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { RegFormComponent } from './event/reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    AboutUsComponent,
    TeamComponent,
    GalleryComponent,
    FAQComponent,
    ContactUsComponent,
    FooterComponent,
    EventComponent,
    RegFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
