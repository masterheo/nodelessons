module.exports=function (module)
 {
	return function()
	{
		var message = (module.filename + " ").concat([].slice.call(arguments));
		console.log(message);
	}
}