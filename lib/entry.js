
const MyClass = require('./myClass.js')
const Util = require('./util.js')


document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById('myDiv')
    let dlt = document.getElementById('delete')
    let newObj = new MyClass({foo: 'f', bar: 'b'})
    let util = new Util()
    console.log(newObj.foobar())
    util.fetchData(1).then(res => console.log(res))
    
    dlt.addEventListener("click", () => util.deleteData(1).then(res => console.log(res)))
})