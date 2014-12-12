function calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (LeadingZero && s.length < 2)
        s = "0" + s;
    return s;
}

function CountBack(secs) {
    if (secs < 0) {
        document.getElementById("cntdwn").innerHTML = FinishMessage;
        return;
    }
    DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs, 86400, 100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs, 3600, 24));
    DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs, 60, 60));
    DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs, 1, 60));

    document.getElementById("cntdwn").innerHTML = DisplayStr;
    if (CountActive)
        setTimeout("CountBack(" + (secs + CountStepper) + ")", SetTimeOutPeriod);
}

if (typeof (BackColor) == "undefined")
    BackColor = "white";
if (typeof (ForeColor) == "undefined")
    ForeColor = "blue";
if (typeof (TargetDate) == "undefined") {
    TargetDate = "12/25/2014 0:00 AM";
   // alert(TargetDate);
}
if (typeof (DisplayFormat) == "undefined")
    DisplayFormat = "Còn %%D%% Ngày, %%H%% Giờ, %%M%% Phút, %%S%% Giây nữa sẽ đến Giáng Sinh ";
if (typeof (CountActive) == "undefined")
    CountActive = true;
if (typeof (FinishMessage) == "undefined")
    FinishMessage = "Giáng Sinh Đã Đến Chúc Bạn Có Một Giáng Sinh Vui Vẻ Và An Lành  I <3 U ";
if (typeof (CountStepper) != "number")
    CountStepper = -1;
if (typeof (LeadingZero) == "undefined")
    LeadingZero = true;


CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
    CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;
var dthen = new Date(TargetDate);
var dnow = new Date();
if (CountStepper > 0)
    ddiff = new Date(dnow - dthen);
else
    ddiff = new Date(dthen - dnow);
gsecs = Math.floor(ddiff.valueOf() / 1000);
CountBack(gsecs);
