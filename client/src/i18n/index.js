import Vue from "vue";
import I18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
Vue.use(I18n);

export default new I18n({
  // 设置当前是什么语言
  locale: localStorage.getItem('language') || "zh-CN",
  // 配置当前项目所有语言的语言包
  messages: {
    // 中文语言包
    "zh-CN": zh,
    // 英文语言包
    "en-US": en,
  },
});
