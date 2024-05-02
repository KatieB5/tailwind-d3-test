import { useEffect, useRef } from "react";
import * as d3 from "d3";

export const LineChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Define margins and dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Load data from CSV file
    d3.csv("/path/to/abortion-data.csv").then((data) => {
      // Parse date
      const parseDate = d3.timeParse("%Y %b %d");

      // Define scales
      const x = d3.scaleTime().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);

      // Define color scale
      const color = d3.scaleOrdinal().range(d3.schemeCategory10);

      // Define axes
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      // Define line generator
      const line = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      // Format data
      data.forEach((d) => {
        d.date = parseDate(d["X.1"]);
      });

      // Set domain for x and y axes
      x.domain(d3.extent(data, (d) => d.date));
      y.domain([
        0,
        d3.max(data, (d) =>
          Math.max(
            +d["Legal under any"],
            +d["Legal only under certain"],
            +d["Illegal in all"]
          )
        ),
      ]);

      // Prepare data for lines
      const categories = color.domain().map((name) => ({
        name,
        values: data.map((d) => ({ date: d.date, value: +d[name] })),
      }));

      // Add x-axis
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      // Add y-axis
      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Percentage");

      // Add lines
      const category = svg
        .selectAll(".category")
        .data(categories)
        .enter()
        .append("g")
        .attr("class", "category");

      category
        .append("path")
        .attr("class", "line")
        .attr("d", (d) => line(d.values))
        .style("stroke", (d) => color(d.name));

      // Add labels
      category
        .append("text")
        .datum((d) => ({ name: d.name, value: d.values[d.values.length - 1] }))
        .attr(
          "transform",
          (d) => `translate(${x(d.value.date)},${y(d.value.value)})`
        )
        .attr("x", 3)
        .attr("dy", ".35em")
        .text((d) => d.name);
    });
  }, []);

  return <svg ref={svgRef}></svg>;
};
