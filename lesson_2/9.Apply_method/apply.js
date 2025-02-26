/* 
    Apply method

    - Phương thức nà cho phép gọi một hàm với một this (bind) và truyền đối số 
    cho hàm gốc dưới dạng mảng

*/


// VI DU 1:
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

function greet(greeting, message){
    return `${greeting} ${this.firstName} ${this.lastName}.
${message}`
}

let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)'])
console.log(result);
 
// So sánh với call() method
result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')

console.log(result);



// VI DU 2: (Function borrowing) (Mượn hàm)

const teacher2 = {
    firstName: "Minh",
    lastName: "Thao",
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOffline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}

const me = {
    firstName: 'Thanh',
    lastName: 'Danh',
    isOnline: false,
}

console.log('Teacher: ', teacher2.isOnline);
teacher2.goOnline();
console.log('Teacher: ', teacher2.isOnline);

console.log('-------------------------------')

console.log('Student: ', me.isOnline);
teacher2.goOnline.apply(me);
console.log('Student: ', me.isOnline);



//VI DU 3: (Extends) (kế thừa)

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Parrot() {
    Animal.apply(this, arguments)
    this.speak = function () {
        console.log("Nha co khach...")
    }
}

const conVet = new Parrot('Vet', 300)

console.log(conVet)



// Giống nhau:
// - cú pháp truy cập

function fn() {
    //bind
    fn.bind();

    // call
    fn.cal();

    //apply
    fn.apply();
}


// - Là các methods được kế thừa từ Function.prototype

function fn() {}

console.log(fn.bind === Function.prototype.bind); // true
console.log(fn.call === Function.prototype.call); //true
console.log(fn.apply === Function.prototype.apply); //true


// Khác nhau:
// - Các đối số và cách hoạt động

function fn() {}
/*
* Bind method
- Trả ra hàm mới với `this` tham chiếu tới `thisArg`
- Không thực hiện gọi hàm
- Nếu được binh kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn 


const newFn = fn.bind(thisArg, arg1, arg2, ...);

newFn(arg1, arg2, ...);


*/



/*
* Call method
- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`


fn.call(thisArg, arg1, arg2, ...)

*/



/* 
* Apply method
- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`


fn.apply([arg1, arg2, ...])


*/



/* 
 Lời nhắc: 

 sử dụng ba cái method vừa học khi chúng ta bind this, khi sử dụng mượn hàm và extends (Kế thừa) )

*/
