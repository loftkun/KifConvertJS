javascript:
//開始日時
var%20day="開始日時："+"xxxx"+"年"+"xx"+"月"+"xx"+"日<br>";
//持ち時間
var%20timelimit="持ち時間："+document.getElementById("divInfo_Game_TimeSetting").innerHTML+"<br>";
//場所
var%20place="場所：将棋オンライン<br>";
//手合割
var%20handicap=document.getElementById("divInfo_Game_Handicap").innerHTML;
if(handicap.charAt(0)=="平"){
	handicap="平手";
}else if(handicap.charAt(0)=="香"){
	handicap="香落ち";
}else if(handicap.charAt(0)=="角"){
	handicap="角落ち";
}else if(handicap.charAt(0)=="飛"){
	handicap="飛車落ち";
}else if(handicap.charAt(0)=="2"){
	handicap="二枚落ち";
}else if(handicap.charAt(0)=="4"){
	handicap="四枚落ち";
}else if(handicap.charAt(0)=="6"){
	handicap="六枚落ち";
}else{
	handicap="不明";
}
handicap="手合割："+handicap+"<br>";
var%20result=day+timelimit+place+handicap;

//手番判定
var%20imgTurnBoards=document.getElementsByClassName("imgTurn_Board");
var%20re=/sente/g;
var%20sente=0,gote=1;
if(imgTurnBoards[0].src.match(re)){
	sente=0;
	gote=1;
}else{
	sente=1;
	gote=0;
}

//ニックネーム
var%20nicks=document.getElementsByClassName("divNamePlate_Board_Nick");
var%20infos=document.getElementsByClassName("divNamePlate_Board_Info");
result+="先手："+nicks[sente].innerHTML+"<br>";
result+="後手："+nicks[gote].innerHTML+"<br>";
result+="手数----指手---------消費時間--<br>";

//棋譜
var%20moves=document.getElementsByClassName("divKifu_One");
var%20move="";
var%20i=0;
for(i%20=0;%20i%20<%20moves.length;%20i++){
	move=moves[i].innerHTML;
	move=move.replace(/\./g," ");//ピリオドを半角スペースに
	move=move.replace(/△/g,"");//△を除去
	move=move.replace(/▲/g,"");//▲を除去
	move=move.replace(/\s1/g," １");//半角を全角に
	move=move.replace(/\s2/g," ２");
	move=move.replace(/\s3/g," ３");
	move=move.replace(/\s4/g," ４");
	move=move.replace(/\s5/g," ５");
	move=move.replace(/\s6/g," ６");
	move=move.replace(/\s7/g," ７");
	move=move.replace(/\s8/g," ８");
	move=move.replace(/\s9/g," ９");
	//駒を成る手の場合
	//将棋オンラインの棋譜は"(xxx)成"になっており、kif形式にするには"成(xxx)"とする必要がある。
	var matchResult = move.match(/\(..\)成/);
	if(matchResult){
		var locate = matchResult[0].substring(1, 3);
		move=move.substring(0, matchResult.index) + "成(" + locate + ")";
	}
	//末尾に時間を付加
	move=move.replace(/$/g,"   ( 0:00/00:00:00)<br>");
	result+=move;
}
document.body.innerHTML=result;
