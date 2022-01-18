<?php
$replace = new Func("replace", function() use (&$stripped, &$input, &$output) {
  $stripped = call_method(get($input, "innerText"), "replace", new RegExp("[\\u0591-\\u05C7]", "g"), "");
  set($output, "innerText", $stripped);
  call_method($input, "focus");
});
$transliterate = new Func("transliterate", function() use (&$stripped, &$input, &$output) {
  $stripped = call_method(get($input, "innerText"), "replace", new RegExp("q", "g"), "/");
  $stripped = call_method($stripped, "replace", new RegExp("w", "g"), "\xD7\xB3");
  $stripped = call_method($stripped, "replace", new RegExp("e", "g"), "\xD7\xA7");
  $stripped = call_method($stripped, "replace", new RegExp("r", "g"), "\xD7\xA8");
  $stripped = call_method($stripped, "replace", new RegExp("t", "g"), "\xD7\x90");
  $stripped = call_method($stripped, "replace", new RegExp("y", "g"), "\xD7\x98");
  $stripped = call_method($stripped, "replace", new RegExp("u", "g"), "\xD7\x95");
  $stripped = call_method($stripped, "replace", new RegExp("i", "g"), "\xD7\x9F");
  $stripped = call_method($stripped, "replace", new RegExp("o", "g"), "\xD7\x9D");
  $stripped = call_method($stripped, "replace", new RegExp("p", "g"), "\xD7\xA4");
  $stripped = call_method($stripped, "replace", new RegExp("a", "g"), "\xD7\xA9");
  $stripped = call_method($stripped, "replace", new RegExp("s", "g"), "\xD7\x93");
  $stripped = call_method($stripped, "replace", new RegExp("d", "g"), "\xD7\x92");
  $stripped = call_method($stripped, "replace", new RegExp("f", "g"), "\xD7\x9B");
  $stripped = call_method($stripped, "replace", new RegExp("g", "g"), "\xD7\xA2");
  $stripped = call_method($stripped, "replace", new RegExp("h", "g"), "\xD7\x99");
  $stripped = call_method($stripped, "replace", new RegExp("j", "g"), "\xD7\x97");
  $stripped = call_method($stripped, "replace", new RegExp("k", "g"), "\xD7\x9C");
  $stripped = call_method($stripped, "replace", new RegExp("l", "g"), "\xD7\x9A");
  $stripped = call_method($stripped, "replace", new RegExp(";", "g"), "\xD7\xA3");
  $stripped = call_method($stripped, "replace", new RegExp("\\'", "g"), ",");
  $stripped = call_method($stripped, "replace", new RegExp("z", "g"), "\xD7\x96");
  $stripped = call_method($stripped, "replace", new RegExp("x", "g"), "\xD7\xA1");
  $stripped = call_method($stripped, "replace", new RegExp("c", "g"), "\xD7\x91");
  $stripped = call_method($stripped, "replace", new RegExp("v", "g"), "\xD7\x94");
  $stripped = call_method($stripped, "replace", new RegExp("b", "g"), "\xD7\xA0");
  $stripped = call_method($stripped, "replace", new RegExp("n", "g"), "\xD7\x9E");
  $stripped = call_method($stripped, "replace", new RegExp("m", "g"), "\xD7\xA6");
  $stripped = call_method($stripped, "replace", new RegExp(",", "g"), "\xD7\xAA");
  $stripped = call_method($stripped, "replace", new RegExp("\\.", "g"), "\xD7\xA5");
  $stripped = call_method($stripped, "replace", new RegExp("/", "g"), ".");
  set($output, "innerText", $stripped);
  call_method($input, "focus");
});
$input = call_method($document, "getElementById", "input"); $output = call_method($document, "getElementById", "output");
call_method($input, "focus");