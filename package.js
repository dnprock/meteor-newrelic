Package.describe({
  summary: "meteor newrelic",
  version: "1.0.2",
  git: "https://github.com/andreioprisan/meteor-newrelic.git"
});

Npm.depends({ "newrelic": "1.11.3" });

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  if (api.export) api.export('newrelic', 'server');	
  api.add_files('newrelic_npm.js', 'server');
});

