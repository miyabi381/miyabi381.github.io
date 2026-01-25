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



//　一覧ボタンの処理
const itiranBTN = document.querySelector('body > div > button');
itiranBTN.addEventListener('click', () => {
    const target = document.querySelector('#ここにグループ一覧');
    if(target.childElementCount > 0){
        target.replaceChildren();
        return;
    }
    // グループ一覧の生成
    const groupList = document.createElement("div");
    groupList.setAttribute("name", "グループ一覧");
    const groups = ["グループ１", "グループ２", "グループ３", "グループ４", "グループ５"];
    groups.forEach(text => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.textContent = text;
        div.appendChild(span);
        groupList.appendChild(div);
    });
    target.appendChild(groupList);

    console.log("グループ一覧生成");
});

