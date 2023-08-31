// Cria uma nova data através da classe Date
var data = new Date()
console.log(data);

// Retorna o dia da semana
var diaDaSemana = data.getDay()
console.log(diaDaSemana)

// Retorna o dia do Mês
var dia = data.getDate()
console.log(dia)

// Retorna qual o mês 0 - 11
var mes = data.getMonth()
console.log(mes)

// Retorna o ano com 4 digitos
var ano = data.getFullYear()
console.log(ano)

// Milisegundos à partir de 1970 até a data atual.
var timestamp = data.getTime()
console.log(timestamp)

// Data e hora pt-br
var dataPtBr = data.toLocaleDateString()
console.log(dataPtBr)
var horaPtBr = data.toLocaleTimeString()
console.log(horaPtBr)
var dataHoraPtBr = data.toLocaleString()
console.log(dataHoraPtBr)

// Usando o parametro options para formatação da data
const options = {
    year: 'numeric',
    month: 'numeric',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    era: 'long',
    timeZoneName: 'long',
    timeZone: 'America/Sao_Paulo',
    hour12: false
}

var dataFormatada = data.toLocaleDateString("pt-br", options)
console.log(dataFormatada)