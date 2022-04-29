const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransction = [
    {id:1, text:"ค่าใช้จ่าย", amount:-500},
    {id:2, text:"ค่าหอ", amount:-4500},
    {id:3, text:"เงินเดือน", amount:+20000},
    {id:4, text:"ช้อปปิ้ง", amount:-5000},
]

const transactions = dataTransction;

function init(){
    transactions.forEach(addDataToList);
}

function addDataToList(transactions){
    const symbol = transactions.amount < 0 ? '-' : '+';
    const status = transactions.amount < 0 ? 'minus' : 'plus';
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${Math.abs(transactions.amount)}</span><button class="delete-btn">X</button>`;
    list.appendChild(item);
}

init();