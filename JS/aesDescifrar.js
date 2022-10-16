function abrirArchivo(evento){
    const archivo = evento.target.files[0];
    if(archivo){
        const reader = new FileReader();
        reader.onload = function(e){
            const contenidotxt = e.target.result;
            document.getElementById('textocifrado').innerText = contenidotxt;
        };
        reader.readAsText(archivo);
    }else{
        alert("No se ha seleccionado ningun archivo");
    }    
}
window.addEventListener('load', () => {
    document.getElementById('file').addEventListener('change', abrirArchivo);
})


function descifrar(){

    const mensaje = document.getElementById('textocifrado').value;
    const clave = "kpñehyidmncgfjhs";
    /*const clave = document.getElementById("pass2").value;*/

    if(clave.length != 16){
        alert("Deben ser 16 caracteres");
        return;
    }else{

    }

    if(mensaje == ""){
        alert("Escribe un mensaje")
    }

    const descifrado = CryptoJS.AES.decrypt(mensaje, clave);
    document.getElementById("txtPlano").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    const filename = "CifradoAES.txt";

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById("botonCifrar").addEventListener("click", function(){
        var text = document.getElementById("txtPlano").value;

        cifrar(filename, text);
    }, false);

}

function abrirArchivo1(evento){
    const archivo = evento.target.files[0];
    if(archivo){
        const reader = new FileReader();
        reader.onload = function(e){
            const contenidotxt = e.target.result;
            document.getElementById('textocifrado1').innerText = contenidotxt;
        };
        reader.readAsText(archivo);
    }else{
        alert("No se ha seleccionado ningun archivo");
    }    
}
window.addEventListener('load', () => {
    document.getElementById('file1').addEventListener('change', abrirArchivo1);
})

function descifrar24(){
    const mensaje = document.getElementById('textocifrado1').value;
    const clave = document.getElementById("pass3").value;

    if(clave.length != 24){
        alert("Deben ser 24 caracteres");
        return;
    }else{

    }

    if(mensaje == ""){
        alert("Escribe un mensaje")
    }

    const descifrado = CryptoJS.AES.decrypt(mensaje, clave);
    document.getElementById("txtPlano2").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    const filename = "CifradoAES.txt";

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById("botonCifrar").addEventListener("click", function(){
        var text = document.getElementById("txtPlano2").value;

        descifrar24(filename, text);
    }, false);

}

function abrirArchivo2(evento){
    const archivo = evento.target.files[0];
    if(archivo){
        const reader = new FileReader();
        reader.onload = function(e){
            const contenidotxt = e.target.result;
            document.getElementById('textocifrado2').innerText = contenidotxt;
        };
        reader.readAsText(archivo);
    }else{
        alert("No se ha seleccionado ningun archivo");
    }    
}
window.addEventListener('load', () => {
    document.getElementById('file2').addEventListener('change', abrirArchivo2);
})

function descifrar32(){
    const mensaje = document.getElementById("textocifrado2").value;
    const clave = document.getElementById("pass5").value;

    if(clave.length != 32){
        alert("Deben ser 32 caracteres");
        return;
    }else{

    }

    if(mensaje == ""){
        alert("Escribe un mensaje")
    }

    const descifrado = CryptoJS.AES.decrypt(mensaje, clave);
    document.getElementById("txtPlano3").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    const filename = "CifradoAES.txt";

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById("botonCifrar").addEventListener("click", function(){
        var text = document.getElementById("txtPlano").value;

        descifrar32(filename, text);
    }, false);

}
