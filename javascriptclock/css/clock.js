window.onload = function() {
    // Kullanıcıdan isim ve soyisim girmesini iste
    let name = prompt("Lütfen isim ve soyisminizi girin:");

    // İsmi ekranda göster
    document.getElementById("myName").textContent = name;

    // Saati göstermek için fonksiyonu çağır
    showTime();
};

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Saat, dakika ve saniyeyi iki basamaklı yapmak için
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000); // 1 saniye sonra fonksiyonu tekrar çağır
}
