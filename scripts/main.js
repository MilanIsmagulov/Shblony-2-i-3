

// Находим title
const titlePlc = document.querySelector('#title_text_place')
// Находим Black Header
const blackHeaderPlc = document.querySelector('#black_header_place')
// Находим Black Header
const popupStepsWindow = document.querySelector('#popup_text_place')

titlePlc.innerHTML = themeOfDEC
blackHeaderPlc.innerHTML = themeOfDEC



popUpTextArr = textOfStepsInPopUp.split('\n')

popUpTextArr.forEach(function(array, index, item){
    let popUpHeadElem = document.createElement('h3')
    popUpHeadElem.classList.add('popup_list')
    popupStepsWindow.appendChild(popUpHeadElem)
    popUpHeadElem.innerHTML = `<span>${index+1}. </span> ${array}`
});











