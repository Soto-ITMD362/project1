// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
  var w = document.forms["beautybakerie"]["name"].value;
  var x = document.forms["beautybakerie"]["mail"].value;
  var y = document.forms["beautybakerie"]["phone"].value;
  var z = document.forms["beautybakerie"]["birthday"].value;
  if ((w == "")||(x == "")||(y == "")||(z == "")){
    alert("Please fill in the missing entries");
	}
  else {
  	alert("Thank you for joining the Bakerie! See you soon with details in your inbox!")
  }
}