# What's is this?
simple way to create html elements in js
# Lib comands: 
type `Delta.Comands`
then has the following comands
`RenderText(Type,Value,id,Node)`
Type is the type of text(h1,h2,h3,p whatever)
` RenderImg(src,alt,id,Node)
  RenderLinks(Value,href,id,Node)`
the parameter value is for set the text of the link
` RenderButtons(Value,func,id,Node)`
`func` is the function that i'll execute when the user click the button
` RenderInputs(Value,bool,Value2,Node)`
the parameter `Value` is the text inside the input, the parameter `bool` set if the function i'll
create a button and a input(define `bool` at `true`) or only a input(define `bool` at `false`)
`Value2` is to define the text inside the button
` RenderDivs(bool,Value,id,Node)`
`bool` parameter define if the div has a text this i'll be the equivalent  code in html:
`<div>the Value inside it</div>`
`DeleteDeltaElements(deletedElements)` deletes one element at a time(only the created with the delty lib) the values of the parameter cannot be nothing more than the following values:
"text"
"img"
"link"
"button"
"input"
"div"
