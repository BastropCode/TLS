const toggleMenu = () =>{
    if(document.getElementById("menu").style.display === "block"){
        document.getElementById("menu").style.display = "none";
        
    }
    else{
        const menuDiv = document.getElementById("menu");
        menuDiv.style.display = "block";
        document.body.style.overflow = "hidden";
        

        const currentDoc = document.title;
        const menuItems =  menuDiv.childNodes;

        menuItems.forEach(item =>{
            if(item.textContent === currentDoc){
                console.log(item)
                item.classList.add('active');
            }

        });
    }
    
}


    
