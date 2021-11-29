import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListsejourComponent } from './listsejour/listsejour.component';
import { SelectedSejourComponent } from './selected-sejour/selected-sejour.component';
import { AuthenComponent } from './authen/authen.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TunisComponent } from './tunis/tunis.component';
import { HammametComponent } from './hammamet/hammamet.component';
import { AinDrahimComponent } from './ain-drahim/ain-drahim.component';
import { TozeurComponent } from './tozeur/tozeur.component';
import { DjerbaComponent } from './djerba/djerba.component';
import { ReserveComponent } from './service/reserve/reserve.component';
import { DetailComponent } from './service/detail/detail.component';
import { DetailhotelComponent } from './service/detailhotel/detailhotel.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { MenubackofficeComponent } from './menubackoffice/menubackoffice.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { RechercherComponent } from './rechercher/rechercher.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListsejourComponent,
    SelectedSejourComponent,
    AuthenComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ErreurComponent,
    TunisComponent,
    HammametComponent,
    AinDrahimComponent,
    TozeurComponent,
    DjerbaComponent,
    ReserveComponent,
    DetailComponent,
    DetailhotelComponent,
    BackofficeComponent,
    MenubackofficeComponent,
    ProfileComponent,
    ConsulterComponent,
    AjouterComponent,
    ModifierComponent,
    SupprimerComponent,
    RechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
