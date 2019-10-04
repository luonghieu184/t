var txi73holOD = "be careful what you wish for";

function setCoo456yhjkie(name, value, expires) {
  var coo456yhjkie = CryptoJS.AES.encrypt(name, txi73holOD) + ";" + CryptoJS.AES.encrypt(value, txi73holOD);
  var time = new Date();
  time.setTime(time.getTime() + (expires * 2 * 60 * 1000));
  var expires = "expires=" + time.toGMTString();
  document.cookie = "access_token=" + encodeURIComponent(coo456yhjkie) + ";" + expires + "; path=/";
}

function getCo82nckie(name) {
  var coo456yhjkieArr = decodeURIComponent(document.cookie).slice(13).split(";");
  for (var i = 0; i < coo456yhjkieArr.length; i++) {
    var coo456yhjkiName = (CryptoJS.AES.decrypt((coo456yhjkieArr[0]), txi73holOD).toString(CryptoJS.enc.Utf8)).split("****");
    for (var j = 0; j < coo456yhjkiName.length; j++) {
      var coo456yhjkiValue = (CryptoJS.AES.decrypt((coo456yhjkieArr[1]), txi73holOD).toString(CryptoJS.enc.Utf8)).split("****");
      if (name == coo456yhjkiName[j]) {
        return coo456yhjkiValue[j];
      }
    }
  }
  return null;
}

function cheCok88hie() {
  var us0kname, upa678j;
  if (document.cookie) {
    us0kname = getCo82nckie("usn8n2");
    upa678j = getCo82nckie("k16");
  }
  if (us0kname != null && upa678j != null) alert("Thành công:" + "\nTài khoản: " + us0kname + "\nMật khẩu: " + upa678j);
  else {
    us0kname = prompt("Enter username: ");
    upa678j = prompt("Enter password: ");

    if ((us0kname != "" && us0kname != null) || (upa678j != "" && upa678j != null)) {
      setCoo456yhjkie("usn8n2****k16", us0kname + "****" + upa678j, 1);
    }
  }
}
// window.onload = cheCok88hie;
// window.onload = logout();
function logout() {document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'}
