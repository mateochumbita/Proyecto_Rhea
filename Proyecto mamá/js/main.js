Window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");
    
    if(scroll > 20){
        header.clsslist.add("nav-mode");
    }else if(scroll >20){
        header.classList.remove("nav-mode");
    }
    
    }
    
    document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
    
    
    
    menu = document.getElementById("header");
    
    nav = document.getElementById("nav");
    
    
    function mostrar_menu (){
        
        menu.classList.toggle('move_content');
        nav.classList.toggle('move-nav');
    }
    

    window.addEventListener("resize", function(){
        if(window.innerWidth > 760){
            menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move-nav');
        }
    }
    )