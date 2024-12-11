// Why choose us?
var $whyUs = () => console.log("We shorten your everyday JS functions and add a little spice to your casual work life.");
var $whyNotJquery = () => console.log("JQuery is a semi-outdated framework that does most of the stuff we do. Although it was great in its time, JS can do most of what it does nowadays. Ours just spruces it up.");
// DOM manipulation.
var $ = (id) => document.querySelector(id);
var $all = (id) => document.querySelectorAll(id);
var $id = (id) => document.getElementById(id);
var $class = (cl) => document.getElementsByClassName(cl);
var $tag = (tag) => document.getElementsByTagName(tag);
// Special parameters of DOM elements.
var $style = (id) => document.querySelector(id).style;
var $text = (id) => document.querySelector(id).textContent;
var $html = (id) => document.querySelector(id).innerHTML;
var $for = (id, cb) => document.querySelectorAll(id).forEach(cb);
// Console functions.
var $log = (msg) => console.log(msg);
var $error = (err) => console.error(err);
var $debug = (deb) => console.debug(deb);
var $info = (info) => console.info(info);
var $warn = (warning) => console.warn(warning);
