import GlobalLang from "./global.lang";

export default class Lang {
  constructor(...arg) {
    this.words = arg;
  }

  get value() {
    let word = this.words.find((x) => x.key === GlobalLang.lang);
    if (word && word.value) {
      return word.value;
    } else {
      return "";
    }
  }
}
