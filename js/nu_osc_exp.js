/**
 * My first js script ever. It uses Snap.svg (http://snapsvg.io/) to generate 
 * a simple animation presenting how neutrino oscillation experiments work.
 */

var SNAP = Snap("#nu_osc_exp"); // include in html using svg with id=nu_osc_exp

///// SETTINGS /////

var SPEED = 2; // scale time of all animations

var BEAM_SIZE = 48;

var SCREEN = {
    width:  900, 
    height: 600,
    margin:  10,
}; 

var FONT = {
    large:  50,
    normal: 25,
};

var DETECTOR = {
    width:  SCREEN.width / 5,
    height: SCREEN.height * 0.8,
    y:      SCREEN.margin,
};

DETECTOR.x = SCREEN.width - DETECTOR.width - SCREEN.margin;
DETECTOR.center = {
    x: DETECTOR.x + DETECTOR.width / 2,
    y: DETECTOR.y + DETECTOR.height / 2,
};

var NU = {
    radius: DETECTOR.width / 10,
};

var SOURCE = {
    width:  6 * NU.radius,
    height: 5 * NU.radius,
};

var BUTTON = {
    width:  9*NU.radius,
};

BUTTON.height = BUTTON.width/2;

///// COLORS /////

var COLOR = {
    blue:   "#42AFFA",
    red:    "#FB4953",
    orange: "#FF4D00",
    white:  "#FFFFFF",
    black:  "#000000",
    green:  "#98E80C",
    grey:   "#222222",
};

///// DETECTOR /////

/**
 * Draw a detector and its label
 * 
 * @returns {Object}    object
 * @returns {Snap.rect} object.detector
 * @returns {Snap.text} object.label
*/
var snap_detector = function() {
    // build detector
    var detector = SNAP.rect(DETECTOR.x, DETECTOR.y, 
                             DETECTOR.width, DETECTOR.height,
                             SCREEN.margin);
    // paint detector
    detector.attr({
        fill: COLOR.white,
        'fill-opacity': 0,
        stroke: COLOR.blue,
        'strokeWidth': 5,   
    });
    // create detector label
    var label_x = DETECTOR.x + DETECTOR.width / 2;
    var label_y = DETECTOR.height + FONT.large + 2*SCREEN.margin;
    var label = SNAP.text(label_x, label_y, "Detector");
    label.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        "text-anchor": "middle"
    });
    // return Object{detector, label}
    return {
        detector: detector, 
        label: label,
    };
};

///// NEUTRINO SOURCE /////

/**
 * Draw an arrow
 * 
 * @param {number} x - left edge
 * @param {number} y - top edge
 * @param {number} w - width
 * @param {number} h - height
 * @param {number} t - thickness
 * 
 * @return {Snap.polyline} arrow
 */
var snap_arrow = function(x, y, w, h, t=0) {
    t = t ? t : 0.4*h;
    var wing = (h-t) / 2; // wing height
    // arrow points
    var a1 = [x,           y + wing];
    var a2 = [a1[0] + w/2, a1[1]];
    var a3 = [a2[0],       y];
    var a4 = [a2[0] + w/2, y + h/2];
    var a5 = [a2[0],       y + h];
    var a6 = [a2[0],       a5[1] - wing];
    var a7 = [a1[0],       a6[1]];
    // create arrow
    return SNAP.polyline(a1, a2, a3, a4, a5, a6, a7);
};

/**
 * Draw a neutrino source and its label
 * 
 * @returns {Object}        object
 * @returns {Snap.polyline} object.body
 * @returns {Snap.polyline} object.arrow
 * @returns {Snap.text}     object.label
*/
var snap_nu_source = function() {
    // source edges
    var source_left   = 4*SCREEN.margin;
    var source_right  = source_left + SOURCE.width;
    var source_top    = DETECTOR.center.y - SOURCE.height / 2;
    var source_bottom = source_top + SOURCE.height;
    // build source body
    var body = SNAP.polyline(
        source_right, source_top,
        source_left, source_top,
        source_left, source_bottom,
        source_right, source_bottom
    );
    // paint source body
    body.attr({
        'fill-opacity': 0,
        stroke: COLOR.white,
        'strokeWidth': 3,
    });
    // nu launcher (arrow)
    var margin = 1.5*SCREEN.margin;
    var arrow = snap_arrow(
        source_left + margin, 
        source_top + margin,
        SOURCE.width - 2*margin, 
        SOURCE.height - 2*margin
    );
    arrow.attr({
        fill: COLOR.white,
        'fill-opacity': 0.25,
    });
    // neutrino source label
    var label_x = source_left + SOURCE.width / 2;
    var label_y = DETECTOR.height + FONT.large + 2*SCREEN.margin;
    var label = SNAP.text(label_x, label_y, "Source");
    label.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        "text-anchor": "middle"
    });
    // return Object{body, arrow, label}
    return {
        body: body,
        arrow: arrow,
        label: label,
    };
};

///// START BUTTON /////

/**
 * Draw a button and its label
 * 
 * @param {number} x - left edge
 * @param {number} y - top edge
 * @param {number} w - width
 * @param {number} h - height
 * 
 * @returns {Object}    object
 * @returns {Snap.rect} object.button
 * @returns {Snap.text} object.label
*/
var snap_button = function(x, y, w, h, label) {
    // draw a button
    var button = SNAP.rect(x, y, w, h, w/10, w/10);
    // paint a button
    button.attr({
        fill: COLOR.green,
        'fill-opacity': 1.0,
    //    stroke: GREEN,
    //    'strokeWidth': 2,
    //    'stroke-opacity': 1
    });
    // print a label
    var button_label = SNAP.text(x + w/2, y + h/2 + FONT.normal/3, label);
    button_label.attr({fontSize: FONT.normal, 'font-weight': 'bold', fill: COLOR.grey, "text-anchor": "middle"});
    // return Object{button, label}
    return {
        button: button,
        label: button_label,
    };
};

///// ANIMATIONS /////

/** 
 * Animate transparency to 0 and remove
 * 
 * @param {Snap.obj} obj - object to remove 
 * @param {number} time - animation time
 * 
*/
var smooth_remove = function(obj, time=1000) {
    // change transparency
    obj.animate({opacity: 0}, time/SPEED);
    // remove after disappear
    setTimeout(function() {
        label.remove();
    }, time/SPEED);
};

/** 
 * Animate transparency to 1
 * 
 * @param {Snap.obj} obj - object to appear 
 * @param {number} time - animation time
 * 
*/
var smooth_appear = function(obj, time=1000) {
    // change transparency
    obj.animate({opacity: 1}, time/SPEED);
};

/**
 * Make a button disappear
 * 
 * @param {Snap.rect} button - button to remove 
 * @param {number} time - animation time

*/
var button_anim = function(button, time=1000) {
    // animate blur
    Snap.animate(0, 10, function (value) {
        button.attr({filter: SNAP.filter(Snap.filter.blur(value, value)), 'fill-opacity': 1 - 0.1*value});
    }, time/SPEED/2);
    // animate size change
    button.animate({transform: 's1,0.01'}, time/SPEED/4, mina.bounce);
    setTimeout(function() {
        button.animate({transform: 's10,0'}, time/SPEED*3/4, mina.easein);
    }, time/SPEED/4);
    // remove after disappear
    setTimeout(function() {
        button.remove();
    }, time/SPEED);
};

/**
 * Neutrino propagation
 * 
 * @param {Snap.circle} nu - neutrino to move
 * @param {number} x - distance
 * @param {number} time - animation time
 */
var nu_move = function (nu, x, time) {
    // simple transform
    nu.animate({ transform: 't' + String(x) + ',0' }, time, mina.linear);
};


/** 
 * Neutrino appearance 
 * 
 * @param {Snap.circle} nu - neutrino to appear 
 * @param {number} time - animation time

*/
var nu_appear = function(nu, time) {
    // size anim
    nu.animate({r: 1.2*NU.radius}, 0.8*time, mina.bounce);
    setTimeout(function(){
        nu.animate({r: NU.radius}, 0.2*time, mina.bounce);
    }, 0.8*time);
};

/** 
 * Neutrino disappearance 
 * 
 * @param {Snap.circle} nu - neutrino to disappear 
 * @param {number} time - animation time

*/
var nu_disappear = function(nu, time) {
    // size anim
    nu.animate({r: 1.2*NU.radius}, 0.2*time, mina.bounce);
    setTimeout(function() {
        nu.animate({r: 0}, 0.8*time, mina.bounce);
    }, 0.2*time);
};

/**
 * Neutrino oscillation
 * 
 * @param {Snap.circle} nu - neutrino to osciallate 
 * @param {number} time - animation time
*/
var nu_oscillate = function(nu, time) {
    // just change color
    nu.animate({fill: COLOR.red}, time);
};

/**
 * Place detected neutrino in the detector
 * 
 * @param {Snap.circle} nu - detected neutrino
 * @param {number} id - no. of dected neutrinos
 */
var nu_detect = function (nu, id) {
    // new position
    var new_x = 3/2*NU.radius + (id % 4) * 2 * NU.radius;
    var new_y = DETECTOR.height - 2*NU.radius*(1+Math.floor(id / 4));
    // update position
    nu.attr({cx: new_x, cy: new_y});
};

///// NEUTRINO /////

/**
 * Create, propagate, oscillate etc a neutrino
 * 
 * @param {number} index - no. of neutrino
 * 
 * @return {Snap.circle} neutrino
 */
var snap_nu = function(index) {
    // draw a neutrino with radius = 0
    var neutrino = SNAP.circle(5.5*SCREEN.margin + NU.radius, DETECTOR.height/2 + SCREEN.margin, 0);
    neutrino.attr({fill: COLOR.green, filter: SNAP.filter(Snap.filter.blur(1, 1))});

    var wait_time = 50;

    var appearance_time = 250;
    
    var distance = SCREEN.width;
    var travel_time = 2*distance / SPEED;

    // every third is detected
    if (index % 3 == 0) {
        // change distance travelled
        distance += - DETECTOR.width - SCREEN.margin + NU.radius/2;
        // update time so velocity is the same
        travel_time = 2*distance / SPEED;
        // mark to disappear when detected
        setTimeout(function() {nu_disappear(neutrino, appearance_time);}, appearance_time + travel_time + 2*wait_time);
        // mark to move when disappeared
        setTimeout(function() {nu_detect(neutrino, Math.floor(index / 3));}, 2*appearance_time + travel_time + 2*wait_time);
        // mark to appear again in the detector
        setTimeout(function() {nu_appear(neutrino, appearance_time);}, 2*appearance_time + travel_time + 2*wait_time);
    }
    else // mark to remove
    {
        setTimeout(function() {neutrino.remove();}, 2*travel_time);        
    }

    nu_appear(neutrino, appearance_time);

    // move after nu is ready
    setTimeout(function() {nu_move(neutrino, distance, travel_time);}, appearance_time + wait_time);

    // every fourth oscillate (skip first)
    if ((index+1) % 5 == 0) {
        setTimeout(function() {nu_oscillate(neutrino, 2*appearance_time);}, appearance_time + 5*wait_time);
    };

    return neutrino
};

///// ANALYZE DATA /////

/** Draw expected results */
var snap_expected = function() {
    for (i = 0; i < BEAM_SIZE / 3; i++) {
        var x = 3*NU.radius + (i % 4) * 2 * NU.radius;
        var y = DETECTOR.height - 2*NU.radius*(1+Math.floor(i / 4));
        var neutrino = SNAP.circle(x, y, 0);
        neutrino.attr({fill: COLOR.green, filter: SNAP.filter(Snap.filter.blur(1, 1))});
        nu_appear(neutrino, 250);
    }
};

/** Draw expected and data labels */
var snap_labels = function() {
    // labels position
    var x_expected = 5*SCREEN.margin + SOURCE.width / 2;
    var x_data = DETECTOR.x + DETECTOR.width / 2;
    var y = DETECTOR.height + FONT.large + 2*SCREEN.margin;
    // expected label
    var label_expected = SNAP.text(x_expected, y, "Expected");
    label_expected.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        opacity: 0,
        "text-anchor": "middle"
    });
    smooth_appear(label_expected);
    // data label
    var label_data = SNAP.text(x_data, y, "Data");
    label_data.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        opacity: 0,
        "text-anchor": "middle"
    });
    smooth_appear(label_data);
};

/** Draw neutrino disappearance explanation */
var snap_disappearance= function(time=1000) {
    // labels position
    var x = SCREEN.width / 2;
    var y = 2*FONT.large;
    // draw label
    var label = SNAP.text(x + SCREEN.width, y, "Disappearance method: missing greens");
    label.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        "text-anchor": "middle"
    });
    label.animate({transform: 't-' + String(SCREEN.width)}, time/SPEED, mina.bounce);
};

/** Draw neutrino appearance explanation */
var snap_appearance = function(time=1000) {
    // labels position
    var x = SCREEN.width / 2;
    var y = 4*FONT.large;
    // draw label
    var label = SNAP.text(x + SCREEN.width, y, "Appearance method: detected reds");
    label.attr({
        fontSize: FONT.large, 
        fill: COLOR.white, 
        "text-anchor": "middle"
    });
    label.animate({transform: 't-' + String(SCREEN.width)}, time/SPEED, mina.bounce);
};

/** Draw problem */
var snap_problem = function() {
    // labels position
    var x = SCREEN.width / 2;
    var y = 6*FONT.large;
    // draw label
    var label = SNAP.text(x, y, "How to estimate expected?");
    label.attr({
        fontSize: FONT.large, 
        fill: COLOR.red,
        opacity: 0,
        "text-anchor": "middle"
    });
    smooth_appear(label);
};

/**
 * Start second stage of the animation
 */
var analyze_data = function() {
    // create a button
    var analyze = snap_button(
        SCREEN.width/2 - BUTTON.width/2,
        SCREEN.height/2 - BUTTON.height/2,
        BUTTON.width, BUTTON.height,
        "ANALYZE"        
    );
    analyze.button.click(function() {
        // remove garbage
        smooth_remove(detector.detector)
        smooth_remove(nu_source.body);
        smooth_remove(nu_source.arrow);
        smooth_remove(analyze.label);
        // remove button
        button_anim(analyze.button, 1500);
        // move neutrinos
        setTimeout(function() {snap_expected()}, 2000);
        // draw labels
        setTimeout(function() {snap_labels()}, 2500);
        // appearance / disappearance
        setTimeout(function() {snap_disappearance()}, 5000);
        setTimeout(function() {snap_appearance()}, 10000);
        setTimeout(function() {snap_problem()}, 15000);
    });
};

////// MAIN //////

var detector  = snap_detector();  // {detector, label}
var nu_source = snap_nu_source(); // {body, arrow, label}
var start     = snap_button(      // {button, label}
    SCREEN.width/2 - BUTTON.width/2,
    SCREEN.height/2 - BUTTON.height/2,
    BUTTON.width, BUTTON.height,
    "START"
);

start.button.click(function() {
    // remove labels
    smooth_remove(detector.label);
    smooth_remove(nu_source.label);
    smooth_remove(start.label, 500);
    button_anim(start.button, 1500);
    // neutrino beam
    for (i = 0; i < BEAM_SIZE; i++) {
        (function(index) {
            setTimeout(function() {snap_nu(index)}, i*2*SCREEN.width/SPEED);
        })(i);
    };
    // data button after beam done
    setTimeout(function() {
        // run second stage
        analyze_data();
    }, (BEAM_SIZE + 2)*2*SCREEN.width/SPEED);
});