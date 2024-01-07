<!-- 링크 점선 없애기 --> 
function bluring(){ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();} 
document.onfocusin=bluring; 



<!-- 새창 띄우기 -->
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


function openPop(url, pWidth, pHeight, pScroll)
{
	window.open(url,'','width='+ pWidth+',height='+pHeight+',scrollbars='+pScroll+',resizable=no');
}


<!-- 점프매뉴 --> 
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}




$(function(){
	$("#slideimg div").hide();
	var current=-1; 
	prev=null; 
	interval=null;
	fade_speed=500; //슬라이딩 애니메이션 속도
	delay_speed=5000; //다른 내용으로 변경되는 지연시간, 전환시간
	slides=$("#slideimg div"); 
	html="<div id='slidebtn'><ul id='slideAllCount'>";
	
	for (var i=slides.length-1; i>=0; i--){
	html += '<li id="slide'+ i+'" class="slide"><span>'+'</span></li>' ;
	}
	
	html+='</ul></div>';
	
	$("#slideimg").after(html); 
	for(var i=slides.length-1; i>=0; i--){
		$("#slide"+i).bind("click",{index:i} ,function(e){
			current=e.data.index;
			gotoSlide(current);
			}); 
		}
		
		
		
		autoSlide();

			function autoSlide (){
				if (current >= slides.length -1){ 
				
					current = 0;
				}else{
					current++
				}
				gotoSlide(current);	
			}
		
		
	function gotoSlide(current){
		if(current != prev){
			$("#slide"+current).addClass("selectedTab"); 
			$("#slide"+prev).removeClass("selectedTab"); 
			$(slides[prev]).stop().fadeOut(800);
			$(slides[current]).stop().fadeIn(fade_speed); 
			
			prev=current; 
			
			if (interval !=null){
				clearInterval(interval);
				}
				interval=setInterval(autoSlide,delay_speed);
			}
		}//gotoSlide
	
	});	




