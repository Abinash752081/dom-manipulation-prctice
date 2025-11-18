var btn = document.querySelector("button");
var main = document.querySelector("main");
var arr =['Hey! I am Abinash.','Hello! My name is Abinash.','Hi! I am Abinash.','Greetings! I am Abinash.','Salutations! I am Abinash.'];

btn.addEventListener("click", function() {
    // var div = document.createElement("div");

    // var x = Math.random() * 100;
    // var y = Math.random() * 100;
    // var r = Math.random() * 360;

    // var c1 = Math.floor(Math.random() * 256);
    // var c2 = Math.floor(Math.random() * 256);
    // var c3 = Math.floor(Math.random() * 256);

    // div.style.width = "50px";
    // div.style.height = "50px";
    // div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    // div.style.position = "absolute";
    // div.style.left = x + "%";
    // div.style.top = y + "%";
    // div.style.rotate = r + "deg";

    // main.appendChild(div);
    
    var h1 = document.createElement("h1");
    var a = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[a];
    h1.style.position = "Absolute";
    h1.style.left = Math.random() * 80 + "%";
    h1.style.top = Math.random() * 80 + "%";
    h1.style.fontSize = Math.random() * 50 + 20 + "px";
    h1.style.transform = `rotate(${Math.random() * 360}deg)`;
    h1.style.scale = Math.random() * 2;
    h1.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;


    main.appendChild(h1);
});