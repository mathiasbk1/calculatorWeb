function getFunction(e) {
    e.preventDefault();
    if (e.target.id == "clear") {
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    } else {
        var url = "https://matbk.com/calculator/calculator?operation=" + e.target.id + "&n1=" + document.getElementById("n1").value
                + "&n2=" + document.getElementById("n2").value;
        
        fetch(url)
        .then(res => res.json())
        .then(d => {document.getElementById("result").innerHTML = "<h5>" + d.res + "</h5>"});
    }

}
document.getElementById("outer").addEventListener("click", getFunction);

