$(document).ready(function(){

	// Search box animation
	$('.srchCta').click(function(e){
		$('.search').addClass('expand');
		e.stopPropagation();
		return false;
	})
	$('.srcTxt').click(function(e){
		e.stopPropagation();
		return false;
	})
	// If search box is empty and users clicks outside of search, search box will close else stay open
	$(document).click(function(e){
		if($('.srcTxt').val() == ""){
			$('.search').removeClass('expand');
		}
	})

	// Placeholders animation
	$('.genTxt').focus(function(){
		$(this).parent('.lblWrap').addClass('focused')
	})
	$('.genTxt').focusout(function(){
		checkTxt()
	})
	function checkTxt(){
		$('.genTxt').each(function(i){
			if($(this).val() == ""){
				 $(this).parent('.lblWrap').removeClass('focused')
			}
			else {
				$(this).parent('.lblWrap').addClass('focused')
			}
		})
	}
	checkTxt();

	// Hides error if any key is pressed for typing again except for enter key
	$('.genTxt').keyup(function(e){
		var code = e.which;
		if(code!==13){
			$('#errorlbl').hide();
			$(this).parent().removeClass('error');
		}
	})

	$('#closePop').click(function(){
		$('#loginBox').hide();
		$('.genTxt').val("");
		checkTxt();
	})

	// Login Ajax function
	$("#myForm").submit(function(e) {
		e.preventDefault();
		$(".lblWrap").removeClass("error");
	    var empty = 0;
	    $('.genTxt').each(function(){
	        if (this.value == "") {
	        	empty++;
	        	$(this).parent().addClass("error");
	        }
	    })
		
	    if(empty == 0){
	    	$.ajax({
	            url: 'login/creds?user='+encodeURIComponent($("#usrname").val())+'&pass='+encodeURIComponent($("#usrpass").val()),
	            success:function(data){
	                if(data == "authenticated")
	                {
	                    $('#loginBox').show()
	                }
	                else if (data == "!user")
	                {
	                	$('#errorlbl').show();
	                }
	            }
	        });
	    }
    });
});