'use strict';

var util = require('util');

module.exports = {
  noParams: noParams,
  one_parameter: one_parameter,
  five_parameters: five_parameters,
  ten_parameters: ten_parameters
};

function noParams(req, res){
  res.json("No Parameters given")
}

function one_parameter(req, res){
  var param1 = req.swagger.params.param1.value
  res.send(JSON.stringify({param1: param1}))
}

function five_parameters(req, res){
  var retval = {}
  retval.param1 = req.swagger.params.param1.value
  retval.param2 = req.swagger.params.param2.value
  retval.param3 = req.swagger.params.param3.value
  retval.param4 = req.swagger.params.param4.value
  retval.param5 = req.swagger.params.param5.value
  res.send(JSON.stringify(retval))
}

function ten_parameters(req, res){
  var retval = {}
  retval.param1 = req.swagger.params.param1.value
  retval.param2 = req.swagger.params.param2.value
  retval.param3 = req.swagger.params.param3.value
  retval.param4 = req.swagger.params.param4.value
  retval.param5 = req.swagger.params.param5.value
  retval.param6 = req.swagger.params.param6.value
  retval.param7 = req.swagger.params.param7.value
  retval.param8 = req.swagger.params.param8.value
  retval.param9 = req.swagger.params.param9.value
  retval.param10 = req.swagger.params.param10.value
  res.send(JSON.stringify(retval))
}