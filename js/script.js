function display_results(msg) {
    var rate = msg;
    var value = $('#value').val();
    if(value == "") value = 0;
    var shipping = $('#shipping').val();
    if(shipping == "") shipping = 0;
    var gift = $('#gift').val();
    if(gift == "yes") { gift = true } else { gift = false };
    var fee = $('#fee').val();
    if(fee == "") fee = 0;

    var output = "";
    output += "<li>Kurs<div class=\"ui-li-count\">"+rate+"</div></li>";
    
    var resultlist = $('#results').find('.resultlist');
    resultlist.empty();
    resultlist.append(output);
    resultlist.listview("refresh");
    $.mobile.changePage("#results");
}

function toll() {
    var currency = $('#currency').val();
    $.ajax({
        type: "POST",
        url: "downloader.php",
        data: "currency=" + currency,
        success: function(msg){
            display_results(msg);
        }
    });
}

$(document).ready(function(){
    $('#listview').listview();
});