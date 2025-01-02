function loading () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var now = new Date()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    const minutessFormatades = minutes.toString().padStart(2, '0')
    msg.innerHTML = `The time now is ${hour}:${minutessFormatades}.`
    if (hour >=6 && hour <12){
        msg.innerHTML+='<br/>Good morning!'
        img.src='MorningRounded.png'
        document.body.style.background = 'rgba(208,197,176,255)'
        img.style.boxShadow = '0px 4px 0px rgba(208,197,176,255)'
        img.style.border = '10px solid rgba(208,197,176,255)'
    }else if (hour >=12 && hour <= 18){
        msg.innerHTML+='<br/>Good afternoon!'
        img.src='AfternoonRounded.png'
        document.body.style.background='rgba(253,226,124,255)'
        img.style.boxShadow = '0px 4px 0px rgba(253,226,124,255)'
        img.style.border = '10px solid rgba(253,226,124,255)'
    }else {
        msg.innerHTML+='<br/>Good night!'
        img.src='NightRounded.png'
        document.body.style.background = 'rgba(103,185,195,255)'
        img.style.boxShadow = '0px 4px 0px rgba(103,185,195,255)'
        img.style.border = '10px solid rgba(103,185,195,255)'
    }
}
