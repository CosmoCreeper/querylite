// Why choose us?
const $whyUs = () => console.log("We shorten your everyday JS functions and add a little spice to your casual work life.");
const $whyNotJquery = () => console.log("JQuery is a semi-outdated framework that does most of the stuff we do. Although it was great in its time, JS can do most of what it does nowadays. Ours just spruces it up.");
// DOM manipulation.
const $ = (id) => document.querySelector(id);
const $all = (id) => document.querySelectorAll(id);
const $id = (id) => document.getElementById(id);
const $class = (cl) => document.getElementsByClassName(cl);
const $tag = (tag) => document.getElementsByTagName(tag);
// Special parameters of DOM elements.
const $style = (id) => document.querySelector(id).style;
const $text = (id) => document.querySelector(id).textContent;
const $html = (id) => document.querySelector(id).innerHTML;
const $for = (id, cb) => document.querySelectorAll(id).forEach(cb);
// Console functions.
const $log = (msg) => console.log(msg);
const $error = (err) => console.error(err);
const $debug = (deb) => console.debug(deb);
const $info = (info) => console.info(info);
const $warn = (warning) => console.warn(warning);

module.exports = { $whyUs, $whyNotJquery, $, $all, $id, $class, $tag, $style, $text, $htmtl, $for, $log, $error, $debug, $info, $warn };
