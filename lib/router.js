/**
 * Created by kieky on 2/12/2016.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('navbar', {
        to:"navbar"
    });
    this.render('main_page', {
        to:"main"
    });
});

Router.route('/post/:_id', function () {
    this.render('navbar', {
        to:"navbar"
    });
    this.render('post_page', {
        to:"main",
        data:function(){
            return Posts.findOne({_id:this.params._id});
        }
    });
});