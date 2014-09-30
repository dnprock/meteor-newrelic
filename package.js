Package.describe({
  summary: "meteor sql bindings for server-side calls",
  version: "1.0.1",
  git: "https://github.com/andreioprisan/meteor-newrelic.git"
});

Npm.depends({ "newrelic": "1.5.1" });

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  if (api.export) api.export('newrelic', 'server');	
  api.add_files('newrelic_npm.js', 'server');
});

