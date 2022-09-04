function compute(){
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        document.getElementById("result").innerHTML = "";
        alert("Enter a positive number!!");
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var container = document.getElementById("result");
        var year = new Date().getFullYear()+parseInt(years);
        var amount = principal * years * rate /100;
        var data = `<p style="font-size:15px; margin-bottom:0; padding-bottom:0; color:"black";>
                    If you deposit <mark>${principal}</mark><br/> 
                    at an interrest rate of <mark>${rate}%</mark><br\>
                    You will receive an amount of <mark>${amount}</mark><br\>
                    in the year <mark>${year}</mark>
                    </p>`;
        document.querySelector(".maindiv").style.height = "450px";
        document.getElementById("result").innerHTML = "";
        container.insertAdjacentHTML("afterbegin",data);
    }
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}     