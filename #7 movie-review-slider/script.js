(function(){
    const coustomerImage = document.querySelector('#customer-img')
    const coustomerName = document.querySelector('#customer-name')
    const coustomerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')

    let count = 0
    let customers = []

    function Customer(img,name,text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img,name,text){
        let fullImg = `./img/img${img}.jpeg`
        let customer = new Customer(fullImg,name,text)

        customers.push(customer)
    }
    createCustomer('1','오로라','힘겨운 싸움을 하는 모든 이들에게 친절하라.')
    createCustomer('2','퀸포레버','아이가 태어 난다면 잭윌 같은 아이로 키우고 싶습니다.')
    createCustomer('3','Rachel','옳음과 친절함 중에 하나를 택해야 한다면 친절을 택하라')
    createCustomer('4','Rir','슬퍼서가 아니라 감동적이라 눈물을 흘려본 건 또 처음이다! 최고다!!')
    createCustomer('5','달','너무너무 따듯한 영화. "어기가 외모를 바꾸는건 불가능해. 그러니까 우리가 시선을 바꿔야지." 나였다면 어기의 부모님처럼 할 수 있을까. 잭 윌과 써머처럼 편견을 낮추고 다가갈 수 있을까. 비아처럼 동생을 사랑할 수 있을까.')

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(button.classList.contains('prevBtn')){
                // 버튼 누를때 표현식 두 가지 [ ver.1 ] button.classList.contains('prevBtn')
                if(count === 0){
                    count = customers.length
                }
                count--;
                coustomerImage.src = customers[count].img
                coustomerName.textContent = customers[count].name
                coustomerText.textContent = customers[count].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                //버튼 누를때 표현식 두 가지 [ ver.2 ] e.target.parentElement.classList.contains('nextBtn')
                count++;
                if(count === customers.length){
                    count = 0
                }
                coustomerImage.src = customers[count].img
                coustomerName.textContent = customers[count].name
                coustomerText.textContent = customers[count].text
            }
            console.log('done')
        })
    })

})();