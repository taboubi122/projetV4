import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  Modifier!:FormGroup;
  produit:Sejour=new Sejour;
  hotel:Sejour[]=[];
  alert:string='';
  constructor(private lm:FormBuilder,private service:HotelsService,) { }

  ngOnInit(): void {
    this.Modifier=this.lm.group({
      identifiant:[''],
      libelle:[''],
      promo:false,
      pourcentage:0,
      prix:[0],
      categorie:[''],
      ville:['']
    });
    this.hotel=this.service.thisHotel(this.produit.categorie);
  }
  mySelected(){
    if(this.Modifier.controls.categorie.value=='Tunis'||this.Modifier.controls.categorie.value=='Hammamet'||this.Modifier.controls.categorie.value=='Ain Draham'||this.Modifier.controls.categorie.value=='Tozeur'||this.Modifier.controls.categorie.value=='Djerba')
    {return true;}
    else{return false;}
  }
   onModifier(f:FormGroup){
    if(this.service.Upphotel(this.produit)) 
         this.alert = "Employé ajouté" ;
     else
         this.alert = "L'employé existe déjà";
   }
   onVider(f:FormGroup){
    this.Modifier.reset({identifiant:'', libelle:'',region:''});}

}
