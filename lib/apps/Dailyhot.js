import plugin from "../../../../lib/plugins/plugin.js";
import {
  _PATH,
  PluginName_zh,
  PluginName_en,
  image,
  GetConfig,
} from "../function/function.js";

let api, apipath;
export class DialyHot extends plugin {
  constructor() {
    super({
      name: `桉南:${PluginName_zh}热榜获取`,
      event: "message",
      priority: 1000,
      rule: [
        {
          reg: /^[#/!]?(zhihu|知乎)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotzhihu",
        },
        {
          reg: /^[#/!]?(weread|微信读书)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotweread",
        },
        {
          reg: /^[#/!]?(weibo|微博)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotweibo",
        },
        {
          reg: /^[#/!]?(toutiao|头条|今日头条)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHottoutiao",
        },
        {
          reg: /^[#/!]?(tieba|贴吧|百度贴吧)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHottieba",
        },
        {
          reg: /^[#/!]?(thepaper|澎湃|澎湃新闻)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHothepaper",
        },
        {
          reg: /^[#/!]?(sspai|少数派)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotsspai",
        },
        {
          reg: /^[#/!]?(qq-news|腾讯新闻|qqnews)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotqqnews",
        },
        {
          reg: /^[#/!]?(ngabbs|nga|NGA)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotngabbs",
        },
        {
          reg: /^[#/!]?(netease-news|网易新闻|netease)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotneteasenews",
        },
        {
          reg: /^[#/!]?(kuaishou|快手)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotkuaishou",
        },
        {
          reg: /^[#/!]?(juejin|掘金)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotjuejin",
        },
        {
          reg: /^[#/!]?(jianshu|简书)(今日)?(热搜|热榜)$/i,
          fnc: "DailyHotjianshu",
        },
      ],
    });
  }

  /* zhihu 模块 */
  async DailyHotzhihu(e) {
    api = await getapi();
    apipath = "zhihu";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* weread 模块 */
  async DailyHotweread(e) {
    api = await getapi();
    apipath = "weread";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* weibo 模块 */
  async DailyHotweibo(e) {
    api = await getapi();
    apipath = "weibo";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* toutiao 模块 */
  async DailyHottoutiao(e) {
    api = await getapi();
    apipath = "toutiao";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* tieba 模块 */
  async DailyHottieba(e) {
    api = await getapi();
    apipath = "tieba";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* thepaper 模块 */
  async DailyHothepaper(e) {
    api = await getapi();
    apipath = "thepaper";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* sspai 模块 */
  async DailyHotsspai(e) {
    api = await getapi();
    apipath = "sspai";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* qq-news 模块 */
  async DailyHotqqnews(e) {
    api = await getapi();
    apipath = "qq-news";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* ngabbs 模块 */
  async DailyHotngabbs(e) {
    api = await getapi();
    apipath = "ngabbs";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* netease-news 模块 */
  async DailyHotneteasenews(e) {
    api = await getapi();
    apipath = "netease-news";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* kuaishou 模块 */
  async DailyHotkuaishou(e) {
    api = await getapi();
    apipath = "kuaishou";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* juejin 模块 */
  async DailyHotjuejin(e) {
    api = await getapi();
    apipath = "juejin";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }

  /* jianshu 模块 */
  async DailyHotjianshu(e) {
    api = await getapi();
    apipath = "jianshu";
    api = api + apipath;
    try {
      let config = await fetch(api).then((res) => res.json());
      config = { config };
      if (config.config.code != 200) {
        e.reply(`出现错误返回值${config.config.code}请联系管理员`);
      }
      let { img } = await image(e, "hot", "hot", {
        saveId: apipath,
        Path: `${_PATH}/plugins/${PluginName_en}/resources/`,
        icon: apipath,
        cwd: _PATH,
        Data: config,
        version: global.DailyHotPlugin.PluginVersion,
        author: global.DailyHotPlugin.PluginAuthor,
      });
      e.reply(img);
    } catch (err) {
      e.reply(`访问API时出错:${err.message}请联系管理员`);
      logger.error(`访问API时出错:${err.message}`);
    }
  }
}
async function getapi() {
  return GetConfig(`lib/defSet`, `API`).config.api;
}
