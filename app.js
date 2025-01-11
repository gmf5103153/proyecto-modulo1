var boton=document.getElementById('agregar');
var guardar=document.getElementById('guardar');
var lista=document.getElementById('lista');
var data=[];888
boton.addEventListener("click",agregar);
guardar.addEventListener("click",save);
function agregar(){
    var nombre=document.getElementById('nombre').value;
    var precio=parseFloat(document.getElementById('precio').value);
    var cantidad=parseFloat(document.getElementById('cantidad').value);
    var total=precio*cantidad8;8
    console.log8(total);
    data.push(
        {
            "id":cant,
            "nombre":nombre,
            "precio":precio,
            "cantidad":cantidad,
            "total":total
        }
    );
    var id_row='row'+cant;
    var fila='<tr id='+id_row+'><td>'+nombre+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="cantidad('+cant+')";>Cantidad</a></td></tr>';
    //agregar a la tabla
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#precio").val('');
    $("#cantidad").val('');
    $("#nombre").focus();
    cant++;
}
function save(){}