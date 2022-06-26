let lastBmi=0;
let lastWeight=0;

/* let bmiWertCount = 1

const addBmiWert = (number, date = new Date())=>{
    const datumBmiWert.createElement("p")
    datumBmiWert = date
    const saveBmiLast.createElement("p")
    const lastBmi = document.querySelector("#BMIwert").value;
    const newBmiWert${number}
    console.log
    bmiWertCount++
}

addBmiWert(bmiWertCount) */



function berechnung () {
    const alter = document.querySelector("#alter").value
    const gewicht = document.querySelector("#gewicht").value
    const größe = document.querySelector("#größe").value
    const sex = document.querySelector("#sex").value
    const BMIwert = document.querySelector("#BMIwert")
    const prev = document.querySelector("#show")
    if (alter == 0 || gewicht == 0 || größe == 0)
    {alert("Ihre Eingabe ist nicht korrekt"); return}
    let result = gewicht/((größe/100)**2)
    BMIwert.innerHTML=result.toFixed(2);
    let resumee = document.createElement("p");
    resumee =`Sie sind ${alter} Jahre alt,\n 
    Ihre Größe ist ${größe/100} m\n
    und sie wiegen derzeit ${gewicht} Kilogramm.`;
    let zusammenfassungEingabe=document.querySelector("#zusammenfassungEingabe")
    zusammenfassungEingabe.textContent=resumee;
    //text.classList.add("add");
    compareBMI(result.toFixed(2),gewicht)
    const auswertung=document.querySelector('#auswertung')
    auswertung.style.display=("inline-block")
}

const button = document.querySelector("button")
button.addEventListener('click', berechnung)

/* async function evaluation() {
    
} */

/* function toggleSex() {
    {
        on: 'männlich',
        off: 'weiblich'
    });
}
const sexToggle = document.querySelector('#toggle_sex')
sexToggle.classList.add('.bootstrapToggle')
sexToggle.addEventListener('click', toggleSex()) */

const saveBmiLast = (latest,gewicht) => {
    const lastBmiWert = latest;
    const lastWeightWert = gewicht
    localStorage.setItem("last_BMI", latest);
    localStorage.setItem("Datum", new Date());
    localStorage.setItem("last_Weight", gewicht)
    console.log(lastBmiWert, lastWeightWert)
};
    
const compareBMI = (newBmiValue) => {
    const lastBmi = localStorage.getItem("last_BMI");
    const lastDate = localStorage.getItem("Datum");
    const lastWeight = localStorage.getItem("last_Weight");
    const newBmi = newBmiValue
    const newWeight = gewicht

    console.log(lastBmi, newBmi)
    let text = ""
    const differenzKg = newWeight - lastWeight
    const differenzBmi = newBmi - lastBmi
        if (newBmi > lastBmi) { 
            text= `Sie haben Ihr Gewicht um ${differenzKg.toFixed(1)} kg aufgebaut. Ihr BMI-Wert ist damit um ${differenzBmi.toFixed(1)} Einheiten gestiegen`
        } else if (newBmi === lastBmi) {
            text= "Ihr BMI hat sich nicht verändert, weil sie Ihr Gewicht gehalten haben"
        } else {
            text= `Sie haben Ihr Gewicht um ${differenzKg.toFixed(1)*-1} kg abgebaut. Ihr BMI-Wert ist damit um ${differenzBmi.toFixed(1)*-1} Einheiten gefallen`
        }
        document.querySelector("#vergleich").innerHTML = text;
        saveBmiLast(newBmi)
  };

    