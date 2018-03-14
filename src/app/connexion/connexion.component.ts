import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    loginData = { login: '', password: '' };
    message = '';
    data: any;

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        console.log(localStorage.getItem('jwtToken'));
    }

    login() {
        console.log("POST")
        this.http.post('/auth/signin', this.loginData).subscribe(resp => {
            this.data = resp;
            localStorage.setItem('jwtToken', this.data.token);
            this.router.navigate(['/']);
        }, err => {
            this.message = err.error.msg;
        });
    }

}
