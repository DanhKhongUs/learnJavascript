//Value types 

let a = 1; // Tạo ra biến a, cấp 1 ô nhớ, lưu 1 vào ô nhớ

let b = a; // Tạo ra biến b, cấp 1 ô nhớ khác, sao chép giá trị của a (là 1) vào ô nhớ mới 

a = 2; // Sửa giá trị trông ô nhớ của a thành 2

console.log(b) // output: 1



//Reference Types
// Nếu tạo mới 1 object, array, function luôn luôn có 1 vùng nhớ mới được tạo ra

// Tạo ra biến c, cấp 1 ô nhớ, lưu {name: 'Mercedes'} vào ô nhớ,
// trả về địa chỉ đã lưu và gán cho biến c
let c = {
    name: 'Mercedes'
}


let d = c // Tạo ra biến d trỏ biến d tới cùng địa chỉ ô nhớ của biến c
c.name = 'BMW' // Sửa giá trị của key name trong ô nhớ thành 'BMW'

console.log(d)


//Bài tập ví dụ

const student = {
    name: 'Thanh Danh',
    profile: {
        firstName: 'Thanh',
        lastName: 'Danh',
        introduction: 'Boy'
    }
}

const studentProfile = student.profile;

student.profile.introduction = 'Good boy';

console.log(studentProfile.introduction); //Output: Good boy


//Data types with functions
//Value types
function sum(a, b){
    //Chạy 1 phép ngầm tạo ra a và b
    //let a = e
    //let b = f
    a = 0
    b = 0
    console.log(a, b);
}


const e = 1;
const f = 2;

sum(e, f);

console.log(e, f);



//Reference types
function func(obj){
    // let obj = g
    obj.name = 'Mercedes'
    console.log(obj)
}

const g = {
    name: "BMW"
}

func(g)
console.log(g)

// thuật ngữ: Side effect (Tác dụng phụ hoặc việc xảy ra không mong muốn)



function createCar(obj){
    // obj = JSON.parse(JSON.stringify(obj));
    obj = {...obj}
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: "BMW"
}
    
const newCar = createCar(car)

console.log(car)



// Lưu ý:

const a1 = {
    name: "BMW"
}
const a2 = {
    name: "BMW"
}

console.log(a1 === a2) // Lúc này sẽ trả về false vì 2 object trên trả về 2 vùng nhớ khác nhau




//Pass by value(Truyền theo giá trị)
// 1. Sao chép giá trị của biến: let y = x;
// 2. Truyền bản sao vào bên trong hàm
// * Đặc điểm: Gán lại tham số trong hàm, không làm thay đổi biến bên ngoài hàm.


//Pass by reference(Truyền theo tham chiếu)
// Truyền trực tiếp tham chiếu của biến vào bên trong hàm
// * Đặc điểm: Gán lại tham số trong hàm, ngay lập tức biến ngoài hàm cũng bị thay đổi


// Javascript hoàn toàn là pass by value

function changeValue(y){
    // y = 20;
    y = {name: 'Bob'} // Đặc điểm nhận dạng là gán lại tham số 
    // y.name = 'Bob' // Này không phải là pass by reference
    // Này là gán lại thuộc tính của object chứ không phải là gán lại tham số ở trong hàm
}

// let x = 10;
let x = {name: 'John'}

changeValue(x);

// console.log(x) // output: 10
console.log(x) // output: John
