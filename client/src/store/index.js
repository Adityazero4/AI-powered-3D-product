//just like react context which can be used in whole app
import { proxy } from "valtio";
const state = proxy({
  intro: true, //to check are we currently on a homepage or not
  color: "#EFBD48", //default color
  isLogoTexture: true, //are we displaying logo on shirt
  isFullTexture: false, //are we displaying full texture on shirt
  logoDecal: "./threejs.png", //default logo
  fullDecal: "./threejs.png", //default texture
});
export default state;
