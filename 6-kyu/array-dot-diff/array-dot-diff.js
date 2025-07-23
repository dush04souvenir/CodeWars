function arrayDiff(a, b) {
    let result = [];
    for (let aval of a) {
        if (!b.includes(aval)) {
            result.push(aval);
        }
    }
    return result;
}