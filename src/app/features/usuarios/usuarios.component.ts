import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActionsUsers from '../store/users.actions';
import { UsersState } from '../store/users.reducers';
import { User } from '../models/model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  public usersList : User[] = [];
  public isLoading = true;
  
  constructor(
    private store: Store<{ users: UsersState }>
  ) { }
  

  ngOnInit(): void {
    this.store.dispatch(fromActionsUsers.FetchPending());
    this.store.subscribe( ({ users }) => {
      this.isLoading = users.pending;
      if(users.data && users.data.length) {
        console.log(users.data);
        this.formatUsers(users.data);
      }
    })
    if(this.usersList.length > 0)
    {
      this.isLoading = false;
    }
  }

  formatUsers(users : any){
    this.usersList = users.map(
      user =>{
        return{
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          username: user.username,
          street: user.address.street,
          suite: user.address.suite,
          zipcode: user.address.zipcode,
          website: user.website,
          companyName: user.company.name,
          catchPhrase: user.company.catchPhrase
        }
      }
    );
  }

  borrarUser(i: number) : Array<User>
  {
    this.usersList.splice(i,1);
    return this.usersList;
  }

  eliminar(event):void{
    let r = confirm("¿Desea eliminar el usuario?");
    if (r == true) {
      this.borrarUser(event.indice);
    } 
  }

}
