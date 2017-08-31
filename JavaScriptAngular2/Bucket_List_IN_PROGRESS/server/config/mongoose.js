var mongoose = require('mongoose');

var fs = require('fs');

var path = require('path');

var models_path = path.join(__dirname, './../models');

// CHANGE DB NAME EVERY TIME YOU START A NEW PROJECT!

mongoose.connect('mongodb://localhost/Bucket_List');

fs.readdirSync(models_path).forEach(function(file) {

  if(file.indexOf('.js') >= 0) {

    require(models_path + '/' + file);

  }

});
