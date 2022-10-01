let global={
    funcoes:{
        showUser:()=>{
            let userCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"))
            $("#user").html(userCorrente.login)
        },
        init:()=>{
            global.funcoes.showUser()
        }
    }
}
$(document).ready(()=>{
    global.funcoes.init()
})