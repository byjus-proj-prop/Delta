var text
var image
var link
var buttons
var inputs
var inputButton
var paiText
var paiImage
var paiLink
var paiButo
var paiInputButo
const Comands = {
    RenderText:function(Type,Value,id,Node){
        text = document.createElement(`${Type}`)
        text.textContent = `${Value}`
        text.setAttribute("id",`${id}`)
        paiText = document.getElementById(`${Node}`);
        paiText.appendChild(text)
    },
    RenderImg:function(src,alt,id,Node) {
        image = document.createElement("img")
        image.src = `${src}`
        image.alt = `${alt}`
        image.setAttribute("id",`${id}`)
        paiImage = document.getElementById(`${Node}`);
        paiImage.appendChild(image)
    },
    RenderLinks:function(Value,href,id,Node){
        link = document.createElement("a")
        link.textContent = `${Value}`
        link.href = `${href}`
        link.setAttribute("id",`${id}`)
        paiLink = document.getElementById(`${Node}`);
        paiLink.appendChild(link)
    },
    RenderButtons:function(Value,func,id,Node){
        buttons = document.createElement("button")
        buttons.textContent = `${Value}`
        buttons.onclick = func
        buttons.setAttribute("id",`${id}`)
        paiButo = document.getElementById(`${Node}`);
        paiButo.appendChild(buttons)
    },
    RenderInputs:function(Value,Value2,Node){
    inputs = document.createElement("input")
    inputs.type = "text"
    inputs.textContent = `${Value}`
    inputButton = document.createElement("button")
    inputButton.textContent = `${Value2}`
    paiInputButo = document.getElementById(`${Node}`)
    paiInputButo.appendChild(inputs,inputButton)
    },
    DeleteDeltaElements:function(deletedElements){
        if (deletedElements == "text") {
        paiText.removeChild(text)    
        }
        if (deletedElements == "img") {
        paiImage.removeChild(image)
        }
        if (deletedElements == "link") {
        paiLink.removeChild(link)
        }
        if (deletedElements == "button") {
        paiButo.removeChild(buttons)
        }
        if (deletedElements == "input") {
            paiInputButo.removeChild(inputs,inputButton)
        }
    }
}

module.exports.Delta = Comands;