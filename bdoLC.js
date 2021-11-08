// JavaScript source code
function showTable() {
    document.getElementById("table").style.display = "block";
}

function update() {
    if (document.contains(document.getElementById("silver"))) {
        calc();
    }
}

function calc() {
    if (document.contains(document.getElementById("silver"))) {
        document.getElementById("silver").remove();
    }
    let div = document.createElement('div');
    div.id = "silver";
    div.style.borderStyle = "solid";
    div.style.padding = '50px';
    //div.style.float = "right";
    let total = 0;
    let effTotal = 0;
    let modifier = 1;
    if (document.getElementById('valpack').checked) {
        modifier = 1.3;
    }
    //iterate through all loot
    var booty = document.getElementsByClassName("loot");
    for (var i = 0; i < booty.length; i++) {
        let p = document.createElement('p');
        let val = booty[i].name * document.getElementById(booty[i].id).value
        p.innerHTML = booty[i].id + ": " + val;
        if (booty[i].id.includes("Trash")) {
            total += val;
            effTotal += val;
        } else {
            effTotal += val * modifier;
        }
        div.appendChild(p);
    }
    let tot = document.createElement('p');
    let avgtot = total / (document.getElementById("duration").value / 60);
    let etot = document.createElement('p');
    let avgetot = effTotal / (document.getElementById("duration").value / 60);
    if (document.getElementById("duration").value === '0') {
        tot.innerHTML = "Total: " + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver";
        etot.innerHTML = "Effective total: " + effTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver"
    } else {
        tot.innerHTML = "Total: " + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver, " + avgtot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver/hour";
        etot.innerHTML = "Effective total: " + effTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver, " + avgetot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " silver/hour";
    }
    
    div.appendChild(tot);
    
    div.appendChild(etot);

    //let projectdiv = document.createElement('div');
    //projectdiv.style.float = "right";
    //projectdiv.style.width = "30%"
    //let projection = document.createElement('button');
    //projection.innerHTML = "Project with buffs";
    //projection.onclick('projectVal()');

    //alert(amount1 * 2120);
    document.getElementById('table').appendChild(div);
}

