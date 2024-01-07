// 핸디캡
function getIsHandyGame(strParam1)
{
	chkCnt = 0;
	if(strParam1 == "2") chkCnt = chkCnt + 1;
	if(strParam1 == "22") chkCnt = chkCnt + 1;
	if(strParam1 == "sc21") chkCnt = chkCnt + 1;
	if(strParam1 == "sc22") chkCnt = chkCnt + 1;
	if(strParam1 == "ba03") chkCnt = chkCnt + 1;
	if(strParam1 == "ba05") chkCnt = chkCnt + 1;
	if(strParam1 == "bk04") chkCnt = chkCnt + 1;
	if(strParam1 == "bk14") chkCnt = chkCnt + 1;
	if(strParam1 == "bk16") chkCnt = chkCnt + 1;
	if(strParam1 == "bk18") chkCnt = chkCnt + 1;
	if(strParam1 == "bk23") chkCnt = chkCnt + 1;
	if(strParam1 == "va04") chkCnt = chkCnt + 1;
	if(strParam1 == "va05") chkCnt = chkCnt + 1;
	if(strParam1 == "va06") chkCnt = chkCnt + 1;
	if(strParam1 == "ic07") chkCnt = chkCnt + 1;
	if(strParam1 == "ic08") chkCnt = chkCnt + 1;
	if(strParam1 == "ic09") chkCnt = chkCnt + 1;
	if(strParam1 == "ba12") chkCnt = chkCnt + 1;
	if(strParam1 == "ba33") chkCnt = chkCnt + 1;
	if(strParam1 == "ba34") chkCnt = chkCnt + 1;
	if(strParam1 == "ba35") chkCnt = chkCnt + 1;
	if(strParam1 == "ba38") chkCnt = chkCnt + 1;
	if(strParam1 == "ba39") chkCnt = chkCnt + 1;
	if(strParam1 == "ba40") chkCnt = chkCnt + 1;
	if(strParam1 == "et01") chkCnt = chkCnt + 1;
	if(strParam1 == "et02") chkCnt = chkCnt + 1;
	if(strParam1 == "et03") chkCnt = chkCnt + 1;
	if(strParam1 == "et04") chkCnt = chkCnt + 1;
	if(strParam1 == "et05") chkCnt = chkCnt + 1;
	if(strParam1 == "et06") chkCnt = chkCnt + 1;
	if(strParam1 == "et07") chkCnt = chkCnt + 1;


	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 오버언더
function getIsOuGame(strParam1)
{
	chkCnt = 0;
	if(strParam1 == "3") chkCnt = chkCnt + 1;
	if(strParam1 == "33") chkCnt = chkCnt + 1;
	if(strParam1 == "sc07") chkCnt = chkCnt + 1;
	if(strParam1 == "sc08") chkCnt = chkCnt + 1;
	if(strParam1 == "sc13") chkCnt = chkCnt + 1;
	if(strParam1 == "sc23") chkCnt = chkCnt + 1;
	if(strParam1 == "sc24") chkCnt = chkCnt + 1;
	if(strParam1 == "bk05") chkCnt = chkCnt + 1;
	if(strParam1 == "bk10") chkCnt = chkCnt + 1;
	if(strParam1 == "bk11") chkCnt = chkCnt + 1;
	if(strParam1 == "bk12") chkCnt = chkCnt + 1;
	if(strParam1 == "bk13") chkCnt = chkCnt + 1;
	if(strParam1 == "bk15") chkCnt = chkCnt + 1;
	if(strParam1 == "bk17") chkCnt = chkCnt + 1;
	if(strParam1 == "bk19") chkCnt = chkCnt + 1;
	if(strParam1 == "bk24") chkCnt = chkCnt + 1;
	if(strParam1 == "ba04") chkCnt = chkCnt + 1;
	if(strParam1 == "ba06") chkCnt = chkCnt + 1;
	if(strParam1 == "ba07") chkCnt = chkCnt + 1;
	if(strParam1 == "ba08") chkCnt = chkCnt + 1;
	if(strParam1 == "ba10") chkCnt = chkCnt + 1;
	if(strParam1 == "ic01") chkCnt = chkCnt + 1;
	if(strParam1 == "ic02") chkCnt = chkCnt + 1;
	if(strParam1 == "ic03") chkCnt = chkCnt + 1;
	if(strParam1 == "va01") chkCnt = chkCnt + 1;
	if(strParam1 == "va02") chkCnt = chkCnt + 1;
	if(strParam1 == "va03") chkCnt = chkCnt + 1;
	if(strParam1 == "ba13") chkCnt = chkCnt + 1;
	if(strParam1 == "ba23") chkCnt = chkCnt + 1;
	if(strParam1 == "ba24") chkCnt = chkCnt + 1;
	if(strParam1 == "ba25") chkCnt = chkCnt + 1;
	if(strParam1 == "ba28") chkCnt = chkCnt + 1;
	if(strParam1 == "ba29") chkCnt = chkCnt + 1;
	if(strParam1 == "ba30") chkCnt = chkCnt + 1;
	if(strParam1 == "et08") chkCnt = chkCnt + 1;
	if(strParam1 == "et09") chkCnt = chkCnt + 1;
	if(strParam1 == "et10") chkCnt = chkCnt + 1;
	if(strParam1 == "et11") chkCnt = chkCnt + 1;
	if(strParam1 == "et12") chkCnt = chkCnt + 1;
	if(strParam1 == "et13") chkCnt = chkCnt + 1;
	if(strParam1 == "et14") chkCnt = chkCnt + 1;






	if(chkCnt > 0)
		return true;
	else
		return false;
}



// 홀짝 게임인지 여부 반환
function getIsOeGame(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "4") chkCnt = chkCnt + 1;
	if(strParam1 == "sc06") chkCnt = chkCnt + 1;
	if(strParam1 == "sc14") chkCnt = chkCnt + 1;
	if(strParam1 == "sc16") chkCnt = chkCnt + 1;
	if(strParam1 == "bk06") chkCnt = chkCnt + 1;
	if(strParam1 == "bk07") chkCnt = chkCnt + 1;
	if(strParam1 == "bk08") chkCnt = chkCnt + 1;
	if(strParam1 == "bk09") chkCnt = chkCnt + 1;


	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 승패 게임인지 여부 반환
function getIs12Game(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "bk44") chkCnt = chkCnt + 1;
	if(strParam1 == "bk45") chkCnt = chkCnt + 1;
	if(strParam1 == "bk46") chkCnt = chkCnt + 1;
	if(strParam1 == "bk47") chkCnt = chkCnt + 1;
	if(strParam1 == "bk48") chkCnt = chkCnt + 1;
	if(strParam1 == "bk49") chkCnt = chkCnt + 1;
	if(strParam1 == "ba14") chkCnt = chkCnt + 1;
	if(strParam1 == "ba15") chkCnt = chkCnt + 1;
	if(strParam1 == "et15") chkCnt = chkCnt + 1;
	if(strParam1 == "et16") chkCnt = chkCnt + 1;
	if(strParam1 == "et17") chkCnt = chkCnt + 1;
	if(strParam1 == "et18") chkCnt = chkCnt + 1;

	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 득점 무득점 게임인지 여부 반환
function getIsScoreGame(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "5") chkCnt = chkCnt + 1;
	if(strParam1 == "ic10") chkCnt = chkCnt + 1;
	if(strParam1 == "ic11") chkCnt = chkCnt + 1;
	if(strParam1 == "ic12") chkCnt = chkCnt + 1;


	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 승무패 게임인지 여부 반환
function getIs1X2Game(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "1") chkCnt = chkCnt + 1;
	if(strParam1 == "sc01") chkCnt = chkCnt + 1;
	if(strParam1 == "sc18") chkCnt = chkCnt + 1;
	if(strParam1 == "sc03") chkCnt = chkCnt + 1;
	if(strParam1 == "sc12") chkCnt = chkCnt + 1;
	if(strParam1 == "bk20") chkCnt = chkCnt + 1;
	if(strParam1 == "bk22") chkCnt = chkCnt + 1;
	if(strParam1 == "bk31") chkCnt = chkCnt + 1;
	if(strParam1 == "bk32") chkCnt = chkCnt + 1;
	if(strParam1 == "bk33") chkCnt = chkCnt + 1;
	if(strParam1 == "bk34") chkCnt = chkCnt + 1;
	if(strParam1 == "ic04") chkCnt = chkCnt + 1;
	if(strParam1 == "ic05") chkCnt = chkCnt + 1;
	if(strParam1 == "ic06") chkCnt = chkCnt + 1;
	if(strParam1 == "va11") chkCnt = chkCnt + 1;
	if(strParam1 == "va12") chkCnt = chkCnt + 1;
	if(strParam1 == "va13") chkCnt = chkCnt + 1;
	if(strParam1 == "ba11") chkCnt = chkCnt + 1;
	if(strParam1 == "ba16") chkCnt = chkCnt + 1;
	if(strParam1 == "ba17") chkCnt = chkCnt + 1;
	if(strParam1 == "ba18") chkCnt = chkCnt + 1;
	if(strParam1 == "ba19") chkCnt = chkCnt + 1;
	if(strParam1 == "ba20") chkCnt = chkCnt + 1;
	if(strParam1 == "ba21") chkCnt = chkCnt + 1;
	if(strParam1 == "ba22") chkCnt = chkCnt + 1;

	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 정규식 게임인지 여부
function getIsRegularGame(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "1") chkCnt = chkCnt + 1;
	if(strParam1 == "22") chkCnt = chkCnt + 1;
	if(strParam1 == "2") chkCnt = chkCnt + 1;
	if(strParam1 == "33") chkCnt = chkCnt + 1;
	if(strParam1 == "3") chkCnt = chkCnt + 1;

	if(chkCnt > 0)
		return true;
	else
		return false;
}

// 실시간 스페셜 게임인지 확인
function getIsRealtimeGame(strParam1)
{
	chkCnt = 0;

	if(strParam1 == "sc01") chkCnt = chkCnt + 1;
	if(strParam1 == "sc06") chkCnt = chkCnt + 1;
	if(strParam1 == "sc16") chkCnt = chkCnt + 1;
	if(strParam1 == "sc18") chkCnt = chkCnt + 1;
	if(strParam1 == "sc19") chkCnt = chkCnt + 1;
	if(strParam1 == "sc20") chkCnt = chkCnt + 1;
	if(strParam1 == "sc21") chkCnt = chkCnt + 1;
	if(strParam1 == "sc22") chkCnt = chkCnt + 1;
	if(strParam1 == "sc23") chkCnt = chkCnt + 1;
	if(strParam1 == "sc24") chkCnt = chkCnt + 1;
	if(strParam1 == "bk01") chkCnt = chkCnt + 1;
	if(strParam1 == "bk50") chkCnt = chkCnt + 1;
	if(strParam1 == "bk02") chkCnt = chkCnt + 1;
	if(strParam1 == "bk03") chkCnt = chkCnt + 1;
	if(strParam1 == "bk04") chkCnt = chkCnt + 1;
	if(strParam1 == "bk05") chkCnt = chkCnt + 1;
	if(strParam1 == "bk06") chkCnt = chkCnt + 1;
	if(strParam1 == "bk07") chkCnt = chkCnt + 1;
	if(strParam1 == "bk08") chkCnt = chkCnt + 1;
	if(strParam1 == "bk09") chkCnt = chkCnt + 1;
	if(strParam1 == "bk14") chkCnt = chkCnt + 1;
	if(strParam1 == "bk15") chkCnt = chkCnt + 1;
	if(strParam1 == "bk16") chkCnt = chkCnt + 1;
	if(strParam1 == "bk17") chkCnt = chkCnt + 1;
	if(strParam1 == "bk18") chkCnt = chkCnt + 1;
	if(strParam1 == "bk19") chkCnt = chkCnt + 1;
	if(strParam1 == "bk20") chkCnt = chkCnt + 1;
	if(strParam1 == "bk22") chkCnt = chkCnt + 1;
	if(strParam1 == "bk23") chkCnt = chkCnt + 1;
	if(strParam1 == "bk24") chkCnt = chkCnt + 1;
	if(strParam1 == "bk31") chkCnt = chkCnt + 1;
	if(strParam1 == "bk32") chkCnt = chkCnt + 1;
	if(strParam1 == "bk33") chkCnt = chkCnt + 1;
	if(strParam1 == "bk34") chkCnt = chkCnt + 1;
	if(strParam1 == "bk35") chkCnt = chkCnt + 1;
	if(strParam1 == "bk44") chkCnt = chkCnt + 1;
	if(strParam1 == "bk45") chkCnt = chkCnt + 1;
	if(strParam1 == "bk46") chkCnt = chkCnt + 1;
	if(strParam1 == "bk47") chkCnt = chkCnt + 1;
	if(strParam1 == "bk48") chkCnt = chkCnt + 1;
	if(strParam1 == "bk49") chkCnt = chkCnt + 1;
	if(strParam1 == "ba02") chkCnt = chkCnt + 1;
	if(strParam1 == "ba03") chkCnt = chkCnt + 1;
	if(strParam1 == "ba04") chkCnt = chkCnt + 1;
	if(strParam1 == "ba05") chkCnt = chkCnt + 1;
	if(strParam1 == "ba06") chkCnt = chkCnt + 1;
	if(strParam1 == "ba10") chkCnt = chkCnt + 1;
	if(strParam1 == "ba11") chkCnt = chkCnt + 1;
	if(strParam1 == "ba12") chkCnt = chkCnt + 1;
	if(strParam1 == "ba13") chkCnt = chkCnt + 1;
	if(strParam1 == "ba14") chkCnt = chkCnt + 1;
	if(strParam1 == "ba15") chkCnt = chkCnt + 1;
	if(strParam1 == "ba16") chkCnt = chkCnt + 1;
	if(strParam1 == "ba17") chkCnt = chkCnt + 1;
	if(strParam1 == "ba18") chkCnt = chkCnt + 1;
	if(strParam1 == "ba19") chkCnt = chkCnt + 1;
	if(strParam1 == "ba20") chkCnt = chkCnt + 1;
	if(strParam1 == "ba21") chkCnt = chkCnt + 1;
	if(strParam1 == "ba22") chkCnt = chkCnt + 1;
	if(strParam1 == "ba23") chkCnt = chkCnt + 1;
	if(strParam1 == "ba24") chkCnt = chkCnt + 1;
	if(strParam1 == "ba25") chkCnt = chkCnt + 1;
	if(strParam1 == "ba28") chkCnt = chkCnt + 1;
	if(strParam1 == "ba29") chkCnt = chkCnt + 1;
	if(strParam1 == "ba30") chkCnt = chkCnt + 1;
	if(strParam1 == "ba33") chkCnt = chkCnt + 1;
	if(strParam1 == "ba34") chkCnt = chkCnt + 1;
	if(strParam1 == "ba35") chkCnt = chkCnt + 1;
	if(strParam1 == "ba38") chkCnt = chkCnt + 1;
	if(strParam1 == "ba39") chkCnt = chkCnt + 1;
	if(strParam1 == "ba40") chkCnt = chkCnt + 1;
	if(strParam1 == "ic01") chkCnt = chkCnt + 1;
	if(strParam1 == "ic02") chkCnt = chkCnt + 1;
	if(strParam1 == "ic03") chkCnt = chkCnt + 1;
	if(strParam1 == "ic04") chkCnt = chkCnt + 1;
	if(strParam1 == "ic05") chkCnt = chkCnt + 1;
	if(strParam1 == "ic06") chkCnt = chkCnt + 1;
	if(strParam1 == "ic07") chkCnt = chkCnt + 1;
	if(strParam1 == "ic08") chkCnt = chkCnt + 1;
	if(strParam1 == "ic09") chkCnt = chkCnt + 1;
	if(strParam1 == "ic10") chkCnt = chkCnt + 1;
	if(strParam1 == "ic11") chkCnt = chkCnt + 1;
	if(strParam1 == "ic12") chkCnt = chkCnt + 1;
	if(strParam1 == "va01") chkCnt = chkCnt + 1;
	if(strParam1 == "va02") chkCnt = chkCnt + 1;
	if(strParam1 == "va03") chkCnt = chkCnt + 1;
	if(strParam1 == "va04") chkCnt = chkCnt + 1;
	if(strParam1 == "va05") chkCnt = chkCnt + 1;
	if(strParam1 == "va06") chkCnt = chkCnt + 1;
	if(strParam1 == "va11") chkCnt = chkCnt + 1;
	if(strParam1 == "va12") chkCnt = chkCnt + 1;
	if(strParam1 == "va13") chkCnt = chkCnt + 1;

	if(chkCnt > 0)
		return true;
	else
		return false;
}


// 일반 스페셜 게임인지 확인
function getIsSpecialGame(strParam1)
{
	chkCnt = 0;
	if(strParam1 == "sc01") chkCnt = chkCnt + 1;
	if(strParam1 == "sc06") chkCnt = chkCnt + 1;
	if(strParam1 == "sc16") chkCnt = chkCnt + 1;
	if(strParam1 == "sc18") chkCnt = chkCnt + 1;
	if(strParam1 == "sc19") chkCnt = chkCnt + 1;
	if(strParam1 == "sc20") chkCnt = chkCnt + 1;
	if(strParam1 == "sc21") chkCnt = chkCnt + 1;
	if(strParam1 == "sc22") chkCnt = chkCnt + 1;
	if(strParam1 == "sc23") chkCnt = chkCnt + 1;
	if(strParam1 == "sc24") chkCnt = chkCnt + 1;
	if(strParam1 == "bk01") chkCnt = chkCnt + 1;
	if(strParam1 == "bk50") chkCnt = chkCnt + 1;
	if(strParam1 == "bk02") chkCnt = chkCnt + 1;
	if(strParam1 == "bk03") chkCnt = chkCnt + 1;
	if(strParam1 == "bk04") chkCnt = chkCnt + 1;
	if(strParam1 == "bk05") chkCnt = chkCnt + 1;
	if(strParam1 == "bk06") chkCnt = chkCnt + 1;
	if(strParam1 == "bk07") chkCnt = chkCnt + 1;
	if(strParam1 == "bk08") chkCnt = chkCnt + 1;
	if(strParam1 == "bk09") chkCnt = chkCnt + 1;
	if(strParam1 == "bk14") chkCnt = chkCnt + 1;
	if(strParam1 == "bk15") chkCnt = chkCnt + 1;
	if(strParam1 == "bk16") chkCnt = chkCnt + 1;
	if(strParam1 == "bk17") chkCnt = chkCnt + 1;
	if(strParam1 == "bk18") chkCnt = chkCnt + 1;
	if(strParam1 == "bk19") chkCnt = chkCnt + 1;
	if(strParam1 == "bk20") chkCnt = chkCnt + 1;
	if(strParam1 == "bk22") chkCnt = chkCnt + 1;
	if(strParam1 == "bk23") chkCnt = chkCnt + 1;
	if(strParam1 == "bk24") chkCnt = chkCnt + 1;
	if(strParam1 == "bk31") chkCnt = chkCnt + 1;
	if(strParam1 == "bk32") chkCnt = chkCnt + 1;
	if(strParam1 == "bk33") chkCnt = chkCnt + 1;
	if(strParam1 == "bk34") chkCnt = chkCnt + 1;
	if(strParam1 == "bk35") chkCnt = chkCnt + 1;
	if(strParam1 == "bk44") chkCnt = chkCnt + 1;
	if(strParam1 == "bk45") chkCnt = chkCnt + 1;
	if(strParam1 == "bk46") chkCnt = chkCnt + 1;
	if(strParam1 == "bk47") chkCnt = chkCnt + 1;
	if(strParam1 == "bk48") chkCnt = chkCnt + 1;
	if(strParam1 == "bk49") chkCnt = chkCnt + 1;
	if(strParam1 == "ba02") chkCnt = chkCnt + 1;
	if(strParam1 == "ba03") chkCnt = chkCnt + 1;
	if(strParam1 == "ba04") chkCnt = chkCnt + 1;
	if(strParam1 == "ba05") chkCnt = chkCnt + 1;
	if(strParam1 == "ba06") chkCnt = chkCnt + 1;
	if(strParam1 == "ba10") chkCnt = chkCnt + 1;
	if(strParam1 == "ba11") chkCnt = chkCnt + 1;
	if(strParam1 == "ba12") chkCnt = chkCnt + 1;
	if(strParam1 == "ba13") chkCnt = chkCnt + 1;
	if(strParam1 == "ba14") chkCnt = chkCnt + 1;
	if(strParam1 == "ba15") chkCnt = chkCnt + 1;
	if(strParam1 == "ba16") chkCnt = chkCnt + 1;
	if(strParam1 == "ba17") chkCnt = chkCnt + 1;
	if(strParam1 == "ba18") chkCnt = chkCnt + 1;
	if(strParam1 == "ba19") chkCnt = chkCnt + 1;
	if(strParam1 == "ba20") chkCnt = chkCnt + 1;
	if(strParam1 == "ba21") chkCnt = chkCnt + 1;
	if(strParam1 == "ba22") chkCnt = chkCnt + 1;
	if(strParam1 == "ba23") chkCnt = chkCnt + 1;
	if(strParam1 == "ba24") chkCnt = chkCnt + 1;
	if(strParam1 == "ba25") chkCnt = chkCnt + 1;
	if(strParam1 == "ba28") chkCnt = chkCnt + 1;
	if(strParam1 == "ba29") chkCnt = chkCnt + 1;
	if(strParam1 == "ba30") chkCnt = chkCnt + 1;
	if(strParam1 == "ba33") chkCnt = chkCnt + 1;
	if(strParam1 == "ba34") chkCnt = chkCnt + 1;
	if(strParam1 == "ba35") chkCnt = chkCnt + 1;
	if(strParam1 == "ba38") chkCnt = chkCnt + 1;
	if(strParam1 == "ba39") chkCnt = chkCnt + 1;
	if(strParam1 == "ba40") chkCnt = chkCnt + 1;
	if(strParam1 == "ic01") chkCnt = chkCnt + 1;
	if(strParam1 == "ic02") chkCnt = chkCnt + 1;
	if(strParam1 == "ic03") chkCnt = chkCnt + 1;
	if(strParam1 == "ic04") chkCnt = chkCnt + 1;
	if(strParam1 == "ic05") chkCnt = chkCnt + 1;
	if(strParam1 == "ic06") chkCnt = chkCnt + 1;
	if(strParam1 == "ic07") chkCnt = chkCnt + 1;
	if(strParam1 == "ic08") chkCnt = chkCnt + 1;
	if(strParam1 == "ic09") chkCnt = chkCnt + 1;
	if(strParam1 == "ic10") chkCnt = chkCnt + 1;
	if(strParam1 == "ic11") chkCnt = chkCnt + 1;
	if(strParam1 == "ic12") chkCnt = chkCnt + 1;
	if(strParam1 == "va01") chkCnt = chkCnt + 1;
	if(strParam1 == "va02") chkCnt = chkCnt + 1;
	if(strParam1 == "va03") chkCnt = chkCnt + 1;
	if(strParam1 == "va04") chkCnt = chkCnt + 1;
	if(strParam1 == "va05") chkCnt = chkCnt + 1;
	if(strParam1 == "va06") chkCnt = chkCnt + 1;
	if(strParam1 == "va11") chkCnt = chkCnt + 1;
	if(strParam1 == "va12") chkCnt = chkCnt + 1;
	if(strParam1 == "va13") chkCnt = chkCnt + 1;
	if(strParam1 == "et01") chkCnt = chkCnt + 1;
	if(strParam1 == "et02") chkCnt = chkCnt + 1;
	if(strParam1 == "et03") chkCnt = chkCnt + 1;
	if(strParam1 == "et04") chkCnt = chkCnt + 1;
	if(strParam1 == "et05") chkCnt = chkCnt + 1;
	if(strParam1 == "et06") chkCnt = chkCnt + 1;
	if(strParam1 == "et07") chkCnt = chkCnt + 1;
	if(strParam1 == "et08") chkCnt = chkCnt + 1;
	if(strParam1 == "et09") chkCnt = chkCnt + 1;
	if(strParam1 == "et10") chkCnt = chkCnt + 1;
	if(strParam1 == "et11") chkCnt = chkCnt + 1;
	if(strParam1 == "et12") chkCnt = chkCnt + 1;
	if(strParam1 == "et13") chkCnt = chkCnt + 1;
	if(strParam1 == "et14") chkCnt = chkCnt + 1;
	if(strParam1 == "et15") chkCnt = chkCnt + 1;
	if(strParam1 == "et16") chkCnt = chkCnt + 1;
	if(strParam1 == "et17") chkCnt = chkCnt + 1;
	if(strParam1 == "et18") chkCnt = chkCnt + 1;

	if(chkCnt > 0)
		return true;
	else
		return false;
}
