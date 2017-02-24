/** Plot weights for AND gate NN learning using plotly.js */

var lw = 5;
var fs = 20;

function makeplots() {
    Plotly.d3.csv("https://raw.githubusercontent.com/TomaszGolan/reveal_talks/gh-pages/data/and_learning.csv", function(data){ processData(data) } );
};

function processData(data) {

    var epoch = [], cost = [], w0 = [], w1 = [], w2 = [], h00 = [], h01 = [], h10 = [], h11 = [];

    for (var i = 0; i < data.length; i++) {
        row = data[i];
        epoch.push( row['epoch'] );
        cost.push( row['cost'] );
        w0.push( row['w0'] );
        w1.push( row['w1'] );
        w2.push( row['w2'] );
        h00.push( row['h00'] );
        h01.push( row['h01'] );
        h10.push( row['h10'] );
        h11.push( row['h11'] );
    }

    //plot_cost(epoch, cost);
    plot_weights(epoch, w0, w1, w2);
    plot_h(epoch, h00, h01, h10, h11);
}

function plot_cost(e, c) {
    var traces = [
          {x: e, y: c, name: 'cost', line: {width: lw}},
    ];

    var layout = {
        title: "Cost function",
        font: {
            family: 'Helvetica, sans-serif',
            size: fs,
            color: '#222222'
        },
        xaxis: {
            title: "Epoch",
        },
        yaxis: {
            title: "Cost",
            type: 'log',
        },
    }

    Plotly.newPlot('and_c', traces, layout);
};

function plot_weights(e, w0, w1, w2) {
    var traces = [
          {x: e, y: w0, name: 'w0', line: {width: lw}},
          {x: e, y: w1, name: 'w1', line: {width: lw}},
          {x: e, y: w2, name: 'w2', line: {width: lw}},
    ];

    var layout = {
        title: "Weights",
        font: {
            family: 'Helvetica, sans-serif',
            size: fs,
            color: '#222222'
        },
        xaxis: {
            title: "Epoch",
        },
        yaxis: {
            title: "Weight",
            range: [-20, 10],
        },
    }

    Plotly.newPlot('and_w', traces, layout);
};

function plot_h(e, h00, h01, h10, h11) {
    var traces = [
          {x: e, y: h00, name: 'h(0,0)', line: {width: lw}},
          {x: e, y: h01, name: 'h(0,1)', line: {width: lw}},
          {x: e, y: h10, name: 'h(1,0)', line: {width: lw}},
          {x: e, y: h11, name: 'h(1,1)', line: {width: lw}},
    ];

    var layout = {
        title: "Hypothesis",
        font: {
            family: 'Helvetica, sans-serif',
            size: fs,
            color: '#222222'
        },
        xaxis: {
            title: "Epoch",
        },
        yaxis: {
            title: "h(x1, x2)",
            type: "log",
        },
    }

    Plotly.newPlot('and_h', traces, layout);
};

makeplots();

