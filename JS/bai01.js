function daoNguocChuoi(chuoi) {
    // Đảo ngược chuỗi
    return chuoi.split('').reverse().join('');
  }
  
  // Ví dụ sử dụng
  const daoNguoc = daoNguocChuoi("hello");
  console.log(daoNguoc); // Kết quả: olleh
  