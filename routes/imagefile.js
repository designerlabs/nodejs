var _ = require('lodash');
var Image = require('../model/image.js');
var express = require('express');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './uploads' });

module.exports = function(app){

    app.getImages = function(callback, limit) {
        Image.find(callback).limit(limit);
    }

    app.getImageById = function(id, callback) {
       Image.findById(id, callback);
    }

    app.addImage = function(image, callback) {
        Image.create(image, callback);
    }

    

    // To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
        cb(null, 'uploads/')
        },
        filename: function(req, file, cb) {
        cb(null, file.originalname);
        }
    });

    var upload = multer({
        storage: storage
    });

 
   

        
};