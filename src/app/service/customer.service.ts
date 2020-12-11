import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})

};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'x-api-key': '2HxEcVeegd7YN72NJR9aU2tmRtq9rBNn5wXgNnTl'
 }),
	// responseType: 'text' as 'json'
};

const httpOptions1 = {
	headers: new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		'Accept': 'application/json',
		'x-api-key': '2HxEcVeegd7YN72NJR9aU2tmRtq9rBNn5wXgNnTl'
	}),
	'withCredentials': true //
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020"

	constructor(private httpClient: HttpClient) { }

	login(username: string, password: string): Observable<any> {
		let credentials = {
			"username": username,
			"password": password
		};
		return this.httpClient.post<any>(this.baseUrl + "/login",
			credentials,
			httpOptions2).pipe
			(
				catchError(this.handleError)
			);
  }

  users_information(): Observable<any> {
	return this.httpClient.post<any>(this.baseUrl + "/users",
		httpOptions2).pipe
		(
			catchError(this.handleError)
		);
}

  transfer(username: string, payeeID: string, dateTime: Date, amount: BigInteger, category: string, egift: Boolean, message: string): Observable<any> {
	let credentials = {
		"custID": username,
		"payeeID": payeeID,
		"dateTime" : dateTime,
		"amount" : amount,
		"expensesCat" : category,
		"eGift" : egift,
		"message" : message,
	};
	return this.httpClient.post<any>(this.baseUrl + "/add",
		credentials,
		httpOptions2).pipe
		(
			catchError(this.handleError)
		);
}
  
  private handleError(error: HttpErrorResponse) {
		let errorMessage: string = "";

		if (error.error instanceof ErrorEvent) {
			errorMessage = "An unknown error has occurred: " + error.error.message;
		}
		else {
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}

		console.error(errorMessage);

		return throwError(errorMessage);
	}
}
