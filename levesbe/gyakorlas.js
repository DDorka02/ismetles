import { kutyaLISTA } from "../adatok.js";
import Kartya from "../view/Kartya.js";
// ha megjelenítenénk a kutyák adatait tartalom divbe külön, egymás mellett

// HOZZUNK LÉTRe változokat

const cim = "Minden, amit a kutyáról tudni kell";
//cim="Ez egy..."
let nev = "Jenő";
nev = "Béla";
//console.log("név:",nev)

//címet írjuk a headerbe a meglévő cím alá
//megfogjuk a html elemet
const cimELEM = $("header");
//console.log(cimELEM)
cimELEM.append(`<p>${cim}</p>`);

console.log(kutyaLISTA[0].nev);

const TARTALOM = $(".tartalom");

kutyaLISTA.forEach((elem)=>{
  console.log(elem)
  new Kartya(elem,TARTALOM)
})