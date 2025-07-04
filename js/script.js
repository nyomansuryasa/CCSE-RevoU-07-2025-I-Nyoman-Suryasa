// ========== Welcome Greeting ==========
window.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Masukkan nama Anda:");
  const heading = document.querySelector("h1");
  if (name && heading) {
    heading.textContent = `Hi ${name}, Welcome To Website`;
  }
});

// ========== Form Validation & Display ==========
// =============================================================
// script.js – Validasi Form & Greetings (RevoU Website Latihan)
// =============================================================

// Jalankan kode setelah seluruh DOM selesai dimuat
window.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------------------------------------
     1.  Greeting di Hero Section (opsional)                   
  ---------------------------------------------------------- */
  const heroHeading = document.querySelector("h1");
  if (heroHeading && heroHeading.textContent.includes("Hi")) {
    const yourName = prompt("Masukkan nama Anda:");
    if (yourName) {
      heroHeading.textContent = `Hi ${yourName}, Welcome To Website`;
    }
  }

  /* ----------------------------------------------------------
     2.  Tampilkan waktu sekarang                              
  ---------------------------------------------------------- */
  const currentTimeSpan = document.getElementById("currentTime");
  if (currentTimeSpan) {
    currentTimeSpan.textContent = new Date().toString();
  }

  /* ----------------------------------------------------------
     3.  Validasi & Tampil Hasil Form                          
  ---------------------------------------------------------- */
  const form = document.getElementById("messageForm");
  const outputBox = document.getElementById("output");

  if (form && outputBox) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Ambil nilai input
      const nameInput = document.getElementById("name");
      const dobInput = document.getElementById("dob");
      // Cari textarea di dalam form agar tidak bentrok dengan #message section
      const messageInput = form.querySelector("textarea");
      const genderInput = form.querySelector("input[name='gender']:checked");

      // Validasi sederhana
      if (!nameInput.value.trim()) {
        alert("Nama harus diisi");
        return;
      }
      if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
  alert("Nama hanya boleh mengandung huruf dan spasi");
  return;
}
      if (!dobInput.value) {
        alert("Tanggal Lahir harus diisi");
        return;
      }
      if (!genderInput) {
        alert("Jenis kelamin harus dipilih");
        return;
      }
      if (!messageInput.value.trim()) {
        alert("Pesan harus diisi");
        return;
      }

      // Susun HTML hasil
      const resultHTML = `
        <div class="p-4 mb-4 bg-white border rounded shadow-sm">
          <p><strong>Nama:</strong> ${nameInput.value}</p>
          <p><strong>Tanggal Lahir:</strong> ${dobInput.value}</p>
          <p><strong>Jenis Kelamin:</strong> ${genderInput.value}</p>
          <p><strong>Pesan:</strong> ${messageInput.value}</p>
        </div>`;

      // Tampilkan hasil
      outputBox.innerHTML = resultHTML;

      // Reset form
      form.reset();
    });
  }
});
