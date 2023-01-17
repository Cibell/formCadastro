$(document).ready(function(){
	//mascara de digitação dos inputs cpf/tel
	$("#cpf").mask("000.000.000-00")
	$("#tel").mask("(00) 0 0000-0000")

	$("#btBuscar").click(function(){
 
			var cepvalue = $("#cep").val();
		  $("#cep").val("");
			$.ajax({
				 url: `https://api.postmon.com.br/v1/cep/${cepvalue}` ,
				 type: "GET",
				 dataType: "json",
				 success: function (data) {
					 console.log(cepvalue)
					 
					 $("#logradouro").val(data.logradouro);
					 $("#complemento").val(data.complemento);
					 $("#bairro").val(data.bairro);
					 $("#uf").val(data.estado);
					 $("#cidade").val(data.cidade);
 
 
				 },
				 error: function(result) {
					 alert("CEP não encontrado");
					 debugger;
				 }
			
			 });
		});
		
		$.exibirDadosFormatoJson = function (data){ 
			
		   jsonStr = JSON.stringify(data),
			regeStr = '', 
		document.getElementById('regeStr').innerHTML += regeStr;  
	}



	$("#formCadastro").validate({
        rules:{
            nome:{
                required: true,
                minlength: 5,
            },
            data:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true,
                cpfBR: true
            },
            tel:{
                required: true
            },
            cep:{
                required: true
            },
            logradouro:{
                required: true
            },
            numero:{
                required: true
            },
            complemento:{
                required: true
            },
            bairro:{
                required: true
            },
            cidade:{
                required: true
            },
            uf:{
                required: true
            },
            bio:{
                required: true
            }
            
           
        }
       
    })
	   
 });


   
$("#btSubmit").click(function() {
    const nome = $("#nome").val()
    const data = $("#data").val()
    const cpf = $("#cpf").val()
    const tel = $("#tel").val()
    const email = $("#email").val()
    const logradouro = $("#logradouro").val()
    const cep = $("#cep").val()
    const numero = $("#numero").val()
    const bairro = $("#bairro").val()
    const cidade = $("#cidade").val()
    const uf = $("#uf").val()
    const bio = $("#bio").val()
   
    console.log(`Dados corretos, Nome: ${nome}, 
    Data de nascimento: ${data}, CPF: ${cpf}, 
    Telefone: ${tel}, E-mail: ${email},
    Logradouro: ${logradouro}, Cep: ${cep},
    Bairro: ${bairro}, Cidade: ${cidade},
    UF: ${uf}, BIO: ${bio}`)


    
    
  });
 





