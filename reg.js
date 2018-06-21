$(document).ready(function() {
                                    
    $('#show').click(function() {
      
   var first_name=$("#firstname").val();
    var last_name=$("#lastname").val();
   var email=$("#email").val();
   var txtPhone=$("#txtPhone").val();


   //Get data of selected item from drop down
   var country=$(".selectpicker1 option:selected").val();
   var state=$(".selectpicker2 option:selected").val();
   var city=$(".selectpicker3 option:selected").val();

   //multiple select option
   var experiences=[];
   $.each($(".companies option:selected"), function(){
       experiences.push($(this).val());
   });

   //Radiio Button
   var radioValue = $("input[name='optradio']:checked").val();

   //checkbox
   var hobbies = [];
   $.each($("input[name='hobby']:checked"), function(){
       hobbies.push($(this).val());
   });

   //textarea
   var textAreaData=$("#textarea").val();

   //The output element
   var stu_no=$("#stu_no").val();

   //languAGE
   var language = $("#languages option[value='" + $('#lan').val() + "']").attr('data-id');
   
   var address=$("#address").val();
   var password=$("#password").val();
   if(radioValue ==null){
       alert("Please selece gender");
   }else{
       alert("Name: "+first_name+" "+last_name+"\n"+
   "Email: "+email+"\n"+
   "Mob.: "+txtPhone+"\n"+
   "Gender: "+radioValue+"\n"+
   "Hobbies: "+hobbies.join(", ")+"\n"+
   "Address: "+address+"\n"+
   "Password: "+password+"\n"+
   "Country: "+country+"\n"+
   "State: "+state+"\n"+
   "City: "+city+"\n"+
   "Experiences: "+experiences.join(", ")+"\n"+
   "Message: "+textAreaData+"\n"+
   "No.Of Students: "+stu_no+"\n"+
   "Languages: "+language
       );
   }
   
    $("#showdata").text=first_name+" "+last_name;






    });

    //Set data on DROP DOWN LIST;
    var countryJSON="https://raw.githubusercontent.com/im-gautam/myGreenApp/master/country.json";
    $.getJSON(countryJSON, function (json) {

     $.each(json.country, function (index, value) {
    var country_id;
    var state_id;
    var city_id;
    //alert(JSON.stringify(json));
    $("#country").append('<option rel="' + index + '" value="'+value.id+'">'+value.name+'</option>');
    
    $("#country").change(function () {
    $("#state, #city").find("option:gt(0)").remove();
    $("#state").find("option:first").text("Choose State");

     country_id = $(this).find('option:selected').attr('rel');
    console.log("Country INDEX : " + country_id);
        
     $.each(json.country[country_id].states, function (index1, value1) {
         $("#state").find("option:first").text("Choose State");
        $("#state").append('<option rel="' + index1 + '" value="'+value1.id+'">'+value1.name+'</option>');
    });

});


$("#state").change(function () {
    $("#city").find("option:gt(0)").remove();
    $("#city").find("option:first").text("Choose City");

    state_id = $(this).find('option:selected').attr('rel');
    console.log("State INDEX : " + state_id);

    $.each(json.country[country_id].states[state_id].cities, function (index2, value2) {
        $("#city").find("option:first").text("Choose City");
        $("#city").append('<option rel="' + index2 + '" value="'+value2.id+'">'+value2.name+'</option>');
    });


});     
});
});

//set the form data

$('#setData').click(function(){
    alert("Hi.. Set data");
    $("#firstname").val("Imgautam");
    $("#lastname").val("imstar");
    $("#txtPhone").val("9627358081");
    $("#email").val("gautam.thapa22@gmail.com");
    $("#address").val("Delhi");
    $("#optradio").attr("checked", true);
    $("#foot").attr("checked", true);
    $("#chess").attr("checked", true);
    $("#sing").attr("checked", true);

    $("#password").val("123456789");
    $("#confirm_password").val("123456789");
    
    $("#textarea").val("This is the best opportunity.");
    $("#stu_no").val(10);
    $("#lan").val("Hindi");
    
});
  
  
  
  //some validation
  //minimum 8 characters
var bad = /(?=.{8,}).*/;
//Alpha Numeric plus minimum 8
var good = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number OR one special char).
var better = /^(?=\S*?[A-Z])(?=\S*?[a-z])((?=\S*?[0-9])|(?=\S*?[^\w\*]))\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number AND one special char).
var best = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;

$('#password').on('keyup', function () {
    var password = $(this);
    var pass = password.val();
    var passLabel = $('[for="password"]');
    var stength = 'Weak';
    var pclass = 'danger';
    if (best.test(pass) == true) {
        stength = 'Very Strong';
        pclass = 'success';
    } else if (better.test(pass) == true) {
        stength = 'Strong';
        pclass = 'warning';
    } else if (good.test(pass) == true) {
        stength = 'Almost Strong';
        pclass = 'warning';
    } else if (bad.test(pass) == true) {
        stength = 'Weak';
    } else {
        stength = 'Very Weak';
    }

    var popover = password.attr('data-content', stength).data('bs.popover');
    popover.setContent();
    popover.$tip.addClass(popover.options.placement).removeClass('danger success info warning primary').addClass(pclass);

});

$('input[data-toggle="popover"]').popover({
    placement: 'top',
    trigger: 'focus'
});
  
  
  //validate mobile number
   $('#txtPhone').blur(function() {
        if (validatePhone('txtPhone')) {
            $('#spnPhoneStatus').html('Valid');
            $('#spnPhoneStatus').css('color', 'green');
        }
        else {
            $('#spnPhoneStatus').html('Invalid');
            $('#spnPhoneStatus').css('color', 'red');
        }
    });
  
  
  
  //validation name
  $('#name').keyup(function() {
        
	var name_len1=3;
	var name_len2=15;
	
	var fname=$('#name').val();
	var num=/[0-9]/; 
    var schar=/[@~!#$%^&*()+?><.,.|\;':"`]/;
    
if(fname.length < name_len1 || fname.length > name_len2){
		$('#span').html('First name must be between 2 to 15 charachter');
       	    	$('#span').css('color', 'red');
	}else if(num.test(fname) == true){
		$('#span').html('Name must be alphanumeric!');
       	    	$('#span').css('color', 'red');
	}
    else if(schar.test(fname) == true)
    {
		$('#span').html('Not contain special character except -_');
       	    	$('#span').css('color', 'red');
	}else{
    	$('#span').html('');
       	 $('#span').css('color', 'red');
	
    }
    
       });
  
  
});


//javascript function to validate number
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
