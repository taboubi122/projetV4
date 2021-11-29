import { Injectable } from '@angular/core';
import { Sejour } from '../models/sejour';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 
  constructor() { }


  HotelsTunis:Sejour[]=[
    new Sejour('MB21','','La Maison Blanche','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/La Maison Blanche_1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('BDLC21','','Les Berges Du Lac Concorde','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Les Berges Du Lac Concorde_1.jpg','assets/Les Berges Du Lac Concorde_2.jpg','assets/Les Berges Du Lac Concorde_3.jpg','assets/Les Berges Du Lac Concorde_4.jpg'],
    ['Climatisation','Séche-cheveux','Téléphone','Bar','Restaurant','Salle de réunion' ,'Télévision']),
    new Sejour('DEHS21','','Dar El Jeld Hôtel & Spa','Tunis Ville  - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Dar El Jeld Hôtel & Spa_1.jpg','assets/Dar El Jeld Hôtel & Spa_2.jpg','assets/Dar El Jeld Hôtel & Spa_3.jpg','assets/Dar El Jeld Hôtel & Spa_4.jpg',
    'assets/Dar El Jeld Hôtel & Spa_5.jpg','assets/Dar El Jeld Hôtel & Spa_6.jpg','assets/Dar El Jeld Hôtel & Spa_7.jpg','assets/Dar El Jeld Hôtel & Spa_8.jpg',
    'assets/Dar El Jeld Hôtel & Spa_9.jpg','assets/Dar El Jeld Hôtel & Spa_10.jpg','assets/Dar El Jeld Hôtel & Spa_11.jpg','assets/Dar El Jeld Hôtel & Spa_12.jpg',
    'assets/Dar El Jeld Hôtel & Spa_13.jpg','assets/Dar El Jeld Hôtel & Spa_14.jpg','assets/Dar El Jeld Hôtel & Spa_15.jpg'],
    ['x','y']),
    new Sejour('LT21','','Laico Tunis','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Laico Tunis_1.jpg','assets/Laico Tunis_2.jpg','assets/Laico Tunis_3.jpg','assets/Laico Tunis_4.jpg','assets/Laico Tunis_5.jpg','assets/Laico Tunis_6.jpg',
    'assets/Laico Tunis_7.jpg','assets/Laico Tunis_8.jpg','assets/Laico Tunis_9.jpg'],
    ['x','y']),
    new Sejour('MF21','','El Mouradi Africa','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/El Mouradi Africa_1.jpg','assets/El Mouradi Africa_2.jpg','assets/El Mouradi Africa_3.jpg','assets/El Mouradi Africa_4.jpg','assets/El Mouradi Africa_5.jpg',
    'assets/El Mouradi Africa_6.jpg','assets/El Mouradi Africa_7.jpg','assets/El Mouradi Africa_8.jpg','assets/El Mouradi Africa_9.jpg','assets/El Mouradi Africa_10.jpg',
    'assets/El Mouradi Africa_11.jpg','assets/El Mouradi Africa_12.jpg','assets/El Mouradi Africa_13.jpg','assets/El Mouradi Africa_14.jpg'],
    ['x','y']),
    new Sejour('AHS21','','Adam Hotel Suites','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Adam Hotel Suites_1.jpg','assets/Adam Hotel Suites_2.jpg','assets/Adam Hotel Suites_3.jpg','assets/Adam Hotel Suites_4.jpg','assets/Adam Hotel Suites_5.jpg',
    'assets/Adam Hotel Suites_6.jpg','assets/Adam Hotel Suites_7.jpg','assets/Adam Hotel Suites_8.jpg'],
    ['x','y']),
    new Sejour('DM21','','Dar El Medina','Tunis Ville - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Dar El Medina_1.jpg','assets/Dar El Medina_2.jpg','assets/Dar El Medina_3.jpg','assets/Dar El Medina_4.jpg'],
    ['x','y'])

 
  ]



  HotelsHammamet:Sejour[]=[
       new Sejour('SPS21','','Saphir Palace & Spa','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
       ['assets/Saphir Palace & Spa_1.jpg','assets/Saphir Palace & Spa_2.jpg','assets/Saphir Palace & Spa_3.jpg','assets/Saphir Palace & Spa_4.jpg','assets/Saphir Palace & Spa_5.jpg',
       'assets/Saphir Palace & Spa_6.jpg','assets/Saphir Palace & Spa_7.jpg','assets/Saphir Palace & Spa_8.jpg','assets/Saphir Palace & Spa_9.jpg',],
       ['x','y']),
       new Sejour('AT21','','Alhambra Thalasso','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
       ['assets/Alhambra Thalasso_1.jpg','assets/Alhambra Thalasso_2.jpg','assets/Alhambra Thalasso_3.jpg','assets/Alhambra Thalasso_4.jpg','assets/Alhambra Thalasso_5.jpg',
       'assets/Alhambra Thalasso_6.jpg','assets/Alhambra Thalasso_7.jpg','assets/Alhambra Thalasso_8.jpg','assets/Alhambra Thalasso_9.jpg','assets/Alhambra Thalasso_10.jpg',
       'assets/Alhambra Thalasso_11.jpg'],
       ['x','y']),
       new Sejour('RH122','','Le Royal Hammamet ','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
       ['assets/Le Royal Hammamet_1.jpg','assets/Le Royal Hammamet_2.jpg','assets/Le Royal Hammamet_3.jpg','assets/Le Royal Hammamet_4.jpg','assets/Le Royal Hammamet_5.jpg',
       'assets/Le Royal Hammamet_6.jpg','assets/Le Royal Hammamet_7.jpg','assets/Le Royal Hammamet_8.jpg','assets/Le Royal Hammamet_9.jpg','assets/Le Royal Hammamet_10.jpg',
       'assets/Le Royal Hammamet_11.jpg','assets/Le Royal Hammamet_12.jpg','assets/Le Royal Hammamet_13.jpg','assets/Le Royal Hammamet_14.jpg','assets/Le Royal Hammamet_15.jpg',],
       ['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y']),
       new Sejour('MB122','','La Maison Blanche','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,['x'],['x','y'])
    
   ]
   HotelsAinDraham:Sejour[]=[
     new Sejour('DIEA21','','Dar Ismail Nour El Ain','Ain Draham - Tunisie','hotel','d  d',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
     ['assets/Dar Ismail Nour El Ain_1.jpg','assets/Dar Ismail Nour El Ain_2.jpg','assets/Dar Ismail Nour El Ain_3.jpg',
     'assets/Dar Ismail Nour El Ain_4.jpg','assets/Dar Ismail Nour El Ain_5.jpg','assets/Dar Ismail Nour El Ain_6.jpg','assets/Dar Ismail Nour El Ain_7.jpg'],
     ['x','y']),
     new Sejour('EMHB21','','El Mouradi Hammam Bourguiba','Ain Draham - Tunisie','hotel','d  d',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
     ['assets/El Mouradi Hammam Bourguiba_1.jpg','assets/El Mouradi Hammam Bourguiba_2.jpg','assets/El Mouradi Hammam Bourguiba_3.jpg','assets/El Mouradi Hammam Bourguiba_4.jpg',
     'assets/El Mouradi Hammam Bourguiba_5.jpg','assets/El Mouradi Hammam Bourguiba_6.jpg','assets/El Mouradi Hammam Bourguiba_7.jpg','assets/El Mouradi Hammam Bourguiba_8.jpg',],
     ['x','y']),

    ]

 HotelsTozeur:Sejour[]=[
   new Sejour('ATR21','','Anantara Tozeur Resort','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
   ['assets/Anantara Tozeur Resort_1.jpg','assets/Anantara Tozeur Resort_2.jpg','assets/Anantara Tozeur Resort_3.jpg','assets/Anantara Tozeur Resort_4.jpg','assets/Anantara Tozeur Resort_5.jpg',
   'assets/Anantara Tozeur Resort_6.jpg','assets/Anantara Tozeur Resort_7.jpg','assets/Anantara Tozeur Resort_8.jpg',],
   ['x','y']),
   new Sejour('PBPT21','','Palm Beach Palace Tozeur','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
   ['assets/Palm Beach Palace Tozeur_1.jpg','assets/Palm Beach Palace Tozeur_2.jpg','assets/Palm Beach Palace Tozeur_3.jpg','assets/Palm Beach Palace Tozeur_4.jpg','assets/Palm Beach Palace Tozeur_5.jpg','assets/Palm Beach Palace Tozeur_6.jpg'],
   ['x','y']),
   new Sejour('PEE21','','La Palmeraiee','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
   ['assets/La Palmeraie_1.jpg','assets/La Palmeraie_2.jpg','assets/La Palmeraie_3.jpg','assets/La Palmeraie_4.jpg','assets/La Palmeraie_5.jpg'],
   ['x','y']),
   new Sejour('GYEA21','','Golden Yasmin Ras El Ain','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
   ['assets/Golden Yasmin Ras El Ain_1.jpg','assets/Golden Yasmin Ras El Ain_2.jpg','assets/Golden Yasmin Ras El Ain_3.jpg','assets/Golden Yasmin Ras El Ain_4.jpg','assets/Golden Yasmin Ras El Ain_5.jpg','assets/Golden Yasmin Ras El Ain_6.jpg',],
   ['x','y']),
   new Sejour('HT21','','Hafsi Tozeur','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),3,
   ['assets/Hafsi Tozeur_1.jpg','assets/Hafsi Tozeur_2.jpg','assets/Hafsi Tozeur_3.jpg','assets/Hafsi Tozeur_4.jpg'],
   ['x','y'])
  
 ]

 HotelsDjerba:Sejour[]=[
  new Sejour('HPTSD21','','Hasdrubal Prestige Thalassa & Spa Djerba','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_3.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_4.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_5.jpg',
  'assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_7.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_8.jpg'],
  ['x','y']),
  new Sejour('UDTS21','','Ulysse Djerba Thalasso & Spa','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Ulysse Djerba Thalasso & Spa_1.jpg','assets/Ulysse Djerba Thalasso & Spa_2.jpg','assets/Ulysse Djerba Thalasso & Spa_3.jpg','assets/Ulysse Djerba Thalasso & Spa_4.jpg'],
  ['x','y']),
  new Sejour('PBPD21','','Palm Beach Palace Djerba','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Palm Beach Palace Djerba_1.jpg','assets/Palm Beach Palace Djerba_2.jpg','assets/Palm Beach Palace Djerba_3.jpg','assets/Palm Beach Palace Djerba_4.jpg'],
  ['x','y']),
  new Sejour('RTM21','','Royal Thalassa Monastir','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Royal Thalassa Monastir_1.jpg'],
  ['x','y']),
  new Sejour('IAD21','','Iliade Aquapark Djerba','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/Iliade Aquapark Djerba_1.jpg','assets/Iliade Aquapark Djerba_2.jpg','assets/Iliade Aquapark Djerba_3.jpg','assets/Iliade Aquapark Djerba_4.jpg','assets/Iliade Aquapark Djerba_5.jpg'],
  ['x','y']),
  new Sejour('VHBS21','','Vincci Helios Beach & Spa','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/Vincci Helios Beach & Spa_1.jpg','assets/Vincci Helios Beach & Spa_2.jpg','assets/Vincci Helios Beach & Spa_3.jpg','assets/Vincci Helios Beach & Spa_4.jpg'],
  ['x','y'])
 ]

 Utilisateur:string[]=[
   'taboubi.oumaima','taboubi'
 ]
    Hotelstunis(){  
    return this.HotelsTunis;
    }

    Hotelshammamet(){
      return this.HotelsHammamet;
    }

    HotelAindraham(){
      return this.HotelsAinDraham;
    }

    Hotelstozeur(){
      return this.HotelsTozeur;
    }

    HoteleDjerba(){
      return this.HotelsDjerba;
    }
    getHotel(){
      return this.HotelsTunis.filter(id=>id.identifiant==id.id);
    }
    getuser(){
      return this.Utilisateur;
    }
    addNewhotel(hot:Sejour): boolean {
      let h:Sejour = Object.assign({}, hot);
      if (!this.existehotel(h.identifiant)) {    
        this.HotelsTunis.push(h);
        return true;
      }
      return false;
    }
    Upphotel(hot:Sejour): boolean {
      let h:Sejour = Object.assign({}, hot);
      let hotel:Sejour[]=[];
      if (this.existehotel(h.identifiant)) {  
        hotel=this.thisHotel(h.categorie);
        for (let i = 0; i < hotel.length; i++) {
          if(hotel[i].identifiant==h.identifiant){
            hotel[i].promotion=h.promotion;
            hotel[i].prix=h.prix;
            hotel[i].libelle=h.libelle;
            hotel[i].ville=h.ville;
            return true;
          }
          
        }
      }
      {
        return false;}
    }
   public existehotel(x:string):boolean{
    return this.HotelsTunis.find(h=>h.identifiant==x) != undefined;
   }
   thisHotel(ch:string){
    if(ch=='Tunis')
    {return this.HotelsTunis;}
    else
    if(ch=='Hammamet')
    {return this.HotelsHammamet;}
    else
    if(ch=='Ain Draham')
    {return this.HotelsAinDraham;}
    else
    if(ch=='Tozeur')
    {return this.HotelsTozeur;}
    else
    if(ch=='Djerba')
    {return this.HotelsDjerba;}
    else
    return [];
   }
   recherche(ch:string){
     let tunis:Sejour[]=[];
        tunis=this.HotelsTunis.filter(lib=>lib.libelle==ch);
      let hammamet:Sejour[]=[];
      hammamet=this.HotelsHammamet.filter(lib=>lib.libelle==ch);  
        let aindrahem:Sejour[]=[];
        aindrahem=this.HotelsAinDraham.filter(lib=>lib.libelle==ch);
        let tozeur:Sejour[]=[];
        tozeur=this.HotelsTozeur.filter(lib=>lib.libelle==ch);
        let djerba:Sejour[]=[];
        djerba=this.HotelsDjerba.filter(lib=>lib.libelle==ch); 
        if(tunis.length!=0&&hammamet.length==0&&aindrahem.length==0&&tozeur.length==0&&djerba.length==0)
        return tunis;
        else 
        if(tunis.length==0&&hammamet.length!=0&&aindrahem.length==0&&tozeur.length==0&&djerba.length==0)
        return hammamet;
        else 
        if(tunis.length==0&&hammamet.length==0&&aindrahem.length!=0&&tozeur.length==0&&djerba.length==0)
        return aindrahem;
        else 
        if(tunis.length==0&&hammamet.length==0&&aindrahem.length==0&&tozeur.length!=0&&djerba.length==0)
        return tozeur;
        else 
        if(tunis.length==0&&hammamet.length==0&&aindrahem.length==0&&tozeur.length==0&&djerba.length!=0)
        return djerba;
        else 
        return [];

    //  for (let i = 0; i < this.HotelsTunis.length; i++) {
    //    if(this.HotelsTunis[i].libelle==ch){
    //     return this.HotelsTunis[i];}
    //    }
    //    for (let i = 0; i < this.HotelsHammamet.length; i++) {
    //     if(this.HotelsHammamet[i].libelle==ch){
    //      return this.HotelsHammamet[i];}
    //     }
    //     for (let i = 0; i < this.HotelsAinDraham.length; i++) {
    //       if(this.HotelsAinDraham[i].libelle==ch){
    //        return this.HotelsAinDraham[i];}
    //       }
    //       for (let i = 0; i < this.HotelsTozeur.length; i++) {
    //         if(this.HotelsTozeur[i].libelle==ch){
    //          return this.HotelsTozeur[i];}
    //         }
    //         for (let i = 0; i < this.HotelsDjerba.length; i++) {
    //           if(this.HotelsDjerba[i].libelle==ch){
    //            return this.HotelsDjerba[i];}
    //           }
    //           return new Sejour();
       
     }
}
