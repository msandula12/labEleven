$(function() {
	$.get('https://www.reddit.com/r/aww/.json', function(something) {
		for (var i = 0; i < 10; i++) {
			var title = something.data.children[i].data.title;
			var headline = $("<h3></h3>").text((i + 1) + ". " + title);
			var thumbnail = something.data.children[i].data.thumbnail;
			var image = $("<img />").attr("src", thumbnail);
	      	
	      	$('body').append([headline, image]);
      	}
	});
});