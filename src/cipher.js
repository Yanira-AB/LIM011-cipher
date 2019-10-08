window.cipher = {
  encode : function (offset, string) {
    let numAlphabet;
    let arrayEncrypt = [];

    for (var i = 0; i < string.length; i++) {
      const numAscii = string.charCodeAt(i);
      if (numAscii === 32) {
        arrayEncrypt.push(' ');
      } else {
        numAlphabet = ((numAscii - 32 + parseInt(offset)) % 223) + 32;
        const caracterEncrypt = String.fromCharCode(numAlphabet);
        arrayEncrypt.push(caracterEncrypt);
      }
    }
    const stringEncrypt = arrayEncrypt.join('');
    return stringEncrypt;
  },

  decode : function (offset, string) {
    let numAlphabet;
    let arrayDesEncrypt = [];

    for (var i = 0; i < string.length; i++) {
      const numAscii = string.charCodeAt(i);
      if (numAscii === 32) {
        arrayDesEncrypt.push(' ');
      } else {
        numAlphabet = ((numAscii - 255 - parseInt(offset)) % 223) + 255;
        const caracterDesencrypt = String.fromCharCode(numAlphabet);
        arrayDesEncrypt.push(caracterDesencrypt);
      }
    }
    const stringDesencrypt = arrayDesEncrypt.join('');
    return stringDesencrypt;
  }
};
