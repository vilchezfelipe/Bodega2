let ventas2019 = document.querySelector(".container_2019");
let ventas2020 = document.querySelector(".container_2020");
let top10 = document.getElementById("top");


function ventasNueve(){
   ventas2020.classList.remove("active")
   ventas2019.classList.remove("active");
   top10.classList.remove("active")
}

function ventasVeinte(){
    ventas2020.classList.add("active");
    ventas2019.classList.add("active");
    top10.classList.remove("active")
}
function topDiez(){
    top10.classList.add("active")
    ventas2019.classList.add("active");
    ventas2020.classList.remove("active")
}