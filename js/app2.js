start();

function start(){
    // ヘッダーの生成と挿入
    var makeHeader = document.createElement('header');
    var container =document.getElementById('container');
    container.appendChild(makeHeader);
    
    // タイトルイメージの生成と設定並びに挿入
    var makeTitle = document.createElement('img');
    makeTitle.src="img/cidesco_photo.gif";
    makeTitle.style.width = "200px" ;
    makeTitle.style.height = "100px" ;
    makeHeader.appendChild(makeTitle);
    makeHeader.style.display="flex";
    makeHeader.style.justifyContent="space-between";
    console.log(makeTitle);

    // ナビの生成と挿入
    var makeNav = document.createElement('nav');
    makeHeader.appendChild(makeNav);
    makeNav.style.display="flex";
    makeNav.style.margin="0"
    makeNav.style.width="50%";

    // Ul生成と設定
    var makeUl = document.createElement('ul');
    makeNav.appendChild(makeUl);
    makeUl.style.height="100px";
    makeUl.style.display="flex";
    makeUl.style.listStyle="none";
    makeUl.style.justifyContent="space-evenly";
    makeUl.style.alignItems="center";
    
    // li生成と設定、挿入
    var makeLi = document.createElement('li');
    var makeLi1 = document.createElement('li');
    var makeLi2 = document.createElement('li');
    var makeLi3 = document.createElement('li');
    makeUl.appendChild(makeLi);
    makeLi.textContent='Home';
    makeLi.style.marginLeft="50px";
    makeLi.style.color="rgb(177, 165, 2)";

    makeUl.appendChild(makeLi1);
    makeLi1.textContent='Cidescoについて';
    makeLi1.style.marginLeft="50px";
    makeLi1.style.color="rgb(177, 165, 2)";

    makeUl.appendChild(makeLi2);
    makeLi2.textContent='施術メニュー';
    makeLi2.style.marginLeft="50px";
    makeLi2.style.color="rgb(177, 165, 2)";
    makeUl.appendChild(makeLi3);
    makeLi3.textContent='アクセス';
    makeLi3.style.marginLeft="50px";
    makeLi3.style.color="rgb(177, 165, 2)";

    // main部分の生成とCSS
    var makeMain = document.createElement('main');
    var container2 =document.getElementById('container2');
    container2.appendChild(makeMain);
    makeMain.style.position="relative"
    makeMain.style.margin="0";
    
    // メインイメージの生成とCSS
    var makeMainImg = document.createElement('img');
    makeMain.appendChild(makeMainImg);
    makeMainImg.src="img/human004.jpg";
    makeMainImg.style.width = "100%" ;
    makeMainImg.style.height = "92vh" ;
    makeMainImg.style.margin="0";

    //メインタイトルの生成とCSS
    var makeMainTitle =document.createElement('h1');
    makeMain.appendChild(makeMainTitle);
    makeMainTitle.textContent='Salon de Sats';
    makeMainTitle.style.position="absolute";
    makeMainTitle.style.color="white";
    makeMainTitle.style.top='35%';
    makeMainTitle.style.left="35%";
    makeMainTitle.style.fontSize="65px"
    

    


    console.log('test');
}