window.onload = () => {
	console.log("^^^^^　読み込み完了　^^^^^^^");
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
	let title = document.title;
};


// setTimeout(() => {
//     console.log("＊＊＊＊＊＊＊＊＊＊　一覧表示クリック　1秒　＊＊＊＊＊＊＊＊＊＊");

//     const btn = document.querySelector(
//         'button.fc-showScheduleOfOtherMember-button.fc-button.fc-button-primary[data-original-title="一覧表示"]'
//     );
//     if (btn) btn.click();
//     setTimeout(() => {
//         console.log("＊＊＊＊＊＊＊＊＊＊　最初のリスト要素クリック　1秒　＊＊＊＊＊＊＊＊＊＊");

//         function humanLikeClick(el) {
//             ["mousedown", "mouseup", "click"].forEach(type => {
//                 el.dispatchEvent(
//                     new MouseEvent(type, {
//                         bubbles: true,
//                         cancelable: true,
//                         view: window
//                     })
//                 );
//             });
//         }

//         (function () {
//             const el = document.querySelector(
//                 "#containerRegisterSchedule_0-ModalCalensarSetting > div.fullscreenOverlay-0 > div.bodyFullscreenOverlay > div > div > div.mb-5 > div:nth-child(3) > div > a > div > span"
//             );
//             if (el) humanLikeClick(el);
//         })();
//         setTimeout(() => {
//             console.log("＊＊＊＊＊＊＊＊＊＊　設定クリック　0.1秒　＊＊＊＊＊＊＊＊＊＊");


//             const btn = Array.from(document.querySelectorAll('div.containerBtTxt > button.btTxt[data-v-15e8dbcb]'))
//                 .find(el => el.textContent.trim() === '設定');

//             if (btn) btn.click();


//         }, 100);
//     }, 1000);
// }, 1000);





// グループ一覧　削除ボタン
const itiranSetteiBtn = document.createElement("button");
itiranSetteiBtn.textContent = "設定";
itiranSetteiBtn.className = "itiran-btn";
	// 削除
itiranSetteiBtn.addEventListener("click", () => {
	const kanshiTag = kanshi("#ここにグループ一覧 > div:nth-child(2) > div",()=> delChildren(document.querySelector("#ここにグループ一覧 > div:nth-child(2)")));
	kanshiTag.start();
	kanshiTag.stop();
	itiranSetteiBtn.remove();
});

//　一覧ボタンの処理
const itiranBTN = document.querySelector('body > div > div:nth-child(4) > button');
itiranBTN.addEventListener('click', () => {
	const target = document.querySelector('#ここにグループ一覧 > div:nth-child(2)');
	if (delChildren(target)){
		itiranSetteiBtn.remove()
		return;
	}
	// グループ一覧の生成
	const groupList = document.createElement("div");
	groupList.setAttribute("name", "グループ一覧");
	groupList.setAttribute("class", "overlay");
	const groups = ["グループ１", "グループ２", "グループ３", "グループ４", "グループ５"];
	const i = 0;

	// 一覧ボタン追加
	groupList.appendChild(itiranSetteiBtn);
	
	groups.forEach(text => {
		const div = document.createElement("div");
		const span = document.createElement("span");
		span.textContent = text;
		
		div.onclick = () => cLog(text);
		
		div.className = "solid-box";
		div.style.cursor = "pointer";
		
		div.appendChild(span);
		groupList.appendChild(div);
	});
	
	target.appendChild(groupList);
});

// 引数の文字列をログ出力
function cLog(text) {
	console.log(text);
}

// 引数の要素を非表示に
function hideElement(tag) {
	const targetElement = document.querySelector(tag);
	targetElement.style.display = "none";
}

// 引数の要素をすべて消す
function delChildren(target){
	if (target.childElementCount > 0){
		target.replaceChildren();
		// cLog("delChildren:要素消去");
		return true;
	}else{
		// cLog("delChildren:要素なし");
		return false;
	}
}

function group1() {
	console.log("１");
}
function group2() {
	console.log("２");
}
function group3() {
	console.log("３");
}
function group4() {
	console.log("４");
}
function group5() {
	console.log("５");
}



// 監視関数
function kanshi(target, callback, options = {}) {
	const root = options.root || document.body;
	const once = options.once ?? false;

	let observer = null;
	let done = false;

	const resolveTarget = () => {
		if (typeof target === 'string') {
			return document.querySelector(target);
		}
		if (target instanceof HTMLElement) {
			return target;
		}
		return null;
	};

	const detect = () => {
		const el = resolveTarget();
		if (!el) return;

		if (!once || !done) {
			done = true;
			callback(el);   // ← 外部関数をそのまま実行するだけ
			if (once) stop();
		}
	};

	const start = () => {
		if (observer) return; // すでに監視中なら何もしない
		detect(); // 既に存在している場合も拾う

		observer = new MutationObserver(() => {
			detect();
		});

		observer.observe(root, {
			childList: true,
			subtree: true,
		});
	};

	const stop = () => {
		observer?.disconnect();
		observer = null;
	};

	return { start, stop };
}
