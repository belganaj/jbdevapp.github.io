$('img').each(function() {
	var imageDataSource = $(this).data('img').toString();
  var setImageSource = $(this).attr('src', imageDataSource);
});
     
