//make full changes in script, bad validate
//function
$(function() {
  //added new mathod to validate function
  $.validator.addMethod('IP4Checker', function(value) {
    var split = value.split('.');
      if (split.length != 4) 
        return false;
            
      for (var i=0; i<split.length; i++) {
        var s = split[i];
          if (s.length==0 || isNaN(s) || s<0 || s>255)
            return false;
      }
    return true;
}, 'Invalid IP Address');
  //added new method for check date
  $.validator.addMethod('DateChecker', function(value){
    var date = "^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$";
      return value.match(date);
  }, 'Invalid Date');
    
    // validation to form n html
    $("#register-form").validate({
    
        // rules for every input
        rules: {
          //name
            name: {
              required: true,
              minlength: 5,
              maxlength: 30
            },
          //email
            email: {
              required: true,
              email: true
            },
          //date
            date:{
              required: true,
              DateChecker: true
            },
          //io
            ip: {
              required: true,
              IP4Checker: true
            },
            agree: "required"
        },
        
        // error massages for every input
        messages: {
            name: {
              required: "Please enter your first name",
              minlength: "The number must be more than 5 symbols",
              maxlength: "The number must be less than 30 symbols"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });
  
