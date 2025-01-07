document.getElementById("submit").addEventListener("click", get_values);
function get_values(event) {
    
    event.preventDefault(); 
    
    let num = document.getElementById("input").value;
    let arr = [];
    
    for (let i = 0; i < num; i++) {
        let temp = Math.floor(Math.random() * 6) + 1; 
        arr.push(temp);
    }
    console.log(arr);
    
    let result = document.getElementById("result");
    result.innerHTML= `Rolls: ${arr.join(", ")}<br/>Sum: ${cal_sum(arr)}`
    
    playsound();
    add_images(arr);
    
}

function add_images(arr) {
    let images = document.getElementById("images")
    let theme1 = document.getElementById("input_theme_1").checked
    let theme2 = document.getElementById("input_theme_2").checked
    let children = []
    let theme = 0
    images.innerHTML = ""
    if(theme1){
        theme = 1
    }
    else if(theme2){
        theme = 2
    }
    for (let n of arr) {
        let img = document.createElement("img");
        img.src = `Dice_Images/Theme${theme}/Dice-${n}.png`; 
        img.alt = `Dice showing ${n}`;
        children.push(img)
    }
    for(let i=0;i<children.length;i++){
        images.appendChild(children[i])
    }
}

function cal_sum(arr){
    let sum = 0
    for(let num of arr){
        sum += num
    }
    return sum
}

function playsound(){
    const audio = new Audio("audio/(Free)_Dice_Roll_Sound_Effect_1_[_YouConvert.net_].mp3")
    audio.play()
}