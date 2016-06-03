/**
 * Created by kieky on 6/2/16.
 */
Template.social_share.helpers({
    shareData: function() {
        var t = this.title;
        console.log(t);
        return {
            title: "test out title",
            author: "test author",
            excerpt: "excerpt"
        }
    }
});