import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AinDrahimComponent } from './ain-drahim/ain-drahim.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AuthenComponent } from './authen/authen.component';
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

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'deconnecter',component:HomeComponent},
  {path:'sejour',component:ListsejourComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'connecter',component:AuthenComponent},
  {path:'Tunis',component:TunisComponent},
  {path:'Hammamet',component:HammametComponent},
  {path:'Ain-Draham',component:AinDrahimComponent},
  {path:'Tozeur',component:TozeurComponent},
  {path:'Djerba',component:DjerbaComponent},
  {path:'Profile',component:ProfileComponent },
  {path:'Consulter',component:ConsulterComponent },
  {path:'Ajouter',component:AjouterComponent },
  {path:'Modifier',component:ModifierComponent },
  {path:'Supprimer',component:SupprimerComponent },
  {path:'Rechercher',component:RechercherComponent },
  {path:'login',component:BackofficeComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'**',component:ErreurComponent}
  
];
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
