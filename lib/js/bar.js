function leaderBoard (config) {
  var width = 900;
  var animationDuration = 500;
  var valueKey = 'value';
  var nameKey = 'name';
  var fillColor = 'steelblue';
  var barHeight = 8;
  var barPadding = 10;
  var format = d3.format('.0d');

  var builBar = barBuilder()

  function chart(selection) {
    selection.each(function (data) {
      var textWidth = 50;
      var rangeBar = width - config.margin.left - config.margin.right - textWidth - 30;
      var svgHeight = data.length * (barHeight + barPadding) + config.margin.top + config.margin.bottom;
      var maxValue  = d3.max(data, function(d) { return d[valueKey]; });

      var x = d3.scale.linear()
          .domain([0, maxValue])
          .range([0, rangeBar]);

      var svg = d3.select(this).append('svg')
                    .attr('height', svgHeight)
                    .attr('width', width)
                    .attr('class', 'svg-chart')

      var barGroup = svg.append('g')
                        .attr("transform", "translate(" + config.margin.left + "," + config.margin.top + ")")
      debugger

      barGroup.datum(data).call(barBuilder)
    });
  }

  // getter-setter methods
  chart.width = function(value) {
      if (!arguments.length) return margin;
      width = value;
      return chart;
  };

  chart.barHeight = function(value) {
      if (!arguments.length) return barHeight;
      barHeight = value;
      return chart;
  }

  chart.barPadding = function(value) {
      if (!arguments.length) return barPadding;
      barPadding = value;
      return chart;
  };

  chart.fillColor = function(value) {
      if (!arguments.length) return fillColor;
      fillColor = value;
      return chart;
  };

  chart.format = function(value) {
    if (!arguments.length) return format;
    format = d3.format(value)
    return chart;
  }

  chart.animationDuration = function (value) {
    if (!arguments.length) return animationDuration;
    animationDuration = value
    return chart;
  }

  return chart;
}

function barBuilder (config) {
  var valueKey = 'value';
  var nameKey = 'name';
  var fillColor = 'steelblue';
  var barHeight = 8;
  var barPadding = 10;
  var container = '';

  function bar(selection) {
    selection.each(function (data) {
      var bar = barGroup.selectAll('g')
                  .data(data)
                .enter().append('g')
                  .attr("transform", function(d, i) { return "translate(0," + i * (barHeight + barPadding) + ")"; });

      bar.append("text")
         .attr("y", "-6")
         .text(function(d, i) { return d[nameKey]; });

      bar.append("rect")
            .attr("width", function(d) { return 0; })
            .style('fill', fillColor)
            .transition()
            .duration(animationDuration)
            .attr("width", function(d) { return x(d[valueKey]); })
            .attr("height", barHeight - 1)
            .style('fill', fillColor);

      bar.append("text")
            .attr("x", function(d) { return rangeBar + 10; })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return format(d[valueKey]); });
    });
  }

  bar.barHeight = function(value) {
      if (!arguments.length) return barHeight;
      barHeight = value;
      return bar;
  }

  bar.barPadding = function(value) {
      if (!arguments.length) return barPadding;
      barPadding = value;
      return bar;
  };

  bar.fillColor = function(value) {
      if (!arguments.length) return fillColor;
      fillColor = value;
      return bar;
  };

  bar.container = function(value) {
    if(!arguments.length) return container;
    container = value;
    return bar;
  }

  return bar;
}
