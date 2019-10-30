
var app = new Vue({
    el: "#app",
    mounted: function() {
        axios.get('data/candy.json')
        .then (( response ) => {
            this.candy = response.data.candy;
        })
    },
    data: {
        candy: [ ]
    },
    methods: {

    }
})