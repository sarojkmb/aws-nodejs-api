'use strict';
module.exports = function(app) {
  var todoListController = require('../controllers/todoListController');
  var awsS3Controller = require('../controllers/awsS3Controller');


  // todoList Routes
  app.route('/tasks')
    .get(todoListController.list_all_tasks)
    .post(todoListController.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoListController.read_a_task)
    .put(todoListController.update_a_task)
    .delete(todoListController.delete_a_task);

  // aws Routes
  app.route('/s3createfile')
    .get(awsS3Controller.writefile);
};