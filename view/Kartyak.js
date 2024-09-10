import Kartya from "./Kartya.js"

export default class Kartyak{
    #lista=[]
    #taroloELEM
    constructor(lista,taroloELEM){
        this.#lista=lista
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty
        this.kutyaKiir()
    }

    kutyaKiir(){
        this.#lista.forEach((elem)=>{
            console.log(elem)
            new Kartya(elem,this.#taroloELEM)
          })
    }
}