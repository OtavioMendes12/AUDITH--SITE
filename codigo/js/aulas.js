let aulas={
    campos:{
        nome : $("#nome"),
        sobrenome : $("#sobrenome"),
        email : $("#email"),
        rangeAulas : $("#rangeAulas"),
        nivel : $("[name='nivel']:checked"),
        meiocomunicacao : $("[name='meiocomunicacao']:checked"),
        experiencia : $("#experiencia"),
        nivelExperiencia: {
            "n": "Nenhum",
            "b": "Básico",
            "m": "Médio",
            "a": "Avançado"
        },
    },
    funcoes:{
        cargaInicial:() =>{
            var aulasJSON = localStorage.getItem('db_aulas');
            if (!aulasJSON) {  // Se NÃO há dados no localStorage
                
                let parametrosAlert ={
                    position: 'top-end',
                    icon: 'info',
                    title: `Dados de aulas não encontrados no localStorage. \n Fazendo carga inicial.`,
                    showConfirmButton: false,
                    timer: 2500,
                    toast:true,
                    timerProgressBar: true,
                }
                swal.fire(parametrosAlert)
        
                db_aulas = dadosIniciaisAulas;
        
                localStorage.setItem('db_aulas', JSON.stringify (dadosIniciaisAulas));
            }
        },
        cadastrarAulas:() => { 
            let Aula = {
                "nome": aulas.campos.nome.val(),
                "sobrenome": aulas.campos.sobrenome.val(),
                "email": aulas.campos.email.val(),
                "rangeAulas": aulas.campos.rangeAulas.val(),
                "nivel": $("[name='nivel']:checked").val(),
                "meiocomunicacao": $("[name='meiocomunicacao']:checked").val(),                     
            }
            if( !aulas.campos.nome.val() || !aulas.campos.sobrenome.val() || !aulas.campos.email.val() || !aulas.campos.rangeAulas.val() || !$("[name='nivel']:checked").val() || !$("[name='meiocomunicacao']:checked").val() ){
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
            db_aulas.aulas.push(Aula);
            localStorage.setItem('db_aulas', JSON.stringify (db_aulas));
            let parametrosAviso = {
                icon: "success",
                title: "Sucesso",
                timer:2000,
                timerProgressBar: true,
                showConfirmButton: false,
                html: "Aula cadastrada com sucesso"
            }
            aulas.funcoes.limparCampos()
            swal.fire(parametrosAviso)
        },
        limparCampos:()=>{
            $("input").val("")
        },
        listarAulas:()=>{
            $('#tableAulas').DataTable({
                destroy: true,
                data: db_aulas.aulas,
                columns: [
                    {
                        "data": "nome",
                        "render": function(data, type, row){
                            return `${data} ${row?.sobrenome ?? ''}` 
                        }
                    },
                    {"data": "email"},
                    {"data": "rangeAulas"},
                    {"data": "nivel",
                    "render": function(data) {
                        return aulas.campos.nivelExperiencia[data] ?? ""
                    }
                },
                    {"data": "meiocomunicacao"},
                ]
            });
        },
        init:()=>{
            var aulasJSON = localStorage.getItem('db_aulas');
            db_aulas = JSON.parse(aulasJSON);   
            aulas.funcoes.cargaInicial()
            aulas.funcoes.listarAulas();
        }
    }
}
$(document).ready(()=>{
    aulas.funcoes.init()
})