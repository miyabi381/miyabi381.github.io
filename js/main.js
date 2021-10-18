function test(val) {
    alert(val);
}

function assenMokujiTable() {
    //testInt = 3;
    modlist = [
        "Death Recovery Mod (v1.12.1)",
        "Extra Large Storage Box",
        "Upgrade Station v1.8i",
        "Swim Clear Scuba Mask",
        "Super Spyglass (Open Source)",
        "Egg N Poop Collector / Incubator",
        "Breedable Creatures Bundle",
        "Auto Run - Func+",
        "Dino Aid",
        "Meat Spoiler",
        "HG Stacking Mod 10000-90 V315",
        "Creature Finder Deluxe",
        "EZTame",
        "All Dinos Allow Guns"
    ];
    mokujiTable(modlist);
}

function mokujiTable(data) {
    // table要素を生成
    var table = document.createElement('table');
    table.id = "modTable";
    table.className = "mokuji";
    // tr部分のループ
    for (var i = 0; i < data.length; i++) {
        // tr要素を生成
        var tr = document.createElement('tr');
        // class指定
        tr.classList = "nospace";
        tr.style.height = "1em";
        // td要素を生成
        var td = document.createElement('td');
        // td要素内にテキストを追加
        const aTag = document.createElement("a");
        aTag.href = "#"+data[i];
        aTag.innerText = data[i];
        aTag.className = "mokuji";
        td.appendChild(aTag);
        // td要素をtr要素の子要素に追加
        tr.appendChild(td);
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);
    }
    // 生成したtable要素を追加する
    document.getElementById('modlist').appendChild(table);
    document.getElementById('modTable').style.display = "none";

}

function hidModList() {
    if (document.getElementById('modTable').style.display == "block") {
        document.getElementById('modTable').style.display = "none";
    } else {
        document.getElementById('modTable').style.display = "block";
    }

}