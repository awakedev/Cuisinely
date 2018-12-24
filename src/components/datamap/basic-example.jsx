import React from 'react';

import Datamap from './datamap';
import Example from './example';

const radius = 4;



export default class BasicExample extends React.Component {
	

	render() {
		return (
			<Example label="">
				<Datamap
					responsive
					geographyConfig={{
						highlightBorderColor: '#bada55',
						popupTemplate: (geography, data,) =>
						`<div class='hoverinfo strong'>${geography.properties.name + ` - `}\n
						Meal, Inexpensive Restauraunt: £${data.costOfMeal}`,
						highlightBorderWidth: 3,
						
					}}
					fills={{
						'Vegan': '#cfd387',
						'NonVegan': '#f58672',
						'defaultFill': '#cbd7d7',
						'bubbles': '#00aaa0'
					}}
					bubbles={[
						{
						 name: "",
						 fillKey: 'bubbles',
						 radius: 12.5,
						 region: 'Cantonese',
						 latitude: 22.315,
    				     longitude: 114.1619
						},
						{
						name: "",
						fillKey: 'bubbles',
						radius: 12.5,
						region: 'Shandong',
						latitude: 40.315,
						longitude: 116.1619
						},
						{
						name: "",
						fillKey: 'bubbles',
						radius: 12.5,
						region: 'Szechwan',
						latitude: 30.315,
						longitude: 103.1619
						},
						{
						name: "",
						fillKey: 'bubbles',
						radius: 12.5,
						region: 'Kashmir',
						latitude: 34.315,
						longitude: 75.5619
						},
						{
						name: "",
						fillKey: 'bubbles',
						radius: 12.5,
						region: 'Kerala',
						latitude: 9.415,
						longitude: 76.6619
						},
					]}
					data={{
						PRT: {
							fillKey: 'NonVegan',
							costOfMeal: 4
						},
						JPN: {
							fillKey: 'NonVegan',
							costOfMeal: 8
						},
						BRA: {
							fillKey: 'NonVegan',
							costOfMeal: 3
						},
						CHN: {
							fillKey: 'NonVegan',
							costOfMeal: 3
						},
						EGY: {
							fillKey: 'NonVegan',
							costOfMeal: 2
						},
						SAU: {
							fillKey: 'NonVegan',
							costOfMeal: 4
						},
						FRA: {
							fillKey: 'NonVegan',
							costOfMeal: 5
						},
						ARG: {
							fillKey: 'NonVegan',
							costOfMeal: 4
						},
						MEX: {
							fillKey: 'NonVegan',
							costOfMeal: 2
						},
						IRN: {
							fillKey: 'NonVegan',
							costOfMeal: 3
						},
						LBY: {
							fillKey: 'NonVegan',
							costOfMeal: 3
						},
						ESP: {
							fillKey: 'NonVegan',
							costOfMeal: 4
						},
						ITA: {
							fillKey: 'NonVegan',
							costOfMeal: 5
						},
						VNM: {
							fillKey: 'NonVegan',
							costOfMeal: 1
						},
						IND: {
							fillKey: 'Vegan',
							costOfMeal: 1
						},
						RUS: {
							fillKey: 'Vegan',
							costOfMeal: 3
						},
						CAN: {
							fillKey: 'Vegan',
							costOfMeal: 6
						},
						USA: {
							fillKey: 'Vegan',
							costOfMeal: 6
						},
						GBR: {
							fillKey: 'Vegan',
							costOfMeal: 6
						},
						AUS: {
							fillKey: 'Vegan',
							costOfMeal: 9
						},
						POL: {
							fillKey: 'Vegan',
							costOfMeal: 3
						}

					}}
					bubbleOptions={{
						popupTemplate: (geo, data) =>
							`<div class="hoverinfo">Region: ${data.region}`
					}}
					
					
				/>
			</Example>
			
		);
	}

}