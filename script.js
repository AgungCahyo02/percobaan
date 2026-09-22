// ====================================================
// 1. EFEK MENGETIK (TYPEWRITER) PADA BIO TEXT
// ====================================================
// Fitur ini akan membuat teks deskripsi muncul seolah-olah 
// sedang diketik oleh sistem terminal komputer.

const bioTextElement = document.querySelector('.bio-text');

// Menyimpan teks asli dan membersihkan spasi berlebih di awal/akhir
const originalText = bioTextElement.textContent.trim();

// Mengosongkan teks di layar HTML saat pertama kali dimuat
bioTextElement.textContent = ''; 

let charIndex = 0;
const typingSpeed = 30; // Kecepatan ketikan dalam milidetik

function typeWriterEffect() {
    if (charIndex < originalText.length) {
        // Tambahkan satu huruf ke layar
        bioTextElement.textContent += originalText.charAt(charIndex);
        charIndex++;
        // Ulangi fungsi ini sampai semua huruf selesai diketik
        setTimeout(typeWriterEffect, typingSpeed);
    }
}

// Mulai efek mengetik setelah halaman selesai dimuat (delay 0.5 detik agar lebih dramatis)
window.addEventListener('load', () => {
    setTimeout(typeWriterEffect, 500);
});


// ====================================================
// 2. INTERAKSI KLIK PADA KARTU MISI (PROJECTS)
// ====================================================
// Menambahkan efek pop-up alert bertema sistem saat kartu diklik

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    // Memberikan gaya cursor pointer agar pengunjung tahu kartu bisa diklik
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
        // Mengambil teks dari elemen spesifik di dalam kartu yang diklik
        const missionId = card.querySelector('.mission-id').textContent;
        const missionTitle = card.querySelector('h3').textContent;
        
        // Memunculkan pesan pop-up (Alert) ala sistem terminal
        alert(`[SYSTEM NOTIFICATION]\n\nMengakses data log untuk: ${missionId}\nJudul Arsip: ${missionTitle}\n\nStatus: Meminta izin akses administrator...`);
    });
});


// ====================================================
// 3. PESAN RAHASIA DI CONSOLE BROWSER (EASTER EGG)
// ====================================================
// Pesan ini hanya bisa dilihat oleh developer / guru kamu
// jika mereka menekan tombol F12 (Inspect Element) -> Console.

console.log("%c[END_FIELD SYSTEM_INITIALIZED]", "color: #ffc700; font-size: 20px; font-weight: bold; font-family: monospace;");
console.log("%cOperator  : Agung Cahyo", "color: #00e5ff; font-size: 14px; font-family: monospace;");
console.log("%cLocation  : SMKN 1 Kepanjen", "color: #00e5ff; font-size: 14px; font-family: monospace;");
console.log("%cStatus    : All systems nominal. Ready for deployment.", "color: #94a3b8; font-size: 12px; font-family: monospace;");


// ====================================================
// 4. FITUR TOGGLE TEMA (GELAP / TERANG)
// ====================================================
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // Menambah/menghapus class 'light-theme' pada tag body
    document.body.classList.toggle('light-theme');
    
    // Mengubah teks tombol sesuai tema yang sedang aktif
    if (document.body.classList.contains('light-theme')) {
        themeBtn.textContent = '[ MODE GELAP ]';
    } else {
        themeBtn.textContent = '[ MODE TERANG ]';
    }
});


// ====================================================
// 5. FITUR NAVIGASI MENU (TAB SWITCHING)
// ====================================================
// Mengambil semua tombol menu dan semua seksi (home, about, projects)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Sembunyikan semua section kecuali "Home" saat pertama kali web dibuka
sections.forEach(section => {
    if(section.id !== 'home') {
        section.classList.add('hidden-section');
    }
});

// Memberikan perintah klik pada setiap tombol menu
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah layar melompat/scroll ke atas

        // 1. Hapus efek warna kuning (class 'active') dari semua tombol menu
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // 2. Tambahkan warna kuning HANYA ke tombol yang baru saja diklik
        this.classList.add('active');

        // 3. Ambil nama target dari tombol (misal: "projects" atau "about")
        const targetId = this.getAttribute('data-target');

        // 4. Cari seksi yang cocok, lalu tampilkan. Sembunyikan yang lainnya.
        sections.forEach(section => {
            if (section.id === targetId) {
                // Tampilkan seksi ini dan beri animasi
                section.classList.remove('hidden-section');
                section.classList.add('fade-in-section');
            } else {
                // Sembunyikan seksi ini
                section.classList.add('hidden-section');
                section.classList.remove('fade-in-section');
            }
        });
    });
});