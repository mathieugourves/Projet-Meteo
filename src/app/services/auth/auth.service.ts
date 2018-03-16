import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor(public jwtHelper: JwtHelper) { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('jwtToken');

        if (token === null)
            return false;

        return !this.jwtHelper.isTokenExpired(token);
    }

    public getUser(): Object {
        const token = localStorage.getItem('jwtToken');

        if (token === null)
            return null;

        return this.jwtHelper.decodeToken(token);
    }
}
