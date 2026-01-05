// Tìm nút và phần tử để hiển thị số lần nhấn
const button = document.getElementById("thongtinkhac");
const counterDisplay = document.getElementById("vanchuong");

// Biến đếm số lần nhấn
let count = 0;

// Sự kiện khi người dùng nhấn nút
button.addEventListener("click", function() {
    count++;  // Tăng số đếm lên 1 khi nhấn nút
    counterDisplay.innerHTML = `Bạn đã nhấn nút ${count} lần.`;  // Hiển thị số lần nhấn
});