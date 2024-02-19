var front_1 = [
  {
    img1: 'https://assets.ajio.com/medias/sys_master/images/images/h5f/hb5/34912270385182/23082021-d-unisex-topcarousel-p1-eoss-50to80.jpg',
  },
  {
    img1: 'https://assets.ajio.com/medias/sys_master/images/images/he3/h11/34918447153182/24082021-d-unisex-topcarousel-p3-ucb-40to70.jpg',
  },
  {
    img1: 'https://assets.ajio.com/medias/sys_master/images/images/h51/h35/34918447218718/24082021-d-unisex-topcarousel-p4-festivecollection-40to80.jpg',
  },
  {
    img1: 'https://assets.ajio.com/medias/sys_master/images/images/h9b/ha3/34918447284254/24082021-d-unisex-topcarousel-p5-ishin-upto70.jpg',
  },
  {
    img1: 'https://assets.ajio.com/medias/sys_master/images/images/h0a/h17/34918447349790/24082021-d-unisex-topcarousel-p6-diamondjewellery-flat30.jpg',
  },
]
var front_2 = [
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/ha7/h93/34775661674526/17082021-d-unisex-alliances-hsbc.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h9f/h86/34348649840670/05082021-d-unisex-banner1-sectionheader.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h9c/h49/34918449414174/24082021-d-unisex-flashdeal-accessories-min60.jpg',
  },
]
var front_4 = [
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h6e/hbf/34934979952670/24082021-d-unisex-banner1-p1-puma-flat50.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/hc5/hc9/34934979854366/24082021-d-unisex-banner1-p2-starting399.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/he4/hc7/34934980050974/24082021-d-unisex-banner1-p3-halfpricestore.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h62/h07/34934980182046/24082021-d-unisex-banner1-p4-babycare-toys.jpg',
  },
]
// First carousel
var k = document.getElementById('block1')
var an = document.createElement('IMG')
an.setAttribute('width', '100%')
an.setAttribute('height', '30%')
an.setAttribute('class', 'in-left')
an.src = front_1[0].img1

// second carousel
var k1 = document.getElementById('block5')
var ans = document.createElement('IMG')
ans.setAttribute('width', '100%')
ans.setAttribute('height', '30%')
ans.setAttribute('class', 'in-left')
ans.src = front_4[0].img

// First Wide Imagery
var k2 = document.getElementById('block2')
var ant = document.createElement('IMG')
ant.setAttribute('width', '100%')
ant.setAttribute('height', '30%')
ant.src = front_2[0].img
k2.appendChild(ant)

// Second Wide Imagery
var k3 = document.getElementById('block3')
var anu = document.createElement('IMG')
anu.setAttribute('width', '100%')
anu.setAttribute('height', '30%')
anu.src = front_2[1].img
k3.appendChild(anu)

// Third Wide Imagery
var k4 = document.getElementById('block4')
var anv = document.createElement('IMG')
anv.setAttribute('width', '100%')
anv.setAttribute('height', '100%')
anv.src = front_2[2].img
k4.appendChild(anv)

// Carousel
var i = 1
setInterval(function () {
  if (i == 4) {
    i = 0
  }
  an.src = front_1[i].img1
  ans.src = front_4[i].img
  i++
}, 3000)
k.appendChild(an)
k1.appendChild(ans)

// Fourth Wide grid
var block6 = [
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/hd2/he4/34348651479070/05082021-d-unisex-brands-premiumbrands-sectionheader.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/hc9/ha2/34855074758686/20082021-d-unisex-brands-puma-upto70.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h9c/h16/34855074824222/20082021-d-unisex-brands-nike-upto50.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/ha8/h60/34855074955294/20082021-d-unisex-brands-crocs-upto60.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/ha1/h14/34855075217438/20082021-d-unisex-brands-adidas-30to60.jpg',
  },
  {
    img: 'https://assets.ajio.com/medias/sys_master/images/images/h66/h50/29555043860510/13102020-D-unisex-ajiocares-strip.jpg',
  },
]
var k5 = document.getElementById('block7')
k5.style.overflow = 'hidden'
var anw = document.createElement('IMG')
anw.setAttribute('width', '100%')
anw.setAttribute('height', '85')
anw.src = block6[0].img
k5.appendChild(anw)
var k6 = document.getElementById('block7')
var anx = document.createElement('IMG')
anx.setAttribute('width', '100%')
anx.setAttribute('height', '140')
anx.src = block6[5].img
k6.appendChild(anx)

// additional banners
var ban01 = document.getElementById('block9')
var ban001 = document.createElement('img')
ban001.src = part2[0]
var ban002 = document.createElement('img')
ban002.src = part2[1]
ban01.append(ban001, ban002)
var ban02 = document.getElementById('block10')
var ban021 = document.createElement('img')
ban021.src = full1[0]
ban02.append(ban021)
var ban03 = document.getElementById('block11')
var ban031 = document.createElement('img')
ban031.src = full1[1]
ban03.append(ban031)
var ban04 = document.getElementById('block12')
var ban041 = document.createElement('img')
ban041.src = part4[0]
var ban042 = document.createElement('img')
ban042.src = part4[1]
var ban043 = document.createElement('img')
ban043.src = part4[2]

ban04.append(ban041, ban042, ban043)
var ban05 = document.getElementById('block13')
var ban051 = document.createElement('img')
ban051.src = part2a[0]
var ban052 = document.createElement('img')
ban052.src = part2a[1]
ban05.append(ban051, ban052)
var ban06 = document.getElementById('block14')
var ban061 = document.createElement('img')
ban061.src = full2[0]
ban06.append(ban061)
var ban07 = document.getElementById('block15')
var ban071 = document.createElement('img')
ban071.src = part3a[0]
var ban072 = document.createElement('img')
ban072.src = part3a[1]
var ban073 = document.createElement('img')
ban073.src = part3a[2]
ban07.append(ban071, ban072, ban073)
var ban08 = document.getElementById('block16')
var ban081 = document.createElement('img')
ban081.src = full3[0]
ban08.append(ban081)
var ban09 = document.getElementById('block17')
var ban091 = document.createElement('img')
ban091.src = banner2[0]
ban09.append(ban091)
var ban10 = document.getElementById('block18')
var ban101 = document.createElement('img')
ban101.src = part44[0]
var ban102 = document.createElement('img')
ban102.src = part44[1]
var ban103 = document.createElement('img')
ban103.src = part44[2]
var ban104 = document.createElement('img')
ban104.src = part44[3]
ban10.append(ban101, ban102, ban103, ban104)
var ban11 = document.getElementById('block19')
var ban111 = document.createElement('img')
ban111.src = part4a[0]
var ban112 = document.createElement('img')
ban112.src = part4a[1]
var ban113 = document.createElement('img')
ban113.src = part4a[2]
var ban114 = document.createElement('img')
ban114.src = part4a[3]
ban11.append(ban111, ban112, ban113, ban114)
var ban12 = document.getElementById('block20')
var ban121 = document.createElement('img')
ban121.src = part4b[0]
var ban122 = document.createElement('img')
ban122.src = part4b[1]
var ban123 = document.createElement('img')
ban123.src = part4b[2]
var ban124 = document.createElement('img')
ban124.src = part4b[3]
ban12.append(ban121, ban122, ban123, ban124)
var ban13 = document.getElementById('block21')
var ban131 = document.createElement('img')
ban131.src = full4[0]
ban13.append(ban131)
var ban14 = document.getElementById('block22')
var ban141 = document.createElement('img')
ban141.src = full4[1]
ban14.append(ban141)
var ban15 = document.getElementById('block23')
var ban151 = document.createElement('img')
ban151.src = part4c[0]
var ban152 = document.createElement('img')
ban152.src = part4c[1]
var ban153 = document.createElement('img')
ban153.src = part4c[2]
var ban154 = document.createElement('img')
ban154.src = part4c[3]
ban15.append(ban151, ban152, ban153, ban154)
var ban16 = document.getElementById('block24')
var ban161 = document.createElement('img')
ban161.src = full5[0]
ban16.append(ban161)
var ban17 = document.getElementById('block25')
var ban171 = document.createElement('img')
ban171.src = full5[1]
ban17.append(ban171)
var ban18 = document.getElementById('block26')
var ban181 = document.createElement('img')
ban181.src = part4d[0]
var ban182 = document.createElement('img')
ban182.src = part4d[1]
var ban183 = document.createElement('img')
ban183.src = part4d[2]
var ban184 = document.createElement('img')
ban184.src = part4d[3]
ban18.append(ban181, ban182, ban183, ban184)
var ban19 = document.getElementById('block27')
var ban191 = document.createElement('img')
ban191.src = part4e[0]
var ban192 = document.createElement('img')
ban192.src = part4e[1]
var ban193 = document.createElement('img')
ban193.src = part4e[2]
var ban194 = document.createElement('img')
ban194.src = part4e[3]
ban19.append(ban191, ban192, ban193, ban194)
var ban20 = document.getElementById('block28')
var ban201 = document.createElement('img')
ban201.src = part4f[0]
var ban202 = document.createElement('img')
ban202.src = part4f[1]
var ban203 = document.createElement('img')
ban203.src = part4f[2]
var ban204 = document.createElement('img')
ban204.src = part4f[3]
ban20.append(ban201, ban202, ban203, ban204)
var ban21 = document.getElementById('block29')
var ban211 = document.createElement('img')
ban211.src = full6[0]
ban21.append(ban211)






// dropdown function


  // First drop down menu
  var abb = []

  function cato(arr) {
    console.log(5)
    var len = abb.length
    if (len != 0) {
      abb = []
    }
    abb.push(arr)
    let ABB = JSON.stringify(abb)
    localStorage.setItem('CATO', ABB)
    window.open('catologue.html')
  }