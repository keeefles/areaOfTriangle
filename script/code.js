document.getElementById('calculate').addEventListener('click', function() {

    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    
    let calculate = (base * height) / 2;
    document.querySelector('[data-output]').textContent = `${calculate} meters squared`;

});




