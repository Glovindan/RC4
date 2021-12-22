import RC4 from "./RC4.js";

const messageInput = document.getElementById("messageInput")
const keyInput = document.getElementById("keyInput")

const encryptButton = document.getElementById("encryptButton")
const decryptButton = document.getElementById("decryptButton")
const result = document.getElementById("result")

let outputValue = "";

const rcFunc = function(message, key, outputNode) {
    const rcInstance = new RC4(key);
    let answer = rcInstance.transform(message);

    outputNode.innerText = answer;
    return answer;
}

encryptButton.addEventListener("click", ()=> {
    outputValue = rcFunc(messageInput.value, keyInput.value, result)
})

decryptButton.addEventListener("click", ()=> {
    outputValue = rcFunc(messageInput.value, keyInput.value, result)
})
