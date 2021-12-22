class RC4 {
    constructor(key) {
        this.x = 0;
        this.y = 0;
        this.S = [];

        const keyArrInt = key.split('').map(letter => letter.charCodeAt(0));
        //key-scheduling algorithm
        for (let i = 0; i < 256; i++) {
            this.S[i] = i;
        }
        let j = 0;
        for (let i = 0; i < 256; i++) {
            j = (j + this.S[i] + keyArrInt[i % keyArrInt.length]) % 256;
            this.swap(this.S, i, j);
        }
    }

    swap(arr, x, y) {
        [arr[x],arr[y]] = [arr[y],arr[x]];
        return arr;
    }

    //pseudo-random generation algorithm
    getKeyWord() {
        this.x = (this.x + 1) % 256;
        this.y = (this.y + this.S[this.x]) % 256;

        this.swap(this.S, this.x, this.y);
        return this.S[(this.S[this.x] + this.S[this.y]) % 256]
    }

    transform(message) {
        const messageArrInt = message.split('').map(letter => letter.charCodeAt(0));

        const cipherArrInt = messageArrInt.map(letter => letter ^ this.getKeyWord());

        return cipherArrInt.map(letter => String.fromCharCode(letter)).join('')
    }
}

export default RC4;