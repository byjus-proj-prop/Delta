const Delta = {
    RenderText:function(Type,Value){
        var text = document.createElement(`${Type}`)
        text.textContent = `${Value}`
        document.body.appendChild(text)
    }
}

module.exports.Delta = Delta;