    const menuBtn = document.getElementById("menu-button");
    const menu = document.getElementById("popup-menu");
    const exitBtn = document.getElementById("exit-btn");

    menuBtn.onclick = function(){
        menu.style.display = "block";
    }
    exitBtn.onclick = function(){
        menu.style.display = "none";
    }

    window.onclick = function(event){
        if(event.target === menu || event.target.tagName === "li"){
            menu.style.display = "none";
        }
    }
