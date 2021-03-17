import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public mostrar: boolean = false;
  public logout: any;

  constructor(
    private authService: AuthenticationService,


  ) { }

  ngOnInit(): void {



  }

  setMostrar(): void {

    if (this.mostrar) {
      this.mostrar = false;
    }
    else {
      this.mostrar = true;

    }

  }

  toLogout(): void {

    this.authService.logout().then(resp => {

      try {
        console.log('logout exitoso  ==>', resp)

      } catch (error) {
        console.log('error logout  ==>', error)

      }



    })

  }


}
