document.addEventListener("DOMContentLoaded", () => {
    const colBox = document.getElementById("color-box");
    const colBtn = document.getElementById("change-color-btn");
    const hexCode = document.getElementById("hex-color");
    const codeArray = [
        "0", 
        "1", 
        "2", 
        "3", 
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "A", 
        "B", 
        "C", 
        "D", 
        "E", 
        "F"
    ];

    function getRandomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += codeArray[Math.floor(Math.random() * codeArray.length)];
        }
        return color;
    }

    colBtn.addEventListener("click", () => {
        let currentcolor = getRandomColor();
        colBox.style.backgroundColor = currentcolor;
        hexCode.innerText = currentcolor;
        colBtn.style.borderColor = currentcolor;
    })
})