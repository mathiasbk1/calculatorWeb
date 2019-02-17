document.getElementById("getAll").addEventListener("click", getFunctionUsers);
document.getElementById("getUser").addEventListener("click", getFunctionUser);

function getFunctionUser(e) {
    e.preventDefault();
    var url = "https://jsonplaceholder.typicode.com/users/" + document.getElementById("userId").value;
    fetch(url)
            .then(res => res.json())
            .then(d => {
                document.getElementById("result").innerHTML =
                        "<p> Name: " + d.name + "</p>" +
                        "<p> Phone: " + d.phone + "</p>" +
                        "<br> <h4>Adress</h4>" +
                        "<p> Street: " + d.address.street + "</p>" +
                        "<p> City: " + d.address.city + "</p>" +
                        "<p> Zip: " + d.address.zipcode + "</p>" +
                        "<p> Geo(lat,ing): " + d.address.geo.lat + "," + d.address.geo.lng + "</p>"
            });
}

function getFunctionUsers(e) {
    e.preventDefault();
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
            .then(res => res.json())
            .then(function (d) {
                document.getElementById("result").innerHTML = "<table id = table><th>Name</th><th>Phone</th></table>";
                for (var i = 0; i < d.length; i++) {
                    document.getElementById("table").innerHTML += "<tr><td>"  + d[i].name + "</td><td>" + d[i].phone + "</td></tr>";
                }
            });
}
