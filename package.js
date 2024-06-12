Package.describe({
    "name": "carlosalvidrez:pagination-blaze",
    "summary": "Blaze paginator Bootstrap 5 template for carlosalvidrez:pagination package",
    "version": "0.0.1",
    "git": "https://github.com/carlosalvidrez/pagination-blaze.git"
});

Package.onUse(function (api) {
    api.versionsFrom("2.16");

    api.use([
        //"meteor-base",
        "underscore",
        "carlosalvidrez:pagination"
    ]);

    api.use([
        "reactive-var",
        "reactive-dict"
    ], "client");

    api.use([
        "templating",
        "blaze"
    ], "client");

    api.addFiles([
        "client/template.html",
        "client/template.js"
    ], "client");
});