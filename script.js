function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora >= 0 && hora < 12) {

        img.src = 'https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
        document.body.style.backgroundColor = 'yellow'
    } else if (hora >= 12 && hora < 18) {

        img.scr = 'https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        document.body.style.backgroundColor = 'orange'
    } else {

        img.src = 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
        document.body.style.backgroundColor = '#7171cc'      
    }



}