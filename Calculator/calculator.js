var ANS = 0;
let display = document.getElementById('display');

function displayF(input){
    display.value += input;
}

function clr(){
    display.value = "";
}

function calc1(myStr){
    let result;
    myStr = myStr.replace(/\u00F7/g, "/");
    myStr = myStr.replace(/\u00d7/g, "*");
    myStr = myStr.replace(/\u00b2/g, "**2");
    myStr = myStr.replace(/\u221a/g, "Math.sqrt");
    myStr = myStr.replace(/\u03c0/g, "Math.PI");
    try {
        result = eval(myStr);
    } catch{
        result = "Error!";
    }
    return result;
}

function calc(){
    let x, y;
    x = display.value;
    if (x.includes("r")){
        let x1 = x.slice(0, x.indexOf("r")-1);
        let x2 = x.slice(x.indexOf("r")+1);
        x1 = calc1(x1);
        x2 = calc1(x2);
        if (x1=="Error!" || x2=="Error!") {
            y = "Error!";
        } else {
            y = Math.floor(x1/x2)+" r "+ x1%x2;
        }
    }
    else if (x=="") {
        y = 0;
        ANS = 0;
    }
    else {
        y = calc1(x);
        ANS = y;
    }
    display.value = y;
}

function fct(){
    let factors =[], i, x, y;
    x = display.value;
    y = calc1(x);
    if (y=="Error!") {
        display.value = y;
    } else {
        for (i=1; i<= Math.floor(Math.sqrt(y)); i++){
            if (y%i==0){
                factors.push(i);
                if ((y/i)!=i){
                    factors.push(y/i);
                }
            }
        }
        factors.sort(function(a, b){return a - b});
        display.value = factors;
    }
}

display.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault();
      document.getElementById("equalb").click();
    }
  });