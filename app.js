//alertBox-promptBox hesap makinesi yapımı

let yeniSatır = "\r\n";
while (true) {
  let i = Number(prompt("Birinci sayıyı giriniz."));
  let oporatör = prompt("Yapmak istediğinizişlemi seçiniz +,-,*,/,%");
  let j = Number(prompt("ikinci sayıyı giriniz."));
  let sonuc = 0;
  if (isNaN(i) || isNaN(j)) {
    alert("lütfen Sayı giriniz");
  } else {
    if (oporatör == "+") {
      sonuc = i + j;
      alert(i + "+" + j + "=" + yeniSatır + sonuc);
    } else if (oporatör == "-") {
      sonuc = i - j;
      alert(i + "-" + j + "=" + yeniSatır + sonuc);
    } else if (oporatör == "*") {
      sonuc = i * j;
      alert(i + "*" + j + "=" + yeniSatır + sonuc);
    } else if (oporatör == "/") {
      sonuc = i / j;
      alert(i + "/" + j + "=" + yeniSatır + sonuc);
    } else if (oporatör == "%") {
      sonuc = (i / 100) * j;
      alert(i + "%" + j + "=" + yeniSatır + sonuc);
    }
  }
}
