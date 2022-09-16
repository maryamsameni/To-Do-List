let x = document.getElementById('addList')
let temp;
let _liTag;
let flag;

function _addClick() {
    temp = x.value
    if (temp == '' || temp == null) {
        alert('Please fill this field !!')
    } else {
        if (temp.length < 5) {
            alert('Your characters are short !! please Try again :)')
        } else {
            _liTag = document.createElement('li')
            _liTag.classList.add('liTag')
            _liTag.innerHTML = '<span class="txt">' + temp + '</span><div class="icon"><i onclick="_btnDelet(this)" class="fa-solid fa-trash-can ico"></i><i onclick="_btnEdit(this)" class="fa-solid fa-pen-to-square ico"></i>'
            document.getElementsByTagName('ul')[0].appendChild(_liTag)
            x.value = null
            x.focus()
        }
    }
}
function _btnDelet(z) {
    z.parentElement.parentElement.remove()
}
function _btnEdit(y) {
    flag = y
    let mary = y.parentElement.previousElementSibling.innerHTML
    x.value = mary
    x.focus()
    y.parentElement.parentElement.remove()
}