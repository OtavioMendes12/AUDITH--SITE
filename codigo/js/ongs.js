var db_ONGs= {};
let ongs={
    campos:{
        nome:$("#inputNome"),
        telefone:$("#inputTelefone"),
        email:$("#inputEmail"),
        cidade:$("#inputCidade"),
        categoria:$("#inputCategoria"),
        site:$("#inputSite"),
    },
    funcoes: {
        cargaInicial:() =>{
            var ONGsJSON = localStorage.getItem('db_ONGs');

            if (!ONGsJSON) {  // Se NÃO há dados no localStorage
                
                let parametrosAlert ={
                    position: 'top-end',
                    icon: 'info',
                    title: `Dados de Ongs não encontrados no localStorage. \n Fazendo carga inicial.`,
                    showConfirmButton: false,
                    timer: 2500,
                    toast:true,
                    timerProgressBar: true,
                }
                swal.fire(parametrosAlert)
        
                db_ONGs = dadosIniciaisOngs;
        
                localStorage.setItem('db_ONGs', JSON.stringify (dadosIniciaisOngs));
            }
        },
        cadastrarONGs:() => { 
            let ONG = {
                "nome" : ongs.campos.nome.val(),
                "telefone" : ongs.campos.telefone.val(),
                "email" : ongs.campos.email.val(),
                "cidade" : ongs.campos.cidade.val(),
                "categoria" : ongs.campos.categoria.val(),
                "site" : ongs.campos.site.val(),
            }
            if( !ongs.campos.nome.val() || !ongs.campos.telefone.val() || !ongs.campos.email.val() || !ongs.campos.cidade.val() || !ongs.campos.categoria.val() || !ongs.campos.site.val() ){
                let parametrosAviso = {
                    icon: "warning",
                    title: "Aviso",
                    timer:2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    html: "Possui campos vazios"
                }
                swal.fire(parametrosAviso)
                return
            }
            db_ONGs.ONGs.push(ONG);
            localStorage.setItem('db_ONGs', JSON.stringify (db_ONGs));
            let parametrosAviso = {
                icon: "success",
                title: "Sucesso",
                timer:2000,
                timerProgressBar: true,
                showConfirmButton: false,
                html: "ONG cadastrada com sucesso"
            }
            ongs.funcoes.limparCampos()
            swal.fire(parametrosAviso)
        },
        limparCampos:()=>{
            $("input").val("")
        },
        listarOngs:()=>{
            $('#tableONGs').DataTable({
                destroy: true,
                data: db_ONGs.ONGs,
                columns: [
                    {"data": "nome"},
                    {"data": "telefone"},
                    {"data": "email",
                    "render": function(data){
                        return `<a href="mailto:${data}">${data}</a>`
                    }},
                    {"data": "cidade"},
                    {"data": "site",
                "render": function(data){
                    return `<a href="${data}" target="_blank">${data}</a>`
                }},
                ]
            });
        },
        init:()=>{
            var ongsJSON = localStorage.getItem('db_ONGs');
            db_ONGs = JSON.parse(ongsJSON);   
            ongs.funcoes.cargaInicial()
            ongs.funcoes.listarOngs()
        }
    }
}
$(document).ready(()=>{
    ongs.funcoes.init()
})