import { kutyaLISTA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";
const kivalasztottKutyaLista=[]
const TARTALOM = $(".tartalom");
const kivELEM= $(".kivalsztott")

new Kartyak(kutyaLISTA,TARTALOM)

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    console.log(kivalasztottKutyaLista)
    new Kartyak(kivalasztottKutyaLista,kivELEM)
})