import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar:MatSnackBar,
    private router:Router) { }

  notificar(mensagem:string){
    this.snackBar.open(mensagem, "Ok", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "center"

    });
  }


}
