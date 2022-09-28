const menuToggler = document.getElementsByClassName("menu-toggler")
console.log(menuToggler)
menuToggler[0].onclick = function(){
    if(this.classList.contains("active")){
        this.classList.add('disable');
        this.classList.remove("active");
        document.querySelector("menu").style.right = 0;
        document.querySelector("menu").style.opacity = 1;
    }
    else{
        this.classList.remove("disable");
        this.classList.add("active");
        document.querySelector("menu").style.right = '-100%';
        document.querySelector("menu").style.opacity = '0';
    }
}