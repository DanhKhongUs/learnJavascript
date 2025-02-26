/**
    - IIFE -> Sử dụng nó khi muốn private, nhất là khi viết thư viện
    khi muốn đảm bảo tính toàn vẹn của dữ liệu

*/
// IIFE trông như nào
(function() {
    console.log('Now')
})()



// Dùng dấu ; trước IIFE
let fullName = 'Thanh Danh'

;(function() {
    console.log('FullName: ', fullName);
})()



//IIFE là hàm "private" -> Riêng tư
let i = 0

;(function myFunc() {
    i++;
    console.log(i);
    if(i < 10){
        myFunc();
    }

})()



//Sử dụng IIFE khi nào? -> IIFE không có tính sử dụng lại nên không nhất thiệt phải đặt tên
// Sử dụng bên trong phạm vi cục bộ 
;(function() {
    let fullName = 'Thanh Danh'
})()
// console.log(fullName); -> không lấy được fullName trong IIFE 



//Cách tạo ra một IIFE
;(function() {
    let fullName = 'THANH DANH'
    console.log(fullName);
})()



//Ví dụ sử dụng IIFE
const app = (function() {
    // Car nay la private
    const cars = []

    return{
        get(index){
            return cars[index]
        },
        add(car) {
            this.cars.push(car)
        },
        edit(car){
            this.cars[index] = car
        },
        delete(index){
            this.cars.splice(index, 1)
        }
    }
})()



let x = {}
let y = {}
let z = x


console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
