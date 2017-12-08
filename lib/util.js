const $ = require("jquery");

class Util {
    constructor(){
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(id) {
        return $.ajax({
            method: 'GET',
            url: `api/foobar/${id}`
        }) 
    }

    deleteData(id) {
        return $.ajax({
            method: 'DELETE',
            url: `api/foobar/${id}`
        })
    }


}

module.exports = Util;