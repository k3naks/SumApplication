/**
 * Created by yshybeka on 8/21/2017.
 */
const {BaseDTO, fields} = require('dtox')
const TAB_MAPPING = {
    Name: fields.string(),
    Value: fields.string(),
    Count: fields.number(),
    ResultsViewsInTab: fields.list()
}

class TabDto extends BaseDTO {
    constructor(data) {
        super(data, TAB_MAPPING);
    }
}

module.exports = TabDto