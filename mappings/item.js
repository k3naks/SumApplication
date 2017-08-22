const {BaseDTO, fields} = require('dtox')
const ITEM_MAPPING = {
    Name: fields.string({default: ''}),
    Value: fields.string({default: ''}),
    Count: fields.number({default: 0})
}

class ItemDto extends BaseDTO {
    constructor(data) {
        super(data, ITEM_MAPPING);
    }
}

module.exports = ItemDto
