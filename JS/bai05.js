function kiemTraChanLe(so) {
    // Kiểm tra số chẵn lẻ
    if (so % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Ví dụ sử dụng
  const chanLe = kiemTraChanLe(4);
  console.log(chanLe); // Kết quả: Even
  