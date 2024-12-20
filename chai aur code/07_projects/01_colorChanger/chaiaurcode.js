const button = document.querySelectorAll('.button')
const body = document.querySelector("body")


button.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', (chai) => {
        console.log(chai);
        console.log(chai.target);
        switch (chai.target) {
            case grey:
                body.style.backgroundColor = chai.target.id;
                break;
        
            case white:
                body.style.backgroundColor = chai.target.id;
                break;
        
            case blue:
                body.style.backgroundColor = chai.target.id;
                break;
        
            case yellow:
                body.style.backgroundColor = chai.target.id;
                break;
        
            case green:
                body.style.backgroundColor = chai.target.id;
                break;
            case purple:
                body.style.backgroundColor = chai.target.id;
                break;
        
            default:
                break;
        }
    })
})