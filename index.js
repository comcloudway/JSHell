//UI FEATURES

const sidepanel = {
    menu : {
        save : document.getElementById("btn_save"),
        create : document.getElementById("btn_new"),
        open : document.getElementById("btn_open"),
        exec : document.getElementById("btn_exec")
    },
    panel : {
        time : document.getElementById("widget_time"),
        chars : document.getElementById("widget_chars")
    }
}

const toolbox = {
    tab : {
        debug : document.getElementById("debug_tab"),
        console : document.getElementById("console_tab")
    },
    btn : {
        debug : document.getElementById("btn_debug_tab"),
        console : document.getElementById("btn_console_tab")
    }
}

const editor = document.getElementById("code");



//Toolbox Buttons
let toolbox_current_tab = toolbox.tab.debug;
const toogleToolboxTab = (btn, tab) => {
    toolbox_current_tab = tab;
    //reset btn color
    for (let e in toolbox.btn) {
        e.style.background="transparent";
    }
    btn.style.background="#54a16f"
    //reset visible tab
    for (let e in toolbox.tab) {
        e.style.zIndex=-1;
    }
    tab.style.zIndex=0;
}
toogleToolboxTab(toolbox.btn.debug,toolbox.tab.debug);

toolbox.btn.debug.addEventListener("click",(e)=>{
    e.preventDefault();
    toogleToolboxTab(toolbox.btn.debug,toolbox.tab.debug);
})
toolbox.btn.console.addEventListener("click",(e)=>{
    e.preventDefault();
    toogleToolboxTab(toolbox.btn.console,toolbox.tab.console);
})