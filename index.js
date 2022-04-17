new Vue({
    el:'#app',
    data: {
        form: {
            red: 0,
            green: 0,
            blue: 0
        },
        squares: [],
        selectedSquare: '',
        errors: []
    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            if (this.checkForm()) {
                this.saveSquare()
            } else {
                this.resetColor()
            }
        },
        resetColor() {
            this.form.red = this.form.green = this.form.blue = 0
        },
        saveSquare () {
            this.squares.push(`rgb(${this.form.red}, ${this.form.green}, ${this.form.blue})`)
            this.resetColor()
        },
        reset() {
            this.squares = []
            this.resetColor()
        },
        checkForm() {
            this.errors = []
            if (this.form.red < 0 || this.red > 255) {
                this.errors.push('La valeur doit etre compris en 0 et 255')
            } 
            
            if (this.form.green < 0 || this.form.green > 255) {
                this.errors.push('La valeur doit etre compris en 0 et 255')
            }

            if (this.form.blue < 0 || this.form.blue > 255) {
                this.errors.push('La valeur doit etre compris en 0 et 255')
            }
            return this.errors.length ? false : true;
        }
    },
    computed: {
        nbOfSquares() {
        return this.squares.length
        }
    }
})