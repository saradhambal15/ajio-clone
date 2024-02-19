var block = document.getElementById('right')
var temp = []

var KATO = localStorage.getItem('CATO')
KATO = JSON.parse(KATO)

var A = [...KATO[0]]
var BBA = [...KATO[0]]
function pp() {
  console.log(1)
  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }

  BBA.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

function lh() {
  console.log(2)
  A = A.sort(function (a, b) {
    return Number(a.price) - Number(b.price)
  })

  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

function hl() {
  console.log(3)
  A = A.sort(function (a, b) {
    return Number(b.price) - Number(a.price)
  })

  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

document.getElementById('SA').addEventListener('click', pp)
document.getElementById('SB').addEventListener('click', lh)
document.getElementById('SC').addEventListener('click', hl)
// console.log(KATO[0])
function definer() {
  localStorage.setItem('junk', JSON.stringify(A[0].name))
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}
definer()
var abb = []
function cato(arr) {
  var len = abb.length
  if (len != 0) {
    abb = []
  }
  abb.push(arr)
  let ABB = JSON.stringify(abb)
  localStorage.setItem('CATO', ABB)
  window.open('catologue.html')
}

function BB() {
  if (localStorage.getItem('ADDRES') !== undefined) {
    var azz = localStorage.getItem('ADDRES')
    azz = JSON.parse(azz)

    setTimeout(function () {
      var ar = document.getElementById('user_info')
      ar.innerHTML = 'Hi ' + azz[0].Name
      var arz = document.getElementById('s_IN')
      arz.innerHTML = 'Sign Out'
    }, 300)
  }
}
BB()

for (let i = 0; i < elem.length; i++) {
  if (A[0].name == elem[i]) {
    console.log(elem)
    document.getElementById('headTCXT').innerHTML = pro[i].head
    document.getElementById('SubYXY').innerHTML = pro[i].title
    document.getElementById('dat').innerHTML = pro[i].dat

    break
  }
}

var k = true
function myFunction1() {
  var x = document.getElementById('dropdown-content1')
  if (k == true) {
    x.style.display = 'block'
    k = false
  } else {
    x.style.display = 'none'
    k = true
  }
}
function myFunction2() {
  var y = document.getElementById('dropdown-content2')
  if (k == true) {
    y.style.display = 'block'
    k = false
  } else {
    y.style.display = 'none'
    k = true
  }
}
function gen(e) {
  e.preventDefault()
  var ans = document.getElementById('gen1')
  ans.style.display = 'block'
}
var K = true
function cat(e) {
  e.preventDefault()
  var ans = document.getElementById('cat1')
  if (K == true) {
    ans.style.display = 'none'
    K = false
  } else {
    ans.style.display = 'block'
    K = true
  }

  ans.style.display = 'block'
}
function dis(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('dis1')

  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function sf(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('sf1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function occ(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('occ1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function col(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('col1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function bra(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('bra1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function pri(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('pri1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}

document.getElementById('cat').addEventListener('click', cat)
document.getElementById('pri').addEventListener('click', pri)
document.getElementById('bra').addEventListener('click', bra)
document.getElementById('occ').addEventListener('click', occ)
document.getElementById('dis').addEventListener('click', dis)
document.getElementById('col').addEventListener('click', col)
document.getElementById('sf').addEventListener('click', sf)
document.getElementById('gen').addEventListener('click', gen)

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
function slee(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('slee1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function pat(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('pat1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function band(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('band1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function sha(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('sha1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function fab(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('fab1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function char(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('char1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
function colo(e) {
  e.preventDefault()
  var ans = document.getElementsByClassName('colo1')
  for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'block'
  }
}
document.getElementById('slee').addEventListener('click', slee)
document.getElementById('pat').addEventListener('click', pat)
document.getElementById('band').addEventListener('click', band)
document.getElementById('sha').addEventListener('click', sha)
document.getElementById('fab').addEventListener('click', fab)
document.getElementById('char').addEventListener('click', char)
document.getElementById('col').addEventListener('click', col)
