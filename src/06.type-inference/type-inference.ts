//Inferencia de tipos, e quando o propio typescript já declara o tipo que é a variavel
{
    let message = "messagem definida"
    message = "string nova"

    window.addEventListener('click', (e) => {
        console.log(e.target)
    })
}