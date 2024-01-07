<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<meta property="og:type" content="website">
<title>S</title>
<link rel="shortcut icon" href="/favicon.png">
<link href="/common/css/style.css?43903" rel="stylesheet" type="text/css" />
<link href="/common/css/icon.min.css?43903" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/common/script/jquery-1.7.min.js"></script>
<script type="text/javascript" src="/common/script/jquery-ui.min.js"></script>
<script type="text/javascript" src="/common/script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/common/script/default.js?43903"></script>
<script type="text/javascript" src="/common/script/common.js?43903"></script>
<script type="text/javascript" src="/common/script/basic.js"></script>
<script type="text/javascript" src="/common/script/registCheck.js"></script>
<script type="text/javascript" src="/common/script/vinyli.viSimpleSlider.js"></script>
</head>
<script language="javascript">
$(document).ready(function() {

});
function sendit() {

	var myform = document.form1;

	if(!checkSpace($("#code").val()))
	{
		alert("Join코드를 입력해 주세요");
		$("#code").focus();
		return;
	}
	myform.action = "/login/codeproc.asp";
	myform.submit();
}
function checkkey(event)
{
	if (event.keyCode == 13) { 
		sendit();
	} 
}
function join() {
	top.location.href='/main/member/join.asp';
}
	
</script>
<body class="login_bg">
<div id="wrap">
	
    <!--Code-->
    <form name="form1" method="post" onSubmit="return sendit2();" action = "/login/codeproc.asp" target = "iframe_hid_proc">
    <div class="code_w">
        <h3 class="tit"><i class="i-message"></i>가입코드 입력<b>Join Code</b></h3>
        <input name="code" id="code" onKeyUp="checkkey(event)" type="text" class="ipw" placeholder="코드를 입력하세요"/>
        <a onClick="sendit()"  class="btn btn2">확인</a>
    </div>
    </form>
    <!--//Code--> 
    
</div>
<iframe frameborder="0" name="iframe_hid_proc"  id="iframe_hid_proc"  scrolling="no"  width="0" height="0"></iframe>
</body>
</html>




