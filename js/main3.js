
var width = "100%";
var barHeight = 40;

d3.json('gilmore.json', function(data){

  //for (var i = 0; i < data.Lorelai.length; i++) {

//var per = d3.max(data.Lorelai, function(d) { return data.Lorelai[i].percent;})
  
  var x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            //going to lookinto our data and fine the largest value 
            //start and end point of data
            .range([0, width]);
            //start and end point of chart

  var chart = d3.select('#graph')
    .append('svg')
    .attr('width', width) //variable not in quotation marks
    .attr('height', barHeight * data.Lorelai.length)
    //.attr('id', 'chart');


  var bar = chart.selectAll('g')
            .data(data.Lorelai)
            .enter()
            .append('g')
              .attr('transform', function(d, i){//d is the data and i is the index 
                return "translate(0, "+ i * barHeight+")";
              });


      bar.append("rect")
        .attr("width", x )
        .attr("height", barHeight - 5)//creates white space between the bars
        .style("fill", "#ccc");

      bar.append("text")
        .attr("x", "1%")
        .attr("y", "22px")
        .text(function(d){
          return d.name;
        })



});