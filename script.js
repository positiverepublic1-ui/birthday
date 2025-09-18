function checkAge() {
  const correctAge = 25; // Ganti dengan umur yang benar 🎂
  const age = document.getElementById("ageInput").value;
  const message = document.getElementById("message");

  if (age == correctAge) {
    message.textContent = "🎉 Benar! Yuk buka kartu ulang tahun!";
    setTimeout(() => {
      window.location.href = "card.html";
    }, 2000);
  } else {
    message.textContent = "❌ Salah, coba lagi!";
  }
}
