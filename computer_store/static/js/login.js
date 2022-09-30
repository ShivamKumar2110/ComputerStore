$(document).ready(function(){
	$('#sub').click(function(){
		var usrname=$('#usrname').val();
		var pass=$('#pass').val(); 
		$.ajax({
			url:'/computer_store/get_data/',
			type:'POST',
			data:{'usrname':usrname,'pass':pass},
			success:function(response,ids)
			{
				if(response=='success')
				{
					window.location.href='/computer_store/dash/'
				}
				if(response=='no')
				{
					alert('Username Password Mismatch')
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				alert('error');
			}
		});
	});
})