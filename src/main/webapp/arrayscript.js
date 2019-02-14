var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var count = 0;

showBoys();
showGirls();
showAll();

document.getElementById("addboy").onclick = addBoy;
document.getElementById("addgirl").onclick = addGirl;
document.getElementById("removeboy").onclick = removeBoy;
document.getElementById("removegirl").onclick = removeGirl;
document.getElementById("reverse").onclick = reverseAll;
document.getElementById("sort").onclick = sortAll;
function createList(names) {
    var lis = names.map(function (name) {
        return '<li>' + name + '</li>';
    }).join("");
    var ul = '<ul>' + lis + '</ul>';
    return ul;
}
function showBoys() {
    document.getElementById('boys').innerHTML = createList(boys);
}
function showGirls() {
    document.getElementById('girls').innerHTML = createList(girls);
}
function showAll() {
    document.getElementById('all').innerHTML = boys.concat(girls).join('<br />');
}
function addBoy() {
    var newboy = document.getElementById('newboy').value;
    boys.push(newboy);
    showBoys();
    showAll();
}
function addGirl() {
    var newgirl = document.getElementById('newgirl').value;
    girls.push(newgirl);
    showGirls();
    showAll();
}
function removeBoy() {
    if (document.getElementById('last').checked) {
        boys.pop();
        showBoys();
        showAll();
    } else {
        boys.shift();
        showBoys();
        showAll();
    }
}
function removeGirl() {
    if (document.getElementById('last').checked) {
        girls.pop();
        showGirls();
        showAll();
    } else {
        girls.shift();
        showGirls();
        showAll();
    }
}
function reverseAll() {
    var allreverse = boys.concat(girls).reverse();
    document.getElementById('all').innerHTML = allreverse.join('<br />');
}
function sortAll() {
    if (count === 1) {
        var allsortedDesc = boys.concat(girls).sort(function (a, b) {
            var x = a.toUpperCase();
            var y = b.toUpperCase();
            if (x > y) {
                return -1;
            }
            if (y > x) {
                return 1;
            }
            return 0;
        });
        document.getElementById('all').innerHTML = allsortedDesc.join('<br />');
        count--;
    } else if (count === 0) {
        var allsortedAsc = boys.concat(girls).sort(function (a, b) {
            var x = a.toUpperCase();
            var y = b.toUpperCase();
            if (x > y) {
                return 1;
            }
            if (x < y) {
                return -1;
            }
            return 0;
        });
        document.getElementById('all').innerHTML = allsortedAsc.join('<br />');
        count++;
    }
}