/**
 * Created by kieky on 2/14/2016.
 */
Template.editor.rendered = function() {
    //Meteor.subscribe('images');
    var template = this;
    // onImageUpload callback
    var $summernote = $('#summernote');
    $('#summernote').summernote({
        height: 400,
        callbacks: {
            onImageUpload: function(files) {
                // upload image to server and create imgNode...
                //$summernote.summernote('insertNode', imgNode);
                var imagesURL =[];
                var filename;
                var $dom =[];

                for (var i = 0, ln = files.length; i < ln; i++) {
                    (function(file, index) {
                        Images.insert(file, function (err, fileObj) {
                            if (err){
                                toastr.error("Upload failed... please try again.");
                                console.log(err);
                            } else {
                                //$summernote.summernote("insertNode", $dom[index][0]) should be inside the Images.insert
                                //the insert is running async, so need to wait image fully uploaded before doing real insert to summernote
                                //so, use a autorun to sweep the url availability
                                //if good, then do the summernote insert
                                template.autorun(function (c) {
                                    fileObj = Images.findOne(fileObj._id);
                                    var url = fileObj.url();
                                    if (url) {
                                        imagesURL[index] = '/cfs/files/Images/' + fileObj._id;
                                        $dom[index] = $("<img>").attr('src', imagesURL[index]).attr('style', 'max-width: 800px');
                                        $summernote.summernote("insertNode", $dom[index][0]);
                                        c.stop();
                                    }
                                });
                            }
                        });
                    })(files[i], i);
                }
            }
        }
    });

    // summernote.image.upload
    //$('#summernote').on('summernote.image.upload', function(we, files) {
    //    // upload image to server and create imgNode...
    //    //$summernote.summernote('insertNode', imgNode);
    //    console.log("in summernote.image.upload");
    //});
};
//for debug, to see if images are really uploaded to s3 or not
//spent a lot of time to figure out why image can be upload to s3 but cannot see in summernote
//which means cannot see the correct url
//need to use ----imagesURL[index] = '/cfs/files/Images/' + fileObj._id;---- as the url
//the Images in this url is the folder name in the s3 bucket
//Template.editor.helpers({
//    'images': function() {
//        return Images.find();
//    }
//});