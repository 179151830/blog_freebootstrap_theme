/**
 * Created by kieky on 3/1/2016.
 */
if (Meteor.isServer) {
    var imageStore = new FS.Store.S3("images", {
        /* REQUIRED */
        accessKeyId: Meteor.settings.private.AWSAccessKeyId,
        secretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
        bucket: "blog-freebootstrap-theme-storage"
    });

    Images = new FS.Collection("Images", {
        stores: [imageStore],
        filter: {
            allow: {
                contentTypes: ['image/*']
            }
        }
    });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if (Meteor.isClient) {
    var imageStore = new FS.Store.S3("images");
    Images = new FS.Collection("Images", {
        stores: [imageStore],
        filter: {
            allow: {
                contentTypes: ['image/*']
            },
            onInvalid: function(message) {
                toastr.error(message);
            }
        }
    });
}

// Allow rules
Images.allow({
    insert: function() { return true; },
    update: function() { return true; },
    download: function() { return true; }
});