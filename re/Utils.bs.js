// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Format = require("date-fns/format");

function formatDate(isoDateString) {
  return Format(new Date(isoDateString), "dddd, MMMM D, YYYY");
}

exports.formatDate = formatDate;
/* date-fns/format Not a pure module */
