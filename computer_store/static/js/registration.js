$(document).ready(function(){
	$('#sub').click(function(){
		var name=$('#name').val();
		var months=$('#months').val();
		var dates=$('#dates').val();
		var years=$('#years').val();
		var email=$('#email').val();
		var usrname=$('#usrname').val();
		var pass=$('#pass').val();
		var cpass=$('#cpass').val(); 
		var dob=dates+'.'+months+'.'+years;

		$.ajax({
			url:'/computer_store/data/',
			type:'POST',
			data:{'name':name,'months':months,'dates':dates,'years':years,
			'email':email,'usrname':usrname,'pass':pass,'cpass':cpass},
			success:function(response)
			{
				if(response=='success')
				{
					window.location.href='/computer_store/login/'
				}
				if(response=='error')
				{
					window.location.href='/computer_store/login/'
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				alert('Your Account has Created');
				alert('Switch to login page');
				window.location.href='/computer_store/login/'
			}
		});
	});
})