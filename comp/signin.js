localStorage.setItem('Log', JSON.stringify([]))
function BB() {
  if (localStorage.getItem('ADDRES') !== undefined) {
    var azz = localStorage.getItem('ADDRES')
    azz = JSON.parse(azz)

    setTimeout(function () {
  var ar = document.getElementById('user_info')
  ar.innerHTML = 'Hi ' + azz[0].Name

}, 200)
  }
}
BB()

function fn() {
  document.getElementById('BLK_dn').style.display = 'block'
}
var O = {}
// SIGN IN
function sign() {
  document.getElementById('SIGN').style.display = 'block'
  document.getElementById('gre_bk').style.display = 'block'
}

function close() {
  document.getElementById('SIGN').style.display = 'none'
  document.getElementById('gre_bk').style.display = 'none'
}
var Jl = document.getElementById('JK')
Jl.addEventListener('click', close)
var addres = []

function subm(event) {
  var logs = document.getElementById('email').value
  event.preventDefault()

  var cc1 = document.getElementById('HD1')
  cc1.style.display = 'none'
  var cc2 = document.getElementById('HD2')
  cc2.style.display = 'none'
  var cc = document.getElementById('details')
  cc.style.display = 'block'
  cc.style.marginLeft = '35px'
  document.getElementById('mailFRM').innerHTML = logs
  O['email'] = logs
}

function thank() {
  var SSS = document.getElementById('SIGN')
  while (SSS.firstChild) {
    SSS.removeChild(SSS.firstChild)
  }
  var Thanks = document.createElement('div')
  Thanks.style.display = 'flex'
  Thanks.style.height = '100%'
  Thanks.style.justifyContent = 'center'
  Thanks.style.flexDirection = 'column'
  Thanks.style.alignContent = 'center'
  Thanks.style.textAlign = 'center'
  var msgs = document.createElement('h1')
  msgs.innerHTML = 'Thank You'
  msgs.style.marginBottom = '50px'
  msgs.style.color = 'rgb(171, 156, 116)'
  var msg_sub = document.createElement('h2')
  msg_sub.innerHTML = 'Continue Shopping'
  Thanks.append(msgs, msg_sub)
  SSS.append(Thanks)
  setTimeout(function () {
    document.getElementById('SIGN').style.display = 'none'
    document.getElementById('gre_bk').style.display = 'none'
  }, 2000)

  document.getElementById('s_IN').innerHTML = 'Sign Out'
  document.getElementById('user_info').innerHTML = 'Hi ' + O['Name']
}

if (localStorage.getItem('ADDRES') === null) {
  localStorage.setItem('ADDRES', JSON.stringify([]))
}

function tubm(event) {
  event.preventDefault()
  var gg = document.querySelector('input[name="gender"]:checked').value
  var NME = document.getElementById('namae').value
  var MOB = document.getElementById('mob').value
  var PASS = document.getElementById('passw').value
  var INV = document.getElementById('inv').value
  O['gender'] = gg
  O['Name'] = NME
  O['MOB'] = MOB
  O['PASS'] = PASS
  O['INV'] = INV
  var cc = document.getElementById('details')
  cc.style.display = 'none'
  var cdc = document.getElementById('addr')
  cdc.style.display = 'block'
}
function pubm(event) {
  event.preventDefault()
  var loc = document.getElementById('loc').value
  var str = document.getElementById('str').value
  var pin = document.getElementById('pin').value
  var cit = document.getElementById('cit').value
  var stat = document.getElementById('state').value
  var addr = { loc: loc, street: str, PINCODE: pin, CITY: cit, state: stat }
  O['loc'] = loc
  O['str'] = str
  O['PIN'] = pin
  O['city'] = cit
  O['state'] = stat
  addres.push(O)
  localStorage.setItem('ADDRES', JSON.stringify(addres))
  var cdc = document.getElementById('addr')
  cdc.style.display = 'none'
  thank()
}
document.getElementById('FORMF2').addEventListener('submit', pubm)
document.getElementById('FRMF').addEventListener('submit', tubm)
document.getElementById('Zfrm').addEventListener('submit', subm)
