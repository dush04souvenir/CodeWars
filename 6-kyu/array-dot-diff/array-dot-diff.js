//best practice 
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
function arrayDiff(a, b) {
    let result = [];
    for (let aval of a) {
        if (!b.includes(aval)) {
            result.push(aval);
        }
    }
    return result;
}
