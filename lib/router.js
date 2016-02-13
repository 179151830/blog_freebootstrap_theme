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
    this.render('header_background', {
        to:"main"
    });
});