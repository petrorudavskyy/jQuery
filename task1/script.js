$('form').attr('onsubmit', 'return validate()');
//add atributes to inputs
$('[name="name"]').attr('placeholder','Enter Name');
$('[name="email"]').attr('placeholder','Enter email');
$('[name="date"]').attr('placeholder','DD/MM/YYYY');
$('[name="ip"]').attr('placeholder','IP in format 0.0.0.0');

// $.validator.addMethod('IP4Checker', function(value) {
//             var ip = "^(?:(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)\.){3}" +
//                 "(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)$";
//                 return value.match(ip);
//             }, 'Invalid IP address');

// $(function() {
//             $.validator.addMethod('IP4Checker', function(value) {
//             var ip = "^(?:(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)\.){3}" +
//                 "(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)$";
//                 return value.match(ip);
//             }, 'Invalid IP address');

//            $("#signupForm").validate({
// 		rules: {
// 			firsname:{
// 				required: true,
// 				minlength: 5,
// 				maxlength: 30
// 			},
// 			email: {
// 				required: true,
// 				email: true
// 			},
// 			date: {
// 				required: true,
// 				date: true
// 			},
// 			ip: {
// 				required: true,
// 				IP4Checker: true
// 			}
// 		}
// 	})

// });
// function for check ip adress
 $.validator.addMethod('IP4Checker', function(value) {
 		//patterns
    var ip = "^(?:(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)\.){3}" +
    "(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)$";
    return value.match(ip);
    }, 
    'Invalid IP address');

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
 $("#signupForm").validate({
    //rules for sign up form
		rules: {
      //user form
			user:{
				required: true,
				rangelength: [5 , 30]
			},
      //email form
			email: {
				required: true,
				email: true
			},
      //data form
			data: {
				required: true,
				date: true
			},
      // ip adress form
			ip: {
				required: true,
				IP4Checker: true
			}
		},
    // make message for forms
		messages: {
      //for user
      user: {
        //required ->
      	required: "Please enter right name",
        //if not correct ->
    		rangelength: "Your password must be at least 5 characters long"
    		},
      // if not correct email ->
      email: "Please enter a valid email address",
      // if not correct data ->
    	data: "Please enter your data",
      // if not correct ip adress ->
      ip:  "Please provide a right ip", 			
    },
      //submit form
    	submitHandler: function(form) {
      form.submit();
    }
	});

