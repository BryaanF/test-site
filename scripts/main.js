//selector html part
const myHeading = document.querySelector('h1');
let mybutton = document.querySelector("button")
let MyImg = document.querySelector('img')


let header_text = "Notion book is cool";
myHeading.textContent = header_text;


//how to change picture after clicked the picture
MyImg.onclick = function setImg(){
    let mySrc = MyImg.getAttribute("src");
    if (mySrc === "images/nb1.jpg"){
        MyImg.setAttribute("src", "images/nb2.jpg")
    }else {
        MyImg.setAttribute("src", "images/nb1.jpg")
    }
}

//how to change h1 title to our name when button clicked below
mybutton.onclick = function setUsername(){
    let myusrname = prompt("masukkan username:");
    if(!myusrname){
        setUsername();
    }else{
        localStorage.setItem("name", myusrname);
        myHeading.textContent = header_text + ", " + myusrname; 
    }
}