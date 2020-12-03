//関数化してシンプルに管理する。
//できるプロセスを限り書き出す。
//administration();
//順番管理。並びに設置可能判断。
// スタート黒、次白、もし反対の色が設置可能地域になければパスして相手板になる。
init();
//オセロゲーム初期化のための関数
//配列で管理。４つのオセロを並べる。
//スタート画面作成createElemntで作成。
// input();
//クリックした場所を認識する関数
//テーブルのセルの場所を判定する。
// judge1();
//ひっくり返し判断の関数
// judge2();
//設置判定の関数
// update();
//更新処理
// finish();
//終了判定
// srender();
//表示



function init(){
    
    var tbl = (new Array(8)).fill(0);
    tbl.forEach((_, i)=>{
        tbl[i] = (new Array(8)).fill(0);
        
    });
    // 多次元配列でテーブルの値管理
    tbl[3][3]=1;
    tbl[3][4]=-1;
    tbl[4][4]=1;
    tbl[4][3]=-1;
    //初期設定２個の白黒を１と−１で代入。
    console.log(tbl);

    var table = document.getElementById('field');
    var tableMain = document.createElement('table');
    var abe = document.createElement('tr');
    var makeTr = tableMain.appendChild(abe);
    var ibe = document.createElement('td');
    var makeTd = tableMain.appendChild(ibe);
    makeTd.textContent = "●" ;


    console.log('test');


    for(i=0; i<8;i++){
        if(tbl[i]=0)
      
        for(j=0;j<8;j++){
            if(tbl[i][j]=0){
                Table.insertCell()
            }else if(tbl[i][j]=1){
                table.insertCell('●')
              
            }else if(tb[i][j]=-1){
                table.insertCell('◯')
            }
        }
    }

}




// for( let i=0; i<tbl.length; i++ ){
//     if(tbl[i][i]=0){
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         console.log("0");
//     }else if(tbl[i][i]=1){
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         console.log('1');
//     }else if(tbl[i][i]=-1){
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         console.log("-1");
//     }
// }