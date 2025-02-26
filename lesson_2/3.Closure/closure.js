function createCounter() {
    let counter = 0;
 
    function increase() {
        // counter trong này lúc đầu nó sẽ không có giá trị
        // nó tham chiếu ra phạm vi bên ngoài tìm kiếm giá trị
        return ++counter;
    }

    return increase;
}

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());


//Viết code ngắn gọn hơn

function createStorage(key) {
    // Trường hợp lúc đầu không có JSON thì ?? có nghĩa là lấy đằng sau là object rỗng
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value){
            store[key] = value;
            save();
        },
        remove(key){
            delete store[key];
            save();
        }
    }

    return storage;
}


//Profile.js

// Khi mình gọi hàm createStorage thì nó sẽ trả về cái object ở trên
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'));
console.log(profileSetting.get('age'));
console.log(profileSetting.get('address'));


profileSetting.set('fullName', 'Thanh Danh')
profileSetting.set('age', 19)
profileSetting.set('address', 'Phu Yen')


//Biểu diễn, ứng dụng tính Private trong OOP

function createApp() {
    const cars = [];

    return {
        add(car){
            cars.push(car)
        },
        show() {
            console.log(cars)
        }
    }
}

const app = createApp()

app.show();
app.add('BMW');
app.show();

app.add('Honda');
app.add('Mec');

app.show();


// Bài tập vận dụng

function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)(); // 3
a(1)(); // 3
a(1)(); // 3

// Biến x này giữ trạng thái của x trong môi trường closure
let x = a(1);
x(); // 3
x(); // 4
x(); // 5

//Trình tự thực hiện: đầu tiên chỉ gọi hàm a().
// Nó hoạt động giống như một hàm bình thường, in ra x (bằng 1) sau khi tăng x lên 2 đơn vị.
// Sau đó, chúng ta khai báo một biến x và gán nó với giá trị trả về của hàm a(1), đó là lý do tại sao chúng ta nhận được 3, 4, 5 thay vì 3, 3, 3.