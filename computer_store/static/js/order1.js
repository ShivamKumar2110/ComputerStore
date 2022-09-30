$(document).ready(function(){
	$('#sub').click(function(){
		var comp=$('#company').val();
		var type=$('#type').val();
		var need=$('#need').val();
		console.log(comp)
		console.log(type)
		console.log(need)
		if (comp=='dell') 
		{
			if(type=='desk')
			{
				if(need=='game')
				{
					window.location.href='/computer_store/dell_desk_game/'	
				}
			}
		}
		if (comp=='dell') 
		{
			if(type=='lap')
			{
				if(need=='game')
				{
					window.location.href='/computer_store/dell_lap_game/'	
				}
			}
		}
		if (comp=='dell') 
		{
			if(type=='desk')
			{
				if(need=='office')
				{
					window.location.href='/computer_store/dell_desk_office/'	
				}
			}
		}
		if (comp=='dell') 
		{
			if(type=='lap')
			{
				if(need=='office')
				{
					window.location.href='/computer_store/dell_lap_office/'	
				}
			}
		}
		if (comp=='lenovo') 
		{
			if(type=='desk')
			{
				if(need=='game')
				{
					window.location.href='/computer_store/lenovo_desk_game/'	
				}
			}
		}
		if (comp=='lenovo') 
		{
			if(type=='lap')
			{
				if(need=='game')
				{
					window.location.href='/computer_store/lenovo_lap_game/'	
				}
			}
		}
		if (comp=='lenovo') 
		{
			if(type=='desk')
			{
				if(need=='office')
				{
					window.location.href='/computer_store/lenovo_desk_office/'	
				}
			}
		}
		if (comp=='lenovo') 
		{
			if(type=='lap')
			{
				if(need=='office')
				{
					window.location.href='/computer_store/lenovo_lap_office/'	
				}
			}
		}
		
	});
})