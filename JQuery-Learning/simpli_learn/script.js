

$(document).ready(function () {



    $(".add_button").click(function () {
        const task = $("#taskField").val();
        const taskAdded = $("<li></li>").text(task);
        $(".todo_field").append(taskAdded);
        $("li").draggable()
        // console.log(taskAdded);
    })


    $(".hide_p_tag").click(function () {
        $("p").toggleClick()
    });


    // PRACTICING SELECTORS

    // ("*") -> this will select the full window 
    /*  $(".clear").click(function(){
         $("*").css("color","red")
     }) */


    // (this)-> this will select the present item  
    $(".this").mouseover(function () {
        $(this).css("color", "blue")
    })

    // 
    $(".changeColor").click(function () {
        $("p.intro").hide("slow", function () {
            alert("Hide the intro para")
        })
    });


    $("#clearFirstP").click(function () {
        const firstP = $("p:first").hide()
        console.log(firstP)
    });


    /*   $(".selectFirstLi").click(function () {
          $("ul li:first").fadeOut(500)
      }); */

    $(".selectFirstLi").click(function () {
        $("ul li:first-child").fadeOut(500)
    });



    $(".coffee").dblclick(function () {
        alert("mouse down event called")
    })


    $("#start").click(function () {
        $(".box").animate({ left: "250px" });
        //   alert("mouse click event called");
    });


    $(".btn").click(function () {
        $("h3").addClass("heading")
    })





})