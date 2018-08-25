import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Report } from './report';

const BASE_URL = 'http://localhost:2901/api/reports';

@Injectable({
	providedIn: 'root',
})
export class ReportsService {
	
	constructor(private http: HttpClient) {}

	getAllReports(): Observable<Report[]> {
		console.log('getting reports');
		let result = this.http.get<Report[]>(BASE_URL);
		console.log(result);
		return result;
	}

	getReport(id: number): Observable<Report> {
		return this.http.get<Report>(BASE_URL + id);
	}

	insertReport(report: Report): Observable<Report> {
		return this.http.post<Report>(BASE_URL, report);
	}
}