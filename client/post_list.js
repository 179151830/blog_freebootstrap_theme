/**
 * Created by kieky on 2/13/2016.
 */
Template.post_list.helpers({
    posts:function(){
        return Posts.find({},{sort: {date:-1}});
    }
});