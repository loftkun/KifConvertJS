javascript:
var%20hoge="Yahoo!モバゲー将棋棋譜変換ブックマークレット v1.0 2013/04/30 公開";
var%20tbl=document.getElementsByClassName("table4-lay")[0];
var%20tblDay=tbl.rows[1].cells[0].firstChild.nodeValue;

var%20day="開始日時："+tblDay+"<br>";
var%20timelimit="持ち時間：不明<br>";
var%20place="場所：Yahoo!モバゲー 将棋<br>";
handicap="手合割：平手<br>";
var%20result=day+timelimit+place+handicap;


var%20tblSente=document.getElementsByTagName("span")[2].innerHTML;
var%20tblGote=document.getElementsByTagName("span")[3].innerHTML;
result+="先手："+tblSente+"<br>";
result+="後手："+tblGote+"<br>";
result+="手数----指手---------消費時間--<br>";

var%20moves=document.getElementsByClassName("kifu-lay")[0].innerHTML;
moves=moves.replace(/▲/g,"");
moves=moves.replace(/△/g,"");
moves=moves.replace(/<br>/g,"   ( 0:00/00:00:00)<br>");
moves=moves.replace(/\.\s1/g," １");
moves=moves.replace(/\.\s2/g," ２");
moves=moves.replace(/\.\s3/g," ３");
moves=moves.replace(/\.\s4/g," ４");
moves=moves.replace(/\.\s5/g," ５");
moves=moves.replace(/\.\s6/g," ６");
moves=moves.replace(/\.\s7/g," ７");
moves=moves.replace(/\.\s8/g," ８");
moves=moves.replace(/\.\s9/g," ９");
moves=moves.replace(/成歩/g,"と");
moves=moves.replace(/\./g,"");

result%20+=moves;
document.body.innerHTML=result;


