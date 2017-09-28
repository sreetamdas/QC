$(document).ready(function () {
    var sheet_id = "1qDRqGDCChe8GWIauFMV20u7MXMFpuf8Vcy62lQf4ipc"
    var range = "A1:B28"
    var api_key = "AIzaSyBL16fuLOcOn3fsVGwpO3zKpm2Df6CgwUo"
    var url = "https://sheets.googleapis.com/v4/spreadsheets/" + sheet_id + "/values/Sheet1!" + range + "?key=" + api_key

    var xml = new XMLHttpRequest();
    var response = "";
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("some").innerHTML = this.responseText;
            response = this.responseText;
            console.log(response)
        }
    };
    xml.open("GET", url)
    xml.send()

    // document.getElementById("some").innerHTML = response;
});