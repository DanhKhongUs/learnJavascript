/**
    Bind - khái niệm ràng buộc

    - Phương thức bind() sẽ trả về một hàm mới
    - Có thể nhận các đối số như hàm ban đầu 

 */



// Ví dụ

// 2 cái this ở dưới này là thuộc phạm vi window
this.firstName = "Danh";
this.lastName = 'Nguyen';

const student = {
    firstName: 'Danh',
    lastName: 'Thanh',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const teacher = {
    firstName: 'Son',
    lastName: 'Dang',
}

// Case 1: 
console.log(student.getFullName()); // Danh Thanh

// Case 2: 
//student.getFullName ở đây chỉ truy cập đến cái func và gán cho 1 biến khác
const getStudentName = student.getFullName.bind(teacher);
// Bất cứ object nào được truyền vào bên trong bind() thì nó sẽ ràng buộc với
// từ khóa this ở trong hàm mà nó trả ra ở getStudentName
// thế nên khi console.log ở dưới thì this ở trong đó sẽ là đối tượng mình truyền vào trong bind

// Gọi hàm ở dưới này không thông qua 1 đối tượng nào cho nên 
// từ khóa this sẽ chọc ra phạm vi global hoặc window khi không gọi bind()
console.log(getStudentName());




//Phương thức bind() nó không sửa this mà nó trả về một hàm mới với cái this mới

// Sẽ trả về false vì getStudentName nó đã tạo ra 1 vùng nhớ mới
console.log(getStudentName === student.getFullName)




// Bài toán ví dụ

const student2 = {
    firstName: 'Danh',
    lastName: 'Thanh',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}


const button = document.querySelector('button');

button.onclick = student2.getFullName.bind(student2)



// Ung dung thuc te
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = (() => {
    const cars = [];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');


    return {
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => 
                `<li>
                ${car}
                <span class="delete" data-index=${index}>&times</span>
                </li>`
            ).join('')

            root.innerHTML = html;
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete');
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init() {

            // Handle DOM events
            submit.onclick = () => {
                const car = input.value
                if(car ==""){
                    return;
                }
                this.add(car);
                this.render();


                input.value = null;
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this);

            this.render()
        }
    }
})();

app.init();
