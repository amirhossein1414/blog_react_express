import React from "react";
import { Button, TextField } from "@material-ui/core";
import LoginFormLang from "./LoginForm.lang";
import "./LoginForm.css";

export default function LoginForm() {
  let lang = new LoginFormLang();

  return (
    <div class="container">
      <h1>Hello World!</h1>
      <TextField id="standard-basic" label={lang.username.value} />
      <TextField id="standard-basic" label={lang.username.value} />
      <Button variant="contained" color="primary">
        {lang.username.value}
      </Button>
    </div>
  );
}
