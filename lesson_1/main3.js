/**
    ECMASript 6 (ES6) là gì?
    - ES6 là cách chúng ta thường nói chuyện giao tiếp như vậy cho nó nhanh
    - Nó được tạo ra để tiêu chuẩn hóa cho JS
    - 12 tính năng nổi bật của ES6
    1. Let, const
    2. Template Literals
    3. Multi-line String
    4. Arrow function
    5. Classes
    6. Default parameter values
    7. Destructuring
    8. Rest parameters
    9. Spraed
    10. Enhanced object literals
    11. Tagged template literal
    12. Modules
    13. Optional chaining (?.)

 */

/**

    Let & Const
    Hai từ khóa này tạo ra với mục đích là để thay để từ khóa var khi khai báo biến

    1. var / let, const: Scope (phạm vi truy cập), Hoisting(khái niệm đưa lên trên đầu)
    2. const / var, let: Assignment (gán lại giá trị cho các biến)

    Code block: if else, loop, {}, ....

    code thuần: sử dụng var
    Babel: Const, let
    - Khi định nghĩa biến và không gán lại biến là sử dụng Const
    - Khi cần gán lại giá trị cho biến là sử dụng Let
 */


/**
    Template Literals & Multi-line String


    // Template string
    const courseName = 'Javascript';
    const courseName2 = 'PHP';
    
    const description = `Course name: ${courseName} ${courseName2}`;
    console.log(description);


    // Multi-line
    const lines = `line 1
    line 2
    line 3
    `;
    console.log(lines);
 */


/**
    Arrow function (Hàm mũi tên)

    const logger = log => {
    console.log(log)
    }   
    logger('Message...');



    const sum = (a, b) => ({a: a, b: b});
    console.log(sum(2, 3)); 
    */
   

/**
    Classes


    // function Course(name, price){
    //     this.name = name;
    //     this.price = price;
    //     this.getName = function() {
    //          return this.name;
    //      }
    // }
    
    class Course{
        constructor(name, price){
            this.name = name;
            this.price = price;
        }
        getName() {
            return this.name;
        }
        getPrice() {
            return this.price;
        }
    
        run() {
            const isSuccess = false;
    
            if(...){
    
                isSuccess = true;
            }
        }
    }
    
    const phpCourse = new Course('PHP', 1000);
    const jsCourse = new Course('Javascript', 1200);
    
    console.log(phpCourse);
    console.log(jsCourse);
 */

/**
    Default parameter values (Định nghĩa ra giá trị mặc định của tham số)


    function logger(log, type = 'log'){
        console[type](log)
    }
    
    logger('Massage...')
 */

/**
    Enhanced object literals
    - Định nghĩa key: value cho object
    - Định nghĩa method cho object
    - Định nghĩa key cho object dưới dạng biến


    var fieldName = 'new-name';
    var fieldPrice = 'price';
    
    const course = {
        name: 'Javascript',
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000
    }
    
    console.log(course);
 */


/**
    Destructuring(Phân rã), Rest(là ba dấu chấm ...kết hợp với 1 tên bất kì)
    

    var courses = {
        name: 'Javascript',
        price: 1000,
        image: 'image-address', 
        children: {
            name: 'ReactJS'
        }
    };
    
    var {name: parentName, children: { name: childrenName }} = courses;
    
    console.log(parentName);
    console.log(childrenName);

    
    // Rest
    
    function logger({name, price, ...rest}){
     console.log(name);
     console.log(price);
     console.log(rest);
    }
    
    logger({
     name: 'Javascript',
     price: 1000,
     description: 'Description content'
    });
*/
   

/**
    Spread (toán tử giải) (Nó là toán tử ...)
    Khi rãi 3 chấm trước array hoặc object thì nó sẽ bỏ dấu ngoặc đằng trc hoặc đằng sau 


    // var array = ['Javascript', 'Ruby', 'PHP'];
    
    // var array2 = ['ReactJS', 'Dart'];
    
    // var array3 = [...array2, ...array];
    
    // console.log(array3)
    
    var array = ['Javascript', 'Ruby', 'PHP', 'ReactJS'];
    
    function logger(...rest){
        for(var i = 0; i<rest.length; i++){
            console.log(rest[i])
        }
    }
    
    logger(...array);
    
    // var object1 = {
    //     name: 'Javascript',
    // };
    
    // var object2 = {
    //     price: 1000,
    // };
    
    // var object3 = {
    //     ...object1,
    //     ...object2
    // };
    
    // console.log(object3);

 */

/**
    Tagged template literals ()


    function highlight([first, ...strings], ...values) {
        return values.reduce((acc, curr) =>
            [...acc, `<span>${curr}</span>`, strings.shift()],
            [first]
        ).join('');
    }
    
    // Đầu tiên lấy ra chuỗi học lập trình với initial value của reduce
    // Tiếp theo reduce sẽ lập qua mảng value lấy từng phần tử của value là Javascript
    // Khi lấy ra từ reduce lấy ra current value thì sẽ thêm thẻ <span>Javascript</span>
    
    // Học lập trình <span>Javascript</span> tại <span>F8</span>!
    var brand = 'F8';
    var course = 'Javascript';
    
    
    const html = highlight`Học lập trình ${course} tai ${brand}!`;
    
    document.querySelector('ul').innerHTML = html;
 */


/**
    Modules (nó là tư tưởng khi mình bóc tách thành phần nó sử lý 1 nghiệp vụ cụ thể ra một cái nơi riêng)
    -Import: nạp vào
    -Export: xuất ra

    */
// Này là import cái modules export default
import {logger2} from './logger/index.js'

// Này là import cái modules export
import * as constant from'./constant.js'


console.log(constant);

logger2('Test message...', constant.TYPE_WARN);

/**
    Optional chaining ( gồm 2 kí tự này ?.)
    - Sử dụng khi chung ta không thực sự chắn chắn cái key đó có tồn tại hay không
    
    -Nếu ta nghi ngờ :
    Trong object không có đối tượng
    Trong mảng không có đối tượng ở index đó
    Một hàm có hay không có => Thì lúc call đến 3 cái trên ta thêm toán tử ?. vào sau các đối tượng trên.

    const obj = {
        name: 'Alice',
        cat: {
            name: 'Dinah',
            cat2: {
                name: 'Dinah',
                cat3: {
                    name: 'Dinah'
                }
            }
        }
    };
    
    if(obj?.cat?.cat2?.cat3){
        console.log(obj.cat.cat2.cat3.name);
    }
 */


