/*
    Từ khóa this trong JS đề cập đến đối tượng mà nó thuộc về

    *Đặc tính:
    1. Trong một phương thức, this tham chiếu tới đối tượng truy cập
    phương thức (đối tượng trước dấu .)
    2. Đứng ngoài phương thức, this than chiếu tới đối tượng global



    *Lưu ý: 
    - this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
    - this trong một hàm là undefined khi ở strict mode
    - Các phương thức bind(), call(), apply() có thể tham chiếu
    this tới đối tượng khác 
*/


const iPhone7 = {
    // Để mô tả thông tin của 1 đối tượng như tên, màu sắc, kích thước,...
    // Thuộc tính - Property
    name: 'IPhone 7',
    color: 'Pink',
    weight: 300,


    // Để mô tả hành động của 1 đối tượng, sẽ là 1 hàm và chứa động từ trong đó
    // Phương thức - Method
    takePhoto() {
        console.log('Take a photo')
    },
    objChild:{
        name: 'Object child',
        methodChild() {
            console.log(this)
        }
    }

}

iPhone7.objChild.methodChild();


// Khái niệm hàm tạo

function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
}

// Tạo prototype này thay vì tạo this.run = function() {} trong hàm tạo
Car.prototype.run = function() {
    // Context

    //this trong hàm test này là của test nên là trong hàm này khong có giá trị
    // function test() { 
    //     console.log('Running...', this);
    // }

    //Tuy nhiên trong arrow func không có context nên là nó sẽ lấy this ở phạm vi bên ngoài ở cái hàm gần nhất chứa nó 
    const test = () => {
        console.log('Running...', this); 
    }
    test();
}
// Chú ý: mỗi function trong Js luôn có 1 ngữ cảnh để chạy 

//this ở trên đại diện cho đối tượng được tạo ở dưới này là mercedesS450
const mercedesS450 = new Car('Mercedes S450', 'black', 1600);

console.log(mercedesS450.run());
 


// Vi du this trong DOM:
const btn = document.querySelector('button')

btn.onclick = function() {
    console.log(this)
}


// Trường hợp ngoại lệ: this đứng ngoài phương thức 

"use strict" //Lưu ý: trong strict mode nó không chấp nhận trường hợp này
// nó sẽ trả ra là undefined

function myFunc(){
    console.log(this)
}

myFunc();