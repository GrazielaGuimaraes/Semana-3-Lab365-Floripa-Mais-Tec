
//Cria uma instância do objeto Date
let datas = new Date()

//Pega a hora atual (sem minutos nem segundos)
let hora = (datas.getHours())

document.getElementById('body').onload  = function(){


    //24:00 até 05:59
if(hora > 23 && hora < 6){
    console.log('São: ' + hora + datas.getMinutes() +  ' da Madrugada')
    document.getElementById('hora').textContent = 'São: ' + hora + datas.getMinutes() +  ' da Madrugada'

 //06:00 até 11:59
} else if(hora >= 6 && hora < 12) {
    console.log('Bom dia! Hora atualizada: ' + hora + ':' + datas.getMinutes())
    document.getElementById('hora').textContent = 'Bom dia! Hora atualizada: ' + hora + ':' + datas.getMinutes()

//12:00 até 17:59
} else if(hora >= 12 && hora < 18){
    console.log('Boa tarde! São: ' + hora + ':' + datas.getMinutes())
    document.getElementById('hora').textContent = 'Boa tarde! São: ' + hora + ':' + datas.getMinutes()
}  
    //18:00 até 23:00
    else {
        
      console.log('Boa noite! São: ' + hora + ':' + datas.getMinutes())
    document.getElementById('hora').textContent = 'Boa noite! São: ' + hora + ':' + datas.getMinutes()
    }

}


function calcular() {

    if(document.getElementById('n1').value == '' || document.getElementById('n2').value == '' || isNaN(document.getElementById('n1').value) || isNaN(document.getElementById('n2').value)) {

        alert('Insira os valores corretamente!')

    } else {

        let soma = Number(document.getElementById('n1').value) +  Number(document.getElementById('n2').value )
        document.getElementById('resultadoCalculadora').textContent =  soma
    }

   
}


/************** ATIVIDADE 2 SEMANA#3 ******************/


let opcao_usuario = prompt('Insira um número de 1 até 4')

opcao_usuario = parseInt(opcao_usuario)


switch(opcao_usuario) {


    case 1: 
    console.log('Opção selecionada: ' + opcao_usuario)
    break

    case 2:
    console.log('Opção selecionada: ' + opcao_usuario)
    break

    case 3:
    console.log('Opção selecionada: ' + opcao_usuario)
    break

    case 4:
    console.log('Opção selecionada: ' + opcao_usuario)
    break

    default:
    console.log('Opção inválida: ' + opcao_usuario)
    break




} //fim switch

