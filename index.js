//UI FEATURES

const sidepanel = {
    menu : {
        save : documemt.getElementById("btn_save"),
        create : documemt.getElementById("btn_new"),
        open : documemt.getElementById("btn_open"),
        exec : documemt.getElementById("btn_exec")
    },
    panel : {
        time : documemt.getElementById("widget_time"),
        chars : documemt.getElementById("widget_chars")
    }
}

const toolbox = {
    tab : {
        debug : documemt.getElementById("debug_tab"),
        console : documemt.getElementById("console_tab")
    },
    btn : {
        debug : documemt.getElementById("btn_debug_tab"),
        console : documemt.getElementById("btn_console_tab")
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