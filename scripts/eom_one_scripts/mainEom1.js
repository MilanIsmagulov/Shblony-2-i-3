const metaDataOfPagePlace = document.querySelector('#meta_data_eom_one')
const metaDataOfPage = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<script src="../../data/data.js"></script>
<script src="../../scripts/eom_one_scripts/mainEom1.js"></script>


<link rel="stylesheet" href="../../styles/general_style/style.css">


<title>${themeOfDEC}</title>
`
metaDataOfPagePlace.innerHTML = metaDataOfPage

const bodyOfPage = document.querySelector('#main_window_eom_one')

const isMainWindow = document.createElement('div')
isMainWindow.classList.add('main__window')
bodyOfPage.appendChild(isMainWindow)

const blackHeader = document.createElement('div')
blackHeader.classList.add('black__header')
blackHeader.innerHTML = `<h1>${themeOfDEC}</h1><button id="back_btn_eom_one_gen_page">На главную</button>`
isMainWindow.appendChild(blackHeader)

const contentWindow = document.createElement('div')
contentWindow.classList.add('content__div')
isMainWindow.appendChild(contentWindow)


const contentWindowLeft = document.createElement('div')
contentWindowLeft.classList.add('content__div_left')
contentWindowLeft.innerHTML = 'sfsfsdsfsd'
contentWindow.appendChild(contentWindowLeft)

const contentWindowRight = document.createElement('div')
contentWindowRight.classList.add('content__div_right')
contentWindow.appendChild(contentWindowRight)


const themesNameArr = themesOfEOM1.split('\n')
themesNameArr.forEach(function(item, index, array){
    let themeButton = document.createElement('button')
    if (typeOfFirstPageEomOne === 'hexagon'){
        themeButton.classList.add('button__hexagon_type')
        bodyOfPage.classList.add('hexagon__background')
    }
    themeButton.innerHTML = `${index}. ${item}`
    themeButton.setAttribute('onclick', onclick=`location.href='./pages/page_${index+1}/index.html'`)
    contentWindowRight.appendChild(themeButton)
})

let dropImage = document.createElement('img')
dropImage.src = '../../content/drop_1.png'
contentWindowRight.appendChild(dropImage)

