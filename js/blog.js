 $(function() {
	Parse.$ = jQuery; 
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("bFYyQ3KjLA5Obqz1kHdWT1AFPWHIQ7qppjqB1d6F", "8LrYJdmsKkcREKUYLHcMDSISYolBw5Wd6a3aXjP9");
 
    var Blog = Parse.Object.extend("Blog");
	
	/** 
	var query = new Parse.Query(Blog);
	query.find({
		success: function(results){
			for(var i = 0; i <results.length; i++){
				var object = results[i];
				var title = object.get('title');
				var content = object.get('content');
			}
		}, 
		error: function(error){
			alert("error: " + error.message);
		}
	});
	**/ 
	var Blogs = Parse.Collection.extend({
		model: Blog 
	});
	
	var blogs = new Blogs();

	var BlogsView = Parse.View.extend({
		template: Handlebars.compile($('#blogs-tpl').html()),
		render: function() {
			var collection = { blog: this.collection.toJSON() };
			this.$el.html(this.template(collection)); 
		}
	});
	
		blogs.fetch({
		success: function(blogs) {
			var blogsView = new BlogsView({ collection: blogs });
			blogsView.render();
			$('.main-container').html(blogsView.el); 
		},
		error: function(blogs, error){
			console.log(error); 
		}
	}); 
 
});