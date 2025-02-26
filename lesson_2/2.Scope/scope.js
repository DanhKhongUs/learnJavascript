// Global

function log() {
    console.log('In ra log');
}

function logger(){
    log()
}

logger();



// Code block - sử dụng trong cặp ngoặc {} trừ var

// if else, for, while,...
{
    // code
    const age = 18;

    console.log(age);

}



// Local scope

function logger2 () {
    //Biến fullName này sẽ không truy cập được bên ngoài hàm
    var fullName = 'Thanh Danh';
    
    console.log(fullName);
}

logger2();


//Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
// Mỗi lần gọi hàm sẽ luôn tạo ra 1 phạm vi mới 
function logger3(first, last) {
    console.log(first, last);
}

logger3('Thanh', 'Danh');
logger3('Danh', 'Thanh');
logger3("Nguyen", 'Danh');


//Các hàm có thể truy cập các biến được khai báo 
//trong phạm vi của nó cả bên ngoài nó

const fullName = "Anh Danh"
function logger4(first, last) {
    console.log(first, last);

    const age = 19;
    console.log(age, fullName);
}

logger4('Thanh', 'Danh');
logger4('Danh', 'Thanh');
logger4("Nguyen", 'Danh');


//Cách thức một biến được truy cập
// Nó sẽ lấy giá trị biến có phạm vi gần nhất
const age = 16;

{
    const age = 14;
    {
        {
            const age = 12;
            console.log(age)
        }
    }
}



//Khi nào một biến bị xóa khỏi bộ nhớ

//Biến toàn cầu - nên tránh khi sử dụng nó 1 lần để không bị lãng phí bộ nhớ


//Biến trong code block và trong hàm local scope
//Khi mình thực thi xong chương trình thì nó sẽ tự động xóa biến thuộc phạm vi của nó

function logger5() {
    const rand = Math.random();

    console.log(rand);
}

logger5();


//Biến trong hàm được tham chiếu bới 1 hàm

function makeCouter() {
    let couter = 0;

    function increase() {
        return ++couter;
    }

    return increase;
}

const increase1 = makeCouter();

console.log(increase1());
console.log(increase1());
console.log(increase1());
