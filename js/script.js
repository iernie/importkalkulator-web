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
    output += "<li>"+rate+"<div class=\"ui-li-count\">"+rate+"</div></li>";
    alert(output);
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