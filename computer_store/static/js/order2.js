 $(document).ready(function(){
	$('#sub').click(function(){
		var type=$('#type').val();

		if (type=='security') 
		{
			window.location.href='/computer_store/security/'	
		}
		if (type=='utility') 
		{
			window.location.href='/computer_store/utility/'	
		}
		if (type=='mp') 
		{
			window.location.href='/computer_store/media/'	
		}
		if (type=='study') 
		{
			window.location.href='/computer_store/study/'	
		}
	});
})