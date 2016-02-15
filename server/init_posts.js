/**
 * Created by kieky on 2/12/2016.
 */
// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Tags.find().count() === 0) {
        var tags = [
            {tag: "Meteor",
                count: 2
            },
            {tag: "Languages",
                count: 1
            }
        ];
        var blogs = [
            {
                title: "post one",
                body: "body of post one",
                user: "kieky",
                tags : [
                    "Meteor",
                    "Languages"
                ]
            },
            {
                title: "post two",
                body: "body of post two",
                user: "kieky",
                tags : [
                    "Meteor"
                ]
            }
        ];

        var timestamp = new Date();
        _.each(tags, function(tags) {
            var tag_id = Tags.insert({tag: tags.tag,
                count: tags.count});
        });
        _.each(blogs, function(blog) {
            var blog_id = Posts.insert({title: blog.title,
                body: blog.body, user: blog.user, tags: blog.tags, date: timestamp});
        });
    }
});
