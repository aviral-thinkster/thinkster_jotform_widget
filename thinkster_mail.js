var final;
var result = "";

email = () => {
    final = document.getElementById('userInput').value;
    const url = "https://data-sandbox.tabtor.com/v1/users/validate?login=" + final;

    fetch(url)
    .then(response => response.json())
    // .then(data => result = data)
    // );
    // .then(data => console.log(data));
    .then(data => {
    // console.log(data);
    result = data.message;
    if(data.message=="User Already Exist"){
    document.getElementById("sublabel_input_6").style.color = "red";
    document.getElementById("sublabel_input_6").innerText = data.message;
    }
    else {
        document.getElementById("sublabel_input_6").style.color = "black";
        document.getElementById("sublabel_input_6").innerText = data.message;
    }
    });
    };