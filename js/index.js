let lists = document.querySelectorAll("a");
let backBtn = document.getElementById('backBtn')
let cards = document.getElementById('cards')

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', function() {
    for (let x = 0; x < lists.length; x++) {
      if (lists[x] == this) {
        lists[x].classList.add('active');
      } else {
        lists[x].classList.remove('active');
      }
    }
  });
}

let btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    for (let x = 0; x < btns.length; x++) {
      if (btns[x] == this) {
        btns[x].classList.add('btns');
      } else {
        btns[x].classList.remove('btns');
      }
    }
  });
}


import db from './db.json' assert {type: 'json'};


// fetch(db)
//       .then(response => response.json())
//       .then(json => console.log(json))


console.log(db.categorys);

cards.innerHTML += 
`<div class="wrapper_cards__card" id="show-Modal">
                <div class="wrapper_cards__card-img">
                    <img src=${db.achchiq[0].image} alt="">
                </div>
                <div class="wrapper_cards__card-info">
                    <h4>${db.achchiq[0].title}</h4>
                    <p>${db.achchiq[0].description}</p>
                </div>
                <button>${db.achchiq[0].price}</button>
            </div>`
            
cards.innerHTML+=`<div class="wrapper_cards__card" id="show-Modal">
                <div class="wrapper_cards__card-img">
                    <img src=${db.pishloqli[0].image} class="rounded" alt="">
                </div>
                <div class="wrapper_cards__card-info">
                    <h4>${db.pishloqli[0].title}</h4>
                    <p>${db.pishloqli[0].description}</p>
                </div>
                <button>${db.pishloqli[0].price}</button>
            </div>`
cards.innerHTML+=`<div class="wrapper_cards__card" id="show-Modal">
                <div class="wrapper_cards__card-img">
                    <img src=${db.goshtli[0].image} alt="">
                </div>
                <div class="wrapper_cards__card-info">
                    <h4>${db.goshtli[0].title}</h4>
                    <p>${db.goshtli[0].description.slice(0,80)}</p>
                </div>
                <button>${db.goshtli[0].price}</button>
            </div>`
cards.innerHTML+=`<div class="wrapper_cards__card" id="show-Modal">
                <div class="wrapper_cards__card-img">
                    <img src=${db.qoziqorinli[0].image} alt="">
                </div>
                <div class="wrapper_cards__card-info">
                    <h4>${db.qoziqorinli[0].title}</h4>
                    <p>${db.qoziqorinli[0].description}</p>
                </div>
                <button>${db.qoziqorinli[0].price}</button>
            </div>`
            let showModal = document.querySelectorAll('#show-Modal')
            let modal = document.querySelector(".modal")
              for(let i = 0; i<showModal.length;i++){
                showModal[i].addEventListener('click',()=>{
                  modal.classList.remove('hidden')
                })
                backBtn.addEventListener('click',()=>{
                  modal.classList.add('hidden')
                })
              }
        
            

              $(document).ready(function(){
                $("#show-Modal").click(function(){
                  $(".rounded").attr("src", $(this).parent().siblings().attr("Src"));
                })
              })