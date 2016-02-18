$(function() {
	$.get('https://www.reddit.com/r/aww/.json', function(something) {
		for (var i = 0; i < 12; i++) {
			// retrieve images
			var thumbnail = something.data.children[i].data.thumbnail;
			var image = $("<img />").attr("src", thumbnail);
			// retrieve headlines
			var title = something.data.children[i].data.title;
			var headline = $("<h3></h3>").text((i + 1) + ". " + title);
			// retrieve author names
	      	var author = something.data.children[i].data.author;
			var authorName = $("<p></p>").text("Submitted by: " + author); 
			// append items to body
			var divRow = document.createElement("div");
			$(divRow).addClass("row");
			$('body').append(divRow);
			$(divRow).append([image, headline, authorName]);
      	}
	});
});