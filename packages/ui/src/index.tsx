import * as ReactDOM from "react-dom";
import { Button } from "@monorepo/ui-components";
const appElement = document.getElementById("app");

ReactDOM.render(
  <h1>
    Hello, world! <Button>X</Button>
  </h1>,
  appElement
);
