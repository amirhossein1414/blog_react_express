import Lang from "../../../models/language/lang";
import LangWord from "../../../models/language/word.lang";

export default class LoginFormLang {
  constructor() {
    this.username = new Lang(new LangWord("fa", "شناسه کاربری"));
  }
}
