export class Report {
	id: number;
	type: string;
	description: string;
	datetime: number;
	location: {
		lat: number;
		lng: number;
	};
	image: string
}