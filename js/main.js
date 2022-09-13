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
 * PhasmoPhobia ゴースト証拠表示
 * 引数１：証拠のID
 * 引数２：チェックボックスのID
 */
function PPEvidencText(idName, idNameCheck) {
    let obj = document.getElementById(idName);
    let objCheck = document.getElementById(idNameCheck);
    if (obj.className == "none-underline" && objCheck.className == "square") {  // yes
        objCheck.classList.remove("square");
        objCheck.classList.add("checkbox");

    } else if (objCheck.className == "checkbox") {  // no
        objCheck.classList.remove("checkbox");
        objCheck.classList.add("square");
        obj.classList.remove("none-underline");
        obj.classList.add("line-through");

    } else {
        obj.classList.remove("line-through");  // none
        obj.classList.add("none-underline");
    }
}

/**
 * PhasmoPhobia ゴーストテーブル表示
 * 引数：ID
 */
function PPGhostText(idName) {
    let obj = document.getElementById(idName);
    if (obj.className == "none-underline") { // yes
        obj.classList.remove("none-underline");
        obj.classList.add("border-radius");

    } else if (obj.className == "border-radius") {  // no
        obj.classList.remove("border-radius");
        obj.classList.add("line-through");

    } else {
        obj.classList.remove("line-through");  // none
        obj.classList.add("none-underline");
    }
}

/**
 * PhasmoPhobia 証拠によるゴーストの判定
 * 引数１：証拠ID
 * 引数２：ゴーストID
 */
function PPGhostJudge(eviID, ghostID) {
    let objEvi = document.getElementById(eviID);
    if (objEvi.className == "line-through") {
        for (const val of ghostID) {
            const objGhost = document.getElementById(val);
            objGhost.style.color = "#ccc9c4";  // no
            objGhost.style.borderColor = "#ccc9c4";
        }
    } else {
        for (const val of ghostID) {
            const objGhost = document.getElementById(val);
            objGhost.style.color = "";  // none
            objGhost.style.border = "";
        }
    }
}

/**
 * PhasmoPhobia 証拠別ゴースト配列
 */
// EMFレベル５
let emfEvi = [
    "spirit", "wraith", "jinn", "shade", "oni", "goryo", "myling", "twins", "raiju", "obake"
];

// D.O.T.S プロジェクター
let dotsEvi = [
    "wraith", "phantom", "banshee", "yurei", "oni", "yokai", "goryo", "raiju", "deogen", "thaye"
];

// 指紋
let shimonEvi = [
    "phantom", "polter", "banshee", "jinn", "demon", "hantu", "goryo", "myling", "obake", "mimic"
];

// ゴーストオーブ
let orbEvi = [
    "banshee", "mare", "revenant", "yurei", "hontu", "yokai", "onryo", "raiju", "obake", "thaye"
];

// ゴーストライティング
let bookEvi = [
    "spirit", "polter", "mare", "revenant", "shade", "demon", "myling", "moroi", "deogen", "thaye"
];

// スピリットボックス
let boxEvi = [
    "spirit", "wraith", "phantom", "polter", "mare", "yokai", "onryo", "twins", "moroi", "deogen", "mimic"
];

// 氷点下の温度
let iceEvi = [
    "jinn", "revenant", "shade", "demon", "yurei", "oni", "hantu", "onryo", "twins", "moroi", "mimic"
];

/**
 * PhasmoPhobia ゴースト別ゴースト配列
 */
// スピリット
let spritEvi= ["emf","box","book"];
// レイス
let wraith= ["emf","box","dots"];
// ファントム
let phantom= ["box","shimon","dots"];
// ポルターガイスト
let polter= ["box","shimon","book"];
// バンシー
let banshee= ["shimon","orb","dots"];
// ジン
let jinn= ["emf","shimon","ice"];
// メアー
let mare= ["box","orb","book"];
// レヴナント
let revenant= ["orb","book","ice"];
// シェード
let shade= ["emf","book","ice"];
// デーモン
let demon= ["shimon","book","ice"];
// 幽霊
let yurei= ["orb","ice","dots"];
// 鬼
let oni= ["emf","ice","dots"];
// 妖怪
let yokai= ["box","orb","dots"];
// ハントゥ
let hantu= ["shimon","orb","ice"];
// 御霊
let goryo= ["emf","shimon","dots"];
// マイリング
let myling= ["emf","shimon","book"];
// 怨霊
let onryo= ["box","orb","ice"];
// ツインズ
let twins= ["emf","box","ice"];
// 雷獣
let raiju= ["emf","orb","dots"];
// 化け狐
let obake= ["emf","shimon","orb"];
// ミミック
let mimic= ["box","shimon","ice"];
// モーロイ
let moroi= ["box","book","ice"];
// デオヘン
let deogen= ["box","book","dots"];
// セーイ
let thaye= ["orb","book","dots"];



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