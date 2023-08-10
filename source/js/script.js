 // Functions for select elems with id & class
 var $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }
 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems
 var togglePassword = _class("toggle-password");
 var passwordField = _id("password-field");
 console.log(togglePassword)
 console.log(passwordField)

 // Fire click event on eye icon
 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.setAttribute('type','password')
     togglePassword[0].classList.remove("active");
   } else {
    passwordField.setAttribute('type','text')
    togglePassword[0].classList.add("active");
   }
   console.log('g');
 })