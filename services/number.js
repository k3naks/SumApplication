/**
 * Created by yshybeka on 8/16/2017.
 */
var NumberService = {

    isNotNumeric: function (num) {
        return isNaN(num)
    },

    sumObject: function (first, second) {
        if (this.isNotNumeric(first) || this.isNotNumeric(second)) {
            throw new Error('Arguments for sum should be numeric')
        }
        return {
            'first': +first,
            'second': +second,
            'sum': (+first) + (+second)
        }
    }
}

module.exports = NumberService