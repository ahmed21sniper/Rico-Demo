function rtn() {
    $('html').html('<div style="font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position: fixed;overflow-x: hidden;background:#f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);"><div><div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #00f; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;"><span>©</span></div><h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;">عفواً..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>لا يمكنك إستخدام هذا القالب .. هذا القالب ملك للمبرمج احمد السيد ولا يمكن استخدامه</p><p><span style="font-size: 17px; font-weight: bold; color: #00f;">1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style="font-size: 17px; font-weight: bold; color: #00f;">2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a style="color: #00f;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/ahmed.elkholy.723"> طلب رخصة </a></p><p><span style="font-size: 17px; font-weight: bold; color: #00f;">3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ  <a style="color: #00f;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/ahmed.elkholy.723"> فريق الدعم </a></p></div><div style="text-align: center; overflow: hidden;"><a style="color: #fff;background:#00f;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://www.facebook.com/ahmed.elkholy.723">الصفحة الرسمية</a></div></div></div>');
    setTimeout(function () {
        window.location.assign('https://www.facebook.com/ahmed.elkholy.723')
    }, 10000)
}
$(function(){
function act_license(){
let blogg_id = false,
	Link = window.location.href.toLowerCase(),
    $licence_key = $('#license-key').text();
$.ajax({
   dataType: "json",
   url: "/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1",
   async: false,
   method: "GET",
   dataType: "jsonp",
   success: function (data){blogg_id =/blog-(.*)/gm.exec(data.feed.id.$t)[1];}
    });
if (Link.indexOf("www.blogger") == -1 && Link.indexOf("draft.blogger") == -1 && Link.indexOf("template-editor") == -1 && Link.indexOf("post-preview") == -1 && Link.indexOf("b/layout-preview") == -1 && Link.indexOf("b/blog-preview") == -1 && Link.indexOf("b/preview") == -1 && Link.indexOf("b/html-preview") == -1 && Link.indexOf("b/app-preview") == -1 && Link.indexOf("translate.google") == -1 && Link.indexOf("webcache.googleusercontent") == -1) {
$.ajax({dataType: "json",
        url: "https://www.blogger.com/feeds/429224120109023151/pages/default/4760059067480770107?alt=json-in-script&orderby=published",
        method: "GET",
        dataType: "jsonp",
        success: function (res) {
        var $can_key = false,
            can_use = false;
       if (blogg_id == false){rtn()}else{
$("<div>"+res.entry.content.$t+"</div>").find("js_script").each(function () {
        var data = $(this).text(),
          	data_agent = JSON.parse(data);
for ( var o = 0; o< data_agent.length;o++){
for (var s =0; s< data_agent[o].Blog_id.split(',').length ; s++){
     var blog_idd = data_agent[o].Blog_id.split(','),
     	 blog_id = data_agent[o].Blog_id,
         creadet = data_agent[o].create,
         key_code = data_agent[o].key;
if (blogg_id == blog_id || blogg_id == blog_idd[s] && $licence_key == key_code ){can_use = true;} 
if (blogg_id == blog_id  && creadet == true){$can_key = true;}else if(blogg_id == blog_idd[s] && creadet == true){$can_key = true;}   }
} 
}); 
}
if ($can_key){ 
var by = {team1:'احمد السيد الخولي', link1:'https://www.facebook.com/ahmed.elkholy.723'},
Cont = '<a  href="'+ by.link1 +'" target="_blank" style="text-align: center; color: #fff !important; box-shadow: 0 2px 4px 0px rgb(0 0 0 / 40%) !important; margin: 0 10px !important; font-size: 13px !important; background: #00f !important; display: inline-block !important; padding: 0px 7px; border-radius: 5px !important; text-decoration: none !important; visibility: visible !important; opacity: 1 !important;">'+ by.team1 +'</a>';
if ($('#my-right').length !== 0) {
$('#my-right').addClass('impo').append(Cont);
setInterval(function () {
$('.impo').each(function () {
 if ($(this).css('opacity') < 1 || $(this).css('visibility') == 'hidden' || $(this).is(':hidden')) {rtn()}
 })
 },10)}
else {rtn()};
}          
if (!can_use){rtn();}    
},error: function(e) {rtn();} 
});
}
}
act_license()
});

