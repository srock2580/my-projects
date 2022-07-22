let ansBag = '';

let keyArr = document.querySelectorAll('.key-sec > div');

keyArr.forEach(element => {
    element.addEventListener('click', function(event) {
        let key = event.target.innerText;

        if (key === '=') {
            let ans = eval(ansBag);
            document.querySelector('.ans-sec').innerText = ans;
            ansBag = '';
        } else if (key === 'CA') {
            ansBag = '';
            document.querySelector('.ans-sec').innerText = ansBag;
        } else {
            ansBag += key;
            document.querySelector('.ans-sec').innerText = ansBag;
        }
    });
});