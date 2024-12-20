const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach( (button) => {
    console.log(button);
    
    button.addEventListener('click', (color) => {
        console.log(color);
        console.log(color.target)
        // switch (color.target) {
        //     case grey:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        //     case white:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        //     case blue:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        //     case yellow:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        //     case green:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        //     case purple:
        //      body.style.backgroundColor = color.target.id;
        //         break;
        
        //     default:
        //         break;
        // }

        // const randomColor = ['green', 'blue', 'blue', 'orange', 'yellow']
        //     randomColor.forEach((item) => {
        
            
            
            
        if (color.target === grey) {
            body.style.backgroundColor = color.target.id
        }
        if (color.target === white) {
            body.style.backgroundColor = color.target.id
        }
        if (color.target === blue) {
            body.style.backgroundColor = color.target.id
        }
        if (color.target === yellow) {
            body.style.backgroundColor = color.target.id
        }
        if (color.target === green) {
            body.style.backgroundColor = color.target.id
        }
        if (color.target === purple) {
            body.style.backgroundColor = color.target.id
        }
    })
    // })
})