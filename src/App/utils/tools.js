export function leftPad(str, count) {
    return Array(Math.max(0, count - ('' + str).length + 1)).join(0) + str;
}

export function curDate() {
    var date = new Date();
    return leftPad(date.getFullYear(), 4) +
          leftPad(date.getMonth() + 1, 2) +
          leftPad(date.getDate(), 2) +
          leftPad(date.getHours(), 2) +
          leftPad(date.getMinutes(), 2) +
          leftPad(date.getSeconds(), 2);
}

