console.log("loaded");

$(document).ready(function () {
  $.get("./transcript.json", function (data, status) {
    alert("Data: " + data + "\nStatus: " + status);
    //  console.log("data => ", data)
    $.each(data, (index, value) => {
      show_course_details(value.grade_sheet);
      show_exam_information(value.examInformation);
      show_student_information(value.studentInformation);
      show_grade_sheet(value.grade_sheet);
      show_result_summery(value.grade_sheet);
      show_authorization(value.authorization);
      console.log("each method", data);
    });
  });

  function show_course_details(course_data) {
    let targetContainer = $("#course_details");
    let course_data_template;
    $.each(course_data.courses, (index, value) => {
      course_data_template = `
            <tr>
                <td>${value.course_code}</td>
                <td>${value.course_title}</td>
                <td>${value.marks}</td>
                <td>${value.credits}</td>
            </tr>
            `;
      targetContainer.append(course_data_template);
    });
  }

  function show_exam_information({ exam_information }) {
    console.log("show_exam_information", exam_information);
    let targetContainer = $("#exam_information_container");
    let exam_information_template;

    console.log("show_exam_information------", exam_information);
    $.each(exam_information, (index, value) => {
      console.log("value_information", value);
      exam_information_template = `
           <div class="d-flex flex-column  justify-content-center">
                <img class="h-25 w-25 mx-auto mt-5" src=${"./assets/cu_logo.png"} alt="">
                <h2 class="text-center mt-4 mb-2">${
                  value.university
                }</h2>  <h5 class="text-center mb-2">${value.location}</h5>
                <h4 class="text-center mb-2">${value.document_type}</h4>
                <h5 class="text-center mb-2">${value.exam_name}</h5>
                <h6 class="text-center mb-2">${value.exam_period}</h6>
                <h5 class="text-center mb-2">Subject: ${value.subject}</h5>
              
            </div>
            `;
      targetContainer.append(exam_information_template);
    });
  }

  function show_student_information({ student_info }) {
    let targetContainer = $("#student_info_container");
    $.each(student_info, function (key, value) {
      console.log({ value });
      let student_information_template = `
        <div>
            <span class="">
                <p class="fw-semibold d-inline">Name : </p>
                <p class="d-inline">${value.student_name}</p>
            </span>
            <br>
            <span class="">
                <p class="fw-semibold d-inline">ID :</p>
                <p class="d-inline">${value.student_id}</p>
            </span>
        </div>
        <div>
            <span class="">
                <p class="fw-semibold d-inline">Hall :</p>
                <p class="d-inline">${value.hall}</p>
            </span>
        </div>`;
      targetContainer.append(student_information_template);
    });
  }

  function show_grade_sheet({ courses }) {
    let targetContainer = $("#grade_sheet_container");
    $.each(courses, function (key, value) {
      console.log({ grade_sheets: value });
      let grade_sheet_template = `
                 <tr>
                    <td>${value.course_code}</td>
                    <td>${value.credits}</td>
                    <td>${value.marks}</td>
                    <td>${value.letter_grade}</td>
                    <td>${value.grade_point}</td>

                </tr>`;

      targetContainer.append(grade_sheet_template);
    });
  }

  function show_result_summery({
    total_credits_taken,
    total_credits_earned,
    gpa,
    result,
    total_points_secured,
  }) {
    let result_summery_container = $("#result_summery");
    result_summery_container.append(`  
                    <td>Total Credits Taken: ${total_credits_taken}</td>
                    <td>Total Credits Earned: ${total_credits_earned}</td>
                    <td>Total Points Secured: ${total_points_secured}</td>
                    <td>GPA: ${gpa}</td>
                    <td>Result: ${result}</td>
                    `);
  }

  function show_authorization({
    date_of_publication,
    date_of_issue,
    prepared_by,
    compared_by,
    signature,
  }) {
    console.log(
      "show_authorization => ",
      date_of_publication,
      date_of_issue,
      prepared_by,
      compared_by,
      signature
    );
    let authorization_container = $("#authorization_container");
    authorization_container.append(`
   <span>
            <p>Date of Publication : <span class="text-decoration-underline fw-semibold">${date_of_publication}</span></p>
            <p>Date of Issue :<span class="text-decoration-underline fw-semibold">${date_of_issue}</span></p>
        </span>

        <span>
            <p>Prepared by <span class="text-decoration-underline fw-semibold">${prepared_by}</span></p>
            <p>Compared by <span class="text-decoration-underline fw-semibold">${compared_by}</span></p>
        </span>
        <span>
            <small><span class="text-decoration-underline fw-semibold">${signature}</span></small>
            <p>Controller of Examinations</p>
            <p>University of Chittagong</p>
        </span>
  `);
  }
});
