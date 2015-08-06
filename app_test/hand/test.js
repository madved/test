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
  var hourHand   = scene.get_object_by_name("hour_hand");
  var minuteHand = scene.get_object_by_name("minute_hand");
	var secondHand = scene.get_object_by_name("second_hand");

  var hours    = (15 / 6 * now.getHours()) * (Math.PI / 15); // now.getHours()
  var minutes  = (6 * now.getMinutes()) * (Math.PI / 180);
	var seconds  = (6 * now.getSeconds()) * (Math.PI / 180);
  var milisec  = (6 * now.getMilliseconds()) * (Math.PI / 180);
  var hourAngle   = (hours * 1) + (minutes / 60 * 5) + (seconds / 60 / 60 * 5);
  var minuteAngle = (minutes * 1) + (seconds / 60) + (milisec / 60000);
  var secondAngle = (seconds * 1) + (milisec / 1000);
    transform.set_rotation_euler(hourHand, 0, 0, hourAngle);
    transform.set_rotation_euler(minuteHand, 0, 0, minuteAngle);
    transform.set_rotation_euler(secondHand, 0, 0, secondAngle);

console.log(hours);
}
