cLog("NS-Extension : 読み込み完了");

// 一覧表示ボタン
const itiranbtn = document.querySelector("body > div > div:nth-child(4) > button");
humanClick(itiranbtn);

// グループ一覧が生成されたとき
onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div", (div) => {
	// div.style.display = "none";
	cLog("display=none");

	// グループ一覧のグループ名取得
	const spanList = Array.from(document.querySelector("#ここにグループ一覧 > div:nth-child(2) > div").querySelectorAll("span"));
	spanList.forEach((title, index) => {
		// 表示グループ切り替えボタン生成
		const btn = createBtn("body > div > div:nth-child(4)", title.textContent, "groupBtn");
		btn.onclick = () => {
			// トグル式
			btnIsActive(btn, "groupBtn");
			groupBtnOnclick(index);
		}
	});

});

// 設定ボタンが見つかったら
onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div > button", (btn) => {
	humanClick(btn);
	cLog("設定ボタン.click");
});

// 表示グループ切り替えボタン処理
function groupBtnOnclick(index) {
	humanClick(itiranbtn);
	onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div", (div) => {div.style.display = "none";});
	const target = document.querySelector("#ここにグループ一覧 > div:nth-child(2) > div > div:nth-child(" + (index+2) + ")");
	humanClick(target);
	onElementCreated("#ここにグループ一覧 > div:nth-child(2) > div > button", (btn) => {humanClick(btn);});
}






