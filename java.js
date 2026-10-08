// ==========================================
// 1. UCAPAN BERDASARKAN WAKTU OTOMATIS
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const sapaanElemen = document.querySelector('.sapaan');
    
    const jam = new Date().getHours();
    let waktuUcapan = "Halo";

    if (jam >= 4 && jam < 11) {
        waktuUcapan = "Selamat Pagi 🌅";
    } else if (jam >= 11 && jam < 15) {
        waktuUcapan = "Selamat Siang ☀️";
    } else if (jam >= 15 && jam < 18) {
        waktuUcapan = "Selamat Sore 🌇";
    } else {
        waktuUcapan = "Selamat Malam 🌙";
    }

    // Menambahkan informasi waktu ke elemen sapaan
    if (sapaanElemen) {
        sapaanElemen.innerHTML = `${waktuUcapan}! Hai nama saya Jehan, udah gitu aja biasanya saya main game kalau gak liat temen coding.`;
    }

    // ==========================================
    // 2. EFEK KETIK OTOMATIS PADA JUDUL UTAMA
    // ==========================================
    const judulUtama = document.querySelector('.hero h1');
    if (judulUtama) {
        const teksAsli = judulUtama.innerText;
        judulUtama.innerText = "";
        let i = 0;
        
        function ketikEfek() {
            if (i < teksAsli.length) {
                judulUtama.innerText += teksAsli.charAt(i);
                i++;
                setTimeout(ketikEfek, 100);
            }
        }
        // Jalankan efek ketik setelah 500ms
        setTimeout(ketikEfek, 500);
    }
});


// ==========================================
// 3. FITUR INTERAKTIF: KOTAK PESAN RANDOM DARI JEHAN
// ==========================================
const bodyElement = document.body;
const footerElement = document.querySelector('footer');

// Membuat wadah untuk fitur interaktif
const interactiveSection = document.createElement('div');
interactiveSection.style.textAlign = 'center';
interactiveSection.style.padding = '30px 20px';
interactiveSection.style.backgroundColor = '#140724';
interactiveSection.style.borderTop = '1px solid #3c1e63';

// Membuat Tombol Interaktif
const funButton = document.createElement('button');
funButton.innerText = '🎮 Pencet Kalau Gabut!';
funButton.style.padding = '12px 25px';
funButton.style.backgroundColor = '#7c4dff';
funButton.style.color = 'white';
funButton.style.border = 'none';
funButton.style.borderRadius = '25px';
funButton.style.cursor = 'pointer';
funButton.style.fontWeight = 'bold';
funButton.style.fontSize = '15px';
funButton.style.transition = '0.3s';
funButton.style.boxShadow = '0 4px 15px rgba(124, 77, 255, 0.4)';

// Efek Hover pada Tombol
funButton.addEventListener('mouseover', () => {
    funButton.style.backgroundColor = '#651fff';
    funButton.style.transform = 'scale(1.05)';
});

funButton.addEventListener('mouseout', () => {
    funButton.style.backgroundColor = '#7c4dff';
    funButton.style.transform = 'scale(1)';
});

// Event Klik untuk memunculkan pesan acak yang relate sama anak PPLG / gamer
funButton.addEventListener('click', () => {
    const listPesan = [
        "🔥 Semangat terus anak X PPLG 1! Jangan patah semangat walau error mulu.",
        "🎮 Waktunya istirahat game sebentar, habis itu lanjut ngoding lagi ya!",
        "🍛 Kapan ya bisa pesen nasgor buatan ketua lagi? Lapar nih...",
        "💻 HTML, CSS, JavaScript di-masterin ya biar jago bikin web!",
        "😎 'Saya cuma mau bilang bahwa saya akan lawan!!!' - Jehan"
    ];
    
    const pesanAcak = listPesan[Math.floor(Math.random() * listPesan.length)];
    
    // Membuat elemen teks hasil secara dinamis di bawah tombol jika belum ada
    let boxHasil = document.getElementById('hasil-pesan-jehan');
    if (!boxHasil) {
        boxHasil = document.createElement('p');
        boxHasil.id = 'hasil-pesan-jehan';
        boxHasil.style.marginTop = '15px';
        boxHasil.style.color = '#dfb3ff';
        boxHasil.style.fontWeight = '600';
        boxHasil.style.fontSize = '16px';
        interactiveSection.appendChild(boxHasil);
    }
    
    boxHasil.innerText = `"${pesanAcak}"`;
});

// Masukkan tombol ke dalam section interaktif
interactiveSection.appendChild(funButton);

// Sisipkan section interaktif tepat di atas footer
bodyElement.insertBefore(interactiveSection, footerElement);