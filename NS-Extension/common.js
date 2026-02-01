//　ログ出力
function cLog(text) {
	console.log(text);
}

// クリックイベント
function humanClick(target) {
	const events = ['mousedown', 'mouseup', 'click'];
	events.forEach(type =>
		target.dispatchEvent(new MouseEvent(type, {
			bubbles: true,
			cancelable: true,
			view: window
		}))
	);
}