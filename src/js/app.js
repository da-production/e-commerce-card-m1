$('.e-card-box').on('mousemove',function(e){
    
    var x = (e.originalEvent.layerX * 5) / 100;
    var y = (e.originalEvent.layerY * 5) / 100;
    $(this).find('.move-object').css({
        transform: `translateX(${x}px) translateY(${y}px)`,
    });
    $(this).find('.e-card-head:before').css({
        transform: `translateX(${x}px) translateY(${y}px)`,
    });
    // $('.e-card-container').css({
    //     transform: `rotate3d(4, 7, 1, ${x}deg)`
    // });
});
$('.e-card-box').on('mouseleave',function(){
    $('.e-card-container').css({
        transform: `rotate3d(0, 0, 0, 0deg)`
    });
});

$('.e-card-body').each(function(){
    var discount = $(this).find('.pourcent').data('discount');
    var oldPrice = $(this).find('.old-price').data('oldprice');
    var total = parseFloat(oldPrice) * (parseFloat(discount) / 100);
    $(this).find('.new-price').text((oldPrice-total).toFixed(2) + '$');
});