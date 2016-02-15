/**
 * Created by kieky on 2/14/2016.
 */
Template.new_post_form.events({
    "submit .js-save-new-post-form":function(event) {
        if (Meteor.user()) {
            var user = Meteor.user().username;
            console.log(user);
            var title = event.target.post_title.value;
            var sub_title = event.target.post_sub_title.value;
            var code = $('#summernote').summernote('code');
            var timestamp = new Date();

            var blog_id = Posts.insert({title: title, subtitle: sub_title,
                body: code, user: user, date: timestamp});
            Router.go('/post/' + blog_id);
        }
        else {
            alert("Please log on first!");
        }
        return false;// stop the form submit from reloading the page
    }
});