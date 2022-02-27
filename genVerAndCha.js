// var express = require('express')
// var app = express()
const fs = require('fs');
const crypto = require('crypto')


function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

// Tạo code verifier bằng crypto
function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}

var verifier = base64URLEncode(crypto.randomBytes(32));
console.log("code_verifier: ", verifier)

// Tạo Code Challenge từ Code Verifier
if (verifier) {
    var challenge = base64URLEncode(sha256(verifier));
    console.log("code_challenge: ", challenge)
}
// Lưu code verifier 
fs.writeFile("code_verifier.json", verifier, 'utf8', function (err) {
    if (err) {
        console.log("Erro write file.");
        return console.log(err);
    }
    console.log("Code Verifier has been saved.");
});
// Lưu code challenge
fs.writeFile("code_challenge.json", challenge, 'utf8', function (err) {
    if (err) {
        console.log("An error write file.");
        return console.log(err);
    }
    console.log("Code Challenge has been saved.");
});
