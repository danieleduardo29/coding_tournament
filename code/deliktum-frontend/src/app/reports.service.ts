import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Report {
	_id: number,
	type: string,
	description: string,
	datetime: number,
	location: {
		lat: number,
		lng: number,
	},
	image: string
}

@Injectable()
export class ReportService {
  constructor(private http: HttpClient) {}

  getAllReports(): Observable<Report[]> {
    return this.http.get<Report[]>('http://localhost:2901/api/reports');
  }

  getReport(id: number): Observable<Report> {
    return this.http.get<Report>('http://localhost:2901/api/reports/' + id);
  }

  insertReport(Report: Report): Observable<Report> {
    return this.http.post<Report>('http://localhost:2901/api/reports/', Report);
  }
}