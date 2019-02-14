import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { IntroComponent } from './intro/intro.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FAQComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegFormComponent } from './event/reg-form/reg-form.component';

const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: '', component: IntroComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'regform', component: RegFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
