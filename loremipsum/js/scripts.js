/**
 * @author <a href="http://media5.com">Media5</a> - <a href="mailto:banzalik@gmail.com">Бойченко Александр</a>
 * @description скрипты для m5 css framework
 */
 
 /**
 * @description полная загрузка страницы, картинки при этом уже загрузились
 */
 
document.documentElement.id = "js" // добавляем тегу html id=js
 
window.onload=documentLoaded; // присваиваем функцию documentLoaded

/**
 * @description вызов функций при полной загрузке страницы, картинки при этом уже загрузились
 */
function documentLoaded(){
	
}


/**
 * @description вызов функций при полной загрузке DOM дерева, картинки при этом еще не загрузились
 */
$(document).ready(function(){
			autoclearInput();
			m5formsWidthNormalize();						   
})


/**
 * @description очистка инпутов, при клике на них
 */
function autoclearInput(){
	$(".autoclear").each(function(){
		$(this).attr("defaultvalue",$(this).attr("value")); // записываем в defaultvalue значение по умолчанию, необходимо для проверки нового стекста со старым
	});

	$(".autoclear").click(function(){ 
		if ($(this).attr("value")==$(this).attr("defaultvalue")) { // проверяем совпадают ли value и defaultvalue
			$(this).attr("value", ""); // сбрасываем значение value
		}
	})
}


/**
 * @description выравнивание input[type=text], input[type=password], textarea
 */
function m5formsWidthNormalize(){
	if ($.browser.msie && $.browser.version<7) {	
		$("select.m5formsNormalize").each(function(i){
			var m5formnormalizepadding=Math.ceil(Number(String($(this).css("padding-left")).slice(0,-2)))+Math.ceil(Number(String($(this).css("padding-right")).slice(0,-2)));
			var m5formnormalizeborder= Math.ceil(Number(String($(this).css("border-left-width")).slice(0,-2)))+Math.ceil(Number(String($(this).css("border-right-width")).slice(0,-2)));
			var m5formnormalizewidth=Math.ceil(Number($(this).width()))+m5formnormalizepadding+m5formnormalizeborder*2;
			$(this).width(m5formnormalizewidth);
		})			
	} else {		
		$("input[type=text].m5formsNormalize, input[type=password].m5formsNormalize, textarea.m5formsNormalize").each(function(i){				
			var m5formnormalizepadding=Math.ceil(Number(String($(this).css("padding-left")).slice(0,-2)))+Math.ceil(Number(String($(this).css("padding-right")).slice(0,-2)));
			var m5formnormalizewidth=Math.ceil(Number($(this).width()))-m5formnormalizepadding;			
			$(this).width(m5formnormalizewidth);
			})
		$("select.m5formsNormalize").each(function(i){				
			var m5formnormalizepadding=Math.ceil(Number(String($(this).css("padding-left")).slice(0,-2)))+Math.ceil(Number(String($(this).css("padding-right")).slice(0,-2)));
			var m5formnormalizeborder= Math.ceil(Number(String($(this).css("border-left-width")).slice(0,-2)))+Math.ceil(Number(String($(this).css("border-right-width")).slice(0,-2)));
			if ($.browser.msie && $.browser.version<8){
				var m5formnormalizewidth=Math.ceil(Number($(this).width()))+m5formnormalizepadding+m5formnormalizeborder*2;
			} else {
				var m5formnormalizewidth=Math.ceil(Number($(this).width()))+m5formnormalizepadding+m5formnormalizeborder;
			}
			$(this).width(m5formnormalizewidth);
		})		
	}
}