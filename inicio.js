function ir()
{
    var usuario="benjamin";
    var contra=1258;
    if(document.form.password.value==contra && document.form.login.value==usuario){
        alert("BIENVENIDOS A LIBRERIAS JHIRE");
        window.location="pagina 2.html";
    }
    else{
        alert("INGRESE EL USUARIO Y CONTRASEÑA CORRECTOS");
    }
}