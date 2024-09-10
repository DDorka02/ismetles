export default class Kartya {
    //adattagok
    #obj={}
    #szuloELEM;
    //construktor
    constructor(obj,szuloELEM){
        this.#obj=obj
        this.#szuloELEM=szuloELEM
        this.kutyaKiir()
        this.gombElem=$(".kivalaszt:last")
        //console.log(this.gombElem)
        this.esemenyKezelo()
    }
    //tagfüggvény
    kutyaKiir() {
        this.#szuloELEM.append(`<div class="card col-lg-4 col-md-6">
          <div class="card-body">
          <h3 class="card-title">${this.#obj.nev}</h3>
          <p>kor: ${this.#obj.kor}</p>
          <p>nem: ${this.#obj.nem}</p>
          <button type="button" class="btn btn-success kivalaszt">Kiválaszt</button>
          
          </div>
          </div>`)
        }

    esemenyKezelo(){
        this.gombElem.on("click",function(){
            console.log(this)
            const e = new CustomEvent("kivalaszt",{detail:this.#obj})
            window.dispatchEvent(e)
          })
        }
}
