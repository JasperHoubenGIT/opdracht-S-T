/** Voeg hier je code toe */


function addBox() {
    const container = document.getElementById('assignment-03');
    const box = document.createElement('div');
    var x = document.getElementsByTagName('div').length - 9;

    box.setAttribute('class', 'block');
    if (x <= 10){box.textContent = x}else (alert("you can only add 10 blocks nol ;) "));

    container.appendChild(box);


    console.log(x)
}







