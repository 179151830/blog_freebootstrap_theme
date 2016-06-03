/**
 * Created by kieky on 3/1/2016.
 */
if (Meteor.isServer) {
    var imageStore = new FS.Store.S3("images", {
        /* REQUIRED */
        accessKeyId: "AKIAIET3MY7XOEGMKNXQ", //Meteor.settings.AWSAccessKeyId,
        secretAccessKey: "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", //Meteor.settings.AWSSecretAccessKey,
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