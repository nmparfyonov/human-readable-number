module.exports = function toReadable(number) {
    const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const double = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number <= 19) {
        return single[number]
    }
    else if (number < 100) {
        return double[Math.floor(number / 10)] + (number % 10 != 0 ? ' ' + single[number % 10] : '')
    } else if (number < 1000) {
        if (number % 100 == 0) {
            return single[number / 100] + ' hundred'
        } else if (number % 100 < 20) {
            return single[Math.floor(number / 100)] + ' hundred ' + single[number % 100]
        } else {
            return single[Math.floor(number / 100)] + ' hundred ' + double[Math.floor(number % 100 / 10)] + (number % 10 != 0 ? ' ' + single[number % 10] : '')
        }
    } else {
        return 'Thousand and more'
    }
}
