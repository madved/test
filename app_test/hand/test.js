"use strict"

var app = b4w.require("app");
var data = b4w.require("data");
var scene = b4w.require("scenes");
var main = b4w.require("main");
var transform = b4w.require("transform");
var quat = b4w.require("quat");
// var now = new Date();

app.init({
    canvas_container_id: "container_id",
	physics_enabled: false,
    autoresize: true,
    callback: load_cb
});

function load_cb() {
    data.load("test.json", loaded_cb);
}

function loaded_cb() {
    app.enable_controls();
    app.enable_camera_controls();

	main.append_loop_cb (render);
}

function render () {
  var now = new Date();
	var secondHand = scene.get_object_by_name("second_hand");
  var minutes = (6 * now.getMinutes()) * (Math.PI / 180);
	var sec = (6 * now.getSeconds()) * (Math.PI / 180);
  var milisec =(6 * now.getMilliseconds()) * (Math.PI / 180);
  var secondAngle = (sec * -1) + (milisec / -1000);
  var minuteAngle = (minutes * -1) + (milisec / -60000);
    transform.set_rotation_euler(secondHand, 0, 0, secondAngle)
console.log();
}
