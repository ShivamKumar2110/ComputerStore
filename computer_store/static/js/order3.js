 $(document).ready(function(){
	$('#sub').click(function(){
		var comp=$('#company').val();
		var part=$('#part').val();



		if (comp=='dell') 
		{
			if(part=='scr')
			{
				window.location.href='/computer_store/dell_scr/'	
			}
		}
		if (comp=='dell') 
		{
			if(part=='bat')
			{
				window.location.href='/computer_store/dell_bat/'	
			}
		}
		if (comp=='dell') 
		{
			if(part=='key')
			{
				window.location.href='/computer_store/dell_key/'	
			}
		}
		if (comp=='dell') 
		{
			if(part=='mouse')
			{
				window.location.href='/computer_store/dell_mouse/'	
			}
		}




		if (comp=='lenovo') 
		{
			if(part=='scr')
			{
				window.location.href='/computer_store/lenovo_scr/'	
			}
		}
		if (comp=='lenovo') 
		{
			if(part=='bat')
			{
				window.location.href='/computer_store/lenovo_bat/'	
			}
		}
		if (comp=='lenovo') 
		{
			if(part=='key')
			{
				window.location.href='/computer_store/lenovo_key/'	
			}
		}
		if (comp=='lenovo') 
		{
			if(part=='mouse')
			{
				window.location.href='/computer_store/lenovo_mouse/'	
			}
		}

	});
})