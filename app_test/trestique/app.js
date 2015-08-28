"use strict";

b4w.register("example_main", function(exports, require) {

var m_anim   = require("animation");
var m_app    = require("app");
var m_data   = require("data");
var m_scenes = require("scenes");
var m_nla    = require("nla");

var _previous_selected_obj = null;


exports.init = function() {
    m_app.init({
        canvas_container_id: "canvas3d",
        callback: init_cb,
        physics_enabled: false,
        alpha: false,
        autoresize: true
    });
}

function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    m_app.enable_controls();
    canvas_elem.addEventListener("mousedown", main_canvas_click, false);
    load();
}

function load() {
    m_data.load("trestique.json", load_cb);
}

function load_cb(data_id) {
    m_app.enable_camera_controls();
}

function main_canvas_click(e) {
    if (e.preventDefault)
        e.preventDefault();

    var x = e.clientX;
    var y = e.clientY;

    var armature = m_scenes.get_object_by_name("Armature");

    var obj = m_scenes.pick_object(x, y);

    if (obj) {
        if (_previous_selected_obj) {
          m_nla.stop();
          // m_anim.stop(_previous_selected_obj);
          m_nla.play();
          // m_nla.set_range(0, 149)
        }
        _previous_selected_obj = obj;
        m_nla.play();
        // m_nla.set_range(0, 149);
        // m_anim.apply_def(obj);
        // m_anim.play(obj);
    }
}

});

b4w.require("example_main").init();

















// var app = b4w.require("app");
// var data = b4w.require("data");
// var scene = b4w.require("scenes");
// var main = b4w.require("main");
// var transform = b4w.require("transform");
// var quat = b4w.require("quat");
// var anim = b4w.require("animation");
// var nla = b4w.require("nla");
//
// app.init({
//     canvas_container_id: "container_id",
//     physics_enabled: false,
//     autoresize: true,
//     callback: load_cb
// });
//
// function load_cb() {
//     data.load("./trestique.json", loaded_cb);
// }
//
// function loaded_cb() {
//     app.enable_controls();
//     app.enable_camera_controls();
//     nla.play();
// 	main.append_loop_cb (render);
// }
// function render () {}
