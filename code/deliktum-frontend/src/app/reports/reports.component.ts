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

	reports: Report[];

	constructor(private reportsService: ReportsService) { }
  
	getReports(): Report[] {
		
		return this.reportsService.getAllReports();
	}

	ngOnInit() {
		this.getReports();
	}

}
