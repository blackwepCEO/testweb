<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<meta property="og:type" content="website">
<title>S</title>
<link rel="shortcut icon" href="/favicon.png">
<link href="/common/css/style.css?43970" rel="stylesheet" type="text/css" />
<link href="/common/css/icon.min.css?43970" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/common/script/jquery-1.7.min.js"></script>
<script type="text/javascript" src="/common/script/jquery-ui.min.js"></script>
<script type="text/javascript" src="/common/script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/common/script/default.js?43970"></script>
<script type="text/javascript" src="/common/script/common.js?43970"></script>
<script type="text/javascript" src="/common/script/basic.js"></script>
<script type="text/javascript" src="/common/script/registCheck.js"></script>
<script type="text/javascript" src="/common/script/vinyli.viSimpleSlider.js"></script>
</head>
<script language="javascript">
$(document).ready(function() {

});
function sendit() {

	var myform = document.form1;

	if(!checkSpace($("#user_id").val()))
	{
		alert("ID를 입력해 주세요");
		$("#user_id").focus();
		return ;
	}

	if(!IsValidID($("#user_id").val()))
	{
		alert("아이디는 영문, 숫자와 6~12자만 사용할 수 있습니다.");
		$("#user_id").focus();
		return ;
	}
	
	if(!AllowNum(myform.user_id)) {
		alert("아이디는 영문, 숫자와 6~12자만 사용할 수 있습니다.");
		$("#user_id").focus();
		return ;
	}

	if(!checkSpace($("#nickname").val()))
	{
		alert("닉네임을 입력해 주세요");
		$("#nickname").focus();
		return ;
	}

	if(!IsValidNickname($("#nickname").val()))
	{
		alert("닉네임은 영문 및 한글 4~6자만 사용할 수 있습니다.");
		$("#nickname").focus();
		return;
	}

	if(!checkSpace($("#user_pass").val()))
	{
		alert("비밀번호를 입력해 주세요");
		$("#user_pass").focus();
		return ;
	}
	if(!IsValidPassword($("#user_pass").val()))
	{
		alert("비밀번호는 6자 이상의 영문과 숫자만 사용할 수 있습니다.");
		$("#user_pass").focus();
		return ;
	}

	if($("#user_pass").val() != $("#user_pass2").val())
	{
		alert("비밀번호가 일치하지 않습니다.");
		$("#user_pass").focus();
		return ;
	}


	if(!checkSpace($("#hphone1").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone1").focus();
		return ;
	}
	if(isNaN($("#hphone1").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone1").focus();
		return ;
	}
	if(!checkSpace($("#hphone2").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone2").focus();
		return ;
	}
	if(isNaN($("#hphone2").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone2").focus();
		return ;
	}
	if(!checkSpace($("#hphone3").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone3").focus();
		return ;
	}
	if(isNaN($("#hphone3").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone3").focus();
		return ;
	}
	if(!checkSpace($("#hphone_company").val()))
	{
		alert("통신사를 선택해 주세요");
		$("#hphone_company").focus();
		return ;
	}
	if(!checkSpace($("#birth").val()))
	{
		alert("생년월일을 입력해 주세요");
		$("#birth").focus();
		return ;
	}

	if(!checkSpace($("#bank_name").val()))
	{
		alert("출금은행을 선택해 주세요");
		$("#bank_name").focus();
		return;
	}
	if(!checkSpace($("#bank_account").val()))
	{
		alert("은행계좌를 입력해 주세요");
		$("#bank_account").focus();
		return;
	}
	if(!checkSpace($("#bank_holder").val()))
	{
		alert("예금주를 입력해 주세요");
		$("#bank_holder").focus();
		return;
	}
	if(!checkSpace($("#exchange_pass").val()))
	{
		alert("환전 비밀번호를 입력해 주세요");
		$("#exchange_pass").focus();
		return;
	}
	if(!IsValidPassword($("#exchange_pass").val()))
	{
		alert("환전 비밀번호는 6자 이상의 영문과 숫자만 사용할 수 있습니다.");
		$("#exchange_pass").focus();
		return;
	}
/*
	if(!checkSpace($("#CAPTCHA_string").val()))
	{
		alert("자동가입방지 문자를 입력해주세요.");
		$("#CAPTCHA_string").focus();
		return;
	}
*/




	myform.target = "iframe_hid_proc";
	myform.action = "join_proc.asp";
	myform.submit();
}
function auth_sms() 
{
	var myform = document.form1;

	if(!checkSpace($("#hphone1").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone1").focus();
		return;
	}
	if(isNaN($("#hphone1").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone1").focus();
		return;
	}
	if(!checkSpace($("#hphone2").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone2").focus();
		return;
	}
	if(isNaN($("#hphone2").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone2").focus();
		return;
	}
	if(!checkSpace($("#hphone3").val()))
	{
		alert("휴대폰번호를 입력해 주세요");
		$("#hphone3").focus();
		return;
	}
	if(isNaN($("#hphone3").val()))
	{
		alert("휴대폰번호를 숫자로 입력해 주세요");
		$("#hphone3").focus();
		return;
	}




	myform.target = "iframe_hid_proc";
	myform.action = "/main/member/member_auth_sms.asp";
	myform.submit();
}
function idcheck() {
	var myform = document.form1;

	if(!checkSpace($("#user_id").val()))
	{
		alert("ID를 입력해 주세요");
		$("#user_id").focus();
		return;
	}

	if(!IsValidID($("#user_id").val()))
	{
		alert("아이디는 영문, 숫자와 6~12자만 사용할 수 있습니다.");
		$("#user_id").focus();
		return;
	}
	
	if(!AllowNum(myform.user_id)) {
		alert("아이디는 영문, 숫자와 6~12자만 사용할 수 있습니다.");
		$("#user_id").focus();
		return;
	}

	myform.p_kind.value = "id";
	myform.p_user_id.value = $("#user_id").val();
	myform.target="iframe_hid_proc";
	myform.action = "/include/idcheck.asp";
	myform.submit();

	//iframe_hid_proc.location.href="/include/idcheck.asp?p_kind=id&p_user_id="+$("#user_id").val();

}
function nickcheck() {
	var myform = document.form1;

	if(!checkSpace($("#nickname").val()))
	{
		alert("닉네임을 입력해 주세요");
		$("#nickname").focus();
		return;
	}

	if(!IsValidNickname($("#nickname").val()))
	{
		alert("닉네임은 영문 및 한글 4~6자만 사용할 수 있습니다.");
		$("#nickname").focus();
		return;
	}

	myform.p_kind.value = "nick";
	myform.p_user_id.value = $("#nickname").val();
	myform.target="iframe_hid_proc";
	myform.action = "/include/idcheck.asp";
	myform.submit();
	
	//iframe_hid_proc.location.href="/include/idcheck.asp?p_kind=nick&p_user_id="+$("#nickname").val();

}

function recommandcheck() {
	var myform = document.form1;

	if(!checkSpace($("#recommand_userid").val()))
	{
		alert("추천인 ID를 입력해 주세요");
		$("#recommand_userid").focus();
		return;
	}

	iframe_hid_proc.location.href="/include/recommandcheck.asp?p_recommand_id="+$("#recommand_userid").val();

}

function email_cha() 
{
	$("#email_cp").val($("#email_sel").val());
}

</script>
<body class="login_bg">
<div id="wrap">
	
    <!--Join-->
    <form id="form1" name="form1" method="post">
    <input type="hidden" name="p_kind">
    <input type="hidden" name="p_user_id">
    <div class="join_w board_write">
		
<div class="title"><i class="i-user-plus"></i><b>회원가입</b></div>

 
        <table class="td1">
            <tbody>
            	<tr>
                    <th colspan="2">아이디</th>
                    <td><input name="user_id" id="user_id" type="text"  maxlength="12" class="ipw ipw3" /> <a onClick="idcheck()" class="btn btn1">중복검색</a> <p class="txt">6~12자의 영문, 숫자만 사용가능, 대소문자구분, 특수문자는 !, @만 가능</p></td>
                </tr>
                <tr>
                    <th colspan="2">닉네임</th>
                    <td><input name="nickname" id="nickname" maxlength="6" type="text" class="ipw ipw3" /> <a onClick="nickcheck()" class="btn btn1">중복검색</a> <p class="txt">영문 및 한글 4~6자</p></td>
                </tr>
                <tr>
                    <th colspan="2">비밀번호</th>
                    <td><input type="password" name="user_pass" id="user_pass"   type="password" class="ipw ipw3" /> <p class="txt">6자 이상의 영문, 숫자만 사용가능, 대소문자구분, 특수문자는 !, @만 가능</p></td>
                </tr>
                <tr>
                    <th colspan="2">비밀번호 확인</th>
                    <td><input type="password" name="user_pass2" id="user_pass2" class="ipw ipw3" placeholder="비밀번호 다시 입력"/></td>
                </tr>
                <tr>
                    <th colspan="2">휴대폰 번호</th>
                    <td><select name="hphone_company" id="hphone_company" class="ipw ipw4">
                      <option value="" >통신사</option>
                      <option value="SKT" >SKT</option>
                      <option value="KT">KT</option>
                      <option value="LG U">LG U+</option>
                      <option value="알뜰폰 SKT">알뜰폰 SKT</option>
                      <option value="알뜰폰 KT">알뜰폰 KT</option>
                      <option value="알뜰폰 LG U">알뜰폰 LG U</option>
                    </select>&nbsp;&nbsp;<select name="hphone1" id="hphone1" class="ipw ipw4">
                      <option value="010" selected="selected">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select> 
                    - <input name="hphone2" id="hphone2" type="text" class="ipw ipw4" maxlength="4" /> 
                    - <input name="hphone3" id="hphone3" type="text" class="ipw ipw4" maxlength="4" />
                    
                    </td>
                </tr>
                <tr>
                    <th colspan="2">생년월일</th>
                    <td><input name="birth" id="birth" maxlength="8" type="text" class="ipw ipw3" /> <p class="txt">(예 : 20010319, 가상계좌 발급시 필수)</p></td>
                </tr>
                <tr>
                    <th rowspan="4">계좌</th>
                    <th>은행명</th>
                    <td>
                    <select name="bank_name" id="bank_name" class="ipw ipw3" >
                        <option selected="selected" value="">은행명선택</option>

                        <option value="039">경남은행</option>

                        <option value="095">경찰청</option>

                        <option value="034">광주은행</option>

                        <option value="261">교보증권</option>

                        <option value="004">국민은행</option>

                        <option value="042">국민카드</option>

                        <option value="099">금융결제원</option>

                        <option value="077">기술신용보증기금</option>

                        <option value="003">기업은행</option>

                        <option value="051">기타외국계</option>

                        <option value="011">농협은행</option>

                        <option value="031">대구은행</option>

                        <option value="267">대신증권</option>

                        <option value="238">대우증권</option>

                        <option value="055">도이치은행</option>

                        <option value="279">동부증권</option>

                        <option value="209">동양종합금융증권</option>

                        <option value="287">메리츠종합금융증권</option>

                        <option value="052">모건스탠리</option>

                        <option value="230">미래에셋증권</option>

                        <option value="059">미쓰비시도쿄UFJ</option>

                        <option value="058">미즈호코퍼레이트</option>

                        <option value="290">부국증권</option>

                        <option value="032">부산은행</option>

                        <option value="061">비엔피파리바은행</option>

                        <option value="002">산업은행</option>

                        <option value="240">삼성증권</option>

                        <option value="050">상호저축</option>

                        <option value="045">새마을금고</option>

                        <option value="094">서울보증보험</option>

                        <option value="268">솔로몬투자증권</option>

                        <option value="008">수출입은행</option>

                        <option value="007">수협은행</option>

                        <option value="291">신영증권</option>

                        <option value="076">신용보증기금</option>

                        <option value="278">신한금융투자</option>

                        <option value="088">신한은행</option>

                        <option value="048">신협</option>

                        <option value="027">씨티은행</option>

                        <option value="056">알비에스</option>

                        <option value="266">에스케이증권</option>

                        <option value="289">엔에이치투자증권</option>

                        <option value="292">엘아이지투자증권</option>

                        <option value="005">외환은행</option>

                        <option value="044">외환카드</option>

                        <option value="020">우리은행</option>

                        <option value="041">우리카드</option>

                        <option value="247">우리투자증권</option>

                        <option value="071">우체국</option>

                        <option value="280">유진투자증권</option>

                        <option value="265">이트레이드증권</option>

                        <option value="037">전북은행</option>

                        <option value="057">제이피모간체이스</option>

                        <option value="035">제주은행</option>

                        <option value="012">지역농축협</option>

                        <option value="090">카카오뱅크</option>

                        <option value="089">케이뱅크</option>

                        <option value="264">키움증권</option>

                        <option value="092">토스뱅크</option>

                        <option value="270">하나대투증권</option>

                        <option value="081">하나은행</option>

                        <option value="262">하이투자증권</option>

                        <option value="001">한국은행</option>

                        <option value="096">한국전자금융(나이스)</option>

                        <option value="093">한국주택금융공사</option>

                        <option value="243">한국투자증권</option>

                        <option value="269">한화증권</option>

                        <option value="218">현대증권</option>

                        <option value="060">BOA</option>

                        <option value="263">HMC투자증권</option>

                        <option value="054">HSBC</option>

                        <option value="023">SC제일은행</option>

                   
                     </select>
                    </td>
                </tr>
                <tr>
                  <th>예금주</th>
                  <td><input name="bank_holder" id="bank_holder" type="text" class="ipw ipw3" /></td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td><input name="bank_account"  id="bank_account" type="text" class="ipw ipw3" placeholder="숫자만 입력"/></td>
                </tr>
                <tr>
                  <th>출금 비밀번호</th>
                  <td><input name="exchange_pass" id="exchange_pass" type="password" class="ipw ipw3" /><p class="txt">6자 이상의 영문, 숫자만 사용가능, 대소문자구분, 특수문자제외</p></td>
                </tr>
            </tbody>
        </table>
    
        <div class="btn_wrap"> 
            <a onClick="sendit();" class="btn btn1 cc">회원가입</a>
            <a href="/" class="btn btn2 cc">취소</a>
        </div>
        
    </div>
</form>
    <!--//Join--> 
    
</div>
<iframe frameborder="0" name="iframe_hid_proc"  id="iframe_hid_proc"  scrolling="no"  width="0" height="0"></iframe>
</body>
</html>




