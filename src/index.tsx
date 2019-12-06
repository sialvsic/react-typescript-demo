import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl'
import App from "./component/App";

const root = document.querySelector("#root");

ReactDOM.render(
  <IntlProvider locale={'en'}>
    <App name={"App"} />
  </IntlProvider>, root);
