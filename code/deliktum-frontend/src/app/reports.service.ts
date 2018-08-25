import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Report } from './report';

const BASE_URL = 'http://localhost:2901/api/reports';

@Injectable({
	providedIn: 'root',
})
export class ReportsService {
	
	constructor(private http: HttpClient) {	}

	getAllReports(): Report[] {
		//console.log(BASE_URL);
		return [
			{
				id: 1,
				type: 'Robo',
				description: 'Robo a mano armada',
				datetime: 9846521,
				location: {
                    lat: -0.1674380,
                    lng: -78.4757903,
				},
				image: null
			},
			{
				id: 2,
				type: 'Borrachera',
				description: 'Hay un borracho tirado en la esquina amenazando a la gente que pasa',
				datetime: 491651365,
				location: {
                    lat: -0.1674385,
                    lng: -78.4757910,
				},
				image: null
			},
			{
				id: 3,
				type: 'Atropellamiento',
				description: 'Un ciclista ha sido atropellado por un vehículo blanco',
				datetime: 5213547587,
				location: {
                    lat: -0.1674375,
                    lng: -78.4757900,
				},
				image: null
			}
		];
	}

	getReport(id: number): Observable<Report> {
		return this.http.get<Report>(BASE_URL + id);
	}

	insertReport(report: Report): Observable<Report> {
		return this.http.post<Report>(BASE_URL, report);
	}
}