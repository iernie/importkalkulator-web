<?
function download_currencies() {
    $handle = fopen("ftp://ftp.toll.no/omkurser.txt", "r") or die('Cannot open file');
    $destination = fopen("omkurser.txt", "w") or die('Cannot open file');
    $contents = stream_get_contents($handle);
    fclose($handle);
    fwrite($destination, $contents);
    fclose($destination);
}

$currency = strtoupper(trim($_POST['currency']));
$handle = fopen("omkurser.txt", "r");
$buffer = fgets($handle, 4096);
$buff = explode(";", $buffer);
$date = date(Y) . "/" . date(m) . "/" . date(d);
if($buff[2] < $date) {
    fclose($handle);
    download_currencies();
    $handle = fopen("omkurser.txt", "r");
}
$kurs = 0;
while (($data = fgetcsv($handle, 100, ";")) !== FALSE) {
    if($data[0] == $currency) {
        $kurs = $data[4] / $data[3];
        break;
    }
}
fclose($handle);
echo $kurs
?>