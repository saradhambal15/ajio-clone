var J = localStorage.getItem('TEMP')
J = JSON.parse(J)
document.getElementById('name').innerHTML = J[0].name
document.getElementById('TILE').innerHTML = J[0].name
document.getElementById('price').innerHTML = 'Rs. ' + J[0].price
document.getElementById('brand').innerHTML = J[0].brand
var ex = Number(J[0].price) + 256
var str = document.getElementById('str')
str.style.textDecoration = 'line-through'
str.innerHTML = 'Rs. ' + ex
str.style.marginRightt = '5px'
document.getElementById('per').innerHTML = '(26% off)'

var IMG1 = document.getElementById('AA')
var aI = document.createElement('img')
aI.src = J[0].image1
aI.style.width = '100%'
IMG1.append(aI)
var IMG2 = document.getElementById('AB')
var bI = document.createElement('img')
bI.src = J[0].image2
bI.style.width = '100%'
IMG2.append(bI)
var IMG3 = document.getElementById('AC')
var cI = document.createElement('img')
cI.src = J[0].image3
cI.style.width = '100%'
IMG3.append(cI)
var IMG4 = document.getElementById('AD')
var dI = document.createElement('img')
dI.src = J[0].image4
dI.style.width = '100%'
IMG4.append(dI)

var M = document.getElementById('mains-img')
var m = document.createElement('img')
m.style.width = '100%'
var i = 0
var im = [J[0].image1, J[0].image2, J[0].image3, J[0].image4]
m.src = im[i]
M.append(m)
setInterval(function () {
  if (i > 3) {
    i = 0
  }
  m.src = im[i]
  M.append(m)
  i++
}, 4000)
console.log(J)

if (localStorage.getItem('CART') === null) {
  localStorage.setItem('CART', JSON.stringify([]))
}

function add() {
  document.getElementById('float').style.display = 'block'
  document.getElementById('blk').style.display = 'block'
  var cart = []
  cart.push(J[0])
  let cart_data = JSON.parse(localStorage.getItem('CART'))
  cart_data.push(J[0])
  localStorage.setItem('CART', JSON.stringify(cart_data))
  setTimeout(function () {
    document.getElementById('float').style.display = 'none'
    document.getElementById('blk').style.display = 'none'
  }, 2000)
}
