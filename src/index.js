module.exports = function toReadable(number) {
    const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const double = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const splitNumber = number.toString().split('').map(x => +x)
    if (number <= 19) {
        return single[number]
    }
    else if (number < 100) {
        return double[splitNumber[0]] + (splitNumber[1] != 0 ? ' ' + single[splitNumber[1]] : '')
    } else if (number < 1000) {
        if (splitNumber[1] == 0 && splitNumber[2] == 0) {
            return single[splitNumber[0]] + ' hundred'
        } else if (splitNumber[1] == 1 || splitNumber[1] == 0) {
            return single[splitNumber[0]] + ' hundred ' + single[number % 100]
        } else {
            return single[splitNumber[0]] + ' hundred ' + double[splitNumber[1]] + (splitNumber[2] != 0 ? ' ' + single[splitNumber[2]] : '')
        }
    } else {
        return 'More than a thousand'
    }
}
