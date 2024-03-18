$(document).ready(function () {
  // Sample data
  var tasks = [
    { id: 1, title: "Task 1", complete: false },
    { id: 2, title: "Task 2", complete: true },
    { id: 3, title: "Task 3", complete: false },
  ];

  // Get the template from the script tag
  var templateScript = $("#task-template").html();

  // Compile the template function
  var template = Handlebars.compile(templateScript);

  // Render the template with the tasks data
  var renderedTasks = template({ tasks: tasks });

  // Insert the rendered template into the container
  $("#task-container").html(renderedTasks);

  // Add event listener for completing tasks
  $(".complete-checkbox").change(function () {
    var taskId = $(this).data("task-id");
    var taskElement = $("#task-" + taskId);

    // Toggle the 'complete' class based on checkbox state
    taskElement.toggleClass("complete", $(this).prop("checked"));
  });
});
