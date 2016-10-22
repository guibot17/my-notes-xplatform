#!/usr/bin/env node

require('shelljs/global');

const startupDir = pwd(),
  electronVersion = '1.4.3'
  desktopDist = `${pwd()}/dist/desktop`,
  desktopTemp = `${pwd()}/.tmp/desktop`,
  webDist = `${pwd()}/dist/web`,
  iconPath = `${pwd()}/resources/icon`,
  electronSrc = `${pwd()}/src/desktop-client`;

if(test('-e', desktopDist)){
  rm('-rf', `${desktopDist}/**/*`);
}else{
  mkdir('-p', desktopDist);
}
if(test('-e', desktopTemp)){
  rm('-rf', `${desktopTemp}/**/*`);
}else{
  mkdir('-p', desktopTemp);
}

ln('-s', webDist, `${desktopTemp}/renderer`);
cp('-rf', `${electronSrc}/*`, desktopTemp);
exec(`electron-packager ${desktopTemp} --version ${electronVersion} --icon ${iconPath} --platform all --out ${desktopDist} --overwrite`);
