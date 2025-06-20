const form = document.getElementById("help-form");
const toast = document.getElementById("success-toast");


form.addEventListener('submit', function (event) {
    toast.classList.add('show');
    event.preventDefault();

    setTimeout(() => {
        toast.classList.remove('show')
    }, 5000)
})

toast.addEventListener('click', function (event) {
    toast.classList.remove('show');
})