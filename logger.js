module.exports=function (module)
 {
	return function()
	{
		var message = [].slice.call(arguments).join(',');
		console.log(message);
	}
}