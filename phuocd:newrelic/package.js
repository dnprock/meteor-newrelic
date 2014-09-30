Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('phuocd:newrelic.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('phuocd:newrelic');
  api.addFiles('phuocd:newrelic-tests.js');
});
