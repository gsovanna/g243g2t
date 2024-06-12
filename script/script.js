const btn = document.querySelector("#btnlogin");
const inpuUsuario = documen.querySelector("usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        window.location.href = "http://www.uol.com.br";
    }
})();

btn.onclick = (e) =>{
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
    if (usuario === "thales"){
        if(senha === "JirayaCRIA"){
            localStorage.setItem("usuario",usuario);
            window.location.href = "http://www.uol.com.br";
        }else{
            inputUsuario.focus();
        }
    }
}