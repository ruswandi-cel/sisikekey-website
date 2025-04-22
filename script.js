const keranjang = [];
const listKeranjang = document.getElementById("listKeranjang");
const tombolTambah = document.querySelectorAll("button");

tombolTambah.forEach((btn) => {
  btn.addEventListener("click", function () {
    const produk = this.parentElement;
    const namaProduk = produk.querySelector("h3").innerText;
    const hargaProduk = produk.querySelector("p").innerText;

    keranjang.push({ nama: namaProduk, harga: hargaProduk });
    tampilkanKeranjang();
  });
});

function tampilkanKeranjang() {
  listKeranjang.innerHTML = "";
  keranjang.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = ${item.nama} - ${item.harga};
    listKeranjang.appendChild(li);
  });
document.addEventListener("DOMContentLoaded", () => {
  const tombolBaca = document.querySelectorAll(".baca-selengkapnya");

  tombolBaca.forEach(tombol => {
    tombol.addEventListener("click", () => {
      const deskripsiLengkap = tombol.nextElementSibling;
      deskripsiLengkap.classList.toggle("hidden");
      tombol.textContent = deskripsiLengkap.classList.contains("hidden")
        ? "Baca selengkapnya"
        : "Sembunyikan";
    });
  });
});
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const tombolBaca = document.querySelectorAll('.baca-selengkapnya');

    tombolBaca.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const deskripsiLengkap = btn.nextElementSibling;
        deskripsiLengkap.classList.toggle('show');
      });
    });
  });
</script>