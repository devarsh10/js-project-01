const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e)
        console.log(e.target)
        key = e.target.id
        switch(key) {
            case "grey":
                body.style.backgroundColor = key
                break;
            case "white":
                body.style.backgroundColor = key
                break;
            case "blue":
                body.style.backgroundColor = key
                break;
            case "yellow":
                body.style.backgroundColor = key
                break;
            default:
                console.log("Invalid color input.")
        }

    })
} )