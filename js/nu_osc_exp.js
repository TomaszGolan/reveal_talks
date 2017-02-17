var s = Snap("#nu_osc_exp");

// screen
var width = 800;
var height = 600;

var margin = width / 100;

var font_size = 50;

// colors

var blue = "#42AFFA";
var red = "#FB4953";
var orange = "#FF4D00"
var white = "#FFFFFF";
var black = "#000000";
var green = "#98E80C";
var grey = "#222222";

// detector

var detector_width = width / 5;
var detector_height = height * 0.8;

var detector = s.rect(width - detector_width - margin, margin, detector_width, detector_height, 10, 10);

detector.attr({
    fill: white,
    'fill-opacity': 0, 
    stroke: blue,
    'strokeWidth': 5
});

// detector label

var detector_label = s.text(width - detector_width / 2 - margin, 2*margin + font_size + detector_height, "Detector");
detector_label.attr({fontSize: font_size, fill: white, "text-anchor": "middle"})

// neutrino

var neutrino_radius = detector_width / 10;

// neutrino source

var source_width = 5 * neutrino_radius;

var p2 = [3*margin + neutrino_radius, margin + detector_height / 2 - 2*neutrino_radius];
var p3 = [p2[0], margin + detector_height / 2 + 2*neutrino_radius];
var p1 = [p2[0] + source_width, p2[1]];
var p4 = [p1[0], p3[1]];

var nu_source = s.polyline(p1, p2, p3, p4);
nu_source.attr({
    'fill-opacity': 0,
    stroke: white,
    'strokeWidth': 3
});

var a1 = [p2[0] + 2*margin, p2[1] + 3*margin];
var a2 = [a1[0] + 3*margin, a1[1]];
var a3 = [a2[0], a2[1] - margin];
var a4 = [a3[0] + 3*margin, a1[1] + margin];
var a5 = [a3[0], a4[1] + 2*margin];
var a6 = [a5[0], a5[1] - margin];
var a7 = [a1[0], a6[1]];

var arrow = s.polyline(a1, a2, a3, a4, a5, a6, a7);
arrow.attr({
    fill: white,
    'fill-opacity': 0.25,
});

// neutrino source label

var source_label = s.text((p1[0] - p2[0]) / 2 + p2[0], 2*margin + font_size + detector_height, "Source");
source_label.attr({fontSize: font_size, fill: white, "text-anchor": "middle"});

// start button

var button_w = 1.5*source_width;
var button_h = button_w / 2;

var start = s.rect(width / 2 - button_w / 2, height / 2 - button_h / 2, button_w, button_h);
start.attr({
    fill: white,
    'fill-opacity': 0.75,
    stroke: white,
    'strokeWidth': 0,
    'stroke-opacity': 0.25
});

var start_label = s.text(width / 2, height / 2 + font_size / 5, "START");
start_label.attr({fontSize: font_size / 2, 'font-weight': 'bold', fill: grey, "text-anchor": "middle"});

// functions

var label_dis = function(label) {
    label.animate({opacity: 0}, 1000);

    setTimeout(function() {
        label.remove();
    }, 1000);
};

var button_dis = function(button) {
    button.animate({opacity: 0}, 1000);

    Snap.animate(button_w, 0, function (value) {
        button.attr({width: value, height: value / 2});
    }, 1000, mina.bounce);
    
    setTimeout(function() {
        button.remove();
    }, 1000);
};

var detected = 0;
var speed = 0.5;
var time = width / speed;

var neutrino = function() {
    var neutrino = s.circle(a1[0] + neutrino_radius, a4[1], 0);
    neutrino.attr({fill: green, 'fill-opacity': 0});

    neutrino.animate({r: neutrino_radius}, time / 8, mina.bounce);
    Snap.animate(0, 1, function (value) {
        neutrino.attr({'fill-opacity': value});
    }, time / 8, mina.bounce);

    var distance = width;
    var t = time;

    if (Math.random() > 0.5)
    {
        distance = width - detector_width - margin + neutrino_radius;
        t = distance / speed;
        
        setTimeout(function(){
            neutrino.animate({r: 0.5*neutrino_radius}, time / 8, mina.bounce);
            
            Snap.animate(0, 10, function (value) {
                neutrino.attr({filter: s.filter(Snap.filter.blur(value, value)), 'fill-opacity': 1 - 0.01*value});
            }, time / 8, mina.bounce);
        }, time / 4 + t);

        setTimeout(function(){
            var new_y = detector_height - 2*neutrino_radius*(1+Math.floor(detected / 4));
            var new_x = neutrino_radius + (detected % 4) * 2 * neutrino_radius;
            neutrino.attr({cx: new_x, cy: new_y});
            neutrino.animate({r: neutrino_radius}, time / 8, mina.bounce);
            Snap.animate(10, 0, function (value) {
                neutrino.attr({filter: s.filter(Snap.filter.blur(value+1, value+1)), 'fill-opacity': 0.75 - 0.01*value});
            }, time / 8, mina.bounce);
        }, 3 * time / 8 + t);

        setTimeout(function(){
            detected += 1;
        }, time / 2 + t)
    }
    else
    {
        setTimeout(function() {
            neutrino.remove();
        }, 2*time);        
    }

    setTimeout(function() {
        neutrino.animate({ transform: 't' + String(distance) + ',0' }, t, mina.linear);
    }, time / 4);

    setTimeout(function() {
        if (Math.random() > 0.7) { 
            neutrino.animate({fill: red}, time / 4);
        }
    }, time / 2);
};

var beam_size = 32;

var beam = function () {

    for (i = 0; i < beam_size; i++) {
        setTimeout(function(){neutrino();}, i*time);
    };

};

// main function

var main = function() {
    // remove labels etc
    label_dis(detector_label);
    label_dis(source_label);
    button_dis(start);
    // main loop
    setTimeout(function() {
        beam();
    }, 2000);
};

start.click(main);