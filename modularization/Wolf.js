class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 10);
    }

    howl() {
        console.log('owoooo!')
    }
}

module.exports = Wolf;