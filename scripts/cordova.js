#!/usr/bin/env node

require('shelljs/global');

const startupDir = pwd(),
  mobileDist = `${pwd()}/dist/mobile`,
  webDist = `${pwd()}/dist/web`,
  cdvSrc = `${pwd()}/src/mobile-client`;

if(test('-e', mobileDist)){
  rm('-rf', `${mobileDist}/**/*`);
}else{
  mkdir('-p', mobileDist);
}
ln('-s', webDist, `${mobileDist}/www`);
cp('-rf', `${cdvSrc}/*`, mobileDist);
sed('-i', '</body>', '<script src="cordova.js"></script></body>', `${mobileDist}/www/index.html`);
cd(mobileDist);
exec(`cordova prepare`);
exec(`cordova build`);
