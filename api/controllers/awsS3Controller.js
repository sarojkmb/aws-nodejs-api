'use strict';


var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

exports.writefile = function(req, res) {

    // Create a bucket and upload something into it
    var bucketName = 'node-sdk-sample-' + uuid.v4();
    var keyName = 'hello_world.txt';

    s3.createBucket({Bucket: bucketName}, function() {
    var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    s3.putObject(params, function(err, data) {
        if (err)
        console.log(err)
        else {
            var successMessage = "Successfully uploaded data to "+ bucketName + "/" + keyName;
            console.log(successMessage); 
            res.json(successMessage); 
        }
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        res.json(task);
    });
    });
};