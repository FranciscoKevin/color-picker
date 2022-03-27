new Vue({
    el:'#app',
    data: {
        red: 0,
        green: 0,
        blue: 0,
        squares: [],
        selectedSquare: '',
        errors: []
    },
    methods: {
        resetColor () {
            this.red = this.green = this.blue = 0
        },
        saveSquare () {
            this.squares.push(`rgb(${this.red}, ${this.green}, ${this.blue})`)
        resetColor()
        },
        reset () {
            this.squares = []
            resetColor()
        },
        checkForm () {
            if (this.red < 0 || this.red > 255) {
                alert("Vos valeurs doivent être comprise en 0 et 255")
            }
        }
    },
    computed: {
        nbOfSquares() {
        return this.squares.length
        }
    }
})