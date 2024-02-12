document.addEventListener("DOMContentLoaded", function() {
    var diceElement = document.getElementById("dice")

    diceElement.addEventListener("click", function() {
        var randomNumber = Math.floor(Math.random() * 6) + 1
        var imagePath = "./img/dice" + randomNumber + ".png"

        var imgElement = document.createElement("img")
        imgElement.src = imagePath

        while (diceElement.firstChild) {
            diceElement.removeChild(diceElement.firstChild)
        }

        diceElement.appendChild(imgElement)
    })
})
