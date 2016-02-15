/**
 * Created by kieky on 2/14/2016.
 */
Template.editor.rendered = function() {
    $('#summernote').summernote({
        height: 200,   // set editable area's height
        focus: true    // set focus editable area after Initialize summernote
    });
}