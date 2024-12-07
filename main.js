let form = document.forms[0];
// знаходимо потрібну форму
let arr = [];
//створюємо пустий масив для зберігання об'єктів
form.onsubmit = function (ev) {
    // додаємо формі подію onsubmit
    ev.preventDefault()
    // забороняємо формі перезавантажувати сторінку після відпрацювання
    let inputValue = this.valueNamePair.value;
    // витягуємо потрібний інпут
    let hint = document.getElementsByClassName('hint')[0];
    // витягуємо елемент в якому буде знаходитися інформація як правильно заповнити форму після того,
    // як її ввели неправильно
    if (inputValue.match(/(\w(\s=|=)\w)|(\w(\s=\s|=\s)\w)/g)) {
        // за допомогою регулярних виразів перевіряємо коректність запису у форму
        // якщо запис коректний робимо наступні дії
        hint.innerText = ''
        // додаємо пусту стрінгу елементу який мав виводити підказку як заповнити форму
        let splitValueName = inputValue.replaceAll(' ', '').split('=');
        //чистимо значення від непотрібних пробілів і розділяємо по знаку '=' name і value
        let valueNameObject = {
            name: splitValueName[0],
            value: splitValueName[1]
        }
        //записуємо значення name і value в об'єкт
        arr.push(valueNameObject)
        //додаємо об'єкт в масив
        let item = document.createElement('p');
        item.classList.add('item')
        item.innerText = `${arr[arr.length - 1.].name}=${arr[arr.length - 1.].value}`
        // створюємо елемент item додаємо йому клас item і записуємо йому інформацію з масиву який зберігає
        // в собі інформацію з форми
        let target = document.getElementsByClassName('target')[0];
        target.appendChild(item)
        // знаходимо елемент target і додаємо в нього item
        item.onclick = function () {
            //додаємо для item подію onclick
            if (!item.style.background) {
                item.style.background = 'red'
                item.classList.add('delete')
                //перевіряємо чи item має background якщо ні додаємо йому його і додаємо клас delete
            } else {
                item.style.background = ''
                item.classList.remove('delete')
                //  якщо item має background тоді ми його видаляємо і видаляємо клас delete
            }
        }
    } else {
        hint.innerText = 'data input format "value=name"'
        //  якщо у форму вели некоректне значення додаємо підказку в елемент hint
    }
}

let btnSortName = document.getElementsByTagName('button')[1];
// знаходимо кнопку яка відповідає за сортування
btnSortName.onclick = function () {
    // додаємо btnSortName подію onclick
    let itemArr = document.getElementsByClassName('item');
    // знаходимо масив елементів з класом item
    let arrSort = arr.sort((a, b) => a.name.length - b.name.length);
    // сортуємо масив arr з обєктами по ключу name
    for (let i = 0; i < arrSort.length; i++) {
        const arrSortElement = arrSort[i];
        // ітеруємо arrSort
        itemArr[i].innerText = `${arrSortElement.name}=${arrSortElement.value}`
        // додаємо в item відсортовані значення
    }
}

let btnSortValue = document.getElementsByTagName('button')[2];
// знаходимо кнопку яка відповідає за сортування
btnSortValue.onclick = function () {
    // додаємо btnSortValue подію onclick
    let itemArr = document.getElementsByClassName('item');
    // знаходимо масив елементів з класом item
    let arrSort = arr.sort((a, b) => a.value.length - b.value.length);
    // сортуємо масив arr з обєктами по ключу value
    for (let i = 0; i < arrSort.length; i++) {
        const arrSortElement = arrSort[i];
        // ітеруємо arrSort
        itemArr[i].innerText = `${arrSortElement.name}=${arrSortElement.value}`
        // додаємо в item відсортовані значення

    }
}

let btnDelete = document.getElementsByTagName('button')[3];
// знаходимо кнопку яка відповідає за видалення
btnDelete.onclick = function () {
    // додаємо btnDelete подію onclick
    let arrDelete = document.getElementsByClassName('delete');
    // знаходимо масив елементів з класом delete
    for (let i = 0; i < arrDelete.length;) {
        const deleteArrElement = arrDelete[i];
        // ітеруємо arrDelete
        deleteArrElement.remove()
        //     видаляємо кожний елемент з класом delete
    }
    arr.splice(0)
    // очищаємо наш масив
    let itemArr = document.getElementsByClassName('item');
    // знаходимо масив елементів з класом item
    for (let i = 0; i < itemArr.length; i++) {
        const itemArrElement = itemArr[i];
        let splitValueName = itemArrElement.innerText.split('=');
        let valueNameObject = {
            name: splitValueName[0],
            value: splitValueName[1]
        }
        arr.push(valueNameObject)
        //     записуємо в масив значення елементів які залишилися після видалення
    }
}

