// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name = "Ralph") {
    cats.push(name)
}
function destructivelyPrependCat(name = "Bob"){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name = "Broom"){
    let appendCats = [...cats, name]
    return appendCats
}
function prependCat(name = "Arnold"){
    let prependCats = [name, ...cats]
    return prependCats
}
function removeLastCat(){
    return cats.slice(0,2)
}
function removeFirstCat(){
    return cats.slice(1,3)
}
