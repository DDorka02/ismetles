export function kutyaKiir(kutya) {
    const TARTALOM = $(".tartalom");
    TARTALOM.append(`<div class="card col-lg-4 col-md-6">
      <div class="card-body">
      <h3 class="card-title">${kutya.nev}</h3>
      <p>kor: ${kutya.kor}</p>
      <p>nem: ${kutya.nem}</p>
      <button class=btn btn-succes>Kiválaszt</button>
      
      </div>
      </div>`)
  }