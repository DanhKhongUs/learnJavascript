// Hoisting - đưa biến và hàm khi khai báo lên trên đầu phạm vi


// Hoisting với "var", "function declaration"

//  Đọc hết đoạn code từ trên xuống dưới 
// Tìm xem có biến age và fullName không 
// Nếu có thì đưa nó lên trên đầu phạm vi
// Đoạn code dưới này thấy được biến age ở dưới cùng 
// Lúc này nó sẽ đưa var age; lên đầu dòng dưới cùng chỉ còn là age = 16
// và in ra kết quả của age là undefined vì lúc này nó chưa có giá trị
// còn fullName thì không có biến nào nên là in ra sẽ bị lỗi
console.log(age); // undefined
// console.log(fullName); // ReferenceError: fullName is not a defined
var age = 16;



// Đưa hàm khai báo sum lên trên đầu khác với var là 
// trong hàm sum vẫn hoạt động bình thường và in ra kết quả
console.log(sum(6, 9)); // 15

function sum(a, b){
    return a + b;
}




//Hoisting với "let", "const"

{
    console.log(fullName) // ReferenceError: Cannot access
    //'fullName' before initiallization
    //Lỗi: không thể truy cập vào biến trước khi khởi tạo
    let fullName = "Nguyen Thanh Danh"
}
// Khai báo biến "let", "const" khi được hoisting không được tạo giá trị và
// được đưa vào "Temporal Dead Zone" -> vùng tạm thời không sử dụng được
// Có nghĩa là khi hoisting lên thì let và const sẽ không mang giá trị và
// được lưu vào "Temporal Dead Zone"



// Tại sao lại hoisting:
// Nhận giá trị của biến gần nhất tuy nhiên biến đó lại nằm dưới 
// cho nên phải hoisting lên đầu để cho rằng đã có biến fullName trong phạm vi đó rồi

let fullName = 'Nguyen Van A'

{
    let fullName = "Nguyen Van B"
    {
        {
            console.log(fullName); // Uncaught ReferenceError: Cannot access
            //  'fullName' before initialization

            let fullName = "Nguyen Van C"

        }
    }
}




// Bonus
const counter1 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


function makeCounter(){
    //function increase() sẽ được hoisting lên đầu và nằm ở đây

    let counter = 0;

    return increase;

    function increase() {
        return ++counter;
    }
}



// Bài tập thực hành

var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: I have $NaN


//Giải thích: chúng ta có biến toàn cục là 100
// tuy nhiên bên trong hàm lại có biến var tip = 10
// cho nên là sẽ lấy biến có phạm vi gần nhất
// khi hoisting biến tip lên đầu thì kết quả sẽ cho ra là undefined
// khi thực hiện tính toán với biến có giá trị undefined thì 
// sẽ có kết quả là NaN