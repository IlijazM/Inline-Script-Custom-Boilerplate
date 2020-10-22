import DunyaPlugin from './DunyaPlugin';
import { IOPaths } from './Types';

let plugin: DunyaPlugin = {
  name: '',
  priority: 100,
};

//#region setup and terminate
plugin.setup = function (): boolean {
  return this.pluginCaller('setup');
};

plugin.terminate = function (): boolean {
  return this.pluginCaller('terminate');
};
//#endregion

//#region fs
plugin.fsRead = function (path: string): string {
  return this.pluginGetter('fsRead', path);
};

plugin.fsWrite = function (path: string, fileContent): boolean {
  return this.pluginCaller('fsWrite', path, fileContent);
};

plugin.fsMkdirs = function (path: string): boolean {
  return this.pluginCaller('fsMkdirs', path);
};

plugin.fsRemove = function (path: string): boolean {
  return this.pluginCaller('fsRemove', path);
};

plugin.fsEmpty = function (path: string): boolean {
  return this.pluginCaller('fsEmpty', path);
};

plugin.fsIsDir = function (path: string): boolean {
  return this.pluginGetter('fsIsDir', path);
};

plugin.fsReadJSON = function (path: string): Record<string, any> {
  return this.pluginGetter('fsReadJSON', path);
};
//#endregion

//#region watcher
plugin.setupWatcher = function (): boolean {
  return this.pluginCaller('setupWatcher');
};

plugin.terminateWatcher = function (): boolean {
  return this.pluginCaller('terminateWatcher');
};
//#endregion

//#region events handlers
plugin.deleteEventPipe = function (pipe: { path: string }): IOPaths {
  return this.pluginPipe('deleteEventPipe', pipe);
};

plugin.deleteEvent = function (path: string): boolean {
  return this.pluginCaller('deleteEvent', path);
};

plugin.addDirEventPipe = function (pipe: { path: string }): IOPaths {
  return this.pluginPipe('addDirEventPipe', pipe);
};

plugin.addDirEvent = function (path: string): boolean {
  return this.pluginCaller('addDirEvent', path);
};

plugin.addFileEventPipe = function (pipe: {
  path: string;
  fileContent: string;
}): { path: string; fileContent: string } {
  return this.pluginPipe('addFileEventPipe', pipe);
};

plugin.addFileEvent = function (path: string, fileContent: string): boolean {
  return this.pluginCaller('addFileEvent', path, fileContent);
};

plugin.changeFileEventPipe = function (pipe: {
  path: string;
  fileContent: string;
}): { path: string; fileContent: string } {
  return this.pluginPipe('changeFileEventPipe', pipe);
};

plugin.changeFileEvent = function (path: string, fileContent: string): boolean {
  return this.pluginCaller('changeFileEvent', path, fileContent);
};

plugin.startServer = function (): boolean {
  return this.pluginCaller('startServer');
};

plugin.stopServer = function (): boolean {
  return this.pluginCaller('stopServer');
};

export default plugin;
