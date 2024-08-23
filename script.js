const textArea = document.querySelector('.input-text__textarea');
const mensaje = document.querySelector('.output-text__textarea');

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada){
    let matriz = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matriz.length; i++) {
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptada;
}


function desencriptar(stringDesencriptado){
    let matriz = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for (let i = 0; i < matriz.length; i++) {
        if(stringDesencriptado.includes(matriz[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringDesencriptado;
}


