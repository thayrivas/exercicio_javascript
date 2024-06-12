const form = document.getElementById("formulario");

form.addEventListener('submit', function(e){
    e.preventDefault();
});

function validaCampo () {
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const A = number(campoA.value);
    const B = number(campoB.value);

    if (A > B) {
        document.querySelector('.error-message').style.display = "block";
    } else {
        document.querySelector('.sucess-message').style.display = "block";
    }
}