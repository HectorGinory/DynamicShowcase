// Drag and Drop Functions
function allowDrop(ev) {
    ev.preventDefault();
  }
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    addArticle();
  }  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    addArticle();
  }

//Total buy price
let shop = document.getElementById('shoppingList');
let buyPrice = 0;

function addArticle() {
  let totalPrcHtml = document.getElementById('totalprc');
  let articleList = shop.getElementsByClassName('article');
  totalPrcHtml.innerText = '';

  let buyPrice = 0;

  for (let i = 0; i < articleList.length ;i++ ) {
    let priceAdd = Number(articleList[i].getElementsByClassName('total-prc')[0].innerHTML);
    let add = priceAdd + buyPrice;
    buyPrice = add;
  }
  let totalPrcContain = document.createTextNode(buyPrice)
  totalPrcHtml.appendChild(totalPrcContain);
}

//Total article price shown in label
let articleArr = new Array();
articleArr.push(document.getElementsByClassName('article'));

function totalPrcArticle() {
  articleArr.map( article => {
    let amountArray = document.getElementsByClassName('amount');
    let totalPrice = document.getElementsByClassName('total-prc');
    let actualPrice = document.getElementsByClassName('actual-prc');
    for (let i = 0; i < amountArray.length; i++) {
     let amount = Number(amountArray[i].innerHTML);
     let price = Number(actualPrice[i].innerHTML)
     let labelPrc = String(amount * price);
     totalPrice[i].innerHTML = Math.round(labelPrc, -4);
    }
   })
}
totalPrcArticle()

// Amount add and substract

console.log(articleArr[0])
function addAmount(index) {
  temporalAmount = Number(articleArr[0][index].getElementsByClassName('amount')[0].innerHTML)
  temporalAmount ++
  articleArr[0][index].getElementsByClassName('amount')[0].innerHTML = temporalAmount
  totalPrcArticle()
  addArticle()
}

function substractAmount(index) {
  temporalAmount = Number(articleArr[0][index].getElementsByClassName('amount')[0].innerHTML)
  if (temporalAmount > 1) {
    temporalAmount --
  } 
  articleArr[0][index].getElementsByClassName('amount')[0].innerHTML = temporalAmount
  totalPrcArticle()
  addArticle()
}