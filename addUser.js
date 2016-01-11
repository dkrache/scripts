setTimeout(function(){
	if($('#emailAddress-invitee-invitation').length>0){
		alert("ok");
		window.close();
	} else {
		$('#selector-IE-reason-iweReconnect').click()
	}
},Math.random()*2000+2000);

setTimeout(function(){
	$('#existingEducation-other-IE-reason-iweReconnect').val($('#existingEducation-other-IE-reason-iweReconnect option')[1].value)
},Math.random()*2000+4000);

setTimeout(function(){
	$('#send-invite-button').click();
},Math.random()*2000+6000);