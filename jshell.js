/*
#################
JSHell
#################
*/
const JSHell = {
  _issetup: false,
  execute: (cmd) => {
    if (JSHell._issetup == false) {throw "JSHell not setup yet"}
    try {
      let out = eval(cmd);
      return JSHell.out.Text(out)
    } catch (e) {
      return JSHell.out.Error(e)
    }
  },
  out: {
    Error: (e) => {
      if (JSHell._issetup == false) {throw "JSHell not setup yet"}
      return `<span class='shell-output-error'>${e}</span>`
    },
    Warning: (w) => {
      if (JSHell._issetup == false) {throw "JSHell not setup yet"}
      return `<span class='shell-output-warning'>${w}</span>`
    },
    Text: (t) => {
      if (JSHell._issetup == false) {throw "JSHell not setup yet"}
      return `<span class='shell-output-text'>${t}`;
    },
    Prefix: (p) => {
      if (JSHell._issetup == false) {throw "JSHell not setup yet"}
      return `<span class='shell-output-prefix'>${p}</span>`
    }
  },
  setup: (opt) => {
    if (JSHell._issetup == false) {
      let {
        error = "#92140c", text = "#fff8f0", warning = "#ffcf99", prefix = "#3b7080"
      } = opt;
      let elem = document.createElement("template");
      elem.innerHTML = `<style>.shell-output-error {color:${error}}.shell-output-warning {color:${warning}}.shell-output-text {color:${text}}.shell-output-prefix {color:${prefix}}</style>`
      document.body.appendChild(elem.content.firstChild)
      JSHell._issetup = true;
    } else {
      throw "JSHell already setup"
    }
  }
}
const Console = {
  log: (t) =>{
let elem = document.createElement("template");
elem.innerHTML=JSHell.out.Text(t);
Console.src.appendChild(elem.content.firstChild)
  },
  warn: (t) =>{
let elem = document.createElement("template");
elem.innerHTML=JSHell.out.Warning(t);
Console.src.appendChild(elem.content.firstChild)
  },
  error: (t) =>{
let elem = document.createElement("template");
elem.innerHTML=JSHell.out.Error(t);
Console.src.appendChild(elem.content.firstChild)
  },
  src:undefined
}
