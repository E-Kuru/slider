$(function(){

    for(let i = 1; i <= 5; i++){
        $(`.slide:nth-child(${i})`).css('background-image' , `url("https://picsum.photos/1600/900?t=${Math.random()}")`)
    }

    var infinite = setInterval(sliderInfinite,2000)
    
    var i = 0

    function sliderInfinite (a){

        if(i < 4){
            i++
            $('.slider').css('left',`-${i * 100}%`)
        }
        else{
            i = 0
            $('.slider').css('left',`0`)
        }
    }
    var x = 0;

    $('.left-arrow').click(function(){

        i = x

        clearAll(sliderInfinite)

        if(x >= 1){
            x -= 1
        }
        else{
            x = 4
        }
        
        $('.slider').css('left', `-${x * 100}%`)
        
    })
    
    $('.right-arrow').click(function(){

        i = x

        clearAll(sliderInfinite)

        if(x !== 4){
            x += 1
        }
        else{
            x = 0
        }

        $('.slider').css('left', `-${x * 100}%`)
    
    })

    $('.point').click(function() {

        var index = $(this).index()
        
        i = index
        
        clearAll(sliderInfinite)

        $('.slider').css('left', `-${index * 100}%`)

        // if(index === 0){
            // $('.slider').css('left', `0`)
        // }
        // else if(index === 1){
        //     $('.slider').css('left', `-100%`)
        // }
        // else if(index === 2){
        //     $('.slider').css('left', `-200%`)   
        // }
        // else if(index === 3){
        //     $('.slider').css('left', `-300%`)
        // }
        // else{
        //     $('.slider').css('left', `-400%`)
        // }
    })

    function clearAll (a){
        clearInterval(infinite)
        infinite = setInterval(a,2000)
    }
    
})