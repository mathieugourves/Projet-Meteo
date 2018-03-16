import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    logOut() {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['accueil']);
    }
}
