const $mainMenu = getAll('.main-con1 .img-list li')
const $accList = getAll('.main-con2 .main-con-list li')

$mainMenu.forEach(item => {
    item.addEventListener('click' , e=>{
        location.href = 'list.html'
    })
})
$accList.forEach(item => {
    item.addEventListener('click' ,e => {
        location.href='detail.html'
    })
})