import Cookies from "universal-cookie";

const cookies = new Cookies();
export var usuario = cookies.get("usuario");
