function editar(){
    let contrasena = "wineshop";
    let valor = prompt("ingresa la contraseña");
        let almacen = document.getElementById("almacen");
        let fecha = document.getElementById("fecha");
        let documento = document.getElementById("documento");
        let materiales = document.getElementById("materiales");
        let importe = document.getElementById("importe");
        

    if(valor === contrasena){
        document.querySelector(".cajaEdicion").classList.add("active");
        let btnCerrar = document.getElementById("btnCerrar");
        btnCerrar.addEventListener("click", ()=>{
            document.querySelector(".cajaEdicion").classList.remove("active");
        })
            let cargar = document.getElementById("btnCargar");
            cargar.addEventListener("click", ()=>{
                console.log("click")
                
                /*
                document.getElementById("almacenEdit").innerHTML = " "+ almacen.value;
                document.getElementById("fechaEdit").innerHTML =" "+  fecha.value;
                document.getElementById("documentoEdit").innerHTML =" "+  documento.value;
                document.getElementById("materialesEdit").innerHTML =" "+  materiales.value;
                document.getElementById("importeEdit").innerHTML =" "+  importe.value;
                */
               document.getElementById("almacenEdit").innerHTML = " "+ almacenG;
                document.getElementById("fechaEdit").innerHTML =" "+  fechaG;
                document.getElementById("documentoEdit").innerHTML =" "+  documentoG;
                document.getElementById("materialesEdit").innerHTML =" "+  materialesG;
                document.getElementById("importeEdit").innerHTML =" "+  importeG;

                localStorage.setItem("almacen", almacen.value);
                localStorage.setItem("fecha", fecha.value);
                localStorage.setItem("documento", documento.value);
                localStorage.setItem("materiales", materiales.value);
                localStorage.setItem("importe", importe.value);
                
            })

        
        
        
        
    }else{
        alert("contraseña incorrecta")
    }


}




                 almacenG = localStorage.getItem("almacen");
                 fechaG = localStorage.getItem("fecha");
                 documentoG = localStorage.getItem("documento");
                 materialesG = localStorage.getItem("materiales");
                 importeG = localStorage.getItem("importe");
                

                 
           
        
    
   