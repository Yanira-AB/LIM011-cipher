window.cipher = {
  encode : (offset, string) => {
    let numAlphabet;
    let arrayEncrypt = [];

    for (var i = 0; i < string.length; i++) {
      const numAscii = string.charCodeAt(i);
      if (numAscii === 32) {
        arrayEncrypt.push(' ');
      } else if (numAscii >= 65 && numAscii<= 90) {
        numAlphabet = ((numAscii - 65 + parseInt(offset)) % 26) + 65;
        const caracterEncrypt = String.fromCharCode(numAlphabet);
        arrayEncrypt.push(caracterEncrypt);
      } else if (numAscii >= 97 && numAscii<= 122) {
        numAlphabet = ((numAscii - 97 + parseInt(offset)) % 26) + 97;
        const caracterEncrypt = String.fromCharCode(numAlphabet);
        arrayEncrypt.push(caracterEncrypt);
      } else {
        const caracterEncrypt = String.fromCharCode(numAscii);
        arrayEncrypt.push(caracterEncrypt);
      }
    }
    const stringEncrypt = arrayEncrypt.join('');
    return stringEncrypt;
  },

  decode : (offset, string) => {
    let numAlphabet;
    let arrayDesEncrypt = [];

    for (var i = 0; i < string.length; i++) {
      const numAscii = string.charCodeAt(i);
      if (numAscii === 32) {
        arrayDesEncrypt.push(' ');
      } else if (numAscii >= 65 && numAscii<= 90) {
        numAlphabet = ((numAscii - 90 - parseInt(offset)) % 26) + 90;
        const caracterDesencrypt = String.fromCharCode(numAlphabet);
        arrayDesEncrypt.push(caracterDesencrypt);
      } else if (numAscii >= 97 && numAscii<= 122) {
        numAlphabet = ((numAscii - 122 - parseInt(offset)) % 26) + 122;
        const caracterDesencrypt = String.fromCharCode(numAlphabet);
        arrayDesEncrypt.push(caracterDesencrypt);
      } else {
        const caracterDesencrypt = String.fromCharCode(numAscii);
        arrayDesEncrypt.push(caracterDesencrypt);
      }
    }
    const stringDesencrypt = arrayDesEncrypt.join('');
    return stringDesencrypt;
  }
};
