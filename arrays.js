addAll();

function ArrayPopMethod() {
    myArray.pop();
    document.getElementById("arrays").innerHTML = myArray.join('');
}
function addAll() {
    myArray = ['001', '002', '003'];
    myArray = myArray.map((item) => {
        return `<div>${item}</div>`
    })
    document.getElementById("arrays").innerHTML = myArray.join('');
}
function addNewElement(newElement) {
    myArray.push(`<div>${newElement}</div>`);
    document.getElementById("arrays").innerHTML = myArray.join('');
}
function deleteAll() {
    myArray.length = 0;
    document.getElementById("arrays").innerHTML = myArray;
}