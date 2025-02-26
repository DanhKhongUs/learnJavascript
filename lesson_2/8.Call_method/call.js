/* Call method
    Là phương thức trong prototype của Function constructor, phương thức này 
    được dùng để gọi hàm và cũng có thể bind this cho hàm


    - Gọi hàm với call method
    - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
    - Thể hiện tính kế thừa extends trong OOP 
    - Mượn hàm (function borrowing), thêm ví dụ với arguments

*/


// Gọi hàm với call method
function random() {
    console.log(Math.random());
}

random.call();


//Gọi hàm và bind this
const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}


const me = {
    firstName: "Thanh",
    lastName: "Danh",

    showFullName() {
        console.log(`${this.firstName} ${this.lastName} `)
    }
}

// Này là kĩ thuật mượn hàm
me.showFullName.call(teacher);

/* Sự khác nhau giữa bind và call là

- bind thì nó bind this nó trả ra cái hàm mới và cái this mới
- call thì nó bind this và nó gọi luôn cái hàm đó

*/


// lưu ý trong strict mode vẫn có this nếu được bind
'use strict'
this.firstName = 'Thanh'
this.lastName = 'Danh'

function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

showFullName.call(this);


//Thể hiện tính kế thừa extends trong OOP 
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight);
    this.legs = legs;
}

const thanhDanh = new Chicken('Thanh Danh', 68, 2);

console.log(thanhDanh);



//Mượn hàm (function borrowing), thêm ví dụ với arguments

function logger() {
    Array.prototype.forEach.call(arguments, item => {
        console.log(item);
    })

    // Thường là dùng dưới này
    const arr = [...arguments];
    console.log(arr);
}

logger(1, 2, 3, 4, 5)