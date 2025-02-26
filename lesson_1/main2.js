/**
    HTML DOM
    DOM là (Document Object Model) mô hình tài liệu được thể hiện dưới dạng đối tượng
    
    DOM có 3 thành phần
    1. Element
    2. Attribute
    3. Text

    ----------------------

    Javascript: Browser(Trinh Duyet)  |  Server (Node JS)

    API: Application programming interface


    Browser: HTML -> DOM -> DOM API (WEB API)


    Để truy xuất vào 3 thành phần của DOM là luôn luôn đi qua document

    document.write('HELLO WORLD!')

 */

/**
    Get element methods

    1. Element: ID, class, tag name, CSS selector, HTML collection 
    //ID, class, CSS selector là những trường hợp dùng nhiều nhất
    2. Attribute
    3. Text

 */

// // ID
// let headingNode = document.getElementById('heading');

// console.log({
//     element: headingNode
// });


// // Class
// let headingNodes = document.getElementsByClassName('header');

// console.log(headingNodes)


// // tag name

// let headingNode2 = document.getElementsByTagName('p')

// console.log(headingNode2)


// //CSS selector

// let headingNode3 = document.querySelector('.heading2');
// console.log(headingNode3)

// let headingNode4 = document.querySelector('.box .heading3');
// console.log(headingNode4)


// let headingNode5 = document.querySelector('.box .heading3:nth-child(2)');
// console.log(headingNode5)

// let headingNode6 = document.querySelectorAll('.box .heading3');
// console.log(headingNode6)
// console.log(headingNode6[0])



// //HTML collection

// console.log(document.forms['form-1'])
// console.log(document.forms.testForm)

// console.log(document.anchors);




// Kiến thức mở rộng

// let listItemNodes = document.querySelectorAll('.box1 li')

// console.log(listItemNodes)


// let boxNode = document.querySelector('.box1')

//Công việc 1: Sử dụng tới 'boxNode'
// console.log(boxNode);

//Công việc 2: sử dụng tới các li elements là con của 'box'
// console.log(boxNode.querySelectorAll('li'))
// console.log(boxNode.getElementsByTagName('p'))


/**
    Ôn lại kiến thức cũ

    1. getElementById (cái này trả về trực tiếp element)
    2. getElementsByClassName
    3. getElementsByTagName
    4. querySelector (cái này trả về trực tiếp element)
    5. querySelectorAll

    6. HTML colecction

    7. document.write

    element là khi mình console.log nó ra mà mình thấy cái element thì đó là element
 */



/**
    DOM Attribute 
    Attribute là 1 nhánh của element


    let headingElement = document.querySelector('h1')
    
    headingElement.id = 'heading'
    // headingElement.className = 'heading'
    headingElement.title = 'Heading'
    
    headingElement.setAttribute('data-1', 'heading2')
    
    console.log(headingElement.getAttribute('class'))
    console.log(headingElement.getAttribute('title'))
 */


/**
    innerText (là thuộc tính của element node) vs textContent (là thuộc tính tồn tại trên element node và text node) Property

    - innerText khi sử dụng geter để lấy ra giá trị thì cái nội dung lấy được giống như nội dung có trên trình duyệt
    
    - textContent thì sẽ trả về nội dung textNode thật của nó nằm trong cái element

    - geter là công cụ hỗ trợ giúp mình lấy ra 

    - seter là công cụ để giúp mình có thể thay đổi nội dung 1 thuộc tính của 1 đối tượng

    let headingElement = document.querySelector('.heading');
    
    console.log(headingElement.innerText)  // Đây là 1 geter
    console.log(headingElement.textContent)
    
    headingElement.innerText = 'New heading'; // đây là 1 seter
    headingElement.textContent = 'New heading';
 */


/**
    innerHTML vs outerHTML Property

    - innerHTML có thể thêm element node vào 1 element khác, thêm 1 textNode vào trong element, thêm 1 attribute node vào trong element

    let boxElement = document.querySelector('.box');
    
    boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>';
    
    console.log(boxElement.innerHTML);
    
    
    boxElement.outerHTML = '<span>Test</span>'
    console.log(boxElement.outerHTML);


    
    //Bài tập kết hợp với phương thức map và join
    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
    
    function render(courses) {
        let ulElement = document.querySelector('ul');
        let result = courses.map(course => {
            return `<li>${course}</li>`
        })
        
    ulElement.innerHTML = result.join('');
    }
    
    render(courses)
    */



/**
    Node properties (Cách để tự học được các thuộc tính phương thức còn lại của những node mà chúng ta đã được học)

    Các thuộc tính cần chú ý:
    1. attributes (Trả lại 1 đối tượng là NameNodeMap, là thuộc tính của elementNode)
    2. childElementCount (Trả về số lượng phần tử con là elementNode bên trong element)
    3. childNodes (Là những node con bao gồm textNode và elementNode)
    4. children (Trả về 1 HTML collection giống array chứa element node bên trong)
    5. classList (Giúp quản lý attribute class của 1 element, thêm, bớt, kiểm tra có hay không,...)
    6. firstChild (Lấy ra cái node đầu tiên)
    7. firstElementChild (Chỉ là thẻ element đầu tiên)
    8. nodeType (Kiểm tra xem thử nó có phải là element node hay không)
    9. offsetHeight (Là kích thước chiều dọc)
    10. offsetWidth (Là kích thước chiều ngang)
    11. offsetTop/Right/Bottom/Left (Là vị trí)
    12. offsetParent (Được xem là nằm trong thằng cha nào)
    13. clientHeight/Width (Chiều cao và chiều rộng của element)

    let boxElement = document.querySelector('.box');
    
    console.log([boxElement]);
 */


/**
    DOM style


    VD:
    // background-position (là cách viết của CSS)
    // backgroundPosition (là cách viết của JS, camelCase) 
    
    let boxElement = document.querySelector('.box');
        
    // boxElement.style.width = '100px';
    // boxElement.style.height = '100px';
    // boxElement.style.backgroundColor = 'red'
    
    
    // Cách viết ngắn gọn hơn
    // Cách này bth mục đích chính là thêm CSS chứ không phải là CSS chính cho đối tượng
    
    
    Object.assign(boxElement.style, {
        width: '200px',
        height: '100px',
        backgroundColor: 'green'
    });
    
    console.log(boxElement.style.backgroundColor);
 */


/**
    ClassList property
    // Chỉ có thể truy cập vào thuộc tính này khi lấy ra được element node

    1. add (Thêm class vào element)
    2. contains (Kiểm tra class có nằm trong element hay không)
    3. remove (Xóa bỏ class khỏi element)
    4. toggle (Nếu có class thì xóa, còn không có class thì sẽ thêm class vào element)

    
    let boxElement = document.querySelector('.box');
    
    console.log(boxElement.classList);
    
    boxElement.classList.add('red', 'blue');
    
    console.log(boxElement.classList.contains('red'));
    
    
    setTimeout(() => {
        boxElement.classList.remove('blue')
    
    }, 3000);
    
    setInterval(() => {
        boxElement.classList.toggle('blue')
    }, 1000);


    //Bài tập tào lao
    let boxElement = document.querySelectorAll('.box');
    
    boxElement.forEach(element => {
        return setInterval(() => {
            element.classList.toggle('red')
        }, 1000);
    });

    */    



/*
    DOM events

    1. Attribute events (Cách để lắng nghe sự kiện diễn ra những hành vi của người dùng bằng cách sử dụng attribute)
    - Là viết bên file HTML
      
    2. Assign event using the element node (Sử dụng element node để gán sự kiện)
    - Viết bên file JS (Đa phần là viết bên này)
       

    // Assign event using the element node
 //    let h1Element = document.querySelector('.heading');
    // e chính là mouse event
 //    h1Element.onclick = function(e) {
 //        console.log(e.target);
 //    }
    
    let h1Elements = document.querySelectorAll('.heading');
    for(let i = 0 ; i < h1Elements.length; i++){
        h1Elements[i].onclick = function(e){
            console.log(e.target);
        }
    }
    
    */


// Bài tập DOM event

// let btnElement = document.querySelector('button');

// btnElement.style.cursor = 'pointer'
// btnElement.onmouseover = function() {
//     this.style.color = '#fff';
// }
// btnElement.onmouseout = function() {
//     this.style.color = '#000';
// }

// btnElement.onclick = (e) =>{
//     console.log(e.target)
// }


/**
    DOM events example 
    //Sử dụng DOM event trên bàn phím

    1. Input / select
    2. Keyup / down (Các phương thức này dùng để thao tác bàn phím)


 */

//Input / select
// let inputText = document.querySelector('input[type="text"]');

// inputText.onchange = function(e) {
//     console.log(e.target.value);
// }  


// let inputCheckbox = document.querySelector('input[type="checkbox"]');

// inputCheckbox.onchange = function(e) {
//     // console.log(e.target.checked)
//     if(e.target.checked){
//         console.log('Lum no!')
//     }
//     else{
//         console.log('Tha cho no !')
//     }
// }


// let selectElement = document.getElementById('selectElement');

// selectElement.onchange = function(e) {
//     switch(e.target.value){
//         case '1':
//             console.log('Cai nay re nhat');
//             break;
//         case '2':
//             console.log('Cai nay re nhi');
//             break;
//         case '3': 
//             console.log('Cai nay mac nhat');
//             break;
//     }
// }



//Keyup / down

// let inputElement = document.querySelector('.text');

// Khi bấm phím và sau khi nhất phím lên thì mới lọt vào keyup
// inputElement.onkeyup = function(e) {
//     console.log(e.target.value);
// }


// Cái này sẽ nhận value chậm đi 1 cái
// inputElement.onkeydown = function(e) {
//     console.log(e.target.value);
// }

//Bài tập tào lao
// inputElement.onkeyup = function(e) {
//     console.log(e.which);

//     switch(e.which){
//         case 27:
//             console.log('Exit')
//             break;
//     }
// }


/**
    DOM events

    1. preventDefault (Sử dụng để loại bỏ hành vi mặc định của trình duyệt trên thẻ HTML)
    2. stopPropagation (Loại bỏ sự kiện nổi bọt)


 */

// let aELement = document.querySelectorAll('a');

// for(let i = 0; i < aELement.length ; i++){
//     aELement[i].onclick = function(e) {
        
//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }

//     }
// }




// let ulElement = document.querySelector('ul')

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target);
// }


// Ví dụ stopPropagation

// document.querySelector('div').onclick = function() {
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!')
// }



/**
    1. DOM Events / Event listener
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best Practices
    9. Mistakes
    10. Performance


    // 1. Sử lý nhiều việc khi 1 event xảy ra
    // 2. Lắng nghe / Hủy bỏ lắng nghe


 */
// DOM event (Sử dụng trong những trường hợp đơn giản là muốn lắng nghe sự kiện nào đó và không muốn gở bỏ nó đi)
// Event listener (Sử dụng trong trường hợp code dài dòng phức tạp hoặc sử dụng trong 1 sự kiện diễn ra và muốn hủy bỏ cái việc lắng nghe sau khoảng thời gian nào đó)
// let btn = document.getElementById('btn');


// function viec1() {
//     console.log('Viec 1')
// }
// function viec2() {
//     console.log('Viec 2')
// }
// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function(){
//     btn.removeEventListener('click', viec1)
// }, 3000)


/**
    JSON

    JSON là gì?
    - JSON là một định dạng trao đổi dữ liệu (chuỗi)
    - JSON được viết tắt từ JavaScript Object Notation
    Nó là định dạng dữ liệu được JS phát kiến ra
    - JSON: Number, Boolean, String, Null, Array, Object (Nếu truyền function hoặc class vào trong thì sẽ không hiện được)

    - Thao tác mã hóa (Encode) / Thao tác giải mã (decode)
    // Thao tác dưới này là của JSON
    - Stringify (Chuyển đổi sang kiểu dữ liệu, bảng mã khác): Từ kiểu dữ liệu Javascript sang JSON
    - Parse (Từ bảng mã dịch ngược lại): Từ JSON sang Javascript types

    
 */

// VD về parse
// 1 chuỗi JSON thể hiện 1 kiểu dữ liệu
// let json = '["Javascript", "PHP"]';
// let json = '{"name": "Thanh Danh", "age":18}';

// let object = JSON.parse(json)
// for(let i in object){
//     console.log(i + ': '+ object[i]);
// }

// console.log(object);


// VD về stringify

// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]))



//Tạo một đối tượng JSON cho sinh viên và chuyển thành chuỗi JSON.
// va Chuyển chuỗi JSON thành đối tượng JavaScript và truy xuất thuộc tính.

// let json = {
//     ten: "Nguyen Thanh Danh",
//     tuoi: 19,
//     diemTrungBinh: 8.5
// };
// //Từ object trên chuyển thành JSON
// let json1 = JSON.stringify(json)
// console.log(json1)

// // Từ json1 lấy dữ liệu ở trên để in ra giá trị là tên
// let json2 = JSON.parse(json1);
// console.log(json2.ten);



//BT1: Tạo chuỗi JSON chứa danh sách sinh viên và chuyển thành mảng đối tượng.
// va Tìm sinh viên có điểm trung bình cao nhất.
// let danhSachSinhVienJSON = `[
//     {"ten": "Nguyen Van A", "tuoi": 20, "diemTB": 8.5},
//     {"ten": "Le Thi B", "tuoi": 21, "diemTB": 9.0},
//     {"ten": "Tran Van C", "tuoi": 22, "diemTB": 7.5}
// ]`;

// //Chuyển từ JSON thành object
// let svJSON = JSON.parse(danhSachSinhVienJSON);
// console.log(svJSON);

// //Từ object đã chuuyển ở trên sử dụng phương thức reduce để tìm ra điểmTB cao nhất
// let svGioi = svJSON.reduce((max, sv) =>{
//     return sv.diemTB > max.diemTB ? sv:max;
// })
// console.log(svGioi);



// //BT2: Tìm sản phẩm có giá cao nhất từ chuỗi JSON.
// let danhSachSanPhamJSON = `[
//     {"ten": "San pham A", "gia": 50000, "tonKho": 10},
//     {"ten": "San pham B", "gia": 75000, "tonKho": 5},
//     {"ten": "San pham C", "gia": 120000, "tonKho": 2}
// ]`;

// let dsJSON = JSON.parse(danhSachSanPhamJSON);

// let dsObj = dsJSON.reduce((max, sp) => {
//     return sp.gia > max.gia ? sp : max;
// })

// console.log(dsObj.ten);


// //BT3: Thêm sản phẩm mới vào giỏ hàng và chuyển thành chuỗi JSON.

// let gioHang = {
//     sanPham: [
//         {ten: "San pham A", soLuong: 2},
//         {ten: "San pham B", soLuong: 1}
//     ]
// };

// function themSanPham(gioHangThem, sanPhamMoi){
//     gioHangThem.sanPham.push(sanPhamMoi);
//     return JSON.stringify(gioHang);
// }

// let sanPhamMoi = {
//     ten: "San Pham C",
//     soLuong: 3
// };

// let gioHangJSON = themSanPham(gioHang, sanPhamMoi);
// console.log(gioHangJSON);


// let gioHangOjb = JSON.parse(gioHangJSON)
// console.log(gioHangOjb);
/**
    Promise

    Promise sinh ra để giải quyết vấn đề 

    - Sync (Đồng bộ) là thg nào viết trước chạy trước 
    - Async (Bất đồng bộ) 
    - Nỗi đau
    - Đi học lý thuyết, cách hoạt động của promise
    - Thực hành, ví dụ

    Trong JS có những thg Async: setTimeOut, setInterval, fetch,
    XMLHttpRequest, file reading(đọc file), request animation frame

    //Callback: sẽ cho chúng ta biết khi nào Async chạy xong

 */


// Sync / Async 
// Theo tư duy đồng bộ thì số 1 in ra trước và số 2 in ra sau mặc dù số 1 nằm trong settimeout
// Lúc này đoạn này sẽ sleep ngủ 1s không in cái gì cả sau đó in ra 1 và in ra 2
// setTimeout(function() {
//     console.log(1)
// }, 1000)
// setTimeOut là tác vụ bất đồng bộ (Async) nên sẽ in ra sau

// console.log(2)  // Đây là tác vụ đồng bộ (sync) nên sẽ in ra trước 



// Nỗi đau (Vấn đề khi mà mình viết code)
// Callback hell
// Pyramid of doom


//VD về Callback hell

// setTimeout(function() {
//     console.log(1) //Viec 1
//     setTimeout(function() {
//         console.log(2) // Viec 2
//         setTimeout(function() {
//             console.log(3) // Viec 3
//             setTimeout(function() {
//                 console.log(4) // Viec 4
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// Lý thuyết và cách hoạt động
/**
    Promise có 3 trạng thái
    1. Pending có nghĩa là đang chờ việc thành công hay thất bại
    2. Fulfilled là trạng thái thành công
    3. Reject là trạng thái thất bại

 */
// Promise là tư tưởng để giải quyết vấn đề gì đó trong quá trình lập trình bất đồng bộ


// Cách tạo ra promise
// Khi gọi tới new Promise thì ngay lặp tức gọi tới function excutor



// let promise = new Promise(
//     // Excutor
//     function(resolve, reject) {
//         // Logic
//         // Thành công gọi tới: resolve() là giải quyết vấn đề
//         // Thất bại gọi tới: reject() là từ chối giải quyết vấn đề

//         //Fake call API
//         resolve([
//             {
//                 id: 1,
//                 name: 'Javascript'
//             }
//         ]);

//         // reject('Co loi')
//     }
// );

// promise // lời hứa 
//     //Nếu lời hứa được chấp thuận sẽ được lọt vào đây
//     .then(function(course) {
//         // khi resolve() được gọi thì then sẽ được gọi
//         console.log(course)  
//     })
//     .catch(function(error) {
//         // khi reject() được gọi thì catch sẽ được gọi
//         console.log(error)
//     })
//     .finally(function() {
//         // khi 1 trong 2 được gọi thì finally sẽ được gọi
//         console.log('Done!')  
//     });



// Câu hỏi trả lời phỏng vấn
// promise là khái niệm sinh ra để giúp mình sử lý các thao tác bất đồng bộ
// Trước khi có promise thì chúng ta thường sử dụng Callback, Callback sẽ xảy ra vấn đề đó là Callback hell
// Thế nên promise được sinh ra từ JS mới hơn trong phiên bản ES6 
// Chúng ta có thể sử dụng nó để khắc phục tình trang Callback hell
// Để tạo ra promise thì sử dụng từ khóa new với thg Promise
// Trong contructor của nó truyền vào 1 Excutor Function 
// Trong Excutor Function sẽ nhận được 2 tham số đó là resolve(), reject()
// Resolve() gọi nó khi thao tác sử lý logic của chúng ta thành công
// Reject() gọi nó khi thao tác sử lý logic của chúng ta thất bại
// Khi sử dụng promise thì đối tượng promise tạo ra chúng ta sử dụng phương thức là then và catch
// then và catch đều nhận những callback function và nó sẽ được thực thi
// lọt vào then khi thg promise được resolve
// lọt vào catch khi thg promise được reject


/**
    lý thuyết và cách hoạt động



 */

//Chain

// let promise = new Promise(
//     function (resolve, reject){
//         resolve();
//     }
// );


// promise
//     // Cái then thứ nhất nó return về cái gì thì cái then thứ 2 sẽ nhận đcc cái value đó
//     // Cái kết quả trả về của function đằng trc nó lại là tham số đầu vào của function đằng sau
//     // Nếu cái then thứ nhất không return cái gì thì then thứ 2 sẽ trả về undefined
//     // Mấu chốt là nếu function callback của then thứ nhất không return ra 1 promise thì nó sẽ chạy ngay thg then thứ 2
//     .then(function (){
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3]);
//             }, 3000);
//         });
//     })
//     .then(function (data){
//         console.log(data);
//         return 2;
//     })
//     .then(function (data){
//         console.log(data);
//         return 3;
//     })
//     .then(function (data){
//         console.log(data);
//     })


//     .catch(function (error){
//         console.log(error);
//     })
//     .finally(function (){
//         console.log('Done!')
//     })


// Bài toán: sau 1 giây ngủ sẽ in ra lần lượt 1, 2, 3
// function sleep(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     })
// }


// sleep(1000)
//     .then(
//         function() {
//             console.log(1);
//             return sleep(1000);
//         }
//     )
//     .then(
//         function() {
//             console.log(2);
//             return sleep(1000);
//         }
//     )
//     .then(
//         function() {
//             console.log(3);
//             return sleep(1000);
//         }
//     )


// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic

// function notHell(value){
//     return new Promise(function(resolve){
//         resolve(value);
//     })
// }

// notHell(1)
//     .then(function(value){
//         console.log(value)
//         return value + 1
//     })

//     .then(function(value){
//         console.log(value)
//         return value + 1
//     })

//     .then(function(value){
//         console.log(value)
//         return value + 1
//     })

//     .then(function(value){
//         console.log(value);
//     });



//Trường hợp bị reject giữa đường thì sẽ gọi ra catch để sử lý

// function sleep(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     })
// }


// sleep(1000)
//     .then(
//         function() {
//             console.log(1);
//             return sleep(1000);
//         }
//     )
//     .then(
//         function() {
//             console.log(2);
//             return sleep(1000);
//         }
//     )
//     .then(
//         function() {
//             console.log(3);
//             return new Promise (function (resolve, reject){
//                 reject('Co loi!');
//             })
//         }
//     )
//     .then(
//         function() {
//             console.log(3);
//             return sleep(1000);
//         }
//     )
//     .catch(function(err){
//         console.log(err);
//     })


/**
    1. promise.resolve
    2. promise.reject
    3. promise.all

 */

//thư viện: output của nó luôn luôn là 1 promise


// let promise = Promise.resolve('Success!');
// let promise = Promise.reject('Error!');


// promise
//     .then(
//         function(result){
//             console.log('result:', result);
//         }
//     )
//     .catch(
//         function(error){
//             console.log('result:', error)
//         }
//     )


//Bài toán hợp nhất hai mảng này lại và in ra mảng 1, 2, 3
// Promise.all sẽ rất hữu dụng khi chạy song song các promise và nhận đồng thời các kết quả trả về
// Nếu có 1 promise bị lỗi thì tất cả promise cho dù nó xong hay không xong thì quan tâm nữa nó sẽ bị lọt vào cái catch
// let promise1 = new Promise(function(resolve){
//     setTimeout(function() {
//         resolve([1]);
//     }, 2000)
// })

// let promise2 = new Promise(function(resolve){
//     setTimeout(function() {
//         resolve([2, 3]);
//     }, 5000)
// })


// Promise.all([promise1, promise2])
//     .then(
//         function(result){
//             let result1 = result[0];
//             let result2 = result[1];
//             console.log(result1.concat(result2)); 
//         }
//     )



/**
    Promise example
    

 */

// let users = [
//     {
//         id: 1,
//         name: 'Thanh Danh'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Anh Tuong'
//     }
//     // thực tế thì có rất nhìu user ở đây
// ]

// let comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi!'
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: 'Cam on anh^^'
//     }
// ]


// //Bước 1: Lấy comments
// //Bước 2: Từ comments lấy ra user_id
// //Bước 3: từ user_id lấy ra user tương ứng

// // Fake API (Cái này mô phỏng ra 1 cái hàm thực hiện gọi qua URL mà ông BE trả về cho mình lấy dữ liệu)

// // Hàm này lấy dữ liệu từ ông BE
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function() {
//             resolve(comments)
//         }, 1000)
//     });
// }

// function getUsersById(userIds) {
//     return new Promise(function(resolve){
//         let result = users.filter(function(user){
//             //Lọc ra những user có id nằm trong userIds
//             return userIds.includes(user.id);
//         });
//         setTimeout(function() {
//             // Trả về danh sách user tương ứng sau 1 giây
//             resolve(result);
//         }, 1000);
//     });
// }

// // Thực tế nếu người thiết kế API ngta trả về cho mình cả comment và user rồi
// // thì lúc đó sẽ không cần làm như ở dưới này
// // Đây là 1 cái case để hình dung ra cách dùng trong thực tế khi nó bị phụ thuộc vào nhau
// // Đây chính là promise hell nó bị phụ thuộc nhau 
// getComments() 
//     .then(function(comments){
//         // Hàm map dùng để nhặt ra các id trong mảng
//         let userIds = comments.map(function(comment){
//             // Lấy ra các user_id trong mảng comments
//             return comment.user_id;
//         });
//         //lấy thông tin người dùng theo user_id
//         return getUsersById(userIds)
//             .then(function(users){
//                 // Trả về đối tượng chứa cả users và comments
//                     return {
//                         users: users,
//                         comments: comments,
//                     };
//                 });
//         })
//         .then(function(data){
//             let commentBlock = document.getElementById('comment-block');
//             let html = '';
//             data.comments.forEach(function(comment) {
//                 //Tìm user tương ứng với mỗi comment
//                 let user = data.users.find(function(user){
//                     //Tìm so sánh người dùng có id khớp với comment.user_id
//                     return user.id === comment.user_id;
//                 });
//                 //Thêm comment vào HTML
//                 html += `<li>${user.name}: ${comment.content}</li>`
//             });
//             commentBlock.innerHTML = html;
//         });




/**
    Fetch
    Khái niệm này sử dụng để lấy dữ liệu từ BE trả về

    1. Front-end: Xây dựng giao diện người dùng
    2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

    - Fetch làm nhiệm vụ gọi lên 1 API để lấy ra nội dung lưu trữ ở BE và FE nhận nội dung đó và hiển thị ra trình duyệt

    API (URL) -> Application programing interface (Giao diện lập trình ứng dụng)
    API là cái cỗng giao tiếp giữa các phần mền
 */


// Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

// Backend cấp cho mình 1 API
// API cấp cho mình 1 URL


// fetch('https://jsonplaceholder.typicode.com/posts')
//     //stream
//     .then(function(response) {
        
//         return response.json();
//         // JSON.parse: JSON -> Javascript types
//     })  
//     .then(function(posts){
//         let htmls = posts.map(function(post){
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });
//         let html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })

//     .catch(function(err){
//         console.log('Co loi!');
//     })



// Thư viện JSON server: được hiểu đơn giản là fake 1 API Server (Mock API)

// fetch('http://localhost:3000/courses')

// .then(response => response.json())

// .then(courses => {
//     let htmls = courses.map(course => {
//         return `
//             <li>
//                 <h1>${'id: ' +  course.id}</h1>
//                 <h1>${course.name}</h1>
//                 <h3>${course.description}</h3>
//             </li>
//         `;
//     });
//     let html = htmls.join('');
//     document.getElementById('courses-block').innerHTML = html;
// })


/**
    4 hành động để thao tác với dữ liệu là CRUD
    - Create: Tạo mới dữ liệu       -> POST
    - Read: Lấy dữ liệu             -> GET
    - Update: Cập nhật chỉnh sửa    -> PUT / PATCH
    - Deleta: Xóa dữ liệu           -> DELETE
    * Tất cả các hành vi trên đều gọi đi 1 API


    Sử dụng Postman làm việc với REST API

 */


/**
    Example
 */


// let coursesApi = 'http://localhost:3000/courses'



// function start() {
    
//     getCourses(renderCourses); // Lấy danh sách khóa học từ API và hiển thị trên giao diện

//     handleCreateForm(); // Xử lý sử kiện tạo khóa học mới

// }
// //Khi web bắt đầu chạy thì start này chạy đầu tiên
// start();



// // Function


// // 1. Hàm lấy ra khóa học 
// function getCourses(callback) {
//     fetch(coursesApi) // Gửi yêu cầu GET đế nAPI
//         .then(response => response.json())

//         .then(callback) //Gọi hàm callback để xử lý dữ liệu
// }

// // 2.Hàm này để đẩy các cái courses ra trình duyệt
// function renderCourses(courses){
//     let listCoursesBlock = document.querySelector('#list-courses')
//     let htmls = courses.map(course =>{ // Duyệt qua danh sách các khóa học và tạo mã HTML
//         return `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>    
//                 <div>
//                 <button onclick="handleDeleteCourses(${course.id})">Delete</button>
//                 <button onclick="handleEditCourse(${course.id})">Edit</button>
//                 </div>
//             </li>
//         `
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// // Hàm này dùng để gửi đi 1 yêu cầu để tạo mới dữ liệu
// function createCourses(data, callback) {
//     fetch(coursesApi, {
//         method: 'POST', //Gửi yêu cầu POST để tạo khóa học mới 
//         headers: {
//             "Content-Type": "application/json", //Định dạng dữ liệu là JSON
//         },
//         body: JSON.stringify(data) //Chuyển dổi dữ liệu từ object sang JSON
//     })

//     .then(response => response.json()) // Chuyển đổi kết quả trả về thành object
//     .then(callback); //Gọi hàm callback khi tạo thành công

// }

// function handleCreateForm() {
//     let createBtn = document.querySelector('#create'); 

//     createBtn.onclick = function() { // Gắn sự kiệt click cho nút

//         //Lấy dữ liệu ở 2 ô input
//         let name = document.querySelector('input[name="name"]').value; // Lấy giá trị tên khóa học
//         let desc = document.querySelector('input[name="description"').value; // Lấy giá trị mô tả
        
//         let formData = { // Tạo object chứa dữ liệu khóa học
//             name: name,
//             description: desc
//         }

//         createCourses(formData, function() { // Gọi hàm tạo khóa học
//             getCourses(renderCourses);  // Lấy lại danh sách khóa học và hiển thị
//         });
//     }
// }

// function handleDeleteCourses(id) {
//     fetch(coursesApi + '/' + id, {
//         method: 'DELETE', //Gửi yêu cầu DELETE đến API với ID khóa học cụ thể
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })

//     .then(response => response.json())
//     .then(function() { // Xóa khóa học khỏi giao diện sau khi API xóa thành công
//         let courseItem = document.querySelector('.course-item-' + id);
//         if(courseItem){
//             courseItem.remove(); // Xóa phần tử HTML của khóa học
//         }

//     });
// }

// function handleEditCourse(id) {
//     const createBtn = document.getElementById("create");
//     createBtn.style.display = "none"; // Ẩn nút tạo khóa học
//     const editBtn = document.getElementById("edit");
//     editBtn.style.display = "inline-block"; // Hiển thị nút chỉnh sửa

//     // Lấy thông tin khóa học theo ID
//     fetch(coursesApi + '/' + id)
//         .then(response => response.json())
//         .then(course => {
//             // Điền thông tin khóa học vào form
//             document.querySelector('input[name="name"]').value = course.name;
//             document.querySelector('input[name="description"]').value = course.description;
//             document.querySelector('input[name="id"]').value = course.id; // Gán ID vào input ẩn
//         });

//     // Gắn sự kiện cho nút chỉnh sửa
//     editBtn.onclick = function () {
//         editCourse();
//     };
// }

// function editCourse() {
//     const id = document.querySelector('input[name="id"]').value; // Lấy ID từ form
//     const name = document.querySelector('input[name="name"]').value; // Lấy tên khóa học
//     const description = document.querySelector('input[name="description"]').value; // Lấy mô tả khóa học

//     const formData = { name, description }; // Dữ liệu cần cập nhật

//     fetch(coursesApi + '/' + id, {
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(() => {
//         getCourses(renderCourses); // Lấy lại danh sách khóa học
//         resetForm(); // Reset form về trạng thái ban đầu
//     });
// }

// function resetForm() {
//     document.querySelector('input[name="name"]').value = '';
//     document.querySelector('input[name="description"]').value = '';
//     document.querySelector('input[name="id"]').value = '';
//     const createBtn = document.getElementById("create");
//     createBtn.style.display = "inline-block"; // Hiển thị lại nút tạo
//     const editBtn = document.getElementById("edit");
//     editBtn.style.display = "none"; // Ẩn nút chỉnh sửa
// }
