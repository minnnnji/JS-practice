(function(){
    const pictures = [
        "img1","img2","img3","img4","img5","img6","img7","img8","img9","img10"
    ];

    const buttons = document.querySelectorAll('.btn')
    const imageDiv = document.querySelector('.img-container')
    let counter = 0

    buttons.forEach(function (button){
        button.addEventListener('click',function(e){
            if( button.classList.contains('btn-left')){
                counter--;
                if (counter < 0){
                    counter = pictures.length - 1
                }
                console.log(counter)
                imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
                // 두가지 표현 가능 ver.1
            }
            if( button.classList.contains('btn-right')){
                counter++;
                if (counter > pictures.length - 1 ){
                    counter = 0
                }
                console.log(counter)
                imageDiv.style.backgroundImage = `url('./img/img${[counter+1]}.jpeg')`
                // 두가지 표현 가능 ver.2
            }
        })
    });
})();