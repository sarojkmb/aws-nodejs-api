'use strict';

var s3Service = require('../services/s3Service');


exports.writefile = function(req, res) {
    //s3Service.writeFileInBucketService(req, res);
    s3Service.writeFileInBucketService(req, res);
};