$(window).on('load',(function() {
    $('.bg-slider').bgSwitcher({
      images: ['../img/facial001.jpeg', '../img/flower003.jpg', '../img/facial003.jpeg'], // 切り替える背景画像を指定
      interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
      loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
      shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
      effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
      duration: 2000, // エフェクトの時間を指定します。
      easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
  
}));
function loadingAction(){

}

// フェードインの処理をまとめた関数
function fadeinEvent() {
  // getElementsByClassName で、fadein-x-left のクラスを持つ要素を取得し配列として保持
  var fadeinXClass= Array.prototype.slice.call(document.getElementsByClassName("owner"));
  // getElementsByClassName で、fadein-x-right のクラスを持つ要素を取得し配列として保持
  var fadeinXRClass= Array.prototype.slice.call(document.getElementsByClassName("sayhello"));

  // 先に取得した二つの配列を一つの配列にする
  Array.prototype.push.apply(fadeinXClass, fadeinXRClass);

  // 配列の数だけ処理を行う
  fadeinXClass.forEach(function( element ) {

      // getBoundingClientRect で要素の位置や幅や高さなどを取得
      var boundingClientRect = element.getBoundingClientRect();

      // スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;

      // ブラウザウィンドウの ビューポートの高さ
      var windowHeight = window.innerHeight;

      // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
      if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

          // 要素を表示する場合は、要素の透明度を無くし、X方向の移動距離を無くす。これで表示される
          element.style.opacity = "1";
          element.style.transform = "translateX(0)";
      }
  });
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
  // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
  fadeinEvent();

  // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
  window.addEventListener('scroll', fadeinEvent, false);


    var a =document.getElementById('box');
    a.style.transform = "translate(417px)";
    a.style.transitionDuration="1.5s";
    document.querySelector('span').animate(
      [
          { opacity: '0' },
          { opacity: '1' }   
        ], {
          duration: 5000,
          easing: 'ease-out',
          fill: 'forwards',
        }
    );          
}