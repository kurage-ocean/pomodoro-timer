// JavaScript Document

var PassSec;
var CountDownValue;
var min = 0;
var sec = 0;
var Back = document.getElementById("bg_color");
var ttlColor = document.getElementById("ttl");
var PassageID = null;
var audio = new Audio("music/Timer.mp3");
function play() {
      audio.play();
  }

function timerStop(){
	clearInterval(PassageID);
	play();
	btnClear();
}

function btnClear(){
	document.getElementById("startcount").disabled = false; // 開始ボタンの有効化
	document.getElementById("short_break").disabled = false;   
	// 短い休憩ボタンの有効化 
	document.getElementById("long_break").disabled = false; // 長い休憩ボタンの有効化
}

// タイマー処理の中身
function showPassage() {
	
	CountDownValue--;   // カウントダウン
	if(CountDownValue <= 0){
		timerStop();
	}
	
	min = Math.floor(CountDownValue / 60);
	sen = Math.floor(CountDownValue % 60);
	PassageArea.innerHTML =min +':' + sen ;
         
	if (sen<10) {
		if (min<10){
		PassageArea.innerHTML ='0' + min + ':' + '0' + sen;
		}else {
			PassageArea.innerHTML =min + ':' + '0' + sen;
		}
		}else if(min<10){
		PassageArea.innerHTML ='0' + min + ':' + sen;
	}
		else{
		PassageArea.innerHTML =min + ':' + sen;
	};
}

// 25分のタイマー開始
function startShowing() {
    CountDownValue = 1500;   // カウンタを25分に設定
	
	PassageID = setInterval(showPassage,1000);   
	// タイマーをセット
	
	PassageArea.innerHTML ='25:00';
	
    document.getElementById("startcount").disabled = true; // 開始ボタンの無効化
    document.getElementById("short_break").disabled = true; // 短い休憩ボタンの無効化
    document.getElementById("long_break").disabled = true; 
    // 長い休憩ボタンの無効化
	
	Back.classList.remove("bleak-long");
	Back.classList.remove("bleak-short");
	Back.classList.add("work");
	// 背景を赤色に変更
	
	ttlColor.classList.remove("ttl-green");
	ttlColor.classList.remove("ttl-blue");
	ttlColor.classList.add("ttl-red");
	//文字を赤色にする
}

// ５分のタイマー開始
function ShortBreak(){
	CountDownValue = 300; //　カウンタを5分に設定
	
	PassageID = setInterval('showPassage()',1000);   
	// タイマーをセット(1000ms間隔)
	
	PassageArea.innerHTML ='05:00';
	
	document.getElementById("startcount").disabled = true; // 開始ボタンの無効化
    document.getElementById("short_break").disabled = true; // 短い休憩ボタンの無効化
    document.getElementById("long_break").disabled = true; 
    // 長い休憩ボタンの無効化
	
	Back.classList.remove("work");
	Back.classList.remove("bleak-long");
	Back.classList.add("bleak-short");
	// 背景を青色に変更
	
	ttlColor.classList.remove("ttl-red");
	ttlColor.classList.remove("ttl-green");
	ttlColor.classList.add("ttl-blue");
	//文字を青色にする
}

// 15分のタイマー開始
function LongBreak(){
	CountDownValue = 900; //　カウンタを5分に設定
	
	PassageID = setInterval('showPassage()',1000);   
	// タイマーをセット(1000ms間隔)
	
	PassageArea.innerHTML ='15:00';
	
	document.getElementById("startcount").disabled = true; // 開始ボタンの無効化
    document.getElementById("short_break").disabled = true; // 短い休憩ボタンの無効化
    document.getElementById("long_break").disabled = true; 
    // 長い休憩ボタンの無効化
	
	Back.classList.remove("work");
	Back.classList.remove("bleak-short");
	Back.classList.add("bleak-long");
	// 背景を緑に変更
	
	ttlColor.classList.remove("ttl-red");
	ttlColor.classList.remove("ttl-blue");
	ttlColor.classList.add("ttl-green");
	//文字を緑色にする
}

// タイマーのリセット
function stopShowing() {
   clearInterval( PassageID );   // タイマーのクリア
	
	PassageArea.innerHTML ='25:00';
	
    document.getElementById("startcount").disabled = false; // 開始ボタンの有効化
	document.getElementById("short_break").disabled = false;   
	// 短い休憩ボタンの有効化 
	document.getElementById("long_break").disabled = false; // 長い休憩ボタンの有効化
	
	Back.classList.remove("work");
	Back.classList.remove("bleak-short");
	Back.classList.remove("bleak-long");
	Back.classList.add("work");
	//背景を赤に戻す
	
	ttlColor.classList.remove("ttl-red");
	ttlColor.classList.remove("ttl-green");
	ttlColor.classList.remove("ttl-blue");
	ttlColor.classList.add("ttl-red");
	//文字を赤色に戻す
}