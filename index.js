
// TODO: auto-generate this constant by CI script
// to scrape original Vim source code.

const CLASS_WHITESPACE = 0;
const CLASS_PUNCTUATION = 1;
const CLASS_WORD = 2;
const CLASS_EMOJI = 3;
const CLASS_SUPERSCRIPT = 0x2070;
const CLASS_SUBSCRIPT = 0x2080;
const CLASS_BRAILLE = 0x2800;
const CLASS_HIRAGANA = 0x3040;
const CLASS_KATAKANA = 0x30a0;
const CLASS_CJK_IDEOGRAPHS = 0x4e00;
const CLASS_HANGUL_SYLLABLES = 0xac00;

const SORTED_CLASSES = [
  {first: 0x037e, last: 0x037e, class: CLASS_PUNCTUATION},    /* Greek question mark */
  {first: 0x0387, last: 0x0387, class: CLASS_PUNCTUATION},    /* Greek ano teleia */
  {first: 0x055a, last: 0x055f, class: CLASS_PUNCTUATION},    /* Armenian punctuation */
  {first: 0x0589, last: 0x0589, class: CLASS_PUNCTUATION},    /* Armenian full stop */
  {first: 0x05be, last: 0x05be, class: CLASS_PUNCTUATION},
  {first: 0x05c0, last: 0x05c0, class: CLASS_PUNCTUATION},
  {first: 0x05c3, last: 0x05c3, class: CLASS_PUNCTUATION},
  {first: 0x05f3, last: 0x05f4, class: CLASS_PUNCTUATION},
  {first: 0x060c, last: 0x060c, class: CLASS_PUNCTUATION},
  {first: 0x061b, last: 0x061b, class: CLASS_PUNCTUATION},
  {first: 0x061f, last: 0x061f, class: CLASS_PUNCTUATION},
  {first: 0x066a, last: 0x066d, class: CLASS_PUNCTUATION},
  {first: 0x06d4, last: 0x06d4, class: CLASS_PUNCTUATION},
  {first: 0x0700, last: 0x070d, class: CLASS_PUNCTUATION},    /* Syriac punctuation */
  {first: 0x0964, last: 0x0965, class: CLASS_PUNCTUATION},
  {first: 0x0970, last: 0x0970, class: CLASS_PUNCTUATION},
  {first: 0x0df4, last: 0x0df4, class: CLASS_PUNCTUATION},
  {first: 0x0e4f, last: 0x0e4f, class: CLASS_PUNCTUATION},
  {first: 0x0e5a, last: 0x0e5b, class: CLASS_PUNCTUATION},
  {first: 0x0f04, last: 0x0f12, class: CLASS_PUNCTUATION},
  {first: 0x0f3a, last: 0x0f3d, class: CLASS_PUNCTUATION},
  {first: 0x0f85, last: 0x0f85, class: CLASS_PUNCTUATION},
  {first: 0x104a, last: 0x104f, class: CLASS_PUNCTUATION},    /* Myanmar punctuation */
  {first: 0x10fb, last: 0x10fb, class: CLASS_PUNCTUATION},    /* Georgian punctuation */
  {first: 0x1361, last: 0x1368, class: CLASS_PUNCTUATION},    /* Ethiopic punctuation */
  {first: 0x166d, last: 0x166e, class: CLASS_PUNCTUATION},    /* Canadian Syl. punctuation */
  {first: 0x1680, last: 0x1680, class: CLASS_WHITESPACE},
  {first: 0x169b, last: 0x169c, class: CLASS_PUNCTUATION},
  {first: 0x16eb, last: 0x16ed, class: CLASS_PUNCTUATION},
  {first: 0x1735, last: 0x1736, class: CLASS_PUNCTUATION},
  {first: 0x17d4, last: 0x17dc, class: CLASS_PUNCTUATION},    /* Khmer punctuation */
  {first: 0x1800, last: 0x180a, class: CLASS_PUNCTUATION},    /* Mongolian punctuation */
  {first: 0x2000, last: 0x200b, class: CLASS_WHITESPACE},   /* spaces */
  {first: 0x200c, last: 0x2027, class: CLASS_PUNCTUATION},    /* punctuation and symbols */
  {first: 0x2028, last: 0x2029, class: CLASS_WHITESPACE},
  {first: 0x202a, last: 0x202e, class: CLASS_PUNCTUATION},    /* punctuation and symbols */
  {first: 0x202f, last: 0x202f, class: CLASS_WHITESPACE},
  {first: 0x2030, last: 0x205e, class: CLASS_PUNCTUATION},    /* punctuation and symbols */
  {first: 0x205f, last: 0x205f, class: CLASS_WHITESPACE},
  {first: 0x2060, last: 0x27ff, class: CLASS_PUNCTUATION},    /* punctuation and symbols */
  {first: 0x2070, last: 0x207f, class: CLASS_SUPERSCRIPT},  /* superscript */
  {first: 0x2080, last: 0x2094, class: CLASS_SUBSCRIPT},  /* subscript */
  {first: 0x20a0, last: 0x27ff, class: CLASS_PUNCTUATION},    /* all kinds of symbols */
  {first: 0x2800, last: 0x28ff, class: CLASS_BRAILLE},  /* braille */
  {first: 0x2900, last: 0x2998, class: CLASS_PUNCTUATION},    /* arrows, brackets, etc. */
  {first: 0x29d8, last: 0x29db, class: CLASS_PUNCTUATION},
  {first: 0x29fc, last: 0x29fd, class: CLASS_PUNCTUATION},
  {first: 0x2e00, last: 0x2e7f, class: CLASS_PUNCTUATION},    /* supplemental punctuation */
  {first: 0x3000, last: 0x3000, class: CLASS_WHITESPACE},   /* ideographic space */
  {first: 0x3001, last: 0x3020, class: CLASS_PUNCTUATION},    /* ideographic punctuation */
  {first: 0x3030, last: 0x3030, class: CLASS_PUNCTUATION},
  {first: 0x303d, last: 0x303d, class: CLASS_PUNCTUATION},
  {first: 0x3040, last: 0x309f, class: CLASS_HIRAGANA}, /* Hiragana */
  {first: 0x30a0, last: 0x30ff, class: CLASS_KATAKANA}, /* Katakana */
  {first: 0x3300, last: 0x9fff, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
  {first: 0xac00, last: 0xd7a3, class: CLASS_HANGUL_SYLLABLES}, /* Hangul Syllables */
  {first: 0xf900, last: 0xfaff, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
  {first: 0xfd3e, last: 0xfd3f, class: CLASS_PUNCTUATION},
  {first: 0xfe30, last: 0xfe6b, class: CLASS_PUNCTUATION},    /* punctuation forms */
  {first: 0xff00, last: 0xff0f, class: CLASS_PUNCTUATION},    /* half/fullwidth ASCII */
  {first: 0xff1a, last: 0xff20, class: CLASS_PUNCTUATION},    /* half/fullwidth ASCII */
  {first: 0xff3b, last: 0xff40, class: CLASS_PUNCTUATION},    /* half/fullwidth ASCII */
  {first: 0xff5b, last: 0xff65, class: CLASS_PUNCTUATION},    /* half/fullwidth ASCII */
  {first: 0x20000, last: 0x2a6df, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
  {first: 0x2a700, last: 0x2b73f, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
  {first: 0x2b740, last: 0x2b81f, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
  {first: 0x2f800, last: 0x2fa1f, class: CLASS_CJK_IDEOGRAPHS}, /* CJK Ideographs */
];

const emojiAll = [
  {first: 0x203c, last: 0x203c},
  {first: 0x2049, last: 0x2049},
  {first: 0x2122, last: 0x2122},
  {first: 0x2139, last: 0x2139},
  {first: 0x2194, last: 0x2199},
  {first: 0x21a9, last: 0x21aa},
  {first: 0x231a, last: 0x231b},
  {first: 0x2328, last: 0x2328},
  {first: 0x23cf, last: 0x23cf},
  {first: 0x23e9, last: 0x23f3},
  {first: 0x23f8, last: 0x23fa},
  {first: 0x24c2, last: 0x24c2},
  {first: 0x25aa, last: 0x25ab},
  {first: 0x25b6, last: 0x25b6},
  {first: 0x25c0, last: 0x25c0},
  {first: 0x25fb, last: 0x25fe},
  {first: 0x2600, last: 0x2604},
  {first: 0x260e, last: 0x260e},
  {first: 0x2611, last: 0x2611},
  {first: 0x2614, last: 0x2615},
  {first: 0x2618, last: 0x2618},
  {first: 0x261d, last: 0x261d},
  {first: 0x2620, last: 0x2620},
  {first: 0x2622, last: 0x2623},
  {first: 0x2626, last: 0x2626},
  {first: 0x262a, last: 0x262a},
  {first: 0x262e, last: 0x262f},
  {first: 0x2638, last: 0x263a},
  {first: 0x2640, last: 0x2640},
  {first: 0x2642, last: 0x2642},
  {first: 0x2648, last: 0x2653},
  {first: 0x2660, last: 0x2660},
  {first: 0x2663, last: 0x2663},
  {first: 0x2665, last: 0x2666},
  {first: 0x2668, last: 0x2668},
  {first: 0x267b, last: 0x267b},
  {first: 0x267f, last: 0x267f},
  {first: 0x2692, last: 0x2697},
  {first: 0x2699, last: 0x2699},
  {first: 0x269b, last: 0x269c},
  {first: 0x26a0, last: 0x26a1},
  {first: 0x26aa, last: 0x26ab},
  {first: 0x26b0, last: 0x26b1},
  {first: 0x26bd, last: 0x26be},
  {first: 0x26c4, last: 0x26c5},
  {first: 0x26c8, last: 0x26c8},
  {first: 0x26ce, last: 0x26cf},
  {first: 0x26d1, last: 0x26d1},
  {first: 0x26d3, last: 0x26d4},
  {first: 0x26e9, last: 0x26ea},
  {first: 0x26f0, last: 0x26f5},
  {first: 0x26f7, last: 0x26fa},
  {first: 0x26fd, last: 0x26fd},
  {first: 0x2702, last: 0x2702},
  {first: 0x2705, last: 0x2705},
  {first: 0x2708, last: 0x270d},
  {first: 0x270f, last: 0x270f},
  {first: 0x2712, last: 0x2712},
  {first: 0x2714, last: 0x2714},
  {first: 0x2716, last: 0x2716},
  {first: 0x271d, last: 0x271d},
  {first: 0x2721, last: 0x2721},
  {first: 0x2728, last: 0x2728},
  {first: 0x2733, last: 0x2734},
  {first: 0x2744, last: 0x2744},
  {first: 0x2747, last: 0x2747},
  {first: 0x274c, last: 0x274c},
  {first: 0x274e, last: 0x274e},
  {first: 0x2753, last: 0x2755},
  {first: 0x2757, last: 0x2757},
  {first: 0x2763, last: 0x2764},
  {first: 0x2795, last: 0x2797},
  {first: 0x27a1, last: 0x27a1},
  {first: 0x27b0, last: 0x27b0},
  {first: 0x27bf, last: 0x27bf},
  {first: 0x2934, last: 0x2935},
  {first: 0x2b05, last: 0x2b07},
  {first: 0x2b1b, last: 0x2b1c},
  {first: 0x2b50, last: 0x2b50},
  {first: 0x2b55, last: 0x2b55},
  {first: 0x3030, last: 0x3030},
  {first: 0x303d, last: 0x303d},
  {first: 0x3297, last: 0x3297},
  {first: 0x3299, last: 0x3299},
  {first: 0x1f004, last: 0x1f004},
  {first: 0x1f0cf, last: 0x1f0cf},
  {first: 0x1f170, last: 0x1f171},
  {first: 0x1f17e, last: 0x1f17f},
  {first: 0x1f18e, last: 0x1f18e},
  {first: 0x1f191, last: 0x1f19a},
  {first: 0x1f1e6, last: 0x1f1ff},
  {first: 0x1f201, last: 0x1f202},
  {first: 0x1f21a, last: 0x1f21a},
  {first: 0x1f22f, last: 0x1f22f},
  {first: 0x1f232, last: 0x1f23a},
  {first: 0x1f250, last: 0x1f251},
  {first: 0x1f300, last: 0x1f321},
  {first: 0x1f324, last: 0x1f393},
  {first: 0x1f396, last: 0x1f397},
  {first: 0x1f399, last: 0x1f39b},
  {first: 0x1f39e, last: 0x1f3f0},
  {first: 0x1f3f3, last: 0x1f3f5},
  {first: 0x1f3f7, last: 0x1f4fd},
  {first: 0x1f4ff, last: 0x1f53d},
  {first: 0x1f549, last: 0x1f54e},
  {first: 0x1f550, last: 0x1f567},
  {first: 0x1f56f, last: 0x1f570},
  {first: 0x1f573, last: 0x1f57a},
  {first: 0x1f587, last: 0x1f587},
  {first: 0x1f58a, last: 0x1f58d},
  {first: 0x1f590, last: 0x1f590},
  {first: 0x1f595, last: 0x1f596},
  {first: 0x1f5a4, last: 0x1f5a5},
  {first: 0x1f5a8, last: 0x1f5a8},
  {first: 0x1f5b1, last: 0x1f5b2},
  {first: 0x1f5bc, last: 0x1f5bc},
  {first: 0x1f5c2, last: 0x1f5c4},
  {first: 0x1f5d1, last: 0x1f5d3},
  {first: 0x1f5dc, last: 0x1f5de},
  {first: 0x1f5e1, last: 0x1f5e1},
  {first: 0x1f5e3, last: 0x1f5e3},
  {first: 0x1f5e8, last: 0x1f5e8},
  {first: 0x1f5ef, last: 0x1f5ef},
  {first: 0x1f5f3, last: 0x1f5f3},
  {first: 0x1f5fa, last: 0x1f64f},
  {first: 0x1f680, last: 0x1f6c5},
  {first: 0x1f6cb, last: 0x1f6d2},
  {first: 0x1f6e0, last: 0x1f6e5},
  {first: 0x1f6e9, last: 0x1f6e9},
  {first: 0x1f6eb, last: 0x1f6ec},
  {first: 0x1f6f0, last: 0x1f6f0},
  {first: 0x1f6f3, last: 0x1f6f8},
  {first: 0x1f910, last: 0x1f93a},
  {first: 0x1f93c, last: 0x1f93e},
  {first: 0x1f940, last: 0x1f945},
  {first: 0x1f947, last: 0x1f94c},
  {first: 0x1f950, last: 0x1f96b},
  {first: 0x1f980, last: 0x1f997},
  {first: 0x1f9c0, last: 0x1f9c0},
  {first: 0x1f9d0, last: 0x1f9e6}
];

// This is JavaScript implementation of search.c:cls() in Vim source code.
function getCharClass(s, bigWord) {
  let cp;
  if (typeof s === 'number') {
    cp = s;
  } else if (typeof s !== 'string') {
    return undefined;
  } else if (s === '') {
    return CLASS_WHITESPACE;
  } else {
    cp = s.codePointAt(0);
  }

  if (cp === 0x20 || cp === 0x9 || cp == 0xA0) // ' ' || '\t' || '\xA0'
    return CLASS_WHITESPACE;
  cp = getUnicodeClass(cp);
  if (cp !== CLASS_WHITESPACE && bigWord)
    return CLASS_PUNCTUATION;
  return cp;
}

// This is JavaScript implementation of mbyte.c:utf_class() in Vim source code.
// 0: white space
// 1: punctuation
// 2 or bigger: some class of word character.
function getUnicodeClass(s) {
  let cp;
  if (typeof s === 'number') {
    cp = s;
  } else if (typeof s !== 'string') {
    return undefined;
  } else if (s === '') {
    return CLASS_WHITESPACE;
  } else {
    cp = s.codePointAt(0);
  }

  /* First quick check for Latin1 characters, use 'iskeyword'. */
  if (cp < 0x100) {
    if (cp === 0x20 || cp === 0x9 || cp == 0xA0) // ' ' || '\t' || '\xA0'
      return CLASS_WHITESPACE;            /* blank */
    if (isWordChar(cp))
      return CLASS_WORD;            /* word character */
    return CLASS_PUNCTUATION;            /* punctuation */
  }

  /* binary search in table */
  let bot = 0;
  let top = SORTED_CLASSES.length - 1;
  let mid;
  while (top >= bot) {
    mid = Math.floor((bot + top) / 2);
    if (SORTED_CLASSES[mid].last < cp)
      bot = mid + 1;
    else if (SORTED_CLASSES[mid].first > cp)
      top = mid - 1;
    else
      return SORTED_CLASSES[mid].class;
  }

  /* emoji */
  if (inTable(emojiAll, cp))
    return CLASS_EMOJI;

  /* most other characters are "word" characters */
  return CLASS_WORD;
}

// This is JavaScript implementation of mbyte.c:intable() in Vim source code.
function inTable(table, cp) {
  let mid, bot, top;

  /* first quick check for Latin1 etc. characters */
  if (cp < table[0].first)
    return false;

  /* binary search in table */
  bot = 0;
  top = table.length - 1;
  while (top >= bot) {
    mid = Math.floor((bot + top) / 2);
    if (table[mid].last < cp)
      bot = mid + 1;
    else if (table[mid].first > cp)
      top = mid - 1;
    else
      return true;
  }
  return false;
}

// This is JavaScript implementation of charset.c:vim_iswordc() in Vim source code.
function isWordChar(cp) {
  // '_' || '0' - '9' || 'A' - 'Z' || 'a' - 'z'
  return cp === 95 || 48 <= cp && cp <= 57 || 65 <= cp && cp <= 90 || 97 <= cp && cp <= 122;
}

function splitSegmentsByClass(text) {
  if (typeof text !== 'string' || text === '') {
    return [];
  }
  const cp = text.codePointAt(0)
  let curClass = getUnicodeClass(cp);
  let chars = [String.fromCodePoint(cp)];
  let segments = [];
  [...text].slice(1).forEach((c, i) => {
    const cls = getUnicodeClass(c);
    if (cls === curClass) {
      chars.push(c);
      return;
    }
    segments.push({
      class: curClass,
      text: chars.join(''),
    });
    chars = [c];
    curClass = cls;
  });
  if (chars.length > 0) {
    segments.push({
      class: curClass,
      text: chars.join(''),
    });
  }
  return segments;
}

module.exports = {
  CLASS_WHITESPACE,
  CLASS_PUNCTUATION,
  CLASS_WORD,
  CLASS_EMOJI,
  CLASS_SUPERSCRIPT,
  CLASS_SUBSCRIPT,
  CLASS_BRAILLE,
  CLASS_HIRAGANA,
  CLASS_KATAKANA,
  CLASS_CJK_IDEOGRAPHS,
  CLASS_HANGUL_SYLLABLES,
  getCharClass,
  getUnicodeClass,
  splitSegmentsByClass,
};
