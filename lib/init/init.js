import fs from "node:fs";
import { _PATH, PluginName_en, PluginPath } from "../function/function.js";


export default new (class Init {
  async init() {
    if (!global.DailyHotPlugin) global.DailyHotPlugin = {};
    try {
      await this.globalVersion();
      await this.globalAuthor();
      return { boolean: true, msg: null };
    } catch (error) {
      return { boolean: false, msg: error };
    }
  }
 
  async globalVersion() {
    let PluginVersion = JSON.parse(
      fs.readFileSync(`./plugins/${PluginName_en}/package.json`, `utf-8`),
    );
    PluginVersion = PluginVersion.version;
    global.DailyHotPlugin.PluginVersion = PluginVersion;
  }
  async globalAuthor() {
    let PluginAuthor = "桉南";
    global.DailyHotPlugin.PluginAuthor = PluginAuthor;
  }
})();
