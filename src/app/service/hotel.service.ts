import { Injectable } from '@angular/core';
import { Sejour } from '../models/sejour';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 

     
     
   private HotelsTunis:Sejour[]=[
    new Sejour('MB21','','La Maison Blanche','Tunis','Hotel','',50,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/La Maison Blanche_1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y'] ,['Suite Junior ','Double Suite Junior Single'],11,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'] ),
    
    
    new Sejour('BDLC21','','Les Berges Du Lac Concorde','Tunis','Hotel','',100,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Les Berges Du Lac Concorde_1.jpg','assets/Les Berges Du Lac Concorde_2.jpg','assets/Les Berges Du Lac Concorde_3.jpg','assets/Les Berges Du Lac Concorde_4.jpg'],
    ['Climatisation','Séche-cheveux','Téléphone','Bar','Restaurant','Salle de réunion' ,'Télévision'],['Chambre Double','Chambre Single','Suite Junior Double','Suite Présidentielle Double','Suite Junior Single *','Suite Single Présidentielle *'],15,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine']),


    new Sejour('DEHS21','','Dar El Jeld Hôtel & Spa','Tunis Ville  - Tunisie','Hotel','',80,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Dar El Jeld Hôtel & Spa_1.jpg','assets/Dar El Jeld Hôtel & Spa_2.jpg','assets/Dar El Jeld Hôtel & Spa_3.jpg','assets/Dar El Jeld Hôtel & Spa_4.jpg',
    'assets/Dar El Jeld Hôtel & Spa_5.jpg','assets/Dar El Jeld Hôtel & Spa_6.jpg','assets/Dar El Jeld Hôtel & Spa_7.jpg','assets/Dar El Jeld Hôtel & Spa_8.jpg',
    'assets/Dar El Jeld Hôtel & Spa_9.jpg','assets/Dar El Jeld Hôtel & Spa_10.jpg','assets/Dar El Jeld Hôtel & Spa_11.jpg','assets/Dar El Jeld Hôtel & Spa_12.jpg',
    'assets/Dar El Jeld Hôtel & Spa_13.jpg','assets/Dar El Jeld Hôtel & Spa_14.jpg','assets/Dar El Jeld Hôtel & Spa_15.jpg'],
    ['x','y'],['Suite junior Dar El Jeld','Suite Exécutive Dar El Jeld','Suite de Luxe Dar El Jeld'],16       ),




    new Sejour('LT21','','Laico Tunis','Tunis','Hotel','',70,10,true,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Laico Tunis_1.jpg','assets/Laico Tunis_2.jpg','assets/Laico Tunis_3.jpg','assets/Laico Tunis_4.jpg','assets/Laico Tunis_5.jpg','assets/Laico Tunis_6.jpg',
    'assets/Laico Tunis_7.jpg','assets/Laico Tunis_8.jpg','assets/Laico Tunis_9.jpg'],
    ['x','y'],['Chambre Deluxe (30 m²) ','Single Chambre Deluxe (30 m²) ','Double Chambre Exécutive (40 m²)', 'Single  Chambre Exécutive (40 m²) ','Double  Suite Présidentielle ( 340 m²)'],16          ),
    new Sejour('MF21','','El Mouradi Africa','Tunis','Hotel','',60,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/El Mouradi Africa_1.jpg','assets/El Mouradi Africa_2.jpg','assets/El Mouradi Africa_3.jpg','assets/El Mouradi Africa_4.jpg','assets/El Mouradi Africa_5.jpg',
    'assets/El Mouradi Africa_6.jpg','assets/El Mouradi Africa_7.jpg','assets/El Mouradi Africa_8.jpg','assets/El Mouradi Africa_9.jpg','assets/El Mouradi Africa_10.jpg',
    'assets/El Mouradi Africa_11.jpg','assets/El Mouradi Africa_12.jpg','assets/El Mouradi Africa_13.jpg','assets/El Mouradi Africa_14.jpg'],
    ['x','y'], ['Chambre Double','Chambre Single'],16,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png'] , ['climatiseur','café','Ascenceur','Restaurant']  ),
    new Sejour('AHS21','','Adam Hotel Suites','Tunis','Hotel','',40,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Adam Hotel Suites_1.jpg','assets/Adam Hotel Suites_2.jpg','assets/Adam Hotel Suites_3.jpg','assets/Adam Hotel Suites_4.jpg','assets/Adam Hotel Suites_5.jpg',
    'assets/Adam Hotel Suites_6.jpg','assets/Adam Hotel Suites_7.jpg','assets/Adam Hotel Suites_8.jpg'],
    ['x','y'] , ['Avani Two Bedroom Lake View Suite','Avani Three Bedroom Lake View Suite','Avani Three Bedroom Lake View Pool Suite','Avani Superior Room',' Avani Room','Avani One Bedroom Suite', 'Avani One Bedroom Lake View Suite','Avani Four Bedroom Lake View Suite-Loft']
    ,19,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant']      
  
    ),
    new Sejour('DM21','','Dar El Medina','Tunis','Hotel','',50,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/Dar El Medina_1.jpg','assets/Dar El Medina_2.jpg','assets/Dar El Medina_3.jpg','assets/Dar El Medina_4.jpg'], ['x','y'],
     [' Chambre Double','Chambre Single',' Appart Double',' Appart Single',  'Appart Triple'] ,12 )

 
  ];

// private promoHotelsTunis:Sejour[]=[
  
//   new Sejour('BDLC21','','Les Berges Du Lac Concorde','Tunis','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
//   ['assets/Les Berges Du Lac ConcordePromo_1.jpg','assets/Les Berges Du Lac Concorde_2.jpg','assets/Les Berges Du Lac Concorde_3.jpg','assets/Les Berges Du Lac Concorde_4.jpg'],
//   ['Climatisation','Séche-cheveux','Téléphone','Bar','Restaurant','Salle de réunion' ,'Télévision'],['Chambre Double','Chambre Single','Suite Junior Double','Suite Présidentielle Double','Suite Junior Single *','Suite Single Présidentielle *'],15,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'])
//  , 
//  new Sejour('LT21','','Laico Tunis','Tunis','Hotel','',70,false,new Date(22,11,2021),new Date(22,11,2021),5,
//  ['assets/Laico TunisPromo_1.jpg','assets/Laico Tunis_2.jpg','assets/Laico Tunis_3.jpg','assets/Laico Tunis_4.jpg','assets/Laico Tunis_5.jpg','assets/Laico Tunis_6.jpg',
//  'assets/Laico Tunis_7.jpg','assets/Laico Tunis_8.jpg','assets/Laico Tunis_9.jpg'],['x','y'],['Chambre Deluxe (30 m²) ','Single Chambre Deluxe (30 m²) ','Double Chambre Exécutive (40 m²)', 'Single  Chambre Exécutive (40 m²) ','Double  Suite Présidentielle ( 340 m²)'],16          ),
// ];


HotelsHammamet:Sejour[]=[
  new Sejour('SPS21','','Saphir Palace & Spa','Hammamet','hotel','',150,20,true,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Saphir Palace & Spa_1.jpg','assets/Saphir Palace & Spa_2.jpg','assets/Saphir Palace & Spa_3.jpg','assets/Saphir Palace & Spa_4.jpg','assets/Saphir Palace & Spa_5.jpg',
  'assets/Saphir Palace & Spa_6.jpg','assets/Saphir Palace & Spa_7.jpg','assets/Saphir Palace & Spa_8.jpg','assets/Saphir Palace & Spa_9.jpg',],
  ['x','y']),
  new Sejour('AT21','','Alhambra Thalasso','Hammamet','hotel','',160,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Alhambra Thalasso_1.jpg','assets/Alhambra Thalasso_2.jpg','assets/Alhambra Thalasso_3.jpg','assets/Alhambra Thalasso_4.jpg','assets/Alhambra Thalasso_5.jpg',
  'assets/Alhambra Thalasso_6.jpg','assets/Alhambra Thalasso_7.jpg','assets/Alhambra Thalasso_8.jpg','assets/Alhambra Thalasso_9.jpg','assets/Alhambra Thalasso_10.jpg',
  'assets/Alhambra Thalasso_11.jpg'],
  ['x','y']),
  new Sejour('RH122','','Le Royal Hammamet ','Hammamet','hotel','',200,30,true,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Le Royal Hammamet_1.jpg','assets/Le Royal Hammamet_2.jpg','assets/Le Royal Hammamet_3.jpg','assets/Le Royal Hammamet_4.jpg','assets/Le Royal Hammamet_5.jpg',
  'assets/Le Royal Hammamet_6.jpg','assets/Le Royal Hammamet_7.jpg','assets/Le Royal Hammamet_8.jpg','assets/Le Royal Hammamet_9.jpg','assets/Le Royal Hammamet_10.jpg',
  'assets/Le Royal Hammamet_11.jpg','assets/Le Royal Hammamet_12.jpg','assets/Le Royal Hammamet_13.jpg','assets/Le Royal Hammamet_14.jpg','assets/Le Royal Hammamet_15.jpg',],
  ['x','y']),
  new Sejour('SH21','','The Sindbad Hammamet ','Hammamet','hotel','',160,30,true,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/El Mouradi El Menzah_1.jpg','assets/El Mouradi El Menzah_2.jpg','assets/El Mouradi El Menzah_3.jpg','assets/El Mouradi El Menzah_4.jpg','assets/El Mouradi El Menzah_5.jpg','assets/El Mouradi El Menzah_6.jpg'],
  ['x','y']),
  new Sejour('BH21','','La Badira ','Hammamet','hotel','',150,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/La Badira_1.jpg','assets/La Badira_2.jpg','assets/La Badira_3.jpg','assets/La Badira_4.jpg','assets/La Badira_5.jpg'],
  ['x','y']),
  new Sejour('RHS21','','The Russelior Hôtel & Spa','Hammamet','hotel','',180,20,true,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/The Russelior Hôtel & Spa_1.jpg','assets/The Russelior Hôtel & Spa_.jpg'],
  ['x','y']),
  new Sejour('SMT21','','Steigenberger Marhaba Thalasso','Hammamet','hotel','',130,20,true,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Steigenberger Marhaba Thalasso_1.jpg','assets/Steigenberger Marhaba Thalasso_2.jpg','assets/Steigenberger Marhaba Thalasso_3.jpg',],
  ['x','y']),
  new Sejour('RBRT21','','Radisson Blu Resort & Thalasso Hammamet','Hammamet','hotel','',120,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Radisson Blu Resort & Thalasso Hammamet1.jpg','assets/Radisson Blu Resort & Thalasso Hammamet2.jpg','assets/Radisson Blu Resort & Thalasso Hammamet3.jpg'],
  ['x','y']),
  new Sejour('GYMH21','','Golden Yasmin Mehari Hammamet','Hammamet','hotel','',120,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Golden Yasmin Mehari Hammamet1.jpg','assets/Golden Yasmin Mehari Hammamet2.jpg','assets/Golden Yasmin Mehari Hammamet3.jpg','assets/Golden Yasmin Mehari Hammamet4.jpg'],
  ['x','y']),
  new Sejour('VNB21','','Vincci Nozha Beach','Hammamet','hotel','',80,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/Vincci Nozha Beach1.jpg','assets/Vincci Nozha Beach2.jpg','assets/Vincci Nozha Beach3.jpg',],
  ['x','y']),
  new Sejour('EYRMS21','','Eden Yasmine Resort Meeting & Spa','Hammamet - Tunisie','hotel','',90,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/Eden Yasmine Resort Meeting & Spa1.jpg','assets/Eden Yasmine Resort Meeting & Spa2.jpg','assets/Eden Yasmine Resort Meeting & Spa3.jpg'],
  ['x','y']),
  new Sejour('LBT21','','Lella Baya & Thalasso','Hammamet','hotel','',80,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/Lella Baya & Thalasso1.jpg','assets/Lella Baya & Thalasso2.jpg','assets/Lella Baya & Thalasso3.jpg'],
  ['x','y']),
  new Sejour('EMEM21','','El Mouradi El Menzah','Hammamet','hotel','',90,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
  ['assets/El Mouradi El Menzah0.jpg','assets/El Mouradi El Menzah1.jpg','assets/El Mouradi El Menzah2.jpg','assets/El Mouradi El Menzah3.jpg'],
  ['x','y'])

]
HotelsAinDraham:Sejour[]=[
new Sejour('DIEA21','','Dar Ismail Nour El Ain','Ain Draham','hotel','d  d',80,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/Dar Ismail Nour El Ain_1.jpg','assets/Dar Ismail Nour El Ain_2.jpg','assets/Dar Ismail Nour El Ain_3.jpg',
'assets/Dar Ismail Nour El Ain_4.jpg','assets/Dar Ismail Nour El Ain_5.jpg','assets/Dar Ismail Nour El Ain_6.jpg','assets/Dar Ismail Nour El Ain_7.jpg'],
['x','y']),
new Sejour('EMHB21','','El Mouradi Hammam Bourguiba','Ain Draham','hotel','d  d',80,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/El Mouradi Hammam Bourguiba_1.jpg','assets/El Mouradi Hammam Bourguiba_2.jpg','assets/El Mouradi Hammam Bourguiba_3.jpg','assets/El Mouradi Hammam Bourguiba_4.jpg',
'assets/El Mouradi Hammam Bourguiba_5.jpg','assets/El Mouradi Hammam Bourguiba_6.jpg','assets/El Mouradi Hammam Bourguiba_7.jpg','assets/El Mouradi Hammam Bourguiba_8.jpg',],
['x','y']),

]

HotelsTozeur:Sejour[]=[
new Sejour('ATR21','','Anantara Tozeur Resort','Tozeur','hotel','',130,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Anantara Tozeur Resort_1.jpg','assets/Anantara Tozeur Resort_2.jpg','assets/Anantara Tozeur Resort_3.jpg','assets/Anantara Tozeur Resort_4.jpg','assets/Anantara Tozeur Resort_5.jpg',
'assets/Anantara Tozeur Resort_6.jpg','assets/Anantara Tozeur Resort_7.jpg','assets/Anantara Tozeur Resort_8.jpg',],
['x','y']),
new Sejour('PBPT21','','Palm Beach Palace Tozeur','Tozeur','hotel','',140,25,true,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Palm Beach Palace Tozeur_1.jpg','assets/Palm Beach Palace Tozeur_2.jpg','assets/Palm Beach Palace Tozeur_3.jpg','assets/Palm Beach Palace Tozeur_4.jpg','assets/Palm Beach Palace Tozeur_5.jpg','assets/Palm Beach Palace Tozeur_6.jpg'],
['x','y']),
new Sejour('PEE21','','La Palmeraiee','Tozeur','hotel','',90,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/La Palmeraie_1.jpg','assets/La Palmeraie_2.jpg','assets/La Palmeraie_3.jpg','assets/La Palmeraie_4.jpg','assets/La Palmeraie_5.jpg'],
['x','y']),
new Sejour('GYEA21','','Golden Yasmin Ras El Ain','Tozeur','hotel','',100,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/Golden Yasmin Ras El Ain_1.jpg','assets/Golden Yasmin Ras El Ain_2.jpg','assets/Golden Yasmin Ras El Ain_3.jpg','assets/Golden Yasmin Ras El Ain_4.jpg','assets/Golden Yasmin Ras El Ain_5.jpg','assets/Golden Yasmin Ras El Ain_6.jpg',],
['x','y']),
new Sejour('HT21','','Hafsi Tozeur','Tozeur','hotel','',70,100,false,new Date(22,11,2021),new Date(22,11,2021),3,
['assets/Hafsi Tozeur_1.jpg','assets/Hafsi Tozeur_2.jpg','assets/Hafsi Tozeur_3.jpg','assets/Hafsi Tozeur_4.jpg'],
['x','y'])

]

HotelsDjerba:Sejour[]=[
new Sejour('HPTSD21','','Hasdrubal Prestige Thalassa & Spa Djerba','Djerba','hotel','',120,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_3.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_4.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_5.jpg',
'assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_7.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_8.jpg'],
['x','y']),
new Sejour('UDTS21','','Ulysse Djerba Thalasso & Spa','Djerba','hotel','',130,100,false,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Ulysse Djerba Thalasso & Spa_1.jpg','assets/Ulysse Djerba Thalasso & Spa_2.jpg','assets/Ulysse Djerba Thalasso & Spa_3.jpg','assets/Ulysse Djerba Thalasso & Spa_4.jpg'],
['x','y']),
new Sejour('PBPD21','','Palm Beach Palace Djerba','Djerba','hotel','',150,30,true,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Palm Beach Palace Djerba_1.jpg','assets/Palm Beach Palace Djerba_2.jpg','assets/Palm Beach Palace Djerba_3.jpg','assets/Palm Beach Palace Djerba_4.jpg'],
['x','y']),
new Sejour('RTM21','','Royal Thalassa Monastir','Djerba','hotel','',150,30,true,new Date(22,11,2021),new Date(22,11,2021),5,
['assets/Royal Thalassa Monastir_1.jpg'],
['x','y']),
new Sejour('IAD21','','Iliade Aquapark Djerba','Djerba','hotel','',90,100,false,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/Iliade Aquapark Djerba_1.jpg','assets/Iliade Aquapark Djerba_2.jpg','assets/Iliade Aquapark Djerba_3.jpg','assets/Iliade Aquapark Djerba_4.jpg','assets/Iliade Aquapark Djerba_5.jpg'],
['x','y']),
new Sejour('VHBS21','','Vincci Helios Beach & Spa','Djerba','hotel','',120,20,true,new Date(22,11,2021),new Date(22,11,2021),4,
['assets/Vincci Helios Beach & Spa_1.jpg','assets/Vincci Helios Beach & Spa_2.jpg','assets/Vincci Helios Beach & Spa_3.jpg','assets/Vincci Helios Beach & Spa_4.jpg'],
['x','y'])
 ]

 Utilisateur:string[]=[
   'taboubi.oumaima','taboubi'
 ]

//  public PromoHotelstunis(){  
//   return this.promoHotelsTunis;
//   }
//   public PromoHotelsHammamet(){  
//     return this.promoHotelsHammamet;
//     }

    public Hotelstunis(){  
    return this.HotelsTunis;
    }
    public getHotelById(){
      return this.HotelsTunis.filter(id=>id.identifiant==id.id);
    }
    public getHotelByLib(libelle:string){
       return this.HotelsTunis.find(l=>l.libelle==libelle);
       
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
    let hammamet:Sejour[]=[];
    let aindrahem:Sejour[]=[];
    let tozeur:Sejour[]=[];
    let djerba:Sejour[]=[];
    let hotel:Sejour[]=[];
       
       if(isNaN(Number(ch)))
       {
         tunis=this.HotelsTunis.filter(lib=>lib.ville==ch);
         hammamet=this.HotelsHammamet.filter(lib=>lib.ville==ch);
         aindrahem=this.HotelsAinDraham.filter(lib=>lib.ville==ch);
         tozeur=this.HotelsTozeur.filter(lib=>lib.ville==ch);
         djerba=this.HotelsDjerba.filter(lib=>lib.ville==ch); 
       }
       else 
          {
            tunis=this.HotelsTunis.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<tunis.length;i++) {
              hotel.push(tunis[i]);
            }
            hammamet=this.HotelsHammamet.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<hammamet.length;i++) {hotel.push(hammamet[i]);}
            aindrahem=this.HotelsAinDraham.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<aindrahem.length;i++) {hotel.push(aindrahem[i]);}
            tozeur=this.HotelsTozeur.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<tozeur.length;i++) {hotel.push(tozeur[i]);}
            djerba=this.HotelsDjerba.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<djerba.length;i++) {hotel.push(djerba[i]);}
            return hotel;
         }
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
   
       
     }
     exist(id:string,lib:string,c:string):Boolean{
      let hotel=this.thisHotel(c);
      for (let i = 0; i < hotel.length; i++){
        if(hotel[i].identifiant==id && hotel[i].libelle==lib)
        {hotel.splice(i,1);
        return true;}
      }

      return false;
    }
     constructor() { }
}
