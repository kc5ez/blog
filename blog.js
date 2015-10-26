$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("bFYyQ3KjLA5Obqz1kHdWT1AFPWHIQ7qppjqB1d6F", "8LrYJdmsKkcREKUYLHcMDSISYolBw5Wd6a3aXjP9");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});