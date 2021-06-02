import { registerApplication, start } from "single-spa";
import * as isActive from "./activity";

registerApplication(
  "@berlin/single-nav",
  () => System.import("@berlin/single-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@berlin/single-page1",
  () => System.import("@berlin/single-page1"),
  isActive.page1,
  { domElement: document.getElementById('page1-container') }
);

registerApplication(
  "@berlin/single-page2",
  () => System.import("@berlin/single-page2"),
  isActive.page2,
  { domElement: document.getElementById('page2-container') }
);

start();