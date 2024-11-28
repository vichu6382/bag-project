





// ================range ==============

    const minRange = document.getElementById('min-range')
    const minValue = document.getElementById('min-value')

    minRange.addEventListener('input', () =>{
        minValue.textContent = minRange.value
    })

 
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


