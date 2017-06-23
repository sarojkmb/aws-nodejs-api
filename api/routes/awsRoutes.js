'use strict';
module.exports = function(app) {
  var awsS3 = require('../controllers/awsS3Controller');


  // aws Routes
  app.route('/s3createfile')
    .get(awsS3.writefile);
};