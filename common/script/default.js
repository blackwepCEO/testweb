function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function key_check()
{
	document.onkeydown = function()
	{
		var keyValue = window.event.keyCode
		if( keyValue == "112") //F1키
		{
			event.keyCode = 0;	
		}
		if( keyValue == "113") //F2키
		{	
			event.keyCode = 0;
		}

		if( window.event && keyValue == "114") //F3키
		{
			event.keyCode = 0;

		}
		if( keyValue == "115") //F4키
		{
			//alert(4);
		}
		if( keyValue == "116") //F5키
		{

		}  
		if( keyValue == "117") //F2키
		{
			event.keyCode = 0;
		}  

	}	
}

function checkCapsLook(e)
{
	var maKeyCode = 0;
	var myShiftKey = false;
	var MyMsg = "Caps Lock 키가 켜져 있습니";
	if ( document.all ) //익스플로워
	{
		myKeyCode = e.keyCode;
		myShifeKey = e.shiftKey;
	}
	else if( document.layers )
	{
		myKeyCode = e.which;
		myShifeKey = ( myKeyCode == 16)? true : false;
	}
	else if( document.getElementById )
	{
		myKeyCode = e.which;
		myShifeKey = ( myKeyCode == 16)? true : false;
	}
	
	if((myKeyCode >= 65 && myKeyCode <= 90) && !myShiftKey) 
	{
		return false;
	}
	else if((myKeyCode >=97 && myKeyCode <= 122) && myShiftKey)
	{
		return false;
	}
	else
	{
		return true;
	}
}

//하단 상태바
function StatusText() 
{
	window.status = "방문을 환영합니다.";
	setTimeout("StatusText()", 0);
}

// 즐겨찾기
function addfavorites()
{
	var favoriteurl		= "http://www.mysite.com" ;
	var favoritetitle	= "mysite" ;
	if (document.all)
	window.external.AddFavorite(favoriteurl,favoritetitle)
}

//한글 영문 숫자만 검색
function onlyTXT(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^가-힣a-zA-Z0-9]/; 

    if(deny_pattern.test(inText)) 
    { 
        return false; 
    } 
    return true; 
} 


//영문 숫자만 검색
function onlyENGTXT(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^a-zA-Z0-9]/; 

    if(deny_pattern.test(inText)) 
    { 
        return false; 
    } 
    return true; 
} 

//한글만 검색
function onlyKor(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^가-힣]/; 

    if(deny_pattern.test(inText)) 
    { 
        return false; 
    } 
    return true; 
} 

//한글숫자만 검색
function onlyKorNum(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^가-힣0-9]/; 

    if(deny_pattern.test(inText)) 
    { 
        return false; 
    } 
    return true; 
} 


//한글입력 검증
function onlyKorCheck(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^가-힣]/; 

    if(deny_pattern.test(inText)) 
    { 
        alert("한글만 기입하셔야 합니다.");
        objtext1.value = "";
        return; 
    }     
    return; 
} 

//숫자만 검색
function onlyNum(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^0-9]/; 

    if(deny_pattern.test(inText)) 
    { 
        return false; 
    } 
    return true; 
} 

//숫자입력 검증
function onlyNumCheck(objtext1) { 
    var inText = objtext1.value; 
    var deny_pattern = /[^0-9]/; 

    if(deny_pattern.test(inText)) 
    { 
        alert("숫자만 기입하셔야 합니다.");
        objtext1.value = "";
        return; 
    } 
    return; 
} 


//이메일체크		
function CheckEmail(strEmail)
{
    //alert(strEmail);

    	var i;
    	var strCheck1 = false;
    	var strCheck2 = false;
	var iEmailLen = strEmail.length
	
	if (iEmailLen > 0) {
		// strEmail 에 '.@', '@.' 이 있는 경우 에러메시지.
		// strEmail의 맨앞 또는 맨뒤에  '@', '.' 이 있는 경우 에러메시지.
		if ((strEmail.indexOf(".@") != -1) || (strEmail.indexOf("@.") != -1) ||
			(strEmail.substring(0,1) == ".") || (strEmail.substring(0,1) == "@") ||
			(strEmail.substring(iEmailLen-1,iEmailLen) == ".") || (strEmail.substring(iEmailLen-1,iEmailLen) == "@"))
		{	
			return false;
		}
		
	    for(i=0; i < iEmailLen; i++) {
	        if ((strEmail.substring(i,i+1) == ".") || 
	           (strEmail.substring(i,i+1) == "-") || (strEmail.substring(i,i+1) == "_") ||
	           ((strEmail.substring(i,i+1) >= "0") && (strEmail.substring(i,i+1) <= "9")) ||
	           ((strEmail.substring(i,i+1) >= "@") && (strEmail.substring(i,i+1) <= "Z")) ||
	           ((strEmail.substring(i,i+1) >= "a") && (strEmail.substring(i,i+1) <= "z"))) {
	                if (strEmail.substring(i,i+1) == ".")
						strCheck1 = true;
	                if (strEmail.substring(i,i+1) == "@")
						strCheck2 = true;
	        }
	        else {
				return false;
	        }
	    }
	
	    if ((strCheck1 == false) || (strCheck2 == false)) {
			return false;
	    }
	}
			
    return true;
}

//공백확인
function checkblank(str)
{
        var str;
        var tmpStr;
        var temp=0;
        var onechar;

        tmpStr = new String(str);
        temp = tmpStr.length;

        for (k=0;k<temp;k++)
        {
                onechar = tmpStr.charAt(k);
				
				if (onechar == '\r' || onechar == ' ') 
				{
					return (false);
					break;
                }
        }
        return(true);
}

//글자수체크1(표시)
function checkMsg1(doc,dp_form,sByte)
{

        var str;
        var tmpStr;
        var temp=0;
        var onechar;
        var tcount;
        var sByte;
        tcount = 0;
		
		str = doc.value;
		
        tmpStr = new String(str);
        temp = tmpStr.length;

        for (k=0;k<temp;k++)
        {
                onechar = tmpStr.charAt(k);

                if (escape(onechar).length > 4) {
                        tcount += 2;
                }
                else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
                        tcount += 2;
                }
                else if (temp != '\n') {
                        tcount++;
                }
                else {
                        tcount++;
                }
        }
        dp_form.value = tcount+" / " + sByte + " byte";

        if (tcount > sByte) 
        {
			doc.blur();
            doc.focus();
            cutChar(doc,dp_form,sByte);
        }
}

//글자수체크2(값전달)
function checkMsg2(str)
{
        var str;
        var tmpStr;
        var temp=0;
        var onechar;
        var tcount;
        tcount = 0;
	

        tmpStr = new String(str);
        temp = tmpStr.length;

        for (k=0;k<temp;k++)
        {
                onechar = tmpStr.charAt(k);

                if (escape(onechar).length > 4) {
                        tcount += 2;
                }
                else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
                        tcount += 2;
                }
                else if (temp != '\n') {
                        tcount++;
                }
                else {
                        tcount++;
                }
        }
        return(tcount);
}

// 문자열의 BYTE 길이 구하기
function bytelength(pstr) 
{
	var i, ch;
	len = pstr.length;
	for (i = 0; i < pstr.length; i++) 
	{
		ch = pstr.substr(i,1).charCodeAt(0);
		if (ch > 127) { len++; }
	}
	return len;
}

//숫자 스트링 체크
function digitstr(pstr) 
{
	var valid = "0123456789";
	return checkstr(pstr, valid, 0);
}

function checkstr(pstr, pvalid, han) 
{
	var valid = pvalid;
	var tmp;
	var flag = true;

	for (var i = 0; i < pstr.length; i++) 
	{
		flag = true;
		tmp = "" + pstr.substring(i, i+1);
			
		if (han != 1) 
		{
			if (valid.indexOf(tmp) == "-1") 
			{
				return false;
			}
		} 
		else 
		{
			ch = escape(pstr.charAt(i));        //ISO-Latin-1 문자셋으로 변경
			if (valid.indexOf(tmp) == "-1" && 
				strCharByte(ch) != 2) 
			{
				return false;
			}
		}
	}
	return true;;
}


/* 한글 byte 체크 */
function strCharByte(chStr) 
{

	if (chStr.substring(0, 2) == '%u') 
	{
			
		/* alert(chStr.substring(2,6)); */
		if (chStr.substring(2,6) >= "AC00" && chStr.substring(2,6) <= "D7A3") 
		{
			return 2;			/* 한글 */
		} 
		else 
		{
			return 1;
		}

			/* 구버전 */
			/*
			if (chStr.substring(2,4) == '00')
				return 1;
			else
				return 2;
			*/

	} 
	else if (chStr.substring(0,1) == '%') 
	{
		if (parseInt(chStr.substring(1,3), 16) > 127)
			return 2;			/* 한글 */
		else
			return 1;
	} 
	else 
	{
		return 1;
	}

}

/* 문자열의 양쪽(왼쪽, 오른쪽) 공백 제거 */ 
function trim(pstr) 
{
	var search = 0
	while (pstr.charAt(search) == " ") 
	{
			search = search + 1
	}
	pstr = pstr.substring(search, (pstr.length))
	search = pstr.length - 1
	while (pstr.charAt(search) ==" ")
	{
		search = search - 1
	}
	return pstr.substring(0, search + 1)         
}

/* 경로이동 */
function Go_Url(url)
{
	//alert(url);
	location.replace(url);   
}

function cutChar(doc,dp_form,sByte)
{
        var str,msg;
        var len=0;
        var temp;
        var count;
        var sByte;
        count = 0;

        msg = doc.value;
        str = new String(msg);
        len = str.length;

        for(k=0 ; k<len ; k++) {
                temp = str.charAt(k);

                if(escape(temp).length > 4) {
                        count += 2;
                }
                else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
                        count += 2;
                }
                else if(temp != '\n') {
                        count++;
                }
                if(count > sByte) {
                        str = str.substring(0,k);
                        alert("작성한 글이 "+ sByte + "바이트 이상입니다. \n\n 초과된 부분은 자동으로 삭제됩니다.");
                        break;
                }
        }
        doc.value = str;
        dp_form.value = k+" / " + sByte + " byte";
        checkMsg1(doc,dp_form,sByte);
}

function isYYYYMMDD(y, m, d) 
{
  switch (m) {
    case 2: // 2월의 경우
      if (d > 29) return false;
      if (d == 29) {
        // 2월 29의 경우 당해가 윤년인지를 확인
        if ((y % 4 != 0) || (y % 100 == 0) && (y % 400 != 0))
        return false;
      }
      break;
    case 4: // 작은 달의 경우
    case 6:
    case 9:
    case 11:
      if (d == 31) return false;
  }
  // 큰 달의 경우
  return true;
}

function isNumeric(s) 
{
  for (i=0; i<s.length; i++) {
    c = s.substr(i, 1);
    if (c < "0" || c > "9") return false;
  }
  return true;
}

function isSSN(s1, s2) {
  n = 2;
  sum = 0;
  for (i=0; i<s1.length; i++)
  sum += parseInt(s1.substr(i, 1)) * n++;
  for (i=0; i<s2.length-1; i++) {
    sum += parseInt(s2.substr(i, 1)) * n++;
    if (n == 10) n = 2;
  }
  c = 11 - sum % 11;
  if (c == 11) c = 1;
  if (c == 10) c = 0;
  if (c != parseInt(s2.substr(6, 1))) return false;
  else return true;
}


//금액 (,) 자동 삽입기능
function Java_MoneyFormat(str)
{
	//var  frm = document.getElementById("bt");
	var re="";
	str = str + "";
	str=str.replace(/-/gi,"");
	str=str.replace(/ /gi,"");
	
	str2=str.replace(/-/gi,"");
	str2=str2.replace(/,/gi,"");
	str2=str2.replace(/\./gi,"");	
	
	if(isNaN(str2) && str!="-") return "";
	try
	{
		for(var i=0;i<str2.length;i++)
		{
			var c = str2.substring(str2.length-1-i,str2.length-i);
			re = c + re;
			if(i%3==2 && i<str2.length-1) re = "," + re;
		}
		
	}catch(e)
	{
		//bt.bisMoney.value = "";
		re="";
	}
	
	if(str.indexOf("-")==0)
	{
		//bt.bisMoney.value = "-" + str2;
		re = "-" + re;
	}
	
	//alert(str2);
	//bt.bisMoney.value = str2;
	
	return re;
}
function checkSpace(value)
{
	if(/^\s*$/.test(value))
	   return false;
	return true;
}
function Check_Digit(str) {
	for(i = 0;i < str.length;i++) {
		if(str.charAt(i) < '0' || str.charAt(i) > '9')
			return;
	}
	return true;
}

////// 화폐단위 변환
function Java_MoneyFormat(str)
{
	var re="";
	str = str + "";
	str=str.replace(/-/gi,"");
	str=str.replace(/ /gi,"");
	
	str2=str.replace(/-/gi,"");
	str2=str2.replace(/,/gi,"");
	str2=str2.replace(/\./gi,"");	
	
	if(isNaN(str2) && str!="-") return "";
	try
	{
		for(var i=0;i<str2.length;i++)
		{
			var c = str2.substring(str2.length-1-i,str2.length-i);
			re = c + re;
			if(i%3==2 && i<str2.length-1) re = "," + re;
		}
		
	}catch(e)
	{
		re="";
	}
	
	if(str.indexOf("-")==0)
	{
		re = "-" + re;
	}

	return re;
}
// 콤마 제거
function filterNum(str) 
{ 
	re = /^\$|,/g; 
	return str.replace(re, ""); 
}
////// 숫자를 정해진 자릿수에서 반올림
function roundXL(n, digits) {
  if (digits >= 0) return parseFloat(n.toFixed(digits)); // 소수부 반올림

  digits = Math.pow(10, digits); // 정수부 반올림
  var t = Math.round(n * digits) / digits;

  return parseFloat(t.toFixed(0));
}

///// right 함수 ////
function Right(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}

/////////////// 쪽지 팝업창을 띄운다 ////////////////////
function popMessage()
{
	window.open('/main/mypage/note.asp','popMessage','width=750, height=420, left=50,  top=30, toolbar=0, status=0,scrollbars=yes, resizable=0');
}

/////////////// 라이브스코어 팝업창을 띄운다. ////////////////////
function popLivescore()
{
		window.open('/main/livescore/livescore.asp','popLivescore','width=775, height=830, left=50,  top=30, toolbar=0, status=0,scrollbars=yes, resizable=0');
}

/////////////// 마우스 클릭 금지 ////////////////////
document.onmousedown = disableclick; 
function disableclick(e) { 
  if (event.button == 2) { 
	  //alert("즐거운 게임 되세요 ^^"); 
	  return false; 
  }
}


function numOnMask(me)
{
    var tmpH 
	var tmpArr
	me = me.toString();
	tmpArr = me.split(",")
	me = tmpArr.join("")
	me = me.replace(/ /g, "")
	if(me.length > 3)
	{
		var c=0;
		var myArray=new Array();

		for(var i=me.length;i>0;i=i-3)
		{
			myArray[c++]=me.substring(i-3,i);
		}
		myArray.reverse();
		me=myArray.join(",");
	}
    if(tmpH)
    {
        me=tmpH+me;
    }
    return me
}


function addBetMoney(p_money)
{
	var my_betting_money				= $("#my_betting_money").val();
	if(Number(p_money) > 0)
	{
		my_betting_money						= filterNum(my_betting_money);
		my_betting_money						= Number(p_money) + Number(my_betting_money);
		$("#my_betting_money").val(Java_MoneyFormat(my_betting_money));
	} else {
		$("#my_betting_money").val(0);
	}
}

function getLoadAjax(url)
{
	var myAjax = new $.ajax(url,{
	contentType: "text/html; charset=utf-8", 
	success:function(dataA)
		{
			try{
				eval(dataA);		
			}catch( e ){

			}
		}	
	})
}


function realtimeClock() {
  $("#top_time").html('GMT+9 ' + getTimeStamp());
  setTimeout("realtimeClock()", 1000);
}
function getTimeStamp() {
  var d = new Date();

  var s =
    leadingZeros(d.getFullYear(), 4) + '-' +
    leadingZeros(d.getMonth() + 1, 2) + '-' +
    leadingZeros(d.getDate(), 2) + ' ' +

    leadingZeros(d.getHours(), 2) + ':' +
    leadingZeros(d.getMinutes(), 2) + ':' +
    leadingZeros(d.getSeconds(), 2);

  return s;
}
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

var fullurl = " " + $(location).attr('pathname');
var header_path = "";

// Mobile
 if(fullurl.indexOf('/m/') > 0) {
	header_path = "/m";
 } else {
	header_path = "/main";
 }

$(document).ready(function(){

	// LEFT 메뉴
	// 펼침 누르기
	$('#btn_open_wrap_left').click(function(){
		//if($('#wrap_left').hasClass("on") === false) {	
			$('#wrap_left').addClass("on");
			$('#wrap_left').removeClass("off");
			$('#btn_open_wrap_left').addClass("on");
			$('#btn_open_wrap_left').removeClass("off");
			$('#btn_close_wrap_left').addClass("on");
			$('#btn_close_wrap_left').removeClass("off");
		//}
	});


	$('#btn_close_wrap_left').click(function(){
		//if($('#wrap_left').hasClass("open") === true) {	
			$('#wrap_left').addClass("off");
			$('#wrap_left').removeClass("on");
			$('#btn_open_wrap_left').addClass("on");
			$('#btn_open_wrap_left').removeClass("off");
			$('#btn_close_wrap_left').addClass("off");
			$('#btn_close_wrap_left').removeClass("on");

		//}
	});

	// 상단 시계
	realtimeClock();

	// 스포츠 페이지 진입시 초기화면
	initSports();

	$('#btn_login').click(function(){ login_sendit(); });

	// 좌측 탭 슬라이드
	$(".left_sports").click(function() { setLeftSportsSlide($(this)); });

	// 좌측 국가명 선택
	$(".left_sleague").click(function() { setSportsLeftLeague($(this)); 	});

	// 좌측 리그명 선택
	$(".left_league").click(function() { setSportsLeft($(this)); });

	// 상단 탭 선택
	$('.tab_league').click(function(){ setSportsTab($(this)); });

}); 

function initSports()
{

	if(fullurl.indexOf('/game/gameT1') > 0 || fullurl.indexOf('/game/gameT2') > 0 || fullurl.indexOf('/game/gameT3') > 0 || fullurl.indexOf('/game/gameT4') > 0)
	{
		var loadUrl = "";
		var loadObj = "";
		if(fullurl.indexOf('/game/gameT1') > 0) {
			loadObj = "#gameT1_w";
			loadUrl = header_path + "/game/ajaxGameT1.asp?s_rec="+$("#s_rec").val();
		} else if(fullurl.indexOf('/game/gameT2') > 0) {
			loadObj = "#gameT2_w";
			loadUrl = header_path + "/game/ajaxGameT2.asp?s_rec="+$("#s_rec").val();
		} else if(fullurl.indexOf('/game/gameT3') > 0) {
			loadObj = "#gameT3_w";
			loadUrl = header_path + "/game/ajaxGameT3.asp?s_rec="+$("#s_rec").val();
		} else if(fullurl.indexOf('/game/gameT4') > 0) {
			loadObj = "#gameT4_w";
			loadUrl = header_path + "/game/ajaxGameT4.asp";
		}

		if($("#init_sports").val() != "" && $("#init_sleague").val() != "")
		{
			setLeftSportsSlide($("#left_sports"+$("#init_sports").val()));
			loadUrl = loadUrl + "?s_sports="+$("#init_sports").val()+"&s_sleague="+$("#init_sleague").val()+"&s_rec="+$("#s_rec").val();
		}
		setLoadPage($(loadObj),loadUrl);
			
		$("#tab_sports0_count").html($("#init_sports0_count").val());
		$("#tab_sports1_count").html($("#init_sports1_count").val());
		$("#tab_sports2_count").html($("#init_sports2_count").val());
		$("#tab_sports3_count").html($("#init_sports3_count").val());
		$("#tab_sports4_count").html($("#init_sports4_count").val());
		$("#tab_sports5_count").html($("#init_sports5_count").val());
		$("#tab_sports7_count").html($("#init_sports7_count").val());


		// 메인에서 좌측메뉴 클릭시 리그명 선택
		if($.urlParam('s_sports') != "" && $.urlParam('s_sleague') != "" && $.urlParam('s_league') != "")
		{
			obj_div = $('[data-wleague="'+$.urlParam('s_sports')+"_"+$.urlParam('s_sleague')+'"]');
			obj_league = $('[data-myleague="'+$.urlParam('s_sports')+"_"+$.urlParam('s_sleague')+"_"+$.urlParam('s_league')+'"]');

			if(obj_div.css("display") == "none")
			{
				obj_div.slideDown(300);
				obj_league.addClass("selected");
			} else {
				obj_div.slideUp(300);
			}

		}




	}
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}





function setSportsLeftLeague(obj)
{

	if(obj.next(".left_wleague").css("display") == "none")
	{
		obj.next(".left_wleague").slideDown(300);
	} else {
		obj.next(".left_wleague").slideUp(300);
	}

/*
	$.ajax({
		type : "post",
		url : "/include/include.left.ajax.asp",
		data:{"s_sports" : obj.data("sports"), "s_sleague" : obj.data("sleague")},
		datatype : "html",
		success : function(result)
		{
			if(obj.next(".left_wleague").css("display") == "none")
			{
				obj.next(".left_wleague").slideDown(300);
				obj.next(".left_wleague").html(result);
			} else {
				obj.next(".left_wleague").slideUp(300);
			}
		}
	});
*/

}


function setSportsLeft(obj)
{

	$(".left_league").removeClass("selected");
	obj.addClass("selected");


	// 국내형
	if(fullurl.indexOf('/game/gameT1') > 0)
	{
		setLoadPage($("#gameT1_w"),header_path + "/game/ajaxGameT1.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val()+"&s_sleague="+obj.data("sleague")+"&s_league="+obj.data("league"));
	// 유럽형 클릭시
	} else if(fullurl.indexOf('/game/gameT2') > 0) {
		setLoadPage($("#gameT2_w"),header_path + "/game/ajaxGameT2.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val()+"&s_sleague="+obj.data("sleague")+"&s_league="+obj.data("league"));
	// 유럽형 클릭시
	} else if(fullurl.indexOf('/game/gameT3') > 0) {
		setLoadPage($("#gameT3_w"),header_path + "/game/ajaxGameT3.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val()+"&s_sleague="+obj.data("sleague")+"&s_league="+obj.data("league"));
	// 라이브스포츠 클릭시
	} else if(fullurl.indexOf('/game/gameT4') > 0) {
		setLoadPage($("#gameT4_w"),header_path + "/game/ajaxGameT4.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val()+"&s_sleague="+obj.data("sleague")+"&s_league="+obj.data("league"));
	// 스포츠페이지가 아니라면
	} else {
		top.location.href = header_path + "/game/gameT2.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val()+"&s_sleague="+obj.data("sleague")+"&s_league="+obj.data("league");
	}

}



function showLoading()
{
	 $("#loading_mask").css("display","block");
	 $(".loading_w").css({
		"top": (($(window).height()-$(this).outerHeight())/2+$(window).scrollTop())+"px",
		"left": (($(window).width()-$(this).outerWidth())/2+$(window).scrollLeft())+"px",
		"display":"block"
	 }); 
}

function hideLoading()
{
	$(".loading_w").css("display","none");
	$("#loading_mask").css("display","none");
}

function showNoData()
{
	$(".no_data").css("display","block");
}

function setSectionType(p_code,p_type)
{
	for(i=1;i<=3;i++) { $("#type_tab_"+p_code+"_"+i).removeClass("on"); $(".section_type_"+p_code+"_"+i).hide(); }
	$("#type_tab_"+p_code +"_"+p_type).addClass("on");
	$(".section_type_"+p_code+"_"+p_type).show();
}

function setSportsTab(obj)
{
	// 경기 갯수가 0 이상일 경우만 동작
	if($("#tab_sports" + obj.data("sports") + "_count").text() <= 0) return;

	$(".tab_league").removeClass("on");
	obj.addClass("on");

	// 국내형
	if(fullurl.indexOf('/game/gameT1') > 0)
	{
		setLoadPage($("#gameT1_w"),header_path + "/game/ajaxGameT1.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val());
	// 유럽형 클릭시
	} else if(fullurl.indexOf('/game/gameT2') > 0) {
		setLoadPage($("#gameT2_w"),header_path + "/game/ajaxGameT2.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val());
	// 유럽형 클릭시
	} else if(fullurl.indexOf('/game/gameT3') > 0) {
		setLoadPage($("#gameT3_w"),header_path + "/game/ajaxGameT3.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val());
	// 라이브스포츠 클릭시
	} else if(fullurl.indexOf('/game/gameT4') > 0) {
		setLoadPage($("#gameT4_w"),header_path + "/game/ajaxGameT4.asp?s_sports="+obj.data("sports")+"&s_rec="+$("#s_rec").val());
	}
}
function setSportsDetail(p_idx,p_sports,p_time,p_code)
{
	// 모바일
	if(header_path == "/m")
	{
		// 국내형
		if(fullurl.indexOf('/game/gameT1') > 0) {
			var fileNum = "1";
		} else if(fullurl.indexOf('/game/gameT2') > 0) {
			var fileNum = "2";
		} else if(fullurl.indexOf('/game/gameT3') > 0) {
			var fileNum = "3";
		} else if(fullurl.indexOf('/game/gameT4') > 0) {
			var fileNum = "4";
		}
		if($("#gameDetail_w_" + p_idx).css("display") == "none")
		{
			$.ajax({
				type : "post",
				url : header_path + "/game/ajaxGameT"+fileNum+"_ajax.asp",
				data:{"p_idx" : p_idx, "p_gm_sports" : p_sports, "p_gm_playtime" : p_time, "p_gm_code" : p_code},
				datatype : "html",
				success : function(result) {
					$("#gameDetail_w_" + p_idx).html(result);
				}
				 ,beforeSend:function() {
					  showLoading();
				}
				,complete:function() {
					hideLoading();
				}
			});

			$("#gameDetail_w_" + p_idx).slideDown(100);
			$("#plus_"+p_idx).addClass("on");
		} else {
			$("#gameDetail_w_" + p_idx).slideUp(100);
			$("#plus_"+p_idx).removeClass("on");
		}

	} else {
		// 국내형
		if(fullurl.indexOf('/game/gameT1') > 0)
		{
		
			if($("#gameDetail_w_" + p_idx).css("display") == "none")
			{
				$.ajax({
					type : "post",
					url : header_path + "/game/ajaxGameT1_ajax.asp",
					data:{"p_idx" : p_idx, "p_gm_sports" : p_sports, "p_gm_playtime" : p_time, "p_gm_code" : p_code},
					datatype : "html",
					success : function(result) {
						$("#gameDetail_w_" + p_idx).html(result);
					}
					 ,beforeSend:function() {
						  showLoading();
					}
					,complete:function() {
						hideLoading();
					}
				});

				$("#gameDetail_w_" + p_idx).slideDown(300);
				$("#plus_"+p_idx).addClass("on");
				setSectionType(p_code,"1");
			} else {
				$("#gameDetail_w_" + p_idx).slideUp(300);
				$("#plus_"+p_idx).removeClass("on");
			}

		// 유럽형 클릭시
		} else if(fullurl.indexOf('/game/gameT2') > 0) {
			$(".more").removeClass("on");
			$("#plus_"+p_idx).addClass("on");
			setLoadPage($("#gameDetail_w"),header_path + "/game/ajaxGameT2_ajax.asp?p_gm_sports="+p_sports+"&p_gm_playtime="+p_time+"&p_gm_code="+p_code);
			$(".game_screen").attr("tabindex",-1).focus();
			setSectionType(p_code,"1");
		// 유럽형 클릭시
		} else if(fullurl.indexOf('/game/gameT3') > 0) {
			$(".more").removeClass("on");
			$("#plus_"+p_idx).addClass("on");
			setLoadPage($("#gameDetail_w"),header_path + "/game/ajaxGameT3_ajax.asp?p_gm_sports="+p_sports+"&p_gm_playtime="+p_time+"&p_gm_code="+p_code);
			$(".game_screen").attr("tabindex",-1).focus();
			setSectionType(p_code,"1");
		// 라이브스포츠 클릭시
		} else if(fullurl.indexOf('/game/gameT4') > 0) {
			$(".more").removeClass("on");
			$("#plus_"+p_idx).addClass("on");
			setLoadPage($("#gameDetail_w"),header_path + "/game/ajaxGameT4_ajax.asp?p_gm_sports="+p_sports+"&p_gm_playtime="+p_time+"&p_gm_code="+p_code);
			$(".game_screen").attr("tabindex",-1).focus();
		}
	}

}
function setLeftSportsSlide(obj)
{
	if(obj.closest("dl").hasClass("on") === true) {
		obj.siblings('ul').slideUp(200);
		obj.closest("dl").removeClass("on");
		obj.closest("dl").addClass("off");

	} else {
		obj.siblings('ul').slideDown(200);
		obj.closest("dl").removeClass("off");
		obj.closest("dl").addClass("on");
		obj.closest("li").addClass("selected");
	}
}

function setLoadPage(p_element, p_url) {
	
	var myAjax = new $.ajax(p_url,{
	contentType: "text/html; charset=utf-8", 
	success:function(dataA)
		{
			try{
				p_element.html(dataA);		
			}catch( e ){

			}
		}	
	 ,beforeSend:function(){
		  showLoading();
	    }
    ,complete:function(){
		hideLoading();
	    }
	});
}

function login_sendit()
{
	if(!checkSpace($("#left_user_id").val()))
	{
		alert("아이디를 입력해 주세요");
		$("#left_user_id").focus();
		return false;
	}
	if(!checkSpace($("#left_user_pass").val()))
	{
		alert("비밀번호를 입력해 주세요");
		$("#left_user_pass").focus();
		return false;
	}
	myform = document.flogin;
	myform.submit();
}
function login_checkkey(event)
{
	if (event.keyCode == 13) { 
		login_sendit();
		return true;
	} 
}

function login_sendit2()
{
	if(!checkSpace($("#left_user_id2").val()))
	{
		alert("아이디를 입력해 주세요");
		$("#left_user_id2").focus();
		return false;
	}
	if(!checkSpace($("#left_user_pass2").val()))
	{
		alert("비밀번호를 입력해 주세요");
		$("#left_user_pass2").focus();
		return false;
	}
	myform = document.flogin2;
	myform.submit();
}
function login_checkkey2(event)
{
	if (event.keyCode == 13) { 
		login_sendit2();
		return true;
	} 
}

function evo_launch(gid)
{
	var pop = window.open('/main/livebet/evol_launch.asp?gid='+gid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	pop.focus();
}

function apple_launch(gid, vid)
{
	var apple_pop = window.open('/main/livebet/apple_launch.asp?gid='+gid+'&vid='+vid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	apple_pop.focus();
}

function qt_slot_list(comid,sname)
{

	if( comid == "") return;
	var purl = "/common/ajax/ajax_slot_list.asp";

	if( typeof comid == "undefined" && $("#launch_gid").val() != "")
	{
		comid = $("#launch_gid").val();
		purl += '?comid='+comid;
		if (sname != "") purl += '&sname='+sname;
	} else {
		 purl += '?comid='+comid;
	}

    $.ajax({
        type: "POST",
        url: purl,
        processData: false,
        contentType: false,
        cache: false,
        async: true,
        success: function(data) {
			if(data == "0")
			{
				$("#slot_games").empty();
			} else {
				$("#slot_games").empty();
				$("#launch_gid").val(comid);
				arr_slot = data.split(',');
				for(i=0;i<arr_slot.length;i++)
				{
					arr_slot_name = arr_slot[i].split('#');
					$("#slot_games").append("<li><a onclick=\"openGame('" + arr_slot_name[0]+ "')\"><img src=\"/images/slot/" + comid + "/" + arr_slot_name[2] + "\"><p>" + arr_slot_name[1] + "</p></a></li>");
				}
				$('body').addClass('n_layer_pop_bg');
				$('.n_layer_pop').show();
			}
        },
        error: function(e, a, t) {},
        complete: function() {
            //$(".wrapper_loading").addClass("hidden");
        }
    });
}
function qt_close()
{
	$('body').removeClass('n_layer_pop_bg');
	$('.n_layer_pop').hide();
}
function openGame(gid) {
    window.open('/main/livebet/qt_launcher.asp?gid='+gid, 'GAME WINDOW', 'left=0,top=0,width=1280,height=743, resizable=no');
}
function openLobby(gid) {
    window.open('/main/livebet/qt_lobby.asp?gid='+gid, 'GAME WINDOW', 'left=0,top=0,width=1280,height=743, resizable=no');
}

function combi_launch(gcp,gid)
{
	var combi_pop = window.open('/main/livebet/combi_launch.asp?gcp=' + gcp + '&gid=' + gid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	combi_pop.focus();
}

function spade_launch(gid, vid)
{
	var apple_pop = window.open('/main/livebet/spade_launch.asp?gid='+gid+'&vid='+vid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	apple_pop.focus();
}

function bil_launch(gid, vid)
{
	var apple_pop = window.open('/main/livebet/bil_launch.asp?gid='+gid+'&vid='+vid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	apple_pop.focus();
}

function mix_launch(vnm,vid, gid)
{
	var apple_pop = window.open('/main/livebet/mix_launch.asp?vnm='+vnm+'&gid='+gid+'&vid='+vid,'game','width=1400,height=1000,scrollbars=no,resizable=yes');
	apple_pop.focus();
}