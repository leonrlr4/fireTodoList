//ref() 尋找資料庫路徑
//set() 新增資料
// firebase.database().ref().set('hi')
// firebase.database().ref().set({'home': 'tw'})
//once 讀取一次資料， on 隨時監聽
//把要讀取的資料存在snapshot
// myName.once('value', function(snapshot){
//轉化案成val, javascript才能讀取
//     var str = snapshot.val();
//     console.log(str)
//     document.getElementById('title').textContent = 'how are you '+ str
// })

// var friends = firebase.database().ref('myFriends');
// friends.once('value', function(snapshot){
//     var myfriends = snapshot.val()
//直接重object loop取值
// var values = Object.values(myfriends);
// for (var i = 0; i < values.length; i++){
//     document.getElementById('friend1').textContent = 'hi friend1 ' + values[i]
// }
// })
// var myName = firebase.database().ref('myName');
// myName.on('value', function(snapshot){
//     name = snapshot.val();
//     document.getElementById('title').textContent = name
// })
//push 新增
//key
//child() 子路徑` remove()刪除
// todos.push({content: '記得刷牙'})
// todos.child('-LaOFE0xqXAip30Odsl7').remove();


//dom
var txt = document.getElementById('txt');
var send = document.getElementById('send');
var list = document.getElementById('list');

//todos
var todos = firebase.database().ref('todos');

//按送出按鈕， 把資料寫入到資料庫
send.addEventListener('click', function (e) {
    todos.push({ content: txt.value })
})

//顯示內容
todos.on('value', function (snapshot) {
    var li = snapshot.val();
    var str = '';
    for (var item in li) {

        str += '<li data-key="' + item + '">' + li[item].content + '</li>'
    }
    list.innerHTML = str;
})

//刪除
list.addEventListener('click', function (e) {
    if (e.target.nodeName = "LI") {
        var key = e.target.dataset.key;
        todos.child(key).remove();
    }
})
