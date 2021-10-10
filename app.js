const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

let day = new Date()

hr.style.transform = `rotateZ(${(day.getHours() * 30) + (day.getMinutes() * deg) / 12}deg)`
mn.style.transform = `rotateZ(${day.getMinutes() * deg}deg)`
sc.style.transform = `rotateZ(${day.getSeconds() * deg}deg)`

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
}, 1000)
