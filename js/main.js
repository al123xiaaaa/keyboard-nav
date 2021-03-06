const keys = {
    '0': {
        0: 'q',
        1: 'w',
        2: 'e',
        3: 'r',
        4: 't',
        5: 'y',
        6: 'u',
        7: 'i',
        8: 'o',
        9: 'p',
        length: 10
    },
    '1': {
        0: 'a',
        1: 's',
        2: 'd',
        3: 'f',
        4: 'g',
        5: 'h',
        6: 'j',
        7: 'k',
        8: 'l',
        length: 9
    },
    '2': {
        0: 'z',
        1: 'x',
        2: 'c',
        3: 'v',
        4: 'b',
        5: 'n',
        6: 'm',
        length: 7
    },
    'length': 3
};

const hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
};


let row = 0;
while (row < keys.length) {
    let keysLine = document.createElement('div');
    for (let col = 0; col < keys[row].length; col++) {
        let key = document.createElement('kbd');
        key.textContent = keys[row][col];
        keysLine.appendChild(key)
    }
    kb.appendChild(keysLine);
    row = row + 1
}

document.onkeypress = function (ev) {
    let website = hash[ev.key];
    location.href = 'http://' + website;
};