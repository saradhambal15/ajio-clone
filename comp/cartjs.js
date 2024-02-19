if (localStorage.getItem('CART') === null) {
  localStorage.setItem('CART', JSON.stringify([]))
}

var A = document.getElementById('BRT')
var B = document.getElementById('EMP')
var C = localStorage.getItem('CART')
C = JSON.parse(C)

if (C[0] == undefined) {
  document.getElementById('float').style.display = 'block'
  document.getElementById('blk').style.display = 'block'
  document.getElementById('TOT_SW').style.display = 'none'
}

if (C == []) {
  B.style.display = 'block'
}
if (C.length != 0) {
  B.style.display = 'none'
  C.map(function (prod) {
    var BOX = document.createElement('div')
    BOX.style.width = '97%'
    BOX.style.height = '160px'
    BOX.style.marginTop = '10px'
    BOX.style.border = '1px solid rgb(204, 204, 204)'
    BOX.style.display = 'flex'
    var im = document.createElement('img')
    im.src = prod.image1
    var nm = document.createElement('div')
    nm.style.width = '30%'
    nm.style.height = '80%'
    nm.style.fontSize = '14px'
    nm.style.padding = '15px'
    nm.innerHTML = prod.brand + ' - ' + prod.name
    var size = document.createElement('div')
    size.style.display = 'flex'
    size.style.padding = '15px'
    size.style.marginRight = '5%'

    var el = document.createElement('p')
    el.innerHTML = 'Size'
    el.style.color = 'rgb(153, 153, 153)'
    el.style.fontSize = '15px'
    var le = document.createElement('p')
    le.innerHTML = 'M'
    le.style.fontSize = '15px'
    le.style.marginLeft = '10px'
    le.style.margin = '10px'
    le.style.marginTop = '0px'
    var ell = document.createElement('p')
    ell.innerHTML = 'Qty'
    ell.style.color = 'rgb(153, 153, 153)'
    ell.style.fontSize = '15px'
    var lle = document.createElement('p')
    lle.innerHTML = '1'
    lle.style.fontSize = '15px'
    lle.style.marginLeft = '10px'
    lle.style.marginRight = '10px'
    size.append(el, le, ell, lle)
    var PR = document.createElement('div')
    PR.style.width = '40%'
    PR.style.height = '100%'

    var sav1 = document.createElement('div')
    sav1.style.fontSize = '15px'
    var s1 = document.createElement('div')
    s1.innerHTML = 'Savings: '
    s1.style.marginRight = '5px'
    var s2 = document.createElement('div')
    var RAND = Math.ceil(Math.random() * 1000)
    var x = RAND + Number(prod.price)
    s2.innerHTML = ' Rs. ' + x
    s2.style.color = 'rgb(235, 197, 139)'
    sav1.style.display = 'flex'
    sav1.style.justifyContent = 'flex-end'
    sav1.style.padding = '15px'
    sav1.append(s1, s2)
    var sav2 = document.createElement('div')
    var y = x + Number(prod.price)
    var s3 = document.createElement('div')
    s3.innerHTML = 'Rs. ' + y
    s3.style.textDecoration = 'line-through'
    var s4 = document.createElement('div')
    var RAN = Math.ceil(Math.random() * 100)
    s4.innerHTML = '(' + RAN + '%)'
    sav2.style.fontSize = '14px'
    sav2.style.display = 'flex'
    sav2.style.justifyContent = 'flex-end'
    sav2.style.paddingRight = '15px'
    sav2.style.color = 'rgb(205, 202, 145)'
    sav2.append(s3, s4)
    var sav3 = document.createElement('div')
    var s6 = document.createElement('div')
    s6.innerHTML = 'Rs. ' + prod.price
    s6.style.textAlign = 'right'
    s6.style.width = '80px'
    s6.style.border = '8px solid rgb(23, 108, 147)'
    s6.style.borderStyle = 'none none none solid'
    s6.style.marginRight = '15px'
    s6.style.backgroundColor = 'rgb(225, 236, 241)'
    sav3.style.display = 'flex'
    sav3.style.justifyContent = 'flex-end'
    sav3.append(s6)
    var sav4 = document.createElement('div')
    sav4.style.fontSize = '14px'
    sav4.style.textAlign = 'right'
    sav4.style.marginTop = '30px'
    var s7 = document.createElement('button')
    s7.innerHTML = 'Delete'
    s7.style.marginRight = '35px'
    s7.style.border = 'none'
    s7.style.backgroundColor = 'white'
    s7.style.color = 'rgb(113, 138, 176)'
    s7.style.cursor = 'pointer'
    var s8 = document.createElement('button')
    s8.innerHTML = 'Move to Closet'
    s8.style.marginRight = '15px'
    s8.style.border = 'none'
    s8.style.backgroundColor = 'white'
    s8.style.cursor = 'pointer'
    s8.style.color = 'rgb(113, 138, 176)'
    sav4.append(s7, s8)
    PR.append(sav1, sav2, sav3, sav4)
    BOX.append(im, nm, size, PR)
    A.append(BOX)
  })

  var coun = document.getElementById('Counnt')
  coun.innerHTML = '(' + C.length + ' item)'

  var XX = C.reduce(function (accumulator, currentValue) {
    return accumulator + Number(currentValue.price)
  }, 0)
  console.log(XX)
  var AA = document.getElementById('AA')
  var Rand = Math.ceil(Math.random() * 1000)
  var yy = Rand + XX
  AA.innerHTML = 'Rs. ' + yy
  var AB = document.getElementById('AB')
  AB.innerHTML = 'Rs. ' + Rand
  var zz = 0
  var AC = document.getElementById('AC')
  if (XX > 599) {
    zz = 0
  } else {
    zz = Math.ceil(Math.random() * 100)
    AC.innerHTML = 'Rs. ' + zz
  }
  var AD = document.getElementById('AD')
  var ARR = []
  var z = XX + zz
  var my = z.toString()
  smy = my.split('')
  if (smy.length > 3) {
    smy.reverse()
    var h = smy.splice(0, 3)
    h.push(',')
    for (let i = 0; i < smy.length; i++) {
      h.push(smy[i])
    }
    h.reverse()
    h = h.join('')
    AD.innerHTML = 'Rs. ' + h
    ARR.push(h)
  } else {
    var ss = XX + zz
    AD.innerHTML = 'Rs. ' + ss
    ARR.push(ss)
  }
}
function store() {
  var JJ = localStorage.getItem('ADDRES')
  JJ = JSON.parse(JJ)

  if (JJ[0] == undefined) {
    document.getElementById('float').style.display = 'block'
    document.getElementById('blk').style.display = 'block'
  } else {
    localStorage.setItem('PR', JSON.stringify(ARR))
    window.open('deli_detes.html')
  }
}
