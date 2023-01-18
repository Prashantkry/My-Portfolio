var tab_links=document.getElementsByClassName("tab_links")
var tab_contents=document.getElementsByClassName("tab_content")

function OpenTab(tabName){
    for(tab_link of tab_links){
        tab_link.classList.remove("active_link")
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active_tab")
    }

    event.currentTarget.classList.add("active_link")
    document.getElementById(tabName).classList.add("active_tab")
}



