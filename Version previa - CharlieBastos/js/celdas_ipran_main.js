$(document).ready(function() {
           $('#cellid').keypress(function(e) {

            if (e.which == 13) {buscar_ipran();}
           });  
}); 

function buscar_ipran() {

    var encabezado_tabla = "<table class='tabla_datos'><thead><tr><th>IP</th><th>CANTIDAD</th><th>CELDAS</th><th>ULTIMA ACTUALIZACION</th><th>NOMBRE</th></tr></thead><tbody>"
    var tabla = encabezado_tabla

    var cellid = document.getElementById("cellid").value    
    const dir = 'http://10.4.26.13:5003/afectacion/' 
    var url = dir.concat(cellid);
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var ipran = data.IPRAN
        var cont = ipran.length;
        var comienzo_fila = "<tr>"
        var comienzo_campo = "<td>"
        var fin_campo = "</td>"
        var fin_fila = "</tr>"
        
        for (var i = 0; i < cont; i++) {
             var ip = ipran[i].IP
             var cantidad = ipran[i].cantidad
             var celdas = ipran[i].celdas
             var last_update = ipran[i].last_update
             var nombre_ipran = ipran[i].nombre_ipran

             registro = comienzo_fila.concat(comienzo_campo).concat(ip).concat(fin_campo).concat(comienzo_campo).concat(cantidad).concat(fin_campo).concat(comienzo_campo).concat(celdas).concat(fin_campo).concat(comienzo_campo).concat(last_update).concat(fin_campo).concat(comienzo_campo).concat(nombre_ipran).concat(fin_campo)
             
             
             tabla = tabla.concat(registro)
             
        }
            fin_tabla = "</thead></table>"
             tabla = tabla.concat(fin_tabla)   
        
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = tabla
        document.getElementById('resultado').style.display='block'

                
    })
    .catch(err => console.log(err))
 }