import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Scrivito from "scrivito";
import "./Objs";
import "./Widgets";
import { App } from "./App";
import { configure } from "./config";
import "./assets/stylesheets/index.scss";

configure();

if (window.preloadDump) {
  Scrivito.preload(window.preloadDump).then(({ dumpLoaded }) => {
    delete window.preloadDump;
    dumpLoaded ? hydrateApp() : renderApp();
  });
} else {
  renderApp();
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("application"));
}

function hydrateApp() {
  ReactDOM.hydrate(<App />, document.getElementById("application"), () =>
    Scrivito.updateContent()
  );
}

if (Scrivito.isEditorLoggedIn()) {
  import("./Objs/editingConfigs");
  import("./Widgets/editingConfigs");
}
