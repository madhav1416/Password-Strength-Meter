//var pass=document.getElementById("password");
$(document).ready(function() {
    $("#password").keyup(function(){
         strengthChecker($(this).val());

      });
});

function strengthChecker(password) {
    var percentage = [{'width':'0px'}, {'width':'20%'}, {'width':'40%'}, {'width':'60%'}, {'width':'80%'}, {'width':'100%'}];
	
    var color = ['', 'bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];

    var text= ['not acceptable', 'very weak' , 'weak' , 'standard' , 'strong' , 'very strong' ];

	var strength = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 6) strength++;

	//if password has both lower and uppercase characters give 1 point	
	if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) strength++;

	//if password has at least one number give 1 point
	if (password.match(/d+/)) strength++;

	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	strength++;

	//if password bigger than 8 give another 1 point
	if (password.length > 8) strength++;
	
	// display indicator
    $("#2strength").removeClass(color[strength-1]).addClass(color[strength]).css(percentage[strength]);
    $("#2strength").textContent= text[strength];
}