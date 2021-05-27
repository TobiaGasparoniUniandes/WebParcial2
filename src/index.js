import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import App from "./App";

const messagesDict = {
    'es': localeEsMessages,
    'en': localeEnMessages
};

const language = navigator.language.split("-")[0];

ReactDOM.render(
<IntlProvider locale={language} messages={messagesDict[language]}>
    <App/>
</IntlProvider>,
document.getElementById("root"));