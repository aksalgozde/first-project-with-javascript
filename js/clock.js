const kullaniciAdi = window.prompt("Adınızı Giriniz")
document.getElementById("myName").innerHTML = kullaniciAdi

const clockArea = document.getElementById("myClock");

function showTime() {
    const date = new Date();
    const saat = date.getHours();
    const dakika = date.getMinutes();
    const saniye = date.getSeconds();

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    const gunIndex = date.getDay();
    const gun = gunler[gunIndex];

    const html = `${saat}:${dakika}:${saniye} ${gun}`
    clockArea.innerHTML = html;
    setTimeout(showTime, 1000)
}

window.onload = showTime();