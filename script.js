
var load = 0;
document.getElementById('gform').onload = function () {
      load++;
      if (load > 1) {
          document.location = "thankyoupage.html";
      }
  }

// document.querySelector(".btn").addEventListener("submit", function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     window.location.href = "success.html";
//   });

// function test(){
//     window.location.href = "success.html";
//   }
// function myFunction(){
//   alert("success");
//   window.location = "success.html";
//   return true;
// }

// function validateFields(){
//   if(/*validation fails*/){
//     alert("validation failed");
//     return false;
//   }
//   else{
//     alert("validation success");
//     return true;
//   }

// }

// var submitted = false;
// function myRedirect(){
//   if(submitted){
//     window.location = "www.youtube.com";
//   }
// }

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   window.location = "thankyoupage.html";
// });

// document.querySelector(".todo-form-1").addEventListener("submit", function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   });