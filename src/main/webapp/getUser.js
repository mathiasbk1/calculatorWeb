function getFunction(e) {
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
document.getElementById("outer").addEventListener("click", getFunction);
