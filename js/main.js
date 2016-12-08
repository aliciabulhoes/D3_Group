//JavaScript Document 
(function(){
"use strict";
console.log("SEAF Fired");//important as a debugging tool//this is a shell

var margin = {top: 20, right: 20, bottom: 50, left: 40};
var width = 240;
var height = 300;
var format = d3.format(".0%");
var barWidth = 30;
var barOffset = 30;
var scale = 3; //scales data to height
var header = 445;

var button1 = document.querySelector("#lorelaiButton");
var button2 = document.querySelector('#roryButton');
var button3 = document.querySelector('#laneButton');
var button4 = document.querySelector('#parisButton');

function lorelaiLove(e){
	document.querySelector('#graph').innerHTML='';
d3.json('gilmore.json', function(data){

var div = d3.select('#graph')
			.append("div")
			.attr("class", "textName");

var x = d3.scaleBand()
	.domain(data.Lorelai.map(function(d){
		return d.name;
	}))
	.range([0, width]);
var y = d3.scaleLinear()
	.range([height, 0]);
var xAxis = d3.axisBottom(x);
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
		.style('text-anchor', 'middle')
		.attr('dx', '2')
		.attr('dy', '0.5em');

svg.append('g')
	.attr('class', 'y')
	.attr('transform', 'translate(0,'+margin.left+','+margin.top+')')
	.call(yAxis);


var bar = svg.selectAll('bar')
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
		.attr('transform', 'translate(15)')
		.attr('class', 'barStyle')

		
        .on("mouseover", function(d){
            div.transition()
            .duration(200)
            .style("opacity", 1)
            div.html(d.percent+"%"+"<br/><img height='100'src=images/"+d.image+"/>") 
            .style("left", (d3.event.pageX - 170) + "px")
            //.style("top", (d3.event.pageY - 80) + "px")  
            .style("top", height + 450 - d.percent +"px")        
        
             d3.select(this)
				.style('fill', "#FB5A5A");
        })
        .on("mouseout", function(d){
          div.transition()
          .duration(500)
          .style("opacity", 0)  

          d3.select(this)
				.style('fill', "#5F9EA0");


        }); 


	})

};

function roryLove(e){
	document.querySelector('#graph').innerHTML="";
d3.json('gilmore.json', function(data){

var div = d3.select('#graph')
			.append("div")
			.attr("class", "textName");

var x = d3.scaleBand()
	.domain(data.Rory.map(function(d){
		return d.name;
	}))
	.range([0, width]);
var y = d3.scaleLinear()
	.range([height, 0]);
var xAxis = d3.axisBottom(x);
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
		.style('text-anchor', 'middle')
		.attr('dx', '2')
		.attr('dy', '0.5em');

svg.append('g')
	.attr('class', 'y')
	.attr('transform', 'translate(0,'+margin.left+','+margin.top+')')
	.call(yAxis);

svg.selectAll('bar')
	.data(data.Rory)
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
		.attr('transform', 'translate(15)')
		.attr('class', 'barStyle')
		
       .on("mouseover", function(d){
            div.transition()
            .duration(200)
            .style("opacity", 1)
            div.html(d.percent+"%"+"<br/><img height='100'src=images/"+d.image+"/>") 
            .style("left", (d3.event.pageX - 150) + "px")
            //.style("top", (d3.event.pageY - 80) + "px")  
            .style("top", height + 500 - d.percent +"px")        
        
             d3.select(this)
				.style('fill', "#FB5A5A");
        })
        .on("mouseout", function(d){
          div.transition()
          .duration(500)
          .style("opacity", 0)  

          d3.select(this)
				.style('fill', "#5F9EA0");


        }); 
	})
};

function laneLove(e){
	document.querySelector('#graph').innerHTML="";
d3.json('gilmore.json', function(data){

var div = d3.select('#graph')
			.append("div")
			.attr("class", "textName");

var x = d3.scaleBand()
	.domain(data.Lane.map(function(d){
		return d.name;
	}))
	.range([0, width]);
var y = d3.scaleLinear()
	.range([height, 0]);
var xAxis = d3.axisBottom(x);
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
		.style('text-anchor', 'middle')
		.attr('dx', '2')
		.attr('dy', '0.5em');

svg.append('g')
	.attr('class', 'y')
	.attr('transform', 'translate(0,'+margin.left+','+margin.top+')')
	.call(yAxis);

svg.selectAll('bar')
	.data(data.Lane)
	.enter()
	.append('rect')
		.attr('class', 'bar')
		.attr('x', function(d, i){
			return i * (barWidth + 51.5);
		})
		.attr('width', barWidth)
		.attr('y', function(d){
			return height - d.percent * scale;
		})
		.attr('height', function(d){
			return d.percent * scale;
		})
		.attr('transform', 'translate(21)')
		.attr('class', 'barStyle')
		
     .on("mouseover", function(d){
            div.transition()
            .duration(200)
            .style("opacity", 1)
            div.html(d.percent+"%"+"<br/><img height='100'src=images/"+d.image+"/>") 
            .style("left", (d3.event.pageX - 150) + "px")
            //.style("top", (d3.event.pageY - 80) + "px")  
            .style("top", height + 480 - d.percent +"px")        
        
             d3.select(this)
				.style('fill', "#FB5A5A");
        })
        .on("mouseout", function(d){
          div.transition()
          .duration(500)
          .style("opacity", 0)  

          d3.select(this)
				.style('fill', "#5F9EA0");


        }); 
	})
};

function parisLove(e){
	document.querySelector('#graph').innerHTML="";
d3.json('gilmore.json', function(data){

var div = d3.select('#graph')
			.append("div")
			.attr("class", "textName");

var x = d3.scaleBand()
	.domain(data.Paris.map(function(d){
		return d.name;
	}))
	.range([0, width]);
var y = d3.scaleLinear()
	.range([height, 0]);
var xAxis = d3.axisBottom(x);
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
		.style('text-anchor', 'middle')
		.attr('dx', '2')
		.attr('dy', '0.5em');

svg.append('g')
	.attr('class', 'y')
	.attr('transform', 'translate(0,'+margin.left+','+margin.top+')')
	.call(yAxis);

svg.selectAll('bar')
	.data(data.Paris)
	.enter()
	.append('rect')
		.attr('class', 'bar')
		.attr('x', function(d, i){
			return i * (barWidth + 51.5);
		})
		.attr('width', barWidth)
		.attr('y', function(d){
			return height - d.percent * scale;
		})
		.attr('height', function(d){
			return d.percent * scale;
		})
		.attr('transform', 'translate(21)')
		.attr('class', 'barStyle')
		
        .on("mouseover", function(d){
            div.transition()
            .duration(200)
            .style("opacity", 1)
            div.html(d.percent+"%"+"<br/><img height='100'src=images/"+d.image+"/>") 
            .style("left", (d3.event.pageX - 150) + "px")
            //.style("top", (d3.event.pageY - 80) + "px")  
            .style("top", height + 500 - d.percent +"px")        
        
             d3.select(this)
				.style('fill', "#FB5A5A");
        })
        .on("mouseout", function(d){
          div.transition()
          .duration(500)
          .style("opacity", 0)  

          d3.select(this)
				.style('fill', "#5F9EA0");


        }); 
	})
};

button1.addEventListener("click", lorelaiLove, false);
button2.addEventListener("click", roryLove, false);
button3.addEventListener("click", laneLove, false);
button4.addEventListener("click", parisLove, false);
})();