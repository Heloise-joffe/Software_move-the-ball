"use strict";
function getOS() {
    let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
iosPlatforms = ['iPhone', 'iPad', 'iPod'],
os = null;
if (macosPlatforms.indexOf(platform) !== -1) {
os = 'MacOS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
os = 'Windows';
} else if (/Android/.test(userAgent)) {
os = 'Android';
} else if (!os && /Linux/.test(platform)) {
os = 'Linux';
}
return os;
}
alert("OSName: " + getOS());
let btn = document.getElementById("request");
btn.addEventListener("click", permissionForMacOS);
function permissionForMacOS() {
if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
DeviceMotionEvent.requestPermission()
.then(response => {
document.getElementById("dmeSupported").innerText = "Device Motion ist macOS/iOS unterstützt!";
if (response == "granted") {
window.addEventListener("devicemotion", handleEvent);
}
});
} else {
document.getElementById("dmeSupported").innerText = "Device Motion ist nicht macOS/iOS unterstützt!";
}
}
if (getOS() == "Windows" || getOS() == "Android") {
    if (window.DeviceMotionEvent) {
        document.getElementById("dmeSupported").innerText = "Device Motion ist Windows/Android unterstützt!";
        window.addEventListener("devicemotion", handleEvent);
    } else {
        document.getElementById("dmeSupported").innerText = "Device Motion Windows/Android ist nicht unterstützt!";
    }
}

function handleEvent(event) {
    document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
    document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
    document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
}