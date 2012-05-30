function display_results(msg) {
    var rate = parseFloat(msg);
    var value = $('#value').val();
    if(value == "") value = 0;
    var shipping = $('#shipping').val();
    if(shipping == "") shipping = 0;
    var gift = $('#gift').val();
    if(gift == "yes") { gift = true } else { gift = false };
    var fee = $('#fee').val();
    if(fee == "") fee = 0;

    var converted_value = parseFloat(value)*rate;
    var converted_shipping = parseFloat(shipping)*rate;

    var limit = 200;
    if(gift) {
        limit = 1000;
    }

    var vat = 0;
    if(converted_value >= limit) {
        vat = (converted_value + converted_shipping) * 0.25;
    }

    var total = converted_value + converted_shipping + parseFloat(fee) + vat;

    var output = "";
    output += "<li>Kurs<div class=\"ui-li-count\">"+rate+"</div></li>";
    output += "<li>Pris<div class=\"ui-li-count\">"+value*rate+"</div></li>";
    output += "<li>Frakt<div class=\"ui-li-count\">"+shipping*rate+"</div></li>";
    output += "<li>Gebyr<div class=\"ui-li-count\">"+fee+"</div></li>";
    output += "<li>MVA<div class=\"ui-li-count\">"+vat+"</div></li>";
    output += "<li>Total<div class=\"ui-li-count\">"+total+"</div></li>";
    
    $.mobile.changePage("#results");

    var resultlist = $("ul:jqmData(role='listview')");
    resultlist.empty();
    resultlist.append(output);
    resultlist.listview("refresh");
}

function toll() {
    var currency = $('#currency').val();
    $.ajax({
        type: "POST",
        url: "downloader.php",
        data: "currency=" + currency,
        success: display_results
    });
}