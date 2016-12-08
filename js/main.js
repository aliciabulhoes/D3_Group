//JavaScript Document 

(function(){
"use strict";
console.log("SEAF Fired");//important as a debugging tool//this is a shell

var margin = {top: 20, right: 20, bottom: 50, left: 40};
var width = 600;
var height = 300;
var format = d3.format(".0%");
var barWidth = 30;
var barOffset = 30;
var scale = 3; //scales data to height

d3.json('gilmore.json', function(data){

var x = d3.scaleOrdinal()
	.domain(data.Lorelai.map(function(d){
	return d.name;
	}))
	.range([0, width]);
var y = d3.scaleLinear()
	.range([height, 0]);
var xAxis = d3.axisBottom()
	.scale(x)
	.tickValues(data.Lorelai.name)
	//.tickFormat(d3.format(".1f"));
var yAxis = d3.axisLeft()
	.scale(y)
	.tickFormat(format);

var svg = d3.select('#graph')
	.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', 300 + margin.top + margin.bottom)
	.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


svg.append('g')
	.attr('class', 'x')
	.attr('transform', 'translate(0,' + height + ')')
	.call(xAxis)
	.selectAll('text')
		.style('text-anchor', 'end')
		.attr('dx', '5em')
		.attr('dy', '0.5em');

svg.append('g')
	.attr('class', 'y')
	.attr('transform', 'translate(0,'+margin.left+','+margin.top+')')
	.call(yAxis);

svg.selectAll('bar')
	.data(data.Lorelai)
	.enter()
	.append('rect')
		.attr('class', 'bar')
		.attr('x', function(d, i){
			return i * (barWidth + barOffset);
		})
		.attr('width', barWidth)
		.attr('y', function(d){
			return height - d.percent * scale;
		})
		.attr('height', function(d){
			return d.percent * scale;
		})
		.style('fill', '#000');

		console.log(data.Lorelai);

})
})();