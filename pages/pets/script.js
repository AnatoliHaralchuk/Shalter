const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

const burgerMenu = document.querySelector('.burger_menu')
const headerNav = document.querySelector('.header_nav')
const HeaderNavItems = document.querySelector('.header_nav_items')


burgerMenu.addEventListener('click', burgerActive)

function burgerActive(){
    burgerMenu.classList.toggle('burger_active')
    headerNav.classList.toggle('nav_active')
    document.body.classList.toggle('lock')
    if (headerNav.classList.contains("nav_active")){
      headerNav.addEventListener("click", burgerInActive)
    } else {headerNav.removeEventListener("click", burgerInActive)}
}
function burgerInActive(){
    if (!event.target.closest(".header_nav_items")||event.target.closest(".header_nav_link")){
      burgerActive()
    }
}
//----POPAP/////////////////////////////////////////////////////

const petsContainer = document.querySelector('.pets_cards_container')
let petsCards = document.querySelectorAll('.pets_cards')
const popap = document.querySelector('.popap')
const popapBody = document.querySelector('.popap_body')
const popapClose = document.querySelector('.popap_close')

petsCards.forEach(e => e.addEventListener('click', popapActive))

const popapContentTitle = document.querySelector('.popap_content_title')
const popapContentBreed = document.querySelector('.popap_content_breed')
const popapContentDescription = document.querySelector('.popap_content_description')
const listAge = document.querySelector('.list_age')
const listInoculations = document.querySelector('.list_inoculations')
const listDiseases = document.querySelector('.list_diseases')
const listParasites = document.querySelector('.list_parasites')
const popapImage = document.querySelector('.popap_image')
const popapContent = document.querySelector('.popap_content')

popapImage.addEventListener('mouseenter', removeHover)
popapContent.addEventListener('mouseenter', removeHover)
popapImage.addEventListener('mouseleave', addHover)
popapContent.addEventListener('mouseleave', addHover)
popap.addEventListener('mouseleave', removeHover)
popap.addEventListener('mouseenter', addHover)

function removeHover(){
  popapClose.classList.remove('popap_hover')
}
function addHover(){
  popapClose.classList.add('popap_hover')
}
function popapActive(){
  let petName = event.currentTarget.getAttribute('id')
  for (let a of pets){
    if(petName === a.name){
      popapImage.src = `${a.img}`
      popapContentTitle.innerHTML = a[popapContentTitle.getAttribute('id')]
      popapContentBreed.innerHTML = a[popapContentBreed.getAttribute('id')]
      popapContentDescription.innerHTML = a[popapContentDescription.getAttribute('id')]
      listAge.innerHTML = `<b>Age:</b> ${a[listAge.getAttribute('id')]}`
      listInoculations.innerHTML = `<b>Inoculations:</b> ${a[listInoculations.getAttribute('id')]}`
      listDiseases.innerHTML = `<b>Diseases:</b> ${a[listDiseases.getAttribute('id')]}`
      listParasites.innerHTML = `<b>Parasites:</b> ${a[listParasites.getAttribute('id')]}`
    }
  }
  
  if (event.target.closest(".pets_cards")||popap.classList.contains('active')){
    popap.classList.toggle('active')
    document.body.classList.toggle('lock')
  }
  if (popap.classList.contains('active')){
    popapBody.addEventListener('click', popapInActive)
    popapClose.addEventListener('click', popapInActive)
  } else {
    popapBody.removeEventListener('click', popapInActive)
    popapClose.removeEventListener('click', popapInActive)
}
}
function popapInActive(event){
  if (!event.target.closest('.popap_image')&&(!event.target.closest('.popap_content'))){popapActive()}
}

//----POPAP/////////////////////////////////////////////////////
//----Pagination/////////////////////////////////////////////////////
const buttonBack = document.querySelector(".pets_buttons_back")
const buttonLast = document.querySelector(".pets_buttons_last")
const buttonNumber = document.querySelector(".pets_buttons_number")
const buttonNext = document.querySelector(".pets_buttons_next")
const buttonForward = document.querySelector(".pets_buttons_forward")
let page = 0
const pages = []
let count = 6
let long = 8
let winwidth = document.documentElement.clientWidth
  if ((winwidth < 1280)&&(winwidth > 767)){count = 8;long = 6};
  if ((winwidth < 768)&&(winwidth > 319)){count = 16;long = 3}
for (let i = 0; i < count; i++){
    let arr = []
    let petsName = []
    outer:do{
        let n = Math.floor(Math.random() * 8)
        if (petsName.includes(pets[n].name)) {continue outer}
        petsName.push(pets[n].name)
        arr.push(`
        <div id="${pets[n].name}" class="pets_cards">
            <img class="pets_images" src="${pets[n].img}" alt="pets image">
            <p class="pets_name">${pets[n].name}</p>
            <button class="button_empty">Learn more</button>
        </div>
        `)
      }while(arr.length < long)
    pages.push(arr)  
}

const petsSlider = document.querySelector('.pets_slider') 
function loadPage(n){
    petsSlider.innerHTML = ''
    for (let i in pages[n]){
        console.log(pages[n][i]);
        petsSlider.innerHTML += pages[n][i]
    }
    petsCards = document.querySelectorAll('.pets_cards')
    petsCards.forEach(e => e.addEventListener('click', popapActive))
}
loadPage(page)
function active(name){
    name.classList.remove('disabled')
    name.classList.add('hovered')
}
function disabled(name){
    name.classList.remove('hovered')
    name.classList.add('disabled')
}


buttonBack.addEventListener('click', clickback )
buttonLast.addEventListener('click', clicklast )
buttonNumber.addEventListener('click', clicknumber)
buttonNext.addEventListener('click', clicknext )
buttonForward.addEventListener('click', clickforward)



function clickback(){
    page = 1
    loadPage(page-1)
    buttonNumber.textContent = `${page}`
    active(buttonForward)
    buttonForward.addEventListener('click', clickforward)
    active(buttonNext)
    buttonNext.addEventListener('click', clicknext)
    disabled(buttonBack)
    buttonBack.removeEventListener('click', clickback )
    disabled(buttonLast)
    buttonLast.removeEventListener('click', clicklast )

}
function clicklast(){
    if (buttonNumber.textContent == count){    
        active(buttonNext)
        buttonNext.addEventListener('click', clicknext )
        active(buttonForward)
        buttonForward.addEventListener('click', clickforward )
    }
    page = buttonNumber.textContent
    loadPage(page-2)
    buttonNumber.textContent = `${--page}`
    if (buttonNumber.textContent === '1'){
        disabled(buttonBack)
        buttonBack.removeEventListener('click', clickback )
        disabled(buttonLast)
        buttonLast.removeEventListener('click', clicklast )
    }
}
function clicknumber(){
    page = buttonNumber.textContent
    loadPage(page-1)
    petsCards = document.querySelectorAll('.pets_cards')
    petsCards.forEach(e => e.addEventListener('click', popapActive))
}
function clicknext(){
    if (buttonNumber.textContent === '1'){    
        active(buttonBack)
        buttonBack.addEventListener('click', clickback )
        active(buttonLast)
        buttonLast.addEventListener('click', clicklast )
    }
    page = buttonNumber.textContent
    loadPage(page)
    buttonNumber.textContent = `${++page}`
    console.log(count);
    console.log(buttonNumber.textContent);
    if (buttonNumber.textContent == count){
        disabled(buttonForward)
        buttonForward.removeEventListener('click', clickforward)
        disabled(buttonNext)
        buttonNext.removeEventListener('click', clicknext)
    }
}
function clickforward(){
    page = count
    loadPage(page-1)
    buttonNumber.textContent = `${page}`
    disabled(buttonForward)
    buttonForward.removeEventListener('click', clickforward)
    disabled(buttonNext)
    buttonNext.removeEventListener('click', clicknext)
    active(buttonBack)
    buttonBack.addEventListener('click', clickback )
    active(buttonLast)
    buttonLast.addEventListener('click', clicklast )
}
//----Pagination/////////////////////////////////////////////////////