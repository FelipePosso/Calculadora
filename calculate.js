function init(){

    var result = document.getElementById("result");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var n6 = document.getElementById("n6");
    var n7 = document.getElementById("n7");
    var n8 = document.getElementById("n8");
    var n9 = document.getElementById("n9");
    var n0 = document.getElementById("n0");
    var multiply = document.getElementById("multiply");
    var divid = document.getElementById("divid");
    var minus = document.getElementById("minus");
    var sum = document.getElementById("sum");
    var decimal = document.getElementById("decimal");
    
    result.addEventListener = function(e){
      result.textContent = result.innerHTML
    }
    
    n1.onclick = function(e){
        result.textContent = result.textContent + "1"
      }

    n2.onclick = function(e){
        result.textContent = result.textContent + "2"
    }
    
    n3.onclick = function(e){
        result.textContent = result.textContent + "3"
    }

    n4.onclick = function(e){
      result.textContent = result.textContent + "4"
    }

    n5.onclick = function(e){
        result.textContent = result.textContent + "5"
    }

    n6.onclick = function(e){
        result.textContent = result.textContent + "6"
    }

    n7.onclick = function(e){
      result.textContent = result.textContent + "7"
    }
    
    n8.onclick = function(e){
      result.textContent = result.textContent + "8"
    }
    
    n9.onclick = function(e){
        result.textContent = result.textContent + "9"
      }

      n0.onclick = function(e){
        result.textContent = result.textContent + "0"
    }
    
      multiply.onclick = function(onclick){
        result.textContent = result.textContent + "x"
      }
      
      divid.onclick = function(onclick){
        result.textContent = result.textContent + "/"
      }

      minus.onclick = function(onclick){
        result.textContent = result.textContent + "-"
      }

      sum.onclick = function(onclick){
        result.textContent = result.textContent + "+"
      }
      
      decimal.onclick = function(onclick){
        result.textContent = result.textContent + "."
      }
    }
    
    /*var delet = document.getElementById("delet");
    var same = document.getElementById("same");*/