import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    signupData = { username: '', password: '' };
    message = '';

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

    signup() {
        this.http.post('/auth/signup', this.signupData).subscribe(resp => {
            this.router.navigate(['/connexion']);
        }, err => {
            this.message = err.error.msg;
        });
    }

}
