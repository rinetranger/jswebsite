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

    // たいとる
    var makeName =document.createElement('h2');
    makeName.textContent="Salon de Sats";
    makeName.style.fontSize="24px"
    makeName.style.width='200px';
    makeName.style.heigt="100px";
    makeName.style.padding ='43px';
    makeName.style.color = "white";
    makeName.style.fontFamily='Courier New'
    makeHeader.appendChild(makeName);
    

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
    makeMainTitle.style.color="skyblue";
    makeMainTitle.style.fontStyle="bold";
    makeMainTitle.style.top='35%';
    makeMainTitle.style.left="35%";
    makeMainTitle.style.fontSize="65px";
    makeMainTitle.style.fontFamily='Courier New';
    
    var makeSecondMain =document.createElement("div");
    container3.appendChild(makeSecondMain);
   

    var makeSecondTitle =document.createElement('h3');
    makeSecondMain.appendChild(makeSecondTitle);
    makeSecondTitle.textContent="New Information";
    makeSecondTitle.style.textAlign='center';
    makeSecondTitle.style.fontSize="30px";
    makeSecondTitle.style.margin = "40px";
    makeSecondTitle.style.font = "bold";


    var makeSecondImage=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage);
    makeSecondImage.src="img/human002.jpg";
    makeSecondImage.style.width = "400px" ;
    makeSecondImage.style.height = "300px" ;
    makeSecondImage.style.margin="30px";
    

    var makeSecondImage1=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage1);
    makeSecondImage1.src="img/human001.jpg";
    makeSecondImage1.style.width = "400px" ;
    makeSecondImage1.style.height = "300px" ;
    makeSecondImage1.style.margin="30px";

    var makeSecondImage2=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage2);
    makeSecondImage2.src="img/human003.jpg";
    makeSecondImage2.style.width = "400px" ;
    makeSecondImage2.style.height = "300px" ;
    makeSecondImage2.style.margin="30px"

    var makeSecondImage3=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage3);
    makeSecondImage3.src="img/human004.jpg";
    makeSecondImage3.style.width = "400px" ;
    makeSecondImage3.style.height = "300px" ;
    makeSecondImage3.style.margin="30px";

    var makeSecondImage4=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage4);
    makeSecondImage4.src="img/flower001.jpg";
    makeSecondImage4.style.width = "400px" ;
    makeSecondImage4.style.height = "300px" ;
    makeSecondImage4.style.margin="30px";

    var makeSecondImage5=document.createElement('img');
    makeSecondMain.appendChild(makeSecondImage5);
    makeSecondImage5.src="img/flower003.jpg";
    makeSecondImage5.style.width = "400px" ;
    makeSecondImage5.style.height = "300px" ;
    makeSecondImage5.style.margin="30px";


    var makeAbout =document.createElement('div');
    container4.appendChild(makeAbout);
    makeAbout.textContent="About";
    makeAbout.style.textAlign='center';
    makeAbout.style.fontSize="30px";
    makeAbout.style.font="bold";
    makeAbout.style.margin="40px";


    var makeAboutContent =document.createElement('div');
    container4.appendChild(makeAboutContent);
    makeAboutContent.style.display="flex";


    var makeAboutImage =docume.createElement('img');
    makeAboutImage.src = 'img/diploma_aroma.jpg';
    makeAboutContent.appendChild(makeAboutImage);
    
    makeAboutImage.style.width = "600px";
    makeAboutImage.style.height = "400px" ;
    makeAboutImage.style.margin="100px";





    console.log('test');
}s