# node-vim-char-class

Detect a character class which Vim recognizes when moving with w,b,e,ge

# Example (get character class)

```
// example/class.js
const VimChar = require('./index.js');
console.log(VimChar.getUnicodeClass('ア')); // === VimChar.CLASS_KATAKANA
console.log(VimChar.getUnicodeClass('あ')); // === VimChar.CLASS_HIRAGANA
console.log(VimChar.getUnicodeClass('！')); // === VimChar.CLASS_PUNCTUATION
```

Output

```
12448
12352
1
```

Here is the list of exported constants of character classes.

```
const CLASS_WHITESPACE = 0;
const CLASS_PUNCTUATION = 1;
const CLASS_WORD = 2;
const CLASS_EMOJI = 3;
const CLASS_SUPERSCRIPT = 0x2070; // 8304
const CLASS_SUBSCRIPT = 0x2080; // 8320
const CLASS_BRAILLE = 0x2800; // 10240
const CLASS_HIRAGANA = 0x3040;  // 12352
const CLASS_KATAKANA = 0x30a0; // 12448
const CLASS_CJK_IDEOGRAPHS = 0x4e00; // 19968
const CLASS_HANGUL_SYLLABLES = 0xac00; // 44032
```

# Example (tokenization)

Let's tokenize this text by each character class.

```
ルイズ！ルイズ！ルイズ！ルイズぅぅうううわぁああああああああああああああああああああああん！！！
あぁああああ…ああ…あっあっー！あぁああああああ！！！ルイズルイズルイズぅううぁわぁああああ！！！
あぁクンカクンカ！クンカクンカ！スーハースーハー！スーハースーハー！いい匂いだなぁ…くんくん
んはぁっ！ルイズ・フランソワーズたんの桃色ブロンドの髪をクンカクンカしたいお！クンカクンカ！あぁあ！！
間違えた！モフモフしたいお！モフモフ！モフモフ！髪髪モフモフ！カリカリモフモフ…きゅんきゅんきゅい！！
小説12巻のルイズたんかわいかったよぅ！！あぁぁああ…あああ…あっあぁああああ！！ふぁぁあああんんっ！！
アニメ2期放送されて良かったねルイズたん！あぁあああああ！かわいい！ルイズたん！かわいい！あっああぁああ！
コミック2巻も発売されて嬉し…いやぁああああああ！！！にゃああああああああん！！ぎゃああああああああ！！
ぐあああああああああああ！！！コミックなんて現実じゃない！！！！あ…小説もアニメもよく考えたら…
ル イ ズ ち ゃ ん は 現実 じ ゃ な い？にゃあああああああああああああん！！うぁああああああああああ！！
そんなぁああああああ！！いやぁぁぁあああああああああ！！はぁああああああん！！ハルケギニアぁああああ！！
この！ちきしょー！やめてやる！！現実なんかやめ…て…え！？見…てる？表紙絵のルイズちゃんが僕を見てる？
表紙絵のルイズちゃんが僕を見てるぞ！ルイズちゃんが僕を見てるぞ！挿絵のルイズちゃんが僕を見てるぞ！！
アニメのルイズちゃんが僕に話しかけてるぞ！！！よかった…世の中まだまだ捨てたモンじゃないんだねっ！
いやっほぉおおおおおおお！！！僕にはルイズちゃんがいる！！やったよケティ！！ひとりでできるもん！！！
あ、コミックのルイズちゃああああああああああああああん！！いやぁあああああああああああああああ！！！！
あっあんああっああんあアン様ぁあ！！シ、シエスター！！アンリエッタぁああああああ！！！タバサｧぁあああ！！
ううっうぅうう！！俺の想いよルイズへ届け！！ハルケギニアのルイズへ届け！
```

```javascript
// example/uwaa.js
const VimChar = require('../index.js');
const fs = require('fs');
fs.readFile('example/louise.txt', 'utf8', function (err, text) {
  VimChar.splitSegmentsByClass(text).forEach(seg => console.log(seg));
});
```

Output

```
{ class: 12448, text: 'ルイズ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ぅぅうううわぁああああああああああああああああああああああん' }
{ class: 1, text: '！！！\n' }
{ class: 12352, text: 'あぁああああ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'ああ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'あっあっ' }
{ class: 12448, text: 'ー' }
{ class: 1, text: '！' }
{ class: 12352, text: 'あぁああああああ' }
{ class: 1, text: '！！！' }
{ class: 12448, text: 'ルイズルイズルイズ' }
{ class: 12352, text: 'ぅううぁわぁああああ' }
{ class: 1, text: '！！！\n' }
{ class: 12352, text: 'あぁ' }
{ class: 12448, text: 'クンカクンカ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'クンカクンカ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'スーハースーハー' }
{ class: 1, text: '！' }
{ class: 12448, text: 'スーハースーハー' }
{ class: 1, text: '！' }
{ class: 12352, text: 'いい' }
{ class: 19968, text: '匂' }
{ class: 12352, text: 'いだなぁ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'くんくん' }
{ class: 1, text: '\n' }
{ class: 12352, text: 'んはぁっ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ・フランソワーズ' }
{ class: 12352, text: 'たんの' }
{ class: 19968, text: '桃色' }
{ class: 12448, text: 'ブロンド' }
{ class: 12352, text: 'の' }
{ class: 19968, text: '髪' }
{ class: 12352, text: 'を' }
{ class: 12448, text: 'クンカクンカ' }
{ class: 12352, text: 'したいお' }
{ class: 1, text: '！' }
{ class: 12448, text: 'クンカクンカ' }
{ class: 1, text: '！' }
{ class: 12352, text: 'あぁあ' }
{ class: 1, text: '！！\n' }
{ class: 19968, text: '間違' }
{ class: 12352, text: 'えた' }
{ class: 1, text: '！' }
{ class: 12448, text: 'モフモフ' }
{ class: 12352, text: 'したいお' }
{ class: 1, text: '！' }
{ class: 12448, text: 'モフモフ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'モフモフ' }
{ class: 1, text: '！' }
{ class: 19968, text: '髪髪' }
{ class: 12448, text: 'モフモフ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'カリカリモフモフ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'きゅんきゅんきゅい' }
{ class: 1, text: '！！\n' }
{ class: 19968, text: '小説' }
{ class: 2, text: '12' }
{ class: 19968, text: '巻' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'たんかわいかったよぅ' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'あぁぁああ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'あああ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'あっあぁああああ' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'ふぁぁあああんんっ' }
{ class: 1, text: '！！\n' }
{ class: 12448, text: 'アニメ' }
{ class: 2, text: '2' }
{ class: 19968, text: '期放送' }
{ class: 12352, text: 'されて' }
{ class: 19968, text: '良' }
{ class: 12352, text: 'かったね' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'たん' }
{ class: 1, text: '！' }
{ class: 12352, text: 'あぁあああああ' }
{ class: 1, text: '！' }
{ class: 12352, text: 'かわいい' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'たん' }
{ class: 1, text: '！' }
{ class: 12352, text: 'かわいい' }
{ class: 1, text: '！' }
{ class: 12352, text: 'あっああぁああ' }
{ class: 1, text: '！\n' }
{ class: 12448, text: 'コミック' }
{ class: 2, text: '2' }
{ class: 19968, text: '巻' }
{ class: 12352, text: 'も' }
{ class: 19968, text: '発売' }
{ class: 12352, text: 'されて' }
{ class: 19968, text: '嬉' }
{ class: 12352, text: 'し' }
{ class: 1, text: '…' }
{ class: 12352, text: 'いやぁああああああ' }
{ class: 1, text: '！！！' }
{ class: 12352, text: 'にゃああああああああん' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'ぎゃああああああああ' }
{ class: 1, text: '！！\n' }
{ class: 12352, text: 'ぐあああああああああああ' }
{ class: 1, text: '！！！' }
{ class: 12448, text: 'コミック' }
{ class: 12352, text: 'なんて' }
{ class: 19968, text: '現実' }
{ class: 12352, text: 'じゃない' }
{ class: 1, text: '！！！！' }
{ class: 12352, text: 'あ' }
{ class: 1, text: '…' }
{ class: 19968, text: '小説' }
{ class: 12352, text: 'も' }
{ class: 12448, text: 'アニメ' }
{ class: 12352, text: 'もよく' }
{ class: 19968, text: '考' }
{ class: 12352, text: 'えたら' }
{ class: 1, text: '…\n' }
{ class: 12448, text: 'ル' }
{ class: 0, text: ' ' }
{ class: 12448, text: 'イ' }
{ class: 0, text: ' ' }
{ class: 12448, text: 'ズ' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'ち' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'ゃ' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'ん' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'は' }
{ class: 0, text: ' ' }
{ class: 19968, text: '現実' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'じ' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'ゃ' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'な' }
{ class: 0, text: ' ' }
{ class: 12352, text: 'い' }
{ class: 1, text: '？' }
{ class: 12352, text: 'にゃあああああああああああああん' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'うぁああああああああああ' }
{ class: 1, text: '！！\n' }
{ class: 12352, text: 'そんなぁああああああ' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'いやぁぁぁあああああああああ' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'はぁああああああん' }
{ class: 1, text: '！！' }
{ class: 12448, text: 'ハルケギニア' }
{ class: 12352, text: 'ぁああああ' }
{ class: 1, text: '！！\n' }
{ class: 12352, text: 'この' }
{ class: 1, text: '！' }
{ class: 12352, text: 'ちきしょ' }
{ class: 12448, text: 'ー' }
{ class: 1, text: '！' }
{ class: 12352, text: 'やめてやる' }
{ class: 1, text: '！！' }
{ class: 19968, text: '現実' }
{ class: 12352, text: 'なんかやめ' }
{ class: 1, text: '…' }
{ class: 12352, text: 'て' }
{ class: 1, text: '…' }
{ class: 12352, text: 'え' }
{ class: 1, text: '！？' }
{ class: 19968, text: '見' }
{ class: 1, text: '…' }
{ class: 12352, text: 'てる' }
{ class: 1, text: '？' }
{ class: 19968, text: '表紙絵' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんが' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'を' }
{ class: 19968, text: '見' }
{ class: 12352, text: 'てる' }
{ class: 1, text: '？\n' }
{ class: 19968, text: '表紙絵' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんが' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'を' }
{ class: 19968, text: '見' }
{ class: 12352, text: 'てるぞ' }
{ class: 1, text: '！' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんが' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'を' }
{ class: 19968, text: '見' }
{ class: 12352, text: 'てるぞ' }
{ class: 1, text: '！' }
{ class: 19968, text: '挿絵' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんが' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'を' }
{ class: 19968, text: '見' }
{ class: 12352, text: 'てるぞ' }
{ class: 1, text: '！！\n' }
{ class: 12448, text: 'アニメ' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんが' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'に' }
{ class: 19968, text: '話' }
{ class: 12352, text: 'しかけてるぞ' }
{ class: 1, text: '！！！' }
{ class: 12352, text: 'よかった' }
{ class: 1, text: '…' }
{ class: 19968, text: '世' }
{ class: 12352, text: 'の' }
{ class: 19968, text: '中' }
{ class: 12352, text: 'まだまだ' }
{ class: 19968, text: '捨' }
{ class: 12352, text: 'てた' }
{ class: 12448, text: 'モン' }
{ class: 12352, text: 'じゃないんだねっ' }
{ class: 1, text: '！\n' }
{ class: 12352, text: 'いやっほぉおおおおおおお' }
{ class: 1, text: '！！！' }
{ class: 19968, text: '僕' }
{ class: 12352, text: 'には' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃんがいる' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'やったよ' }
{ class: 12448, text: 'ケティ' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'ひとりでできるもん' }
{ class: 1, text: '！！！\n' }
{ class: 12352, text: 'あ' }
{ class: 1, text: '、' }
{ class: 12448, text: 'コミック' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'ちゃああああああああああああああん' }
{ class: 1, text: '！！' }
{ class: 12352, text: 'いやぁあああああああああああああああ' }
{ class: 1, text: '！！！！\n' }
{ class: 12352, text: 'あっあんああっああんあ' }
{ class: 12448, text: 'アン' }
{ class: 19968, text: '様' }
{ class: 12352, text: 'ぁあ' }
{ class: 1, text: '！！' }
{ class: 12448, text: 'シ' }
{ class: 1, text: '、' }
{ class: 12448, text: 'シエスター' }
{ class: 1, text: '！！' }
{ class: 12448, text: 'アンリエッタ' }
{ class: 12352, text: 'ぁああああああ' }
{ class: 1, text: '！！！' }
{ class: 12448, text: 'タバサ' }
{ class: 2, text: 'ｧ' }
{ class: 12352, text: 'ぁあああ' }
{ class: 1, text: '！！\n' }
{ class: 12352, text: 'ううっうぅうう' }
{ class: 1, text: '！！' }
{ class: 19968, text: '俺' }
{ class: 12352, text: 'の' }
{ class: 19968, text: '想' }
{ class: 12352, text: 'いよ' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'へ' }
{ class: 19968, text: '届' }
{ class: 12352, text: 'け' }
{ class: 1, text: '！！' }
{ class: 12448, text: 'ハルケギニア' }
{ class: 12352, text: 'の' }
{ class: 12448, text: 'ルイズ' }
{ class: 12352, text: 'へ' }
{ class: 19968, text: '届' }
{ class: 12352, text: 'け' }
{ class: 1, text: '！\n' }
```
