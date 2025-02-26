
// Thuật ngữ Built-in : Phương thức 
/**
    Giới thiệu một số hàm Built-in 
    - Các phương thức này dùng để in ra kết quả bên tab console của trình duyệt
        1. Alert
        2. Console
        3. Confirm
        4. Prompt
        5. Set timeout
        6. Set interval
 */
// var fullName = 'Nguyen Thanh Danh'

// console.log(fullName)


//Cái này in ra dòng thông báo chọn OK hoặc Cancel
// confirm('Xac nhan ban du tuoi!')

//Cái này dùng để nhập input
// prompt('Xac nhan ban da du tuoi!')

//Tham số thứ nhất là truyền vào 1 function, tham số thứ 2 là truyền vào 1 khoảng thời gian, sau 1 khoảng thời gian chạy 1 lần
// setTimeout(function() { 
//     console.log('thong bao')
// }, 1000)


//Tham số truyền vào tương tự như setTimeout, khác 1 cái là setInterval sẽ thực thi liên tục sau 1 khoảng thời gian lặp đi lặp lại
// setInterval(function() {
//     console.log('Day la log' + Math.random())
// }, 1000)







/*
    Giới thiệu về toán tử trong Javascript
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical
    5. Toán tử chuỗi - String operator
*/




/**
    Toán tử số học - Arithmetic

    +   --> Cộng 
    -   --> Trừ 
    *   --> Nhân
    /   --> Chia
    **  --> Lũy thừa
    %   --> Chia lấy phần dư
    ++  --> Tăng lên 1 giá trị
    --  --> Giảm đi 1 giá trị


    // Toán tử ++ và --
    Hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng (giảm)
    Tiền tố sẽ tăng gia trị của biến lên 1 và trả về giá trị sau khi tăng (giảm)

    Ví dụ: 
    var a = 5

    console.log(a++)//5
    console.log(a)//6
    
    console.log(a--)//5
    console.log(a)//4

    console.log(++a)//6
    console.log(a)//6

    console.log(--a)//4
    console.log(a)//4
 */



/**
    Toán tử gán

    =
    +=
    -=
    *=
    /=
    **=

 */

/**
    Toán tử so sánh 1

    ==  --> Bằng
    !=  --> Không bằng
    >   --> Lớn hơn
    <   --> Nhỏ hơn
    >=  --> Lớn hơn hoặc bằng
    <=  --> Nhỏ hơn hoặc bằng

    Toán tử so sánh 2

    === --> Bằng
    !== --> Không bằng

 */

/**
    Toán tử logic

    &&  --> Và
    ||  --> Hoặc
    !   --> Phủ định

 */



/**

    Kiểu dữ liệu trong Javascript

    1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol

    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object

 */


/**
    Các loại Function

    1. Declaration Function
    VD:
    function declarationFunction() {
        console.log(declarationFunction)
    }


    2. Expresstion Function
    VD:
    var expresstionFuntion = function() {
        
    }

    setTimeout(function expresstionFunction() {
    VD:
    }, sau dấu phẩy này set thời gian)

    var myObject = { 
    
    function expresstionFunction() {
        type:"Fiat",
        model:"500",
        color:"white"
    }}  


    3. Arrow Function (Cái này ở khóa nâng cao mới học)
*/ 


// //Kiểm tra số chẵn lẻ: Viết hàm isEven(num) để kiểm tra xem số num có phải là số chẵn hay không.
// function isEven(num){
//     if(num % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isEven(2))
// console.log(isEven(3))


// //Tính giai thừa của một số: Viết hàm factorial(num) để tính giai thừa của số num.
// function factorial(num){
//     if(num === 0 && num === 1) return 1;
//     let result = 1;
//     for(let i = 1; i <= num; i++ ){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5))
// console.log(factorial(0))


// // Kiểm tra số nguyên tố
// function isPrime(num) {
//     if(num <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(num);i++ ){
//         if(num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(2))
// console.log(isPrime(6))




// //Kiểm tra số lớn nhất và nhỏ nhất trong mảng
// function findMinMax(arr) {
//     let max = arr[0];
//     let min = arr[0];
    
//     for(let i = 0 ; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         else if(arr[i] < min){
//             min = arr[i];
//         }
        
//     }  
//     return {max: max, min: min}
    
// }
// let array = [1, 4, 2, 6, -12, 10 , 13];
// let result = findMinMax(array);

// console.log(`Giá trị lớn nhất: ${result.max}`)
// console.log(`Giá trị nhỏ nhất: ${result.min}`)


// //Tính tổng các phần tử trong mảng
// function sum(arr){
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }
// let array2 = [1, 2, 3, 4, 5, 6];
// console.log(`Tổng các phần tử trong mảng: ${sum(array2)}`)

// //Sắp xếp mảng tăng dần
// function sort1(arr){
//     return arr.sort((a, b) => a - b)
// }

// console.log(sort1([4, 2, 9, 1, -5]))

// //Sắp xếp mảng giảm dần
// function sort2(arr){
//     return arr.sort((a, b) => b - a)
// }

// console.log(sort2([4, 2, 9, 1, -5]))
/**
 
    Các cách làm việc với chuỗi

    var myString = 'Học JS tại F8!' 

    1.Length (Đo độ dài của chuỗi)
    console.log(myString.length)


    2.Find index(Tìm vị trí của chuỗi)
    console.log(myString.indexOf('JS', tham số thứ 2))
    
    Vị trí của chuỗi cuối cùng
    console.log(myString.lastIndexOf('JS'))

    Tìm kiếm theo biểu thức chính quy
    console.log(myString.search('JS'))

    3.Cut string(Cắt chuỗi)
    console.log(myString.slice(4, 6)) //In ra JS

    4.Replace(Ghi đè)
    console.log(myString.replace('JS', 'Javascript')) // Ghi đè Javascript lên JS

    Sử dụng biểu thức chính quy thay thế nếu có nhìu chữ JS thành Javascript
    console.log(myString.replace(/JS/g, 'Javascript')) 


    5. Convert to upper case (Chuyển đổi tất cả các chuỗi thành chữ in hoa)
    console.log(myString.toUpperCase())
    
    6. Convert to lower case (Chuyển đổi tất cả các chuỗi thành chữ thường)
    console.log(myString.toLowerCase())

    7.Trim (Loại bỏ kí tự khoảng trắng thừa ở hai đầu)
    console.log(myString.trim())

    // Loại bỏ kí tự khoảng trắng ở giữa 
    console.log(myString.trim().replace(/\s+/g, ' ')) // 
    \s+ : tìm tất cả các khoảng trắng ( bao gồm khoảng trắng, tab, v.v.) xuất hiện một hoặc nhìu lần

    8.Split (Cắt 1 chuỗi thành 1 array)
    var languages = 'Javascript, PHP, Rupy'

    console.log(languages.split(', '))  //Dựa vào 1 điểm chung để cắt chuỗi

    9.Get a character by index (Lấy 1 kí tự theo vị trí của index )
    const myString = 'Thanh Danh'
    
    console.log(myString.charAt(0)) //In ra T


 */




// const cities = ['Ha Noi', 'Ho Chi Minh', 'Phu Yen'];
// //Thêm một thành phố mới vào cuối mảng, sau đó xóa thành phố đầu tiên trong mảng.
// console.log(cities.push('Da Nang'))
// console.log(cities.shift())
// console.log(cities)

// //Sử dụng vòng lặp for để in ra tất cả các thành phố trong mảng.\
// for(let i = 0; i < cities.length;i++){
//     console.log(cities[i])
// }

// //Kiểm tra xem thành phố "Đà Nẵng" có nằm trong mảng hay không.
// console.log(cities.includes('Da Nang'))

// //Đảo ngược thứ tự các phần tử trong mảng và in kết quả.
// console.log(cities.reverse())

// //Tạo 2 mảng, nối chúng lại với nhau và in ra mảng mới.
// let cities2 = ['Tuy An', ' Dong Xuan']
// console.log(cities.concat(cities2))

// //Sắp xếp mảng tên các thành phố theo thứ tự bảng chữ cái. 
// console.log(cities.sort())

// //Tìm giá trị lớn nhất trong một mảng số nguyên.
// function findMinMax(arr){
//     let min = arr[0];
//     let max = arr[0];

//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         else if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return {max: max , min: min}
// }
// let numbers = [2, 4, 8, 6, -10, 12, 9]
// let result = findMinMax(numbers);
// console.log(`So lon nhat: ${result.max}`)
// console.log(`So nho nhat: ${result.min}`)


// //Tạo một mảng chứa các số từ 1 đến 10, sau đó lọc các số chẵn và in ra mảng mới.
// function findEvenOdd(arr){
//     let even = [];
//     let odd = [];
    
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] % 2 === 0){
//             even.push(arr[i])
//         }
//         else{
//             odd.push(arr[i])
//         }
//     }
//     return {even: even, odd: odd}
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let ketQua = findEvenOdd(num)
// console.log(`Cac so chan: ${ketQua.even}`)
// console.log(`Cac so le: ${ketQua.odd}`)


/**
    Các cách làm việc với Array - Basic

    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ]


    1. To string (Dùng để chuyển từ Array thành kiểu string)
    console.log(languages.toString()) // in ra kiểu string

    2. Join (Dùng để biến Array thành 1 chuỗi giống như toString)
    console.log(languages.join(' - ')) // in ra là Javascript - PHP - Ruby 

    3. Pop (Xóa đi phần tử ở cuối mảng và trả về phần tử đã xóa, nếu như mảng trống rồi mà pop một lần nữa thì sẽ trả về undefined)
    console.log(languages.pop()) // in ra ["Javascript", "PHP"]

    console.log(languages) //in ra Ruby


    4. Push (Thêm một hoặc nhiều phần tử ở cuối mảng và trả về độ dài mới của mảng)
    console.log(languages.push('Dart', có thể thêm phần tử)) // in ra độ dài mới của mảng là 4

    console.log(languages) // in ra ["Javascript", "PHP", "Ruby", "Dart", "phần tử muốn thêm"]

    5. Shift (Xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa, nếu như mảng trống rồi mà shift một lần nữa thì sẽ trả về undefined)
    console.log(languages.shift()) //in ra ["PHP", "Ruby"]

    console.log(languages) //in ra Javascript
    
    
    6. Unshift (Thêm một hoặc nhiều phần tử ở đầu mảng và trả về độ dài mới của mảng)
    console.log(languages.unshift('Dart', 'có thể thêm nhiều phần tử')) // in ra độ dài mới của mảng là 4

    console.log(languages) //in ra ["phần tử muốn thêm", "Dart", "Javascript", "PHP", "Ruby"]
   
   
    7. Splicing (Có thể xóa, cắt và chèn phần tử mới vào mảng)

    language.splice(1, 0, 'Dart') // Tham số thứ 1 là phần tử đặt con trỏ, tham số thứ 2 là muốn xóa bao nhiêu phần tử ở sau đó
    //tham số thứ 3 là chèn thêm 1 element vào 1 vị trí ở ngay con trỏ

    console.log(languages)
    8. Concat (Giúp chúng ta nối 2 Array với nhau)
    var language2 = [
    'Dart',
    'Python'
    ]

    console.log(languages.concat(language2)) 


    9. Slicing (Dùng để cắt 1 vài hoặc toàn bộ element)

    console.log(languages.slice(1, 2)) //Tham số thứ 1 là vị trí bắt đầu và tham số thứ 2 là vị trí ngừng để cắt

    
    10. Reverse (Đảo ngược 1 mảng)

    console.log(languages.reverse()) // in ra ['Ruby', 'PHP', 'Javascript']

    11. Includes (Để xem chuỗi đó có được tìm thấy trong mảng hay không)

    console.log(languages.includes('Javascript')) // in ra true 
 */



/**
    Các cách làm việc với Array - methods
    //Tất cả phương thức dưới này đều có tham số truyền vào là 1 hàm

    var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
]



    1. forEach() // Sử dụng để duyệt qua từng phần tử của mảng
    
    courses.forEach(function(course, index) {
        console.log(index, course);
    })


    2. every() // Sử dụng để kiểm tra tất cả các phần tử thuộc 1 mảng phải thỏa mãn 1 điều kiện nào đó

    var isFree = courses.every(function(course, index) {
        return course.coin === 0;
    })

    console.log(isFree) // trả về False

    
    3. some() // ngược lại với every chỉ cần 1 điều kiện đúng thì sẽ trả về là đúng

    var isFree = courses.some(function(course, index) {
        return course.coin === 0;
    })

    console.log(isFree) // trả về True


    4. find() // Sử dụng để tìm kiếm tuy nhiên chỉ tìm ra 1 cái và trả về cái đó luôn

    var course = courses.find(function(course, index) {
        //Nếu hàm này return True thì sẽ lấy phần tử đó return lại phần tử đó
        return course.name === 'Ruby';
    })

    console.log(course) // in ra 1 mảng của phần tử 'Ruby'


    5. filter() // Giống như find tuy nhiên cài này tìm ra tất cả phần tử thỏa mãn

    var listCourse = courses.filter(function(course) {
        //Nếu hàm này return True thì sẽ lấy phần tử đó return lại phần tử đó
        return course.name === 'Ruby';
    })

    console.log(listCourse) // in ra nhìu mảng của phần tử 'Ruby' trùng nhau nếu có


    6. map() // Sử dụng để khi mình muốn thay đổi element trong Array

    //Bài toán là thêm chữ khóa học trước value của cái key name và thêm 1 cái coinText

    function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
        }
    }

    var newCourses = courses.map(courseHandler);

    console.log(newCourses); // Lúc này sẽ in ra những gì đã thêm cho tất cả các phần tử 


    7. reduce() // Sử dụng để khi nhận về 1 giá trị duy nhất sau khi tính toán và xử lý trên các phần tử trong 1 Array 

    // Biến lưu trữ 
    // Thực hiện việc lưu trữ

    function coinHandler(accumulator, currentValue, currentIndex, originArray) {

        var total = accumulator + currentValue.coin;

        console.table({
            'Lượt chạy': i,
            'Biến tích trữ: ': accumulator,
            'Giá khóa học: ': currentValue.coin,
            'Tích trữ được: ': total
        });

        return total;

    }

    var totalCoin = courses.reduce(coinHandler, 0); //initial value

    console.log(totalCoin);


 */

// const arr = [1, 2, 3, 4, 5, 6];

// //Tăng giá trị của từng phần tử trong mảng lên 1
// let newArr = arr.map(num => num + 1);
// console.log(newArr)

// //Lọc số chẵn từ mảng
// let newArr2 = arr.filter(even => even % 2 ===0)
// console.log(newArr2);

// //Tính tổng các phần tử trong mảng
// let newArr3 = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(newArr3);



// const words = ['apple', 'banana', 'cherry'];

// //Chuyển đổi mảng các chuỗi thành mảng độ dài của chúng
// let lengths = words.map(len => len.length);
// console.log(lengths)


// const num = [5, 11, 9, 14, 3];
// //Lọc các số lớn hơn 10
// let loc = num.filter(number => number > 10);
// console.log(loc)

// //Tính tích của các phần tử trong mảng
// let tinhTich = num.reduce((acc, curr) => acc * curr, 1);
// console.log(tinhTich)

// const people = [
//     {
//         name: 'John',
//         age: 28
//     },
//     {
//         name: 'Jane',
//         age: 22
//     },
//     {
//         name: 'Jack',
//         age: 30
//     }
// ]

// //Chuyển đổi mảng đối tượng thành mảng tên
// let arrTen = people.map(arr => arr.name);
// console.log(arrTen)

// //Lọc các đối tượng theo độ tuổi
// let doTuoi = people.filter(tuoi => tuoi.age >= 25);
// console.log(doTuoi)

// //Tính tổng tuổi của tất cả mọi người
// let tinhTong = people.reduce((acc, curr) => acc + curr.age, 0);
// console.log(tinhTong)

// const courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 7,
//         name: 'Javascript',
//         coin: 250
//     }
// ]

// let timTen = courses.filter(course => { 
//     return course.name === 'Ruby';
// })
// console.log(timTen)

// let layTen = courses.map(course => course.name);
// console.log(layTen)

// let tinhCoin = courses.reduce((acc, curr) => acc + curr.coin, 0);
// console.log(tinhCoin)

// let result = courses
//     .filter(course => course.coin > 0)
//     .map(course => course.name)
//     .reduce((acc, name) => acc ? acc + ', ' + name : name, '')
//     console.log(result)
    


// const depthArray = [1, 2, [3, 4], 5, 6,[7, 8, 9]];

// let platArray = depthArray.reduce((platOutput, total) => platOutput.concat(total), []);
// console.log(platArray)



// //Kết quả như này: { name: 'Thành Danh', age: 19 }
// function arrToObj(arr) {
//     let obj = arr.reduce((acc, item) => {
//         // item[0] là key, item[1] là value
//         acc[item[0]] = item[1];
//         return acc;
//     }, {});
//     return obj;
// }

// var array = [
//     ['name', 'Thành Danh'],
//     ['age', 19],
// ];

// console.log(arrToObj(array));




//Tạo một đối tượng person với các thuộc tính name, age, và city. Sau đó in ra giá trị của từng thuộc tính. 
// let person = {
//     name: 'Thanh Danh',
//     age: 19,
//     city: 'Tuy An'
// };
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)


// //Thêm thuộc tính country vào đối tượng person, sau đó xóa thuộc tính age.
// person.country = 'Viet Nam';
// delete person.city;
// console.log(person)

// //Dùng vòng lặp để duyệt qua tất cả các thuộc tính và in ra giá trị của chúng.
// for(let key in person){
//     console.log(key + ':' +person[key])
// }


// let myCity = 'address';
// let student = {
//     name: 'Thanh Danh',
//     mssv: '054205010013',
//     class: 'CN2301CLCB',
//     [myCity]: 'Phu Yen, VN',
//     getName: function(){
//         return `${this.name} ${this.mssv} ${this.class}`;
//     }
// };
// console.log(student)
// console.log(student.getName())

// for(let key in student){
//     console.log(key + ': ' + student[key])
// }

// student['my-sdt'] = '0819305289';
// console.log(student)

// delete student.mssv;
// delete student.class;
// console.log(student)



/**
    Object trong javascript

    ***Tạo ra 1 Object 

    //  Bên trong object gồm những cái key và value ngăn cách các cặp với nhau bằng 1 giấu phẩy(bên trái key bên phải là value)\
    // Để hợp lý hóa cái việc đặt key vd như là full-name thì mình sẽ đặt nó thành 1 chuỗi 'full-name'
    var myInfo = {
        name: 'Thanh Danh',
        age: 18,
        address: 'Phu Yen, VN'
    }

    console.log(myInfo)

    *** Thêm 1 cặp key và value vào trong object sau khi đã được tạo
    // Sử dụng object myInfo sử dụng dấu chấm và đặt 1 cái key name mới 

    myInfo.email = 'danhnt2444@gmail.com'
    //Nếu muốn đặt được các kí tự vi phạm nguyên tắc đặt tên chỉ cần sử dụng dấu ngoặc vuông sau đó truyền key name dưới dạng string
    // VD: myInfo['my-email'] = 'danhnt2444@gmail.com'

    *** Cách để lấy key ra ngoài
    //Chúng ta cần phải biết cái key là gì 
    VD: console.log(myInfo.name)    
    // Hoặc là truyền key dưới dạng string là console.log(myInfo['name'])
    // Cách truyền dưới dạng string này có thể làm trong trường hợp này

    VD: var myKey = 'address'
    console.log(myInfo[myKey]) // Dòng này nó sẽ in ra giá trị đó là Phu Yen, VN


    *** Định nghĩa 1 key mới vào object bằng 1 biến
    //Tạo ra 1 biến 

    var emailKey = 'email'
    //Bên trong object ta viết thêm
    var myInfo = {
            name: 'Thanh Danh',
            age: 18,
            address: 'Phu Yen, VN',
            [emailKey]: 'danhnt2444@gmail.com'
        }
    
    console.log(myInfo) // lúc này cái key mới đã được tạo và in ra


    *** Xóa đi 1 cặp key value trong object

    delete myInfo.age;
    delete myInfo.address;
    console.log(myInfo) // lúc này cái cặp key value của age và address đã được xóa

    *** Lưu trữ value là 1 function

     var myInfo = {
            name: 'Thanh Danh',
            age: 18,
            address: 'Phu Yen, VN'
            [emailkey]: 'danhnt2444@gmail.com'
            getName: function() {
                return this.name
            }
        }
    
    //Để gọi value trong function ta làm như sau:
    console.log(myInfo.getName()) // lúc này sẽ in ra cái value của key name trong function 


    *** Cách để gọi key cho đúng
    //Trường hợp nó là 1 function --> Phương thức / methods
    //Trường hợp còn lại others --> Thuộc tính / property    
 */

// function Book(title, auther, year) {
//     this.title = title;
//     this.auther = auther;
//     this.year = year;

//     this.getSummary = function() {
//         return `Cuốn sách: ${this.title}, tác giả: ${auther}, năm ${this.year}`
//     }
// }    

// let book1 = new Book('Cuộc đời anh Tường', 'Anh Tường', 2004);
// let book2 = new Book('Cuộc đời em Danh', 'Thành Danh', 2005);

// Book.prototype.className2 = 'CN22CLCC'

// Book.prototype.className = 'CN2301CLCB'
// console.log(book2.auther + ' hoc lop ' + book2.className)
// console.log(book1.auther + ' hoc lop ' + book1.className2)


// console.log(book1.getSummary())
// console.log(book2.getSummary())

// book1.desc = 'Của ảnh dỏm òm';
// book2.desc = 'Của tui mới xịn';

// console.log(book1)
// console.log(book2)

// book1.editDecs = function(newDesc) {
//     this.desc = newDesc;
// }

// book1.editDecs('Nó dở như chưa từng được dở')
// console.log(book1.title + ', ' + book1.desc)



/**
    Object constructor (Xây dựng đối tượng)
    //Quy ước đặt tên chung là viết hoa chữ cái đầu của tên object contructor
    //String, Array, Number, Date,... chính là những object contructor

    //Tạo 1 object contructor

    function User(firstName, lastName, avatar) {
        this.firstName = firstName
        this.lastName = lastName
        this.avatar = avatar

        this.getName = function() {
            return `${firstName} ${lastName}`
        }
    }

    //Khởi tạo ra 1 đối tượng
    var auther = new User('Son', 'Dang', 'Avatar')
    var user = new User('Danh', 'Thanh', 'Avatar')

    //Thêm value mới vào trong object contructor
    auther.title = 'Chia se dao tai F8'
    user.comment = 'Comment dao tai F8' 

    console.log(auther)
    console.log(user)

 */



/**
    Object prototype - basic 
    1. Prototype là gì: nguyên mẫu để tạo nên 1 đối tượng
    // Object contructor được coi là bản thiết kế của ngôi nhà còn object prototype là những nguyên liệu để tạo nên cái ngôi nhà
    // Object prototype là những cái cấu thành lên những đối tượng của 1 hàm tạo
    // Để có thể cấu thành lên 1 đối tượng ta cần có những thuộc tính và phương thức 
    // Object contructor là định nghĩa bên trong hàm tạo còn khi sử dụng object prototype có thể add nó sau khi hàm tạo được tạo ra


    function User(firstName, lastName, avatar) {
        this.firstName = firstName
        this.lastName = lastName
        this.avatar = avatar

        this.getName = function() {
            return `${firstName} ${lastName}`
        }
    }

    //Các phương thức thuộc tính của prototype sẽ nằm trong __proto__
    //Thêm thuộc tính bằng object prototype
    User.prototype.className = 'F8'

    //Thêm 1 phương thức bằng object prototype
    User.prototype.getClassName = function() {
        return this.className
    }

    var user = new User('Son', 'Dang', 'Avatar')
    var user2 = new User('Danh', 'Thanh', 'Avatar')

    console.log(user.className) // in ra F8
    console.log(user2.getClassName()) // lúc này return lại cho className nên vẫn in ra F8

 */


/**
    Đối tượng Date

    var date = new Date() 

    console.log(date) // Mặc dù nó là đối tượng nhưng nếu in trực tiếp nó ra nó sẽ in ra 1 chuỗi string


    //Các cách để gọi ngày tháng năm

    var date = new Date() 

    var year = date.getFullYear();
    //getMonth nó sẽ trả về giá trị 0 - 11 cho nên phải cộng thêm 1
    var month = date.getMonth() + 1;
    var day = date.getDate();

    console.log(`${day}/${month}/${year}`) // in ra ngày / tháng / năm
 */

/*
    Math object (Math này được js định nghĩa sẵn rồi và Math không phải là 1 object contructor)

    - Math.PI // trả về dãy số PI chi tiết

    - Math.round() // Làm tròn số đưa vào số thập phân làm tròn thành số nguyên

    - Math.abs() // Trả về giá trị tuyệt đối

    - Math.ceil() // Làm tròn trên cho dù phẩy nhỏ đến mấy vẫn làm tròn trên

    - Math.floor() // Làm tròn dưới cho dù phẩy cao đến mấy vẫn làm tròn dưới 

    - Math.random() // Trả về 1 dãy số nhỏ hơn 1 ngẫu nhiên

    - Math.min() // Lấy ra số nhỏ nhất 

    - Math.max() // Lấy ra số lớn nhất

    //VD random trong thực tế
    var random = Math.floor(Math.random() * 100)

    var bonus = [
        '10 coin',
        '20 coin',
        '30 coin',
        '40 coin',
        '50 coin'
    ]

    console.log(bonus[random]) // lúc này sẽ in ra giá trị ngẫu nhiên của 1 trong 5 mảng trên và tỉ lệ của chúng là bằng nhau



    //VD về cài tỉ lệ làm game khi đập đá cường hóa thành công
    var random = Math.floor(Math.random() * 100)

    // Cho tỉ lệ random từ 0 - 5 có nghĩa là tỉ lệ chỉ có 5% nếu mà random dô được dãy số ngẫu nhiên đó thì sẽ in ra kết quả
    if(random < 5) {
        console.log('Cường hóa thành công')
    }


    //Bài toán hàm nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng
    function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
    }
    //Giải thích: là trả về 1 arr trước tiên là hàm random sẽ random những số nhỏ hơn 1 từ 0 - 0.99 và nhân với độ dài array của mình tạo ra bên
    ngoài Vd như array là có 3 giá trị thì 0 nhân với 3 bằng 0 hàm floor sẽ làm tròn xuống là vẫn bằng 0, 0.99 nhân với 3 bằng 2.97 làm tròn xuống 
    bằng 2 thì ta có được 3 giá trị đó là 0, 1, 2 theo thứ tự của mảng. Vậy khi random hàm sẽ trả về 1 trong 3 giá trị bên trong mảng đó


*/

/**
    Câu lệnh rẽ nhánh

    - Khi nào cần so sánh tính đúng sai thì sử dụng If else
    - Khi mà biết trước giá trị rồi thì sử dụng switch case với điều kiện là 3 case trở lên

 */


/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng 
    2. for/in - Lặp qua các key của đối tượng (có thể duyệt qua object, array, string)
    3. for/of - Lặp qua value của đối tượng (Vòng for này không sử dụng được với object)
    // Vòng for này dùng trong trường hợp là lấy ra phần tử của 1 mảng hoặc từng chữ cái trong 1 chuỗi
    4. while - Lặp khi điều kiện đúng (Lặp cho đến khi điều kiện nào đó không còn đúng nữa)
    5. do/while - Lăp ít nhất 1 lần, sau đó lặp khi điều kiện đúng


    //Khi nào dùng vòng lặp for: Khi cần lặp qua một mảng, hoặc chạy một vòng lặp với số lần cụ thể đã biết trước.
    //Khi nào dùng vòng lặp while: Khi điều kiện dừng vòng lặp dựa vào một sự kiện xảy ra trong quá trình thực hiện.    

    
 */

// let orders =     
// [
//     {
//         name: 'Khoa hoc HTML - CSS pro',
//         price: 250000
//     },
//     {
//         name: 'Khoa hoc Javascript pro',
//         price: 300000
//     },
//     {
//         name: 'Khoa hoc React pro',
//         price: 350000
//     }
// ]

// function getTotal(orders){
//     let result = 0;
//     for(let i = 0; i < orders.length; i++){
//         result += orders[i].price;
//     }
//     return result;
// }

// console.log(getTotal(orders));

// function run(object){
//     let arr = [];
//     for(let key in object){
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return arr;
// }
// console.log(run({
//     name: 'Nguyễn Thành Danh',
//     age: 19
// }))

// let myObject = [
//     {
//         name: 'Nguyen Thanh Danh',
//         price: 500000
//     },
//     {
//         name: 'Nguyen Anh Tuong',
//         price: 500000
//     },
//     {
//         name: 'Nguyen Ngoc Duy',
//         price: 500000
//     }
// ]

// function getTotal(myObject) {
//     let result = 0;
//     for(let i = 0; i < myObject.length; i++){
//         result += myObject[i].price;
//     }
//     return result;
// }

// console.log(`Tong so tien trong tk cua 3 thang la: ${getTotal(myObject)} VND`);


// function run(object){
//     let arr = [];
//     for(let key in object){
//         arr.push(`Thuoc tinh ${key} co gia tri la ${object[key]}`);
//     }
//     return arr.join(', ');
// }

// let myInfo = {
//     name: 'Nguyen Thanh Danh',
//     age: 19
// }

// console.log(run(myInfo))



/**
    Đệ quy - Đệ quy là 1 cái hàm gọi lại chính nó

    Ví dụ cùng 1 bài toán A sử dụng vòng lặp và đệ quy là tốn cái gì
    A -> Loop -> CPU
    A -> De quy -> RAM --> Trong thực tế hạn chế dùng cái này(cái này chỉ dùng để giải bài toán)


    Vấn đề của đệ quy:
    1. Xác định được điểm dừng
    2. Logic handle => Tạo ra điểm dừng

 */

/**
    Callback

    - Callback là gì?
    // Là hàm (function) được truyền qua đối số khi gọi hàm khác 

    // 1. Là hàm
    // 2. Được truyền qua đối số 
    // 3. Được gọi lại (trong hàm nhận đối số)


    function myFunction(param) {
        if(typeof param === 'function'){
            param('Học lập trình');
        }
    }
    
    function myCallback(value) {
        console.log('Value: ' + value);
    }   
    
    myFunction(myCallback);

    
    */

    // forEach, find, filter, some, every, reduce, ...

   
//    let courses = [
//        'Javascript',
//        'PHP',
//        'Ruby'
//    ];
   
//    Array.prototype.map2 = function(callback) {
//        let output = [];
//        for(let i = 0; i < this.length; i++) {
//            let result = callback(this[i], i);
//            output.push(result);
//         }
//         return output;
//     }; 
    
    
//     let htmls = courses.map2(function(course) {
//         return `<h2>${course}</h2>`;
//     });
    
//     console.log(htmls.join(''));
    


// let htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`    
// });

// console.log(htmls.join(''));



// hasOwnProperty (Dùng để kiểm tra xem index có phải là nhưng thuộc tính và phương thức gần nhất hay không)

    // let courses = [
    //        'Javascript',
    //        'PHP',
    //        'Ruby'
    //    ];

// Array.prototype.forEach2 = function(callback) {
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }

// // let courses = new Array(100);

// courses.push('Javascript', 'Ruby')

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })




// Array.prototype.filter2 = function(callback) {
//     let output = [];
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//             let result = callback(this[index], index, this);
//             if(result){
//                 output.push(this[index])
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         price: 680
//     },
//     {
//         name: 'PHP',
//         price: 860
//     },
//     {
//         name: 'Ruby',
//         price: 980
//     }
// ];


// let filterCourses = courses.filter2((course, index, array) => {
//     return course.price > 700;
// })

// console.log(filterCourses);


// some (Cho mình biết tối thiểu có 1 phần tử nào trong mảng thỏa mãn điều kiện và trả về kết quả true hoặc false)

// Array.prototype.some2 = function(callback){
//     let output = false;
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//             let results = callback(this[index], index, this);
//             if(results){
//                 output = true;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         price: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         price: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         price: 980,
//         isFinish: false,
//     }
// ];

// let result = courses.some2((course, index, array) => {
//     return course.isFinish;
// });

// console.log(result)



// every: true / false (ngược lại với some kiểm tra tất cả các phần tử trong mảng thỏa mãn điều kiện thì trả về true)

// Array.prototype.every2 = function(callback){
//     let output = true;
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//             let results = callback(this[index], index, this)
//             if(!results){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         price: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         price: 860,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         price: 980,
//         isFinish: true,
//     }
// ];

// let result = courses.every2((course, index, array) => {
//     return course.isFinish;
// });

// console.log(result)

