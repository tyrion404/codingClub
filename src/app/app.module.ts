import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FAQComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { RegFormComponent } from './event/reg-form/reg-form.component';
import { ForspaceComponent } from './forspace/forspace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavrefComponent } from './navref/navref.component';
import { ApicallService } from './apicall.service'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { from } from 'rxjs';
import { MainblogpageComponent } from './blogpage/mainblogpage/mainblogpage.component';
import { BlogdetailsComponent } from './blogpage/blogdetails/blogdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutUsComponent,
    TeamComponent,
    GalleryComponent,
    FAQComponent,
    ContactUsComponent,
    FooterComponent,
    EventComponent,
    RegFormComponent,
    ForspaceComponent,
    NavrefComponent,
    AdminComponent,
    BlogpageComponent,
    MainblogpageComponent,
    BlogdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatButtonModule,
    MatIconModule,
    //AngularFireDatabaseModule,
    //AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    //AngularFireMessagingModule
  ],
  providers: [ ApicallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
