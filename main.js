let form1 = document.forms[0];
let value1 = document.getElementsByClassName('value1')[0];
let arr = []

form1.onsubmit = function (ev) {
    ev.preventDefault()
    let valueName = form1.nameValue.value;
    if (valueName.match(/\w=\w/g) || valueName.match(/\w\s=\w/g) || valueName.match(/\w=\s\w/g) || valueName.match(/\w\s=\s\w/g)) {
        console.log(valueName)
        let splitValueName = valueName.replaceAll(' ', '').split('=');
        let valueNameObject = {
            name: splitValueName[0],
            value: splitValueName[1]
        }
        arr.push(valueNameObject)
        let p = document.createElement('p');
        p.classList.add('p')
        value1.appendChild(p)
        p.innerText = `${arr[arr.length - 1.].name}=${arr[arr.length - 1.].value}`
        p.onclick = function () {
            if (!p.style.background) {
                p.style.background = 'red'
                p.classList.add('delete')
            } else {
                p.style.background = ''
                p.classList.remove('delete')
            }
        }
    } else {
        console.log('erorr')
    }


}
let btnDelete = document.getElementsByTagName('button')[3];
btnDelete.onclick = function () {
    let deleteArr = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteArr.length;) {
        const deleteArrElement = deleteArr[i];
        deleteArrElement.remove()
    }
}
let btnSortName = document.getElementsByTagName('button')[1];
btnSortName.onclick = function (){
    let deleteArr = document.getElementsByClassName('p');
    let arrSort = arr.sort((a, b) => a.name.length - b.name.length);
    for (let i = 0; i < arrSort.length; i++) {
        const arrSortElement = arrSort[i];
        if (i < deleteArr.length) {
            deleteArr[i].innerText = `${arrSortElement.name}=${arrSortElement.value}`
        }
    }
}
let btnSortValue = document.getElementsByTagName('button')[2];
btnSortValue.onclick = function(){
    let deleteArr = document.getElementsByClassName('p');
    let arrSort = arr.sort((a, b) => a.value.length - b.value.length);
    for (let i = 0; i < arrSort.length; i++) {
        const arrSortElement = arrSort[i];
        if (i < deleteArr.length) {
            deleteArr[i].innerText = `${arrSortElement.name}=${arrSortElement.value}`
        }
    }
}




