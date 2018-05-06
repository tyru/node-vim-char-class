const VimChar = require('../index.js');
console.log(VimChar.getUnicodeClass('ア')); // === VimChar.CLASS_KATAKANA
console.log(VimChar.getUnicodeClass('あ')); // === VimChar.CLASS_HIRAGANA
console.log(VimChar.getUnicodeClass('！')); // === VimChar.CLASS_PUNCTUATION
