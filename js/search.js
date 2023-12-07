const nationList1 = document.querySelectorAll('.search .nation .nation-list li');
const captions1 = document.querySelectorAll('.search .nation .nation-list li div p');
const nation1 = document.querySelector('.search .nation');
const inpBody1 = document.querySelector('.search .inp-body');
const esc = document.querySelector('.search .inp-header .inp-search .close i')

esc.addEventListener('click' , e=>{
    searchInput1.value=''
    inpBody1.classList.remove('block');
    searchInput1.focus()
})
const myArray1 = [];
    let counter = 1;

    for (let caption of captions1) {
        myArray1.push({
            id: counter++,
            text: caption.textContent,
        });
    }

    const searchInput1 = document.querySelector('.inp-search .txt input[type=text]');
    searchInput1.addEventListener('keyup', (e) => {
        keyupHandler1();
    });
    function keyupHandler1() {
        nation1.classList.add('block');
        for (const item of nationList1) {
            item.classList.add('none');
        }
        const keywords1 = searchInput1.value;
        if (keywords1.trim().length === 0 || !keywords1) return;

        const filteredArray1 = myArray1.filter((el) => el.text.includes(keywords1));
        console.log(filteredArray1);
        if (filteredArray1.length > 0) {
            for (const el of filteredArray1) {
                document.querySelector(`.nation .nation-list li:nth-child(${el.id})`).classList.remove('none');
            }
            inpBody1.classList.remove('block');
        } else if (filteredArray1.length === 0) {
            inpBody1.classList.add('block');
            nation1.classList.remove('block');
        } else {
            return;
        }
    } //end searchInput