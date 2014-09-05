<script language='javascript'>
function CharsCount(string)
{
	var nLen = string.length;
	var Words = 0;
	for(var i = 0; i < nLen; i++)
	{
		if(string[i+1] == ' ' && string[i+2] == ' ') continue;
		if(string[i+1] == ' ' || i+1 == nLen ) Words++;
	}
	alert("Was counted '" + Words + "' words and '"+nLen+"' characters.");
}
</script>
