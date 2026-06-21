# HƯỚNG DẪN KẾT NỐI FORM LIÊN HỆ VỚI GOOGLE SHEET

Để kết nối form liên hệ trên website của bạn tới Google Sheet: [Link Google Sheet của bạn](https://docs.google.com/spreadsheets/d/1EzUBdKGRPZOuOcL3aDpZE_vwI5A7l2PO9jvybmzs-Pw/edit?usp=sharing), bạn hãy làm theo các bước dưới đây.

---

## BƯỚC 1: Thêm Google Apps Script vào Google Sheet

1. Mở trang Google Sheet của bạn: [https://docs.google.com/spreadsheets/d/1EzUBdKGRPZOuOcL3aDpZE_vwI5A7l2PO9jvybmzs-Pw/edit](https://docs.google.com/spreadsheets/d/1EzUBdKGRPZOuOcL3aDpZE_vwI5A7l2PO9jvybmzs-Pw/edit)
2. Trên thanh menu, chọn **Tiện ích mở rộng (Extensions)** > **Apps Script**.
3. Xóa hết toàn bộ mã hiện có trong trình biên tập và dán đoạn mã sau vào:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // Lấy sheet đầu tiên hoặc sheet hoạt động
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Nếu sheet chưa có dữ liệu nào, tạo dòng tiêu đề (Header) trước
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời gian đăng ký", "Họ và tên", "Số điện thoại", "Dòng sản phẩm quan tâm", "Thời gian tư vấn", "Nguồn form"]);
    }
    
    // Định dạng thời gian
    var timestamp = new Date(data.ts || new Date());
    var formattedDate = Utilities.formatDate(timestamp, "GMT+7", "dd/MM/yyyy HH:mm:ss");
    
    // Thêm dòng mới
    sheet.appendRow([
      formattedDate,
      data.name || "",
      "'" + (data.phone || ""), // Thêm dấu nháy đơn trước số điện thoại để tránh mất số 0 đầu
      data.product || "",
      data.time || "",
      data.source || "honghac-city"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Nhấn nút **Lưu (Save icon)** hoặc bấm tổ hợp phím `Ctrl + S`.

---

## BƯỚC 2: Triển khai Apps Script dưới dạng Ứng dụng Web (Web App)

1. Ở góc trên cùng bên phải của trang Apps Script, nhấp vào **Triển khai (Deploy)** > **Tùy chọn triển khai mới (New deployment)**.
2. Tại mục **Chọn loại (Select type)** (nhấp vào icon bánh răng ⚙️), chọn **Ứng dụng web (Web app)**.
3. Cấu hình như sau:
   - **Mô tả (Description):** `Hong Hac City Lead API`
   - **Thực thi dưới danh nghĩa (Execute as):** Chọn **Tôi (Email của bạn - Me)**.
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)** *(Bắt buộc chọn cái này để website có thể gửi dữ liệu lên mà không bị chặn).*
4. Nhấp vào **Triển khai (Deploy)**.
5. Google sẽ yêu cầu ủy quyền: Nhấp vào **Ủy quyền truy cập (Authorize access)** > Chọn tài khoản Google của bạn > Chọn **Nâng cao (Advanced)** > Nhấp vào **Đi tới Dự án không có tiêu đề (không an toàn) / Go to Untitled project (unsafe)** > Nhấp **Cho phép (Allow)**.
6. Sau khi triển khai xong, một hộp thoại sẽ hiện ra chứa **URL ứng dụng web (Web app URL)**.
   - Định dạng URL có dạng: `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXX/exec`
   - Hãy **Sao chép (Copy)** URL này lại.

---

## BƯỚC 3: Cấu hình biến môi trường trên Netlify

Vì website của bạn được deploy tự động từ GitHub lên Netlify, bạn chỉ cần add URL này vào cấu hình của Netlify (không cần sửa đổi code của web):

1. Đăng nhập vào trang quản trị **Netlify**.
2. Tìm tới dự án landing page của bạn.
3. Chọn **Site configuration** (hoặc **Site settings**) > **Environment variables**.
4. Nhấp vào **Add a variable** > **Create new variable** và điền:
   - **Key:** `NEXT_PUBLIC_SHEET_ENDPOINT`
   - **Value:** *(Dán URL Web App bạn đã copy ở Bước 2 vào đây)*
5. Nhấp **Save**.
6. Để áp dụng biến môi trường mới này, hãy chuyển sang tab **Deploys** và bấm **Trigger deploy** > **Clear cache and deploy site** để build lại bản mới nhất chứa biến này.

---
*Chúc bạn thực hiện thành công! Nếu gặp bất kỳ bước nào khó khăn, hãy phản hồi lại cho tôi nhé.*
