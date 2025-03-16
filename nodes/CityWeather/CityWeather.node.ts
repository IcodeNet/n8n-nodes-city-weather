import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class CityWeather implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'City Weather',
		name: 'cityWeather',
		icon: 'file:openweather.svg',
		group: ['transform'],
		version: 1,
		description: 'Get the weather of a city',
		defaults: {
			name: 'City Weather',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'cityWeatherApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.openweathermap.org/data/2.5',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		// required fields
		properties: [
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: 'London',
				required: true,
				description: 'The city to get the weather of',
				routing: {
					request: {
						method: 'GET',
						url: '/weather',
						qs: {
							q: '={{$value}}',
						},
					},
				},
			},

			{
				displayName: 'Additional Parameters',
				name: 'additionalParameters',
				type: 'collection',
				default: {},
				placeholder: 'units=metric',
				description: 'Additional parameters to add to the request',
				required: true,
				routing: {
					request: {
						qs: {
							units: '={{$value}}',
						},
					},
				},
				options: [
					{
						displayName: 'Units',
						name: 'units',
						type: 'options',
						default: 'metric',
						options: [
							{
								displayName: 'Metric',
								name: 'Metric',
								value: 'metric',
								description: 'Use metric units (Celsius, meters)',
							},
							{
								displayName: 'Imperial',
								name: 'Imperial',
								value: 'imperial',
								description: 'Use imperial units (Fahrenheit, miles)',
							},
							{
								displayName: 'Kelvin',
								name: 'Kelvin',
								value: 'kelvin',
								description: 'Use Kelvin units (Kelvin, meters)',
							},
						],
					},
				],
			},
		],
	};
}
