
// 상품 정보
let products = [
    { id: 0, good:57 , price: 270000, title: "앰버서더 서울풀만호텔",subtitle:"5성급 호텔 중구" , img:'images/ho1.jpg' ,link:'detail.html' },
    { id: 1, good:32 , price: 160000, title: "메이필드호텔 서울" ,subtitle:"5성급 호텔 강서" , img:'images/ho2.jpg' ,link:'detail.html'  },
    { id: 2, good:25 , price: 420000, title: "소피텔 앰배서더 서울 호텔" ,subtitle:"5성급 호텔 송파" , img:'images/ho3.jpg' ,link:'detail.html' },
    { id: 3, good:41 , price: 440000, title: "서울 신라호텔" ,subtitle:"5성급 호텔 중구" , img:'images/ho6.jpg' ,link:'detail.html' },
    { id: 4, good:63 , price: 359000, title: "파라스파라 서울" ,subtitle:"5성급 호텔 우이동" , img:'images/ho5.jpg' ,link:'detail.html' },
    { id: 5, good:35 , price: 665000, title: "시그니엘 서울" ,subtitle:"5성급 호텔 송파" , img:'images/ho4.jpg' ,link:'detail.html' },
    { id: 6, good:73 , price: 327000, title: "호텔 나루 서울 엠갤러리 앰배서더" ,subtitle:"5성급 호텔 마포" , img:'images/ho7.jpg' ,link:'detail.html' },
  ];
  //ll.html은 그냥 연결용 근대 하나만적용되...요

  let imgurl='';
  // 메인
  const main = document.querySelector(".main");
  // 버튼
  const back = document.querySelector('.backbtn')
  const btnall = document.querySelector(".btnall"); // 다
  const goodbtn = document.querySelector(".goodbtn"); // 추천
  const lowbtn = document.querySelector(".lowbtn"); // 낮
  const hibtn = document.querySelector(".hibtn"); // 높
  // const ABCBtn = document.querySelector(".shop__AbcBtn"); // 가나다
  // HTML
  const main2 = `<div class="list" id="0">
  <p><img src="" alt=""></p>
  <h3 class="title"></h3>
  <p class="cash"><span class="price"></span>원</p>
  <p class=inp>★<em class="good"></em></p>
  <strong class=subt></strong>
  </div>`;

  // ************** 초기 배열 ********************************************
  for (i = 0; i < products.length; i++) {
    main.insertAdjacentHTML("beforeend", main2);
    let innerlink = document.querySelector('.list')
    const mtitle = document.querySelectorAll(".title");
    const mprice = document.querySelectorAll(".price");
    const maingood = document.querySelectorAll(".good");
    const pic = document.querySelectorAll(".list img");
    const msubt = document.querySelectorAll(".subt");
    msubt[i].insertAdjacentHTML("beforeend", `${products[i].subtitle}`);
    mprice[i].insertAdjacentHTML("beforeend", `${products[i].price}`);
    mtitle[i].insertAdjacentHTML("beforeend", `${products[i].title}`);
    maingood[i].insertAdjacentHTML("beforeend", `${products[i].good}`);
    pic[i].setAttribute("src", `${products[i].img}`);
    cnt = i ;
    pic[i].addEventListener('click',e=>{
      location.href=products[cnt].link
    })
    
    
  }

  // *********** 추천순 **************************************************
  goodbtn.addEventListener('click',e=>{
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
      return b.good - a.good;
    });
    for (i = 0; i < NewProducts.length; i++) {
        main.insertAdjacentHTML("beforeend", main2);
      const mtitle = document.querySelectorAll(".title");
      const mprice = document.querySelectorAll(".price");
      const maingood = document.querySelectorAll(".good");
      const pic = document.querySelectorAll(".list img");
      const msubt = document.querySelectorAll(".subt");
      msubt[i].insertAdjacentHTML("beforeend", `${NewProducts[i].subtitle}`);
      mprice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
      mtitle[i].insertAdjacentHTML("beforeend", `${NewProducts[i].title}`);
      maingood[i].insertAdjacentHTML("beforeend", `${NewProducts[i].good}`);
      pic[i].setAttribute("src", `${NewProducts[i].img}`);
      cnt = i ;
      pic[i].addEventListener('click',e=>{
        location.href=`${NewProducts[cnt].link}`
      })
      
    }
  })

  // ************** 오름차순 **************************************************
  hibtn.addEventListener('click',e=>{
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
      return b.price - a.price;
    });
    for (i = 0; i < NewProducts.length; i++) {
        main.insertAdjacentHTML("beforeend", main2);
      const mtitle = document.querySelectorAll(".title");
      const mprice = document.querySelectorAll(".price");
      const maingood = document.querySelectorAll(".good");
      const pic = document.querySelectorAll(".list img");
      const msubt = document.querySelectorAll(".subt");
      msubt[i].insertAdjacentHTML("beforeend", `${NewProducts[i].subtitle}`);
      mprice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
      mtitle[i].insertAdjacentHTML("beforeend", `${NewProducts[i].title}`);
      maingood[i].insertAdjacentHTML("beforeend", `${NewProducts[i].good}`);
      pic[i].setAttribute("src", `${NewProducts[i].img}`);
      cnt = i ;
      pic[i].addEventListener('click',e=>{
        location.href=`${NewProducts[cnt].link}`
      })
    }
  })

  
  //***  내림차순  *****************************************
  lowbtn.addEventListener('click',e=>{
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
      return a.price - b.price;
    });
    for (i = 0; i < NewProducts.length; i++) {
        main.insertAdjacentHTML("beforeend", main2);
      const mtitle = document.querySelectorAll(".title");
      const mprice = document.querySelectorAll(".price");
      const maingood = document.querySelectorAll(".good");
      const pic = document.querySelectorAll(".list img");
      const msubt = document.querySelectorAll(".subt");
      msubt[i].insertAdjacentHTML("beforeend", `${NewProducts[i].subtitle}`);
      mprice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
      mtitle[i].insertAdjacentHTML("beforeend", `${NewProducts[i].title}`);
      maingood[i].insertAdjacentHTML("beforeend", `${NewProducts[i].good}`);
      pic[i].setAttribute("src", `${NewProducts[i].img}`);
      cnt = i ;
      pic[i].addEventListener('click',e=>{
        location.href=`${NewProducts[cnt].link}`
      })
    }
  })

goodbtn.addEventListener('click',e=>{
  goodbtn.classList.add('on')
  lowbtn.classList.remove('on')
  hibtn.classList.remove('on')
})

hibtn.addEventListener('click',e=>{
  hibtn.classList.add('on')
  goodbtn.classList.remove('on')
  lowbtn.classList.remove('on')
})

lowbtn.addEventListener('click',e=>{
  lowbtn.classList.add('on')
  goodbtn.classList.remove('on')
  hibtn.classList.remove('on')
})