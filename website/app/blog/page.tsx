import Markdown from "markdown-to-jsx";
import React from "react";
import { render } from "react-dom";

render(<Markdown># Hello world!</Markdown>, document.body);

renders: <h1>Hello world!</h1>;
