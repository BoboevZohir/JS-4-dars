//Math in JS

//let round = Math.round(8.1)                  //Yaxlitlash - 1
//let pow = Math.pow(,)                        //Darajasini hisoblash
//let sqrt = Math.sqrt(25)                     //Ildizni topish
//let abs = Math.abs(-12.8)                    //Absolute sonini ciqarish 
//let ceil = Math.ceil(49.1)                   //Yaxlitlash - 2
//let floor = Math.floor(49.9)                 //Yaxlitlash - 3
//let min  = Matn.min(25,233,2,575,5,13)       //Minimal sonini topish
//let max  = Matn.max(25,1233,2,575,5,13)      //Maximal sonini topish
//document.write(max)

//Selector & styles in JS

let byTag = document.getElementsByTagName("p");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelector(".classNomi")
let bySelectorAll = document.querySelectorAll(".classNomi")
let byAll = document.getElementsByTagName("h1").namedItem("idNomi")

byAll.style.backgroundColor = "green"
byAll.style.color = "yellow"
byAll.style.width = "350px"
byAll.style.height = "200px"
byAll.style.border = "5px solid royalblue"
byAll.style.textAlign = "center"
byAll.style.paddingTop = "70px"
byAll.style.boxSizing = "border-box"
byAll.style.textTransform = "uppercase"
byAll.style.marginBottom = "100px"   //1
byAll.style.marginLeft = "50px"      //2
byAll.style.display = "inline-block" //3
byAll.style.margin = "20px 10px"     //4
byAll.style.boxShadow = "0 0 10px rgba (80, 80, 80, 0.3)"  //5
byAll.style.float = "left"           //6
byAll.style.borderRadius = "8px"     //7
byAll.style.transition = "all 0.5s ease-in-out"   //8

let matn = byAll.innerText = "Xayr Dunyo"

console.log(matn)