const items = document.querySelectorAll(".main__container-question");
const $items = [...items];

$items.map((item) => {
    const addActive = () => {
        $items.map((i) => {
            if(!(item === i)) {
                i.classList.remove("active");
            }
        })

        item.classList.toggle("active");
    }

    item.addEventListener('click', addActive)
})


$items.map((item) => {

})