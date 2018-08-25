import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { Observable } from 'rxjs/Observable';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

	reports: Observable<Report[]>;

	constructor(private reportsService: ReportsService) { }
  
	getReports(): void {
		this.reports = this.reportsService.getAllReports();
	}

	ngOnInit() {
	}

}
