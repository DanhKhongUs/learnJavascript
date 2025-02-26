import { createStore } from 'https://cdn.skypack.dev/redux';    

//Thư viện redux là độc lập, thư viện react cũng là đọc lập
//Khi muốn làm việc redux trong react thì có thư viện cầu nối là react-redux


// Tự tạo lại redux
/* function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);

            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(subscriber) {
            subscribers.push(subscriber);
        }
    }
}

 */





//Ứng dụng dùng redux/////////////////////////
const initState = 0;

//Reducer
function bankReducer(state = initState, action){
    switch (action.type){
        
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state
    }
}


//store
//Trong cái store sẽ có 1 method là dispatch 
// cái này giúp mình bắn đi oj đến cái store và đẩy vào user

// getState trả lại cái dữ liệu của state hiện tại 

// subscribe thông báo lại 1 callback khi cái state được cập nhật

const store = createStore(bankReducer);


//Actions
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}


function actionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}

//DOM events
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');


//Events handler
//Khi mình nhấn cái dispatch thì nó sẽ oj là cái action và nó đẩy vào reducer
deposit.onclick = function() {
    store.dispatch(actionDeposit(10));
    console.log(store.getState());
}

withdraw.onclick = function() {
    store.dispatch(actionWithdraw(10));
    console.log(store.getState());
}

//Listener
store.subscribe(() => {
    render();
})


//Render
function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState();
}

render();


