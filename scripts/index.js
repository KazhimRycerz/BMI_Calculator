

function berechnung () {
    const alter = document.querySelector("#alter").value
    const gewicht = document.querySelector("#gewicht").value
    const größe = document.querySelector("#größe").value
    const sex = document.querySelector("#sex").value
    const BMIwert = document.querySelector("#BMIwert")
    const prev = document.querySelector("#show")
    if (alter == 0 || gewicht == 0 || größe == 0)
    {alert("Ihre Eingabe ist nicht korrekt"); return}
    //const alterValue = alter.value
    //const gewichtValue = gewicht.value
    //const größeValue = größe.value
    //console.log(sex, alter, gewicht)
    //const sexValue = sex.value
    let result = gewicht/((größe/100)**2)
    BMIwert.innerHTML=result.toFixed(2);
    let resumee = document.createElement("p");
    resumee =`Sie sind ${alter} Jahre alt,\n 
    Ihre Größe ist ${größe/100} m\n
    und sie wiegen derzeit ${gewicht} Kilogramm.`;
    prev.before(resumee);
    //text.classList.add("add");
    const auswertung=document.querySelector('#auswertung')
    auswertung.style.display=("inline-block")
}

const button = document.querySelector("button")
button.addEventListener('click', berechnung)

async function evaluation() {
    
}

/* function toggleSex() {
    {
        on: 'männlich',
        off: 'weiblich'
      });
}
const sexToggle = document.querySelector('#toggle_sex')
sexToggle.classList.add('.bootstrapToggle')
sexToggle.addEventListener('click', toggleSex()) */