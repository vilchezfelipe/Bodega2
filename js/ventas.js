let miGrafica = document.getElementById("miGrafica").getContext("2d");

        var chart = new Chart(miGrafica,{
            type: "pie",
            data:{
                labels:["Vinos 2019", "Souvenir 2019"],
                datasets:[
                    {
                        label:"Ventas año 2019",
                        backgroundColor: "rgb(240, 128, 63)" & "rgb(82, 167, 82)",
                        colo: "rgb(82, 167, 82)", 
                        data: [306904,191853]
                    }
                ]
            }
        })

        let miGrafica2 = document.getElementById("miGrafica2").getContext("2d");

        var chart = new Chart(miGrafica2,{
            type: "pie",
            data:{
                labels:["Vinos 2020", "Souvenir 2020"],
                datasets:[
                    {
                        label:"Ventas año 2020",
                        backgroundColor: "rgb(240, 128, 63)" & "rgb(82, 167, 82)",
                        colo: "rgb(82, 167, 82)", 
                        data: [57247,49979]
                    }
                ]
            }
        })