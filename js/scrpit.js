// =======JQUURY =========

$(document).ready(function () {


    // =====scroll-animetion ======

    const scrollContainer = $('.scroll-container')

    $('.scroll-right').on('click', function () {
        scrollContainer.animate({
            scrollLeft: '+=200px'
        }, 300);
    });
    $('.scroll-left').on('click', function () {
        scrollContainer.animate({
            scrollLeft: '-=200px'
        }, 300);
    });


    // ===== bags scroll-animetion ======

    const scrollContainer1 = $('.scroll-container1')

    $('.scroll-right1').on('click', function () {
        scrollContainer1.animate({
            scrollLeft: '+=50px'
        }, 300);
    });
    $('.scroll-left1').on('click', function () {
        scrollContainer1.animate({
            scrollLeft: '-=50px'
        }, 300);
    });

    $('#text1').animate({
        left: '20px',

    }, 1000)

});




// ================range -bag -price -find ==============
function run() {
    const priceRange = document.getElementById("priceRange");
    const maxPriceDisplay = document.getElementById("maxPrice");
    const bagListItems = document.querySelectorAll("#bagList .bag-par");


    // Update the price and filter bags
    priceRange.addEventListener("input", () => {
        const maxPrice = priceRange.value;
        maxPriceDisplay.textContent = maxPrice;

        bagListItems.forEach(item => {
            const bagPrice = Number(item.dataset.price);
           
            if (bagPrice <= maxPrice) {
                item.classList.remove('vishnu');
            }
             
            else  {
                item.classList.add('vishnu');
               
            }
        });
    });
}

