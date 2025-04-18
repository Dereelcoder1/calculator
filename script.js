document.addEventListener("DOMContentLoaded", () => {
    const display = document. querySelector("#input");
    const numButton = document.querySelectorAll("#num-button");
    const operator = document.querySelectorAll("#operator");


    let resetNext = false;
    let memory = '';

    numButton.forEach((btn => {
        btn.addEventListener("click", () => {
            if(display.innerText === '0' || resetNext) {
                display.innerText = btn.innerText;
                resetNext = false;
            } else {
                display.innerText += btn.innerText;
                resetNext = false;
            }
        })

    }));
    



    operator.forEach((ragna => {
        ragna.addEventListener("click", () => {
            display.innerText += ragna.innerText;
            resetNext = false;
        })
    }));

    // Eval

    document.querySelector("#equal").addEventListener("click", () => {
        display.innerText = eval(display.innerText);
        resetNext = true;
    });

    
    document.querySelector("#clear").addEventListener("click", () => {
        display.innerText = '0';
        resetNext = true;
    });

    
    document.querySelector("#delete").addEventListener("click", () => {
        display.innerText = display.innerText.slice(0, -1) || '0';
    });

    
    document.querySelector("#addmem").addEventListener("click", () => {
        memory += parseFloat(display.innerText);

        display.innerText = memory;
        resetNext = true;
    });

    
})

