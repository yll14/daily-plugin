import yaml from "yaml";
import fs from "node:fs";
import { _PATH, PluginName_en, PluginPath } from "../function/function.js";
import path from "node:path";

export default new (class Init {
  async init() {
    if (!global.XINGLUO) global.XINGLUO = {};
    try {
      //await this.loadConfig();
      await this.globalVersion();
      await this.globalAuthor();
      return { boolean: true, msg: null };
    } catch (error) {
      return { boolean: false, msg: error };
    }
  }
  /* 暂时不需要新建config文件夹
  async loadConfig() {
    let configFolder = `${PluginPath}/config`;
    let defSetFolder = `${PluginPath}/lib/defSet`;
    if (!fs.existsSync(configFolder)) {
      fs.mkdirSync(configFolder);
    }
  
    const DailyHotFilePath = `${configFolder}/DailyHot.yaml`;
    const defDailyHotFilePath = `${defSetFolder}/DailyHot.yaml`;
    if (!fs.existsSync(DailyHotFilePath)) {
      fs.copyFileSync(defDailyHotFilePath, DailyHotFilePath);
    } else {
      const defDailyHot = yaml.parse(
        fs.readFileSync(defDailyHotFilePath, "utf8"),
      );
      let DailyHot = yaml.parse(fs.readFileSync(DailyHotFilePath, "utf8"));
      let updated = false;
      for (const key in defDailyHot) {
        if (!DailyHot.hasOwnProperty(key)) {
          DailyHot[key] = defDailyHot[key];
          updated = true;
        }
      }
      if (updated) {
        const updatedConfigYAML = yaml.stringify(DailyHot);
        fs.writeFileSync(DailyHotFilePath, updatedConfigYAML, "utf8");
        logger.info(
          logger.green(
            `[${PluginName_en}]${path.basename(DailyHotFilePath)}配置文件缺少键值，已从defSet文件夹中更新`,
          ),
        );
      }
    }
   
  }*/
  async globalVersion() {
    let PluginVersion = JSON.parse(
      fs.readFileSync(`./plugins/${PluginName_en}/package.json`, `utf-8`),
    );
    PluginVersion = PluginVersion.version;
    global.XINGLUO.PluginVersion = PluginVersion;
  }
  async globalAuthor() {
    let PluginAuthor = "桉南"
    global.XINGLUO.PluginAuthor = PluginAuthor;
  }
 
})();
