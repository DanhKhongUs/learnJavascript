// Strict mode - Chế độ nghiêm ngặt (Giúp chúng ta code js an toàn hơn)


/**
    Cách sử dụng:
    1. Thêm "use strict"; vào đầu file .js
    2. Thêm "use strict"; vao ngay sau thẻ mở <script>
    3. Thêm "use strict"; vào đầu phạm vi hàm


 */


//Đặc trưng
// Không thể khai báo biến mà không sử dụng từ khóa var, let, const

// "use strict";
// //Thêm từ khóa var
// var fullName = 'Nguyen Van A' // Tạo biến fullName ở phạm vi global

// function testFunc() {
//     // Thêm từ khóa var
//     var age = 18; // Tạo biến age ở phạm vi global
// }

// testFunc();

// console.log(fullName)
// console.log(age)  // Dòng code này không chạy được nữa vì age đã không còn là phạm vi global


/**
    - Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
    - Báo lỗi khi hàm có tham số trùng tên
    - Khai váo hàm trong code block thì hàm sẽ thuộc phạm vi code block
    - Không đặt tên biến, tên hàm bằng 1 số từ khóa "nhạy cảm" của ngôn ngữ

 */



// Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false

// "use strict";
// const student = {}

// Object.defineProperty(student, 'fullName', {
//     value: "Nguyen Van A",
//     //Ở đây mặc định là false
//     writable: true,
// })

// student.fullName = 'Nguyen van b'

// console.log(student);



// Báo lỗi khi hàm có tham số trùng tên

// "use strict";
// function sum(a, a){
//     return a + a;
// }

// console.log(sum(6, 9));



//Khai váo hàm trong code block thì hàm sẽ thuộc phạm vi code block

// "use strict";
// {
//     // Vì biến x được khai báo bởi từ khóa var nên nó là global scope
//     // nên có thể truy cập ra bên ngoài phạm vi
//     var x = function(a, b){
//         return a + b;
//     }
//     function sum(a, b){
//         return a + b;
//     } 
// }
// console.log(x(6, 9));
// console.log(sum(6, 9));

/**
    Công dụng:

    1. Tránh "quên" từ khóa khai báo biến
    2. Tránh trùng tên biến dẫn tới lỗi logic
    3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global 

 */


// Bài tập thực hành
"use strict"
var hero = "Doctor Strange"

function MultiverseOfMadness() {
   var universe = 616;
}

MultiverseOfMadness()

console.log(hero) //Output: Doctor Strange
console.log(universe) //Output: Uncaught ReferenceError: universe is not defined

// Giải thích:
// biến universe chỉ được khai báo trong phạm vi của một function
// khi đó nếu gọi đến biến đó ở ngoài phạm vi khai báo sẽ dẫn đến lỗi