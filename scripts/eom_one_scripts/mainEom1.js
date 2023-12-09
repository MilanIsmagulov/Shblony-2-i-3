const metaDataOfPagePlace = document.querySelector('#meta_data_eom_one')
const metaDataOfPage = `

<script src="../../data/data.js"></script>
<script src="../../scripts/eom_one_scripts/mainEom1.js"></script>


<link rel="stylesheet" href="../../styles/general_style/style.css">


<title>${themeOfDEC}</title>
`
metaDataOfPagePlace.innerHTML += metaDataOfPage

const bodyOfPage = document.querySelector('#main_window_eom_one')

const isMainWindow = document.createElement('div')
isMainWindow.classList.add('main__window')
bodyOfPage.appendChild(isMainWindow)

const blackHeader = document.createElement('div')
blackHeader.classList.add('black__header')
blackHeader.innerHTML = `<h1>${themeOfDEC}</h1><button id="back_to_gen_page">На главную</button>`
isMainWindow.appendChild(blackHeader)

const backwardBtn = document.querySelector('#back_to_gen_page')
backwardBtn.setAttribute('onclick', onclick=`location.href='../../index.html'`)

const contentWindow = document.createElement('div')
contentWindow.classList.add('content__div')
isMainWindow.appendChild(contentWindow)

const contentWindowLeft = document.createElement('div')
contentWindowLeft.classList.add('content__div_left')
contentWindowLeft.innerHTML = `${methodRecomendation} `
contentWindow.appendChild(contentWindowLeft)

const literaBtn = document.createElement('button')
literaBtn.classList.add('content__litera_btn')
literaBtn.innerHTML = 'Список использованной литературы'
contentWindowLeft.appendChild(literaBtn)

const contentWindowCenter = document.createElement('div')
contentWindowCenter.classList.add('content__div_center')
contentWindow.appendChild(contentWindowCenter)

const contentWindowRight = document.createElement('div')
contentWindowRight.classList.add('content__div_right')
contentWindow.appendChild(contentWindowRight)

const themesNameArr = themesOfEOM1.split('\n')
if (themesNameArr.length <= 11){
    var nuberOfRows = Math.floor(themesNameArr.length/4)
} else {
    var nuberOfRows = Math.floor(themesNameArr.length/5)
}


const numberOfColumn = themesNameArr.length/3
for (let i = 0; i < numberOfColumn; i++){
    let columnsOfHexagon = document.createElement('div')
    contentWindowCenter.appendChild(columnsOfHexagon)
    columnsOfHexagon.classList.add('columns__hexagon' , 'col_' + i)
    for (let j = 0; j <= nuberOfRows; j++){
        let hexagonBtn = document.createElement('button')

        hexagonBtn.classList.add('button__hexagon_type')
        columnsOfHexagon.appendChild(hexagonBtn)
    }
}


let allHexagoneBtn = document.querySelectorAll('.button__hexagon_type')
allHexagoneBtn.forEach(function(item, index){
    item.innerHTML = index+1 + '. ' + themesNameArr[index]
    item.setAttribute('onclick', onclick=`location.href='./pages/page_${index+1}_index.html'`)
    if (undefined == themesNameArr[index]){
        item.classList.add('hidden_block')
    }
})


let dropImage = document.createElement('img')
dropImage.src = '../../content/drop_1.png'
contentWindowRight.appendChild(dropImage)

