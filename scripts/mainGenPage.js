const fgosPlc = document.querySelector('#fgos_number')
const fgosTxtPlc = document.querySelector('#fgos_text_place')

const mdkPlc = document.querySelector('#mdk_number')
const mdkTxtPlc = document.querySelector('#mdk_text_place')

const titlePlc = document.querySelector('#title_text_place')
const mainContentName = document.querySelector('.main_content_name')

const typeOfEOM3 = typeOfEOM3FromData
const popupMethodsWindow = document.querySelectorAll('.methods')
const popupContentInfo = document.querySelectorAll('.popup_tex_content')
const popupKeyWords = document.querySelector('#popup_text_2')
 

fgosPlc.innerHTML = numFgos
fgosTxtPlc.innerHTML = numFgosTxt

mdkPlc.innerHTML = numMDK
mdkTxtPlc.innerHTML = numMDKTxt

mainContentName.innerHTML = themeOfDEC
titlePlc.innerHTML = themeOfDEC

popUpTextArr = textOfMethodMaterials.split('\n')


for(let i = 0; i < popupMethodsWindow.length; i++){
    let popUpElemUl = document.createElement('ul')
    popUpElemUl.classList.add('popup_method_list')

    popUpTextArr.forEach(function(item, index, array){
        let popUpElemLi = document.createElement('li')
        for (let i = 0; i < popUpTextArr.length; i++){
            popUpElemUl.appendChild(popUpElemLi)
        }

        popUpElemLi.innerHTML = `${item}`

    });
    popupMethodsWindow[i].appendChild(popUpElemUl)
}

let popUpKeyWordsArr = keyWords.split('\n')

popUpKeyWordsArr.forEach(function (item, index, array){
    let paragraph = document.createElement('p')
    let a = popUpKeyWordsArr.filter((item ,index) =>{if (index %2 === 0){
        return true;
    }})
    let b = popUpKeyWordsArr.filter((item ,index) =>{if (index %2 !== 0){
        return true;
    }})

    if (a[index] === undefined || b[index] === undefined ){
        return 0;
    } else {
        paragraph.innerHTML = `<span>${a[index]}</span><br> ${b[index]}`
    }
    
    paragraph.classList.add('popup_tex_content', 'key_word_text')
    popupKeyWords.appendChild(paragraph)

})

