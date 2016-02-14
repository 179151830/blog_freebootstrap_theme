/**
 * Created by kieky on 2/13/2016.
 */
Template.comment_form.events({
    "submit .js-save-comment-form":function(event) {
        if (Meteor.user()) {
            var user = Meteor.user().username;
            var id = this._id;
            console.log(user);
            var myCom = event.target.comment.value;
            console.log(myCom);

            //  put your comment saving code in here!
            //upsert the collection
            Posts.update({_id:id},{$push:{comments: {com_user: user, com_detail: myCom}}});

            //event.target.url.clear();
            //event.target.clear();
            $('#comment').val('')
        }
        else {
            alert("Please log on first!");
        }
        return false;// stop the form submit from reloading the page
    }
});