import { Component, OnInit } from '@angular/core';
import { User } from '../models/model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public user : User;//Declaro el Modelo que recibe 
  constructor(
    private routeParam:ActivatedRoute//Sirve para pasar información a un componente asociado a una ruta. 
    ) { }

  ngOnInit(): void {
    this.user = {
      //Snapshot tiene la información de la ruta asociada a un coponente cargado       
      id: this.routeParam.snapshot.params.id,
      name: this.routeParam.snapshot.params.name,
      email: this.routeParam.snapshot.params.email,
      street: this.routeParam.snapshot.params.street,
      suite: this.routeParam.snapshot.params.suite,
      zipcode: this.routeParam.snapshot.params.zipcode,
      city:this.routeParam.snapshot.params.city,
      phone: this.routeParam.snapshot.params.phone,
      website: this.routeParam.snapshot.params.website,
      companyName: this.routeParam.snapshot.params.companyName,
      catchPhrase:this.routeParam.snapshot.params.catchPhrase
      
  }
    }
  }

