
const subaccVisual = () => {}; //end subaccVisual

const subaccDetail = () => {
    const $accMinus = get('.acc_detail_sub4 .detail-wrap .select .s1 .minus');
    const $accPlus = get('.acc_detail_sub4 .detail-wrap .select .s1 .plus');
    const $accCount = get('.acc_detail_sub4 .detail-wrap .select .s1 .counting .text');
    const $accSelBox = get('.acc_detail_sub4 .detail-wrap .select')
    const $accMoreBtn = get('.acc_detail_sub4 .detail-wrap .detail-more button');
    const $accHide = get('.acc_detail_sub4 .detail-wrap .detail-img');
    const $accHideImg = getAll('.acc_detail_sub4 .detail-wrap .detail-img img');
    const $accGrid = get('.acc_detail_sub4 .detail-wrap .detail-img .gradient');
    const $accTextMore = get('.acc_detail_sub4 .detail-wrap .introduction .btn-more button');
    const $accAddInfo = get('.acc_detail_sub4 .detail-wrap .introduction .add-info');
    const $accFolding = get('.acc_detail_sub4 .detail-wrap .introduction .add-info .folding');
    
  /*   $accTextMore.addEventListener('click', (e) => {
        accmoreText();
    });
    $accFolding.addEventListener('click', (e) => {
        accfold();
    });
    function accmoreBtn() {
        $accHide.classList.add('show');
        $accHide.style.height = `${1453 * 8.6}px`;
        $accGrid.style.display = 'none';
        $accMoreBtn.style.display = 'none';
    }
    function accmoreText() {
        $accAddInfo.classList.add('on');
        $accTextMore.style.display = 'none';
    }
    function accfold() {
        $accAddInfo.classList.remove('on');
        $accTextMore.style.display = 'block';
    } */
}; //end subaccDetail




const accmainMenu =()=>{
    let $link = getAll('a[href="#"]')
    $link.forEach(item =>{
        item.addEventListener('click', e =>{
            e.preventDefault();
        })
    })
} //end mainMenu

const accmainVisual =()=>{} //end mainVisual

const gallery =()=>{
    const $x = get('.bg ')
    const $total = get(' .popup-gallery .gallelry-header .total-img')
    const $close = get('.popup-gallery .gallelry-header .close ')
    const $next = get('.popup-gallery .gallelry-body .next ')
    const $prev = get('.popup-gallery .gallelry-body .prev ')
    const $more = get('.acc-morepic  ')
    const $popup = get('.popup-gallery ')
    const $list = get('.main .con-box .list  ')
    const $bimg = get('.popup-gallery .gallelry-body img  ')
    const $strong =get('.popup-gallery .gallelry-body strong  ')
    let imgurl ='', curr= 0, bimg='', totalImg= 10, cnt= 0

    let data = [
        {id:1, img:'./acc-images/hotelimg/h1.jpeg',title:'디럭스 더블 객실'},
        {id:2, img:'./acc-images/hotelimg/h2.jpeg',title:'디럭스 트윈'},
        {id:3, img:'./acc-images/hotelimg/h3.jpeg',title:'욕실'},
        {id:4, img:'./acc-images/hotelimg/h4.jpeg',title:'조식'},
        {id:5, img:'./acc-images/hotelimg/h5.jpeg',title:'피트니스 센터'},
        {id:6, img:'./acc-images/hotelimg/h6.jpeg',title:'비즈니스 디럭스 트윈'},
        {id:7, img:'./acc-images/hotelimg/h7.jpeg',title:'스파'},
        {id:8, img:'./acc-images/hotelimg/h8.jpeg',title:'회의실'},
        {id:9, img:'./acc-images/hotelimg/h9.jpeg',title:'다이닝룸'},
        {id:10, img:'./acc-images/hotelimg/h10.jpeg',title:'고양이'},
    ]
    

    const banner =()=>{
        $total.innerHTML =` image
        <span>${data[cnt].id}</span> of
        <strong>${totalImg}</strong> `
        console.log(data[cnt].id)
        $bimg.setAttribute('src', data[cnt].img)
        $bimg.setAttribute('alt', data[cnt].title)
        $strong.textContent = data[cnt].title;
        $bimg.animate([{opacity: 0} , {opacity: 1}],300)
        
    }



} //end gallery


//지도 이미지 클릭 시 구글맵 링크로 넘어가기 추가 
let imgLink =get('.acc_detail_sub4  .map')

imgLink.addEventListener('click', e =>{

    window.open('https://www.google.com/maps/place/7-ch%C5%8Dme-1-1+Ofukacho,+Kita+Ward,+Osaka,+530-0011,+Japan/@34.6972828,135.4842245,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e66031898f23:0xc42a813ad54e8271!8m2!3d34.6972784!4d135.4868048!16s%2Fg%2F11v0ytnvjl?entry=ttu')
})

//장바구니 기능 추가 11.09

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('구매해주셔서 감사합니다')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {

    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    const $shoplist =get('.acc_detail_sub4  .acc_con2 .acc-shopList')
    $shoplist.classList.add('on')
  

    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('상품이 장바구니에 이미 담겨있습니다.')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
         
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">DEL</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

var coll = document.getElementsByClassName("acc-accordion" );
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    /* iconChange = document.querySelector('i')
    iconChange.classList === 'xei-caret-down-squar' ? iconChange.classList.replace('xei-caret-up-squar') : iconChange.classList.replace( 'xei-caret-up-squar', 'xei-caret-down-squar') */
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//스크롤 -- 콘솔에서 오류냠
const conScroll1 = document.querySelector('.acc_con1')
conScroll1.addEventListener('scroll', function(){
    conScroll1.style.maxHeight = conScroll1.scrollHeight + "px";
    this.classList.add('collapsed')
})
const conScroll2 = document.querySelector('.acc_con2')
conScroll2.addEventListener('scroll', function(){
    conScroll2.style.maxHeight = conScroll2.scrollHeight + "px";
    this.classList.add('collapsed')
})
const conScroll3 = document.querySelector('.acc_con3')
conScroll3.addEventListener('scroll', function(){
    conScroll3.style.maxHeight = conScroll3.scrollHeight + "px";
    this.classList.add('collapsed')
})



const eventBanner = () => {}; //end eventBanner

const subInit = () => {
    subaccVisual();
    subaccDetail();
    eventBanner();
    accmainMenu();
    accmainVisual();
    gallery();
    
};

(() => {
    window.addEventListener('load', (e) => {
        subInit();
    });
})();