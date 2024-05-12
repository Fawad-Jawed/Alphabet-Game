let currentButton = '';
let clickCount = 0;

function clickHandler(button) {
    var output = document.getElementById("output");
    // if (button === 'a') {
    //     document.getElementById("output").innerHTML = "Apple, Aeroplane, Alligator";
    if (button === 'a') {
        if (currentButton!== 'a') {
            output.textContent = "Apple";
            currentButton = 'a';
            clickCount = 1;
        } else if (clickCount === 1) {
            output.textContent = "Aeroplane";
            currentButton = 'a';
            clickCount = 2;
        } else if (clickCount === 2) {
            output.textContent = "Alligator";
            currentButton = '';
            clickCount = 0;
        }
    } else if (button === 'b') {
        document.getElementById("output").innerHTML = `Banana, Ball, Book`;
    }else if (button === 'c') {
        document.getElementById("output").innerHTML = "Cat, Car, Cap";
    }else if (button === 'd') {
        output.textContent = "Dog, Doctor, Door";
    }else if (button === 'e') {
        document.getElementById("output").innerHTML = "Elephant, Egg, Elevator";
    }else if (button === 'f') {
        document.getElementById("output").innerHTML = "Fish, Fan, Fire";
    }else if (button === 'g') {
        document.getElementById("output").innerHTML = "Goat, Grapes, Guitar";
    }else if (button === 'h') {
        document.getElementById("output").innerHTML = "Hen, Horse, Helicopter";
    }else if (button === 'i') {
        document.getElementById("output").innerHTML = "InkPot, Igloo, Ice";
    }else if (button === 'j') {
        document.getElementById("output").innerHTML = "Jug, jam, Jump";
    }else if (button === 'k') {
        document.getElementById("output").innerHTML = "Kite, Kangaroo, Kettle";
    }else if (button === 'l') {
        document.getElementById("output").innerHTML = "Lion, Lamp, Lemon";
    }else if (button === 'm') {
        document.getElementById("output").innerHTML = "Mango, Monkey, Moon";
    }else if (button === 'n') {
        document.getElementById("output").innerHTML = "Nest, Net, Nurse";
    }else if (button === 'o') {
        document.getElementById("output").innerHTML = "Orange, Open, Office";
    }else if (button === 'p') {
        document.getElementById("output").innerHTML = "Parrot, Pen, Pineapple";
    }else if (button === 'q') {
        document.getElementById("output").innerHTML = "Queen, Quiet, Quiz";
    }else if (button === 'r') {
        document.getElementById("output").innerHTML = "Rabbit Rose, Radio";
    }else if (button === 's') {
        document.getElementById("output").innerHTML = "Ship, Sun, Snail";
    }else if (button === 't') {
        document.getElementById("output").innerHTML = "Tree, Tiger, Turtle";
    }else if (button === 'u') {
        document.getElementById("output").innerHTML = "Umbrella, Umpire, Uniform";
    }else if (button === 'v') {
        document.getElementById("output").innerHTML = "Violin, Vehicle, Vest";
    }else if (button === 'w') {
        document.getElementById("output").innerHTML = "Watch, Whistle, Whale";
    }else if (button === 'x') {
        document.getElementById("output").innerHTML = "X-Ray, Xylophone, Xmas";
    }else if (button === 'y') {
        document.getElementById("output").innerHTML = "Yak, YO-YO, Yoga";
    }else if (button === 'z') {
        document.getElementById("output").innerHTML = "Zebra, ZigZag, Zipper";
    }
}