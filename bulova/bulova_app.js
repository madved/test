var app = b4w.require("app");
var data = b4w.require("data");
var scene = b4w.require("scenes");
var main = b4w.require("main");
var transform = b4w.require("transform");
var quat = b4w.require("quat");

app.init({
    canvas_container_id: "canvas3d",
	physics_enabled: false,
    autoresize: true,
    callback: load_cb
});

function load_cb() {
    data.load("./bulova_watch.json", loaded_cb);
}

function loaded_cb() {
    app.enable_controls();
    app.enable_camera_controls();

	main.append_loop_cb (render);
}

// function render () {
//   var hourHand = scene.get_object_by_name("hour_hand");
//   var d = new Date();
//   var _date = d.getHours();
//   var _angle = _date*15;
//   var _vec4;
// 	var obj_quat = transform.get_rotation(hourHand, _vec4);
//         quat.rotateX(obj_quat, _angle, obj_quat);
//         transform.set_rotation_euler(hourHand, _angle, 0, 0);
// console.log(_angle);
// }

function render () {
  var minuteHand = scene.get_object_by_name("minute_hand");
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var _angle = (seconds + 1) / 10;
  var _vec4;
  var obj_quat = transform.set_rotation_euler(minuteHand, -_angle, 0, 0);
  console.log(seconds);
}
  // for (i = 0; i < 60; i + _sec) {
  //   var obj_quat = transform.set_rotation_euler(minuteHand, i, 0, 0);
  // }
// console.log(_angle);

// function render () {
//   var hourHand = scene.get_object_by_name("hour_hand");
//   var _angle = 20;
//   var _vec4;
// 	var obj_quat = transform.get_rotation(hourHand, _vec4);
//         quat.rotateX(obj_quat, _angle, obj_quat);
//         transform.set_rotation_euler(hourHand, -_angle, 0, 0);
// }

// function render () {
// 	var hourHand = scene.get_object_by_name("hour_hand");
// 	var _angle = -0.1;
// 	var _vec4;
// 	var obj_quat = transform.get_rotation(hourHand, _vec4);
//         quat.rotateX(obj_quat, _angle, obj_quat);
//         transform.set_rotation_v(hourHand, obj_quat);
// }
