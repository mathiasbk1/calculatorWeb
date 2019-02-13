function getFunction(e) {
    e.preventDefault();
    if (e.target.id == "clear") {
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    } else {
        var url = "/calculator/calculator?operation=" + e.target.id + "&n1=" + document.getElementById("n1").value
                + "&n2=" + document.getElementById("n2").value;
        console.log(url);
        
        fetch(url)
        .then(res => res.text())
        .then(d => {document.getElementById("result").innerHTML = d.value});
    }

}
document.getElementById("outer").addEventListener("click", getFunction);

