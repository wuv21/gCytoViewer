// modified from mike freeman's code on reusability
// https://github.com/info474-s17/m15-reusability/tree/complete/demo-4

import * as d3 from "d3";

export default function HeatmapPlot() {
    // Set default values
    let height = 400,
        width = 1800,
        fillScale = "",
        fillVar = "",
        xVar = "",
        yVar = "",
        tileSize = 14,
        margin = {
            left: 50,
            bottom: 100,
            top: 100,
            right: 0,
        };

    // Function returned by ScatterPlot
    function chart(selection) {
        // Height/width of the drawing area itself
        // const chartHeight = height - margin.bottom - margin.top;
        // const chartWidth = width - margin.left - margin.right;

        // Iterate through selections, in case there are multiple
        selection.each(function(data) {
            // Use the data-join to create the svg (if necessary)
            const ele = d3.select(this);
            const svg = ele.selectAll("svg").data([data.values]);

            // Append static elements (i.e., only added once)
            const svgEnter = svg.enter()
                .append("svg")
                .attr('width', width)
                .attr("height", height)
                .attr('class', 'chart-svg')

            // g element for heatmap
            svgEnter.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .attr("class", 'heatmapG');

            // Append axes to the svgEnter element
            const xAxisG = svgEnter.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .attr('class', 'axis x');

            const yAxisG = svgEnter.append('g')
                .attr('transform', 'translate(' + 0 + ',' + (margin.top) + ')')
                .attr('class', 'axis y')

            // tooltip highlight
            const div = ele.append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            // Define xAxis and yAxis scales
            // const uniqX = _.uniq(data.values, (d) => d[xVar]));
            const uniqX = [...new Set(data.values.map((d) => d[xVar]))]

            const xScale = d3.scaleBand()
                .domain(uniqX)
                .range([0, uniqX.length * tileSize]);
            
            // const uniqY = _.uniq(_.map(data.values, (d) => d[yVar]));
            const uniqY = [...new Set(data.values.map((d) => d[yVar]))]
            const yScale = d3.scaleBand()
                .domain(uniqY)
                .range([0, uniqY.length * tileSize]);

            if (fillScale == "") {
                const dataExtent = d3.extent(data.values, (d) => d[fillVar])
                fillScale = d3.scaleSequential(d3.interpolateSpectral)
                    .domain([dataExtent[1], dataExtent[0]]);
            }

            yAxisG.selectAll(".y-hm-label")
                .data(uniqY)
                .enter()
                .append("text")
                .attr("class", "y-hm-label")
                .text((d) => d)
                .attr("x", 0)   
                .attr("y", (d) => yScale(d))
                .style("font-size", 9)
                .style("text-anchor", "end")
                .attr("transform", "translate(" + (margin.left - 5) + "," + (tileSize / 1.3) + ")")

            xAxisG.selectAll(".x-hm-label") 
                .data(uniqX)
                .enter()
                .append("text")
                .attr("class", "x-hm-label")
                .text((d) => d)
                .attr("y", (d) => {return xScale(d) + (tileSize / 1.5)})
                .attr("x", 9)
                .style("font-size", 9)
                .style("text-anchor", "start")
                .attr("transform", "rotate(-90)")

            // Draw markers
            const tiles = ele.select('.heatmapG')
                .selectAll('.tile')
                .data(data.values, (d) => d[xVar] + ":" + d[yVar]);

            // Use the .enter() method to get entering elements, and assign initial position
            tiles.join(
                enter => enter.append("rect")
                .attr("x", (d) => xScale(d[xVar]))
                .attr("y", (d) => yScale(d[yVar]))
                .attr("class", "tile")
                .attr("width", tileSize - 1)
                .attr("height", tileSize - 1)
                .style("fill", (d) => fillScale(d[fillVar]))
                .on("mouseover", function(d) {
                    d3.select(this)
                        .transition()
                        .style("stroke", "#2980B9")
                        .style("stroke-width", "3px");
    
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
    
                    div.html("value: " + d[fillVar].toFixed(2) + "<br/>" + "ab: " + d[xVar] + "<br/>" + "cluster: " + d[yVar])     
                        .style("left", (d3.event.pageX) + "px")             
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this)
                        .transition()
                        .style("stroke", null)
    
                    div.style("opacity", 0);
                })
            );
        });
    }

    // Getter/setter methods to change locally scoped options
    chart.height = function (value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    chart.width = function (value) {
        if (!arguments.length) return width;
        width = value;
        return chart;
    };

    chart.margin = function (value) {
        if (!arguments.length) return margin;
        margin = value;
        return chart;
    };
    chart.xVar = function (value) {
        if (!arguments.length) return xVar;
        xVar = value;
        return chart;
    };
    chart.yVar = function (value) {
        if (!arguments.length) return yVar;
        yVar = value;
        return chart;
    };
    chart.tileSize = function (value) {
        if (!arguments.length) return tileSize;
        tileSize = value;
        return chart;
    };
    chart.fillVar = function (value) {
        if (!arguments.length) return fillVar;
        fillVar = value;
        return chart;
    };
    chart.fillScale = function (value) {
        if (!arguments.length) return fillScale;
        fillScale = value;
        return chart;
    };
    return chart;
}