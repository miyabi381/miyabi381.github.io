/**
 * ページtopボタン表示
 */
window.onload = function () {
    var scroll = document.querySelectorAll('.up');
    var Animation = function () {
        if (window.innerHeight == 0) {
            scroll.length.classList.remove('show');
        }
        for (var i = 0; i < scroll.length; i++) {
            var triggerMargin = 10;
            if (window.innerHeight > triggerMargin) {
                scroll[i].classList.add('show');
            }
        }
    }
    window.addEventListener('scroll', Animation);
    assenMokujiTable(1);
}

/**
 * PhasmoPhobia ゴーストテーブル表示
 * 引数１：証拠のID
 * 引数２：チェックボックスのID
 */
function PPEvidencText(idName,idNameCheck) {
    let obj = document.getElementById(idName);
    let objCheck = document.getElementById(idNameCheck);
    if (obj.className == "none-underline" && objCheck.className == "square") {
        objCheck.classList.remove("square");
        objCheck.classList.add("checkbox");

    } else if (objCheck.className == "checkbox") {
        objCheck.classList.remove("checkbox");
        objCheck.classList.add("square");
        obj.classList.remove("none-underline");
        obj.classList.add("line-through");

    } else {
        obj.classList.remove("line-through");
        obj.classList.add("none-underline");
    }
}

/**
 * PhasmoPhobia ゴースト証拠表示
 * 引数：ID
 */
function PPGhostText(idName) {
    let obj = document.getElementById(idName);
    if (obj.className == "none-underline") {
        obj.classList.remove("none-underline");
        obj.classList.add("border-radius");

    } else if (obj.className == "border-radius") {
        obj.classList.remove("border-radius");
        obj.classList.add("line-through");

    } else {
        obj.classList.remove("line-through");
        obj.classList.add("none-underline");
    }
}


/**
 * アラートテスト
 * 引数：表示したい文字(変数)
 */
function test(val) {
    alert(val);
}

/**
 * 引数に対応した文字配列でテーブル出力
 * 引数：表示したい文字列(数値)
 * １：MOD名
 */
function assenMokujiTable(val) {
    data = [];
    switch (val) {
        case 1:
            data = [
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
            break;
        default:
            break;
    }
    mokujiTable(data);
}

/**
 * テーブルの出力
 * 引数：文字配列
 */
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
        aTag.href = "#" + data[i];
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

/**
 * 目次・MOD名の表示/非表示切り替え
 */
function hidModList() {
    if (document.getElementById('modTable').style.display == "block") {
        document.getElementById('modTable').style.display = "none";
    } else {
        document.getElementById('modTable').style.display = "block";
    }

}