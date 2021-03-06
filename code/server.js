﻿const express = require('express');

const app = express();

//Enabling CORS
const cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(2901, () => {
  console.log('Server started (port 2901)!');
});

// GET ALL
app.route('/api/reports').get((req, res) => {
  console.log('Serving reports');
  res.send({
    reports: [
		{
			id: 1,
			type: 'Robo',
			description: 'Robo a mano armada',
			datetime: 9846521,
			location: {
				lat: 12,
				lng: 20,
			},
			image: null
		},
		{
			id: 2,
			type: 'Borrachera',
			description: 'Hay un borracho tirado en la esquina amenazando a la gente que pasa',
			datetime: 491651365,
			location: {
				lat: 10,
				lng: 15,
			},
			image: null
		},
		{
			id: 3,
			type: 'Atropellamiento',
			description: 'Un ciclista ha sido atropellado por un vehículo blanco',
			datetime: 5213547587,
			location: {
				lat: 10,
				lng: 24,
			},
			image: null
		}
	]
  });
});

//GET ONE
app.route('/api/reports/:id').get((req, res) => {
	const requestedReportId = req.params['id'];
	res.send({ id: requestedReportId }); //ToDo: get a real report
});

//POST ONE
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/reports').post((req, res) => {
	res.send(201, req.body);
});