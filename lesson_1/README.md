# Cách để hiểu ra bản chất vấn đề và hệ thống kiến thức học js

### Cách hoạt động của các câu lệnh điều hướng
(Giải quyết các thuật toán tìm giá trị lớn nhất, nhỏ nhất và sắp xếp tăng dần, giảm dần, kiểm tra mảng có hợp lệ hay không?)

## Nền tảng (Dùng để lưu trữ và xử lí dữ liệu)

- Cú pháp cơ bản 
- Biến và kiểu dữ liệu: 

+ Biến: 
* Cách đặt tên biến theo đúng quy tắc:
Tên biến phải là các chữ không dấu viết hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới () và kí hiệu $.

+ Kiểu dữ liệu cơ bản như:
* Kiểu số, kiểu chuỗi, kiểu boolean

- Các cấu trúc dữ liệu: 
+ Array và Object

- Một số giá trị đặc biệt:
+ null, undefined, NaN

- Chuyển đổi kiểu dữ liệu:
+ Cách chuyển đổi qua lại giữa các kiểu dữ liệu với nhau

## Toán tử 

- Các toán tử cơ bản:
+ Cộng, trừ, nhân, chia

- Toán tử gán

- Toán tử so sánh

- Toán tử logic

- Phân tích thứ tự thực thi của các toán tử trong 1 biểu thức phức tạp:

+ Dấu ngoặc: () có mức ưu tiên cao nhất. Các phép tính bên trong dấu ngoặc sẽ được thực hiện trước.
+ Toán tử unary (1 ngôi): ++, --, !, ~, +, -, v.v.
+ Phép nhân, chia, và modulo: *, /, %
+ Phép cộng và trừ: +, -
+ Toán tử so sánh: <, <=, >, >=
+ Toán tử bằng: ===, !==
+ Toán tử logic: &&, ||
+ Toán tử gán: =, +=, -=, *=, v.v.

## Control Flow ( Cách điều khiển luồng chương trình để thực hiện các tác vụ khác nhau)

- Câu lệnh if

- Câu lệnh switch

- Giá trị truthy, falsy

- Vòng lặp for, while (Thực hiện các logic lặp đi lặp lại )

- Function (Hàm) (Để có thể tái sử dụng code ở nhiều nơi)

- Callback Function là gì trong JS?


### Tìm hiểu chi tiết phía sau JS 

## Primitive, Reference (Cách để biết JS lưu trữ dữ liệu như thế nào qua 2 kiểu dữ liệu chính)

- Kiểu Primitive 

- Kiểu Reference 

- Cách hoạt động của chúng (so sánh bằng kiểu reference) 
(Điều này sẽ giúp tránh những lỗi phát sinh không mong muốn và viết code tối ưu hơn)

## Scope và Hoisting (Tìm hiểu phạm vi truy cập của biến)

- Global Scope

- Function Scope

- Nested Scope

- Use Strict

- Cơ chế Hoisting là gì?
(Những cái này sẽ giúp tại sao không truy cập được biến sau khi khai báo)

## Các Method tiện ích trong Array

- Thêm và xóa

- forEach()

- filter()

- find()

- findIndex()

- v.v
(Những cái này dùng để xử lý Array nhanh gọn và an toàn hơn, không cần viết mã dài dòng)

## Object chuyên sâu (Prototype)

- Thao tác với object

- Tham chiếu this

- bind(), call(), apply()

- Contructor Function

- Prototype

- Xử lý lỗi bằng try...catch (Cái này dùng để kiểm soát lỗi phát sinh để chương trình không bị dừng đột ngột gây ảnh hưởng đến trải nghiệm người dùng)
(Bên cạnh đó cũng sẽ tìm hiểu cách xác định keyword this trong JS)


### Giai đoạn tập trung tìm hiểu các cú pháp JS hiện đại và học cách ứng dụng chúng vào trong phát triển web

## Các chức năng nổi bật của ES6+ (Học cái này vì các famework JS sử dụng các cú pháp này rất nhiều)

## Thao tác với class
(Cái này để giúp quản lý code tốt hơn kèm theo đó là các khái niệm lập trình hướng đối tượng)
- Tính kế thừa

- Tính đóng gói

- Tính đa hình 
 
- Tính trừu tượng


## Bất đồng bộ
(Tìm hiểu chi tiết về bất đồng bộ và callback hell, event loops là gì? và một số kĩ thuật để giúp quản ly các logic bất đồng bộ như Promise, Async/await)
(Lúc này sẽ biết chính xác tuần tự các dòng lệnh như thế nào?)\


## DOM (Document Object Model)
(DOM có chức năng giúp chúng ta sử dụng code JS để can thiệp vào nội dung HTML của trang web)
(Học các kĩ thuật quan trọng như: thêm, xóa, sửa và truy vấn các phần tử HTML cũng như lắng nghe và xử lý các sự kiện của trang web)



##  Học xong và hiểu rõ các kiến thức trên chúng ta có thể chuyển sang học các thư viện và các famework phức tạp hơn ##