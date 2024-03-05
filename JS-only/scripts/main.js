let myImage = document.querySelector("img");
myImage.onclick = () => {
    const imgSrc = myImage.getAttribute("src");
    // if loop started 
    if (imgSrc === "images/image1.jpg") {
        myImage.setAttribute("src", "images/image2.jpg");
    }else {
        myImage.setAttribute("src", "images/image1.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h4")
function setUserName() {
   const myName = prompt("What's your name?");
   if(!myName) {
    setUserName();
   }else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `hi Browser, ${myName}`;
   }
   localStorage.setItem("name", myName);
   myHeading.textContent = `hi, ${myName}`;
}
if(!localStorage.getItem("name")) {
   setUserName();
   }else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is Cool,` + storedName;
   }
myButton.onclick = ()=> {
   setUserName();
}
