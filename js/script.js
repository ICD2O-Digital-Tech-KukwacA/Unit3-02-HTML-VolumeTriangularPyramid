// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of a triangular pyramid.
 */
function calculate () {
  // input
    let baseA = parseFloat(document.getElementById('baseA').value);
    let baseB = parseFloat(document.getElementById('baseB').value);
    let height = parseFloat(document.getElementById('height').value);
    
  // process
    let volume = (1/3) * baseA * baseB * height;

  // output
    document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³' + "."
}
