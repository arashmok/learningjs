function showMessage(message, id, color){
    document.getElementById(id).textContent = message;
    document.getElementById(id).style.color = color;
}

function clickButton(id){
    const button = document.getElementById(id) ;

    button.addEventListener('click', function () {
        const review = document.getElementById('review');

        if (review.classList.contains('hidden')){
            review.classList.remove('hidden');
            button.textContent = 'CLOSE REVIEW';
        }
        else {
            review.classList.add('hidden');
            button.textContent = 'SEE REVIEW';
        }
    });
}
