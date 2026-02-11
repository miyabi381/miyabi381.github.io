cLog("NS-Extension : 読み込み完了");

// 一覧表示ボタン
const itiranbtn = document.querySelector("body > div > div:nth-child(4) > button");
humanClick(itiranbtn);

// グループ一覧が生成されたとき
onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div", (div) => {
	// div.style.display = "none";
	cLog("display=none");

});

// 設定ボタンが見つかったら
onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div > button", (btn) => {
	humanClick(btn);
	cLog("btn.click");
});


// div > div.watch-video--skip-content.default-ltr-iqcdef-cache-gpipej > button
