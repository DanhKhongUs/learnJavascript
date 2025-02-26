import storage from "./util/storage.js"

const init = {
    // Danh sách công việc được lưu trữ 
    todos: storage.get(), // Lấy danh sách todos từ localStorage
    filter: 'all', // Bộ lọc mặc định là 'all'
    filters: {     // Định nghĩa hàm lọc danh sách todos theo trạng thái
        all: () => true, 
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null // Lưu vị trí todo đang được chỉnh sửa nếu có
}

const actions = {
    //Thêm 1 công việc mới
    add({ todos } , title) {
        if(title){
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    // Đánh dấu hoặc bỏ đánh dấu hoàn thành cho 1 công việc
    toggle( {todos}, index ) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    // Đánh dấu tất cả công việc là hoàn thành hoặc chưa hoàn thành
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    // Xóa 1 công việc dựa vào index
    destroy({ todos }, index){
        todos.splice(index, 1)
        storage.set(todos)
    },
    // Chuyển đổi giữa các bộ lọc(all, active, completed)
    switchFilter(state, filter) {
        state.filter = filter
    },
    // Xóa tất cả các công việc đã hoàn thành
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    // Bắt đầu chỉnh sửa một công việc, lưu vị trí index
    startEdit(state, index) {
        state.editIndex = index;
    },
    /* Kết thúc chỉnh sửa công việc: 
        Nếu title hợp lệ thì cập nhật công việc
        Nếu title rỗng thì xóa công việc đó
    */
    endEdit(state, title) {
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            }
            else{
                actions.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    // Hủy chỉnh sửa công việc      
    cancelEdit(state) {
        state.editIndex = null
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}