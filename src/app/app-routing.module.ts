import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AinDrahimComponent } from './ain-drahim/ain-drahim.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { ContactComponent } from './contact/contact.component';
import { DjerbaComponent } from './djerba/djerba.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HammametComponent } from './hammamet/hammamet.component';
import { HomeComponent } from './home/home.component';
import { ListsejourComponent } from './listsejour/listsejour.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ProfileComponent } from './profile/profile.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { TozeurComponent } from './tozeur/tozeur.component';
import { TunisComponent } from './tunis/tunis.component';
import { SearchComponent } from './search/search.component';
import { DetailhotelComponent } from './service/detailhotel/detailhotel.component';
import { DetailComponent } from './service/detail/detail.component';
import { DetailAinComponent } from './detail-ain/detail-ain.component';
import { DetailTozComponent } from './detail-toz/detail-toz.component';
import { DetailDjerComponent } from './detail-djer/detail-djer.component';
import { MtunisComponent } from './mtunis/mtunis.component';
import { MDjerbaComponent } from './mdjerba/mdjerba.component';
import { MHammametComponent } from './mhammamet/mhammamet.component';
import { MAinDrahimComponent } from './main-drahim/main-drahim.component';
import { MTozeurComponent } from './mtozeur/mtozeur.component';
import { PrompHotelComponent } from './promp-hotel/promp-hotel.component';
import { ReserveComponent } from './service/reserve/reserve.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  {path:'Best-Tunisia-Travel',component:AccueilComponent},
  {path:'Best-Tunisia-Travel/connecter',component:AdministrateurComponent},
  {path:'Best-Tunisia-Travel/backoffice',component:BackofficeComponent},
  {path:'Best-Tunisia-Travel/accueil',component:UtilisateurComponent},
  {path:'Best-Tunisia-Travel/deconnecter',component:AccueilComponent},
  {path:'sejour',component:ListsejourComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'reserve',component:ReserveComponent},
  {path:'Tunis',component:TunisComponent},
  {path:'Hammamet',component:HammametComponent},
  {path:'Ain-Draham',component:AinDrahimComponent},
  {path:'Tozeur',component:TozeurComponent},
  {path:'Djerba',component:DjerbaComponent},
  {path:'Profile',component:ProfileComponent },
  {path:'Best-Tunisia-Travel/backoffice/Consulter',component:ConsulterComponent },
  {path:'Best-Tunisia-Travel/backoffice/Ajouter',component:AjouterComponent },
  {path:'Best-Tunisia-Travel/backoffice/Modifier',component:ModifierComponent },
  {path:'Best-Tunisia-Travel/backoffice/Supprimer',component:SupprimerComponent },
  {path:'Best-Tunisia-Travel/backoffice/Rechercher',component:RechercherComponent },
  {path:'Mtunis',component:MtunisComponent},
  {path:'MDjerba',component:MDjerbaComponent},
  {path:'Mhammamet',component:MHammametComponent},
  {path:'MAinDrahim',component:MAinDrahimComponent},
  {path:'MTozeur',component:MTozeurComponent},
  {path:'promoHotel',component:PrompHotelComponent},
  {path:'HotelsTunis/:libelle', component:DetailhotelComponent},
  {path:'HotelsHammamet/:libelle', component:DetailComponent},
  {path:'HotelsAinDrahim/:libelle', component:DetailAinComponent},
  {path:'HotelsTozeur/:libelle', component:DetailTozComponent},
  {path:'HotelsDjerba/:libelle', component:DetailDjerComponent},
  {path:'',redirectTo:'Best-Tunisia-Travel',pathMatch:'full'},
   {path:'**',component:ErreurComponent}
  
];
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
