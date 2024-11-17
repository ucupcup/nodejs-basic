class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 10);
    }

    growl() {
        console.log('gggrrrrr!')
    }
}

module.exports = Tiger;