import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const i18n = createI18n({
    legacy: false, //处理报错Uncaught (in promise) SyntaxError: Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
    locale: localStorage.getItem('lang') || "zh", // 注意locale属性~~~~~~~~！
    messages:{
        zh,
        en
    }
})
export default i18n