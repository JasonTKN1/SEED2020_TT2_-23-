import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionService {

	constructor() { }

	getIsLogin(): boolean {
		if (sessionStorage.isLogin == "true") {
			return true;
		}
		else {
			return false;
		}
	}

	setIsLogin(isLogin: boolean): void {
		sessionStorage.isLogin = isLogin;
	}

	getAccessToken(): string {
		return sessionStorage.token;
	}

	setAccessToken(token: string): void {
		sessionStorage.token = token;
	}

	getUsername(): string {
		return sessionStorage.username;
	}

	setUsername(username: string): void {
		sessionStorage.username = username;
	}

	getRememberMe(): boolean {
		if (sessionStorage.rememberMe == "true") {
			return true;
		}
		else {
			return false;
		}
	}

	setRememberMe(rememberMe: boolean): void {
		sessionStorage.rememberMe = rememberMe;
	}

	getUserId(): string {
		return sessionStorage.userId;
	}

	setUserId(userId: number): void {
		sessionStorage.userId = userId;
	}

	getPassword(): string {
		return sessionStorage.password;
	}

	setPassword(password: string): void {
		sessionStorage.password = password;
	}

	getPayeeID(): string {
		return sessionStorage.payeeID;
	}

	getAmount(): BigInteger {
		return sessionStorage.amount;
	}

	getExpCat(): string {
		if (sessionStorage.shopping) {
			return "shopping";
		}
		else{
			return sessionStorage.catOthers;
		}
	}

	getEgift(): boolean {
		if (sessionStorage.egift_true) {
			return sessionStorage.egift_true;
		}
		else{
			return sessionStorage.egift_false;
		}
	}

	getMessage(): string {
		return sessionStorage.message;
	}
}
