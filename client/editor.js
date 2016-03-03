/**
 * Created by kieky on 2/14/2016.
 */
Template.new_post_form.rendered = function() {
    // onImageUpload callback
    var $summernote = $('#summernote');
    $('#summernote').summernote({
        callbacks: {
            onImageUpload: function(files) {
                // upload image to server and create imgNode...
                //$summernote.summernote('insertNode', imgNode);
                console.log("in call back");
            }
        }
    });

    // summernote.image.upload
    $('#summernote').on('summernote.image.upload', function(we, files) {
        // upload image to server and create imgNode...
        //$summernote.summernote('insertNode', imgNode);
        console.log("in summernote.image.upload");
    });
};