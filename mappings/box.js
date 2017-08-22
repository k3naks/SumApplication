/**
 * Created by yshybeka on 8/22/2017.
 */
const {BaseDTO, fields} = require('dtox')
const ItemDTO = require('./item')

const BOX_MAPPING = {
    Name: fields.string(),
    BoxType: fields.string(),
    Display: fields.string(),
    Items: fields.listWithDTO(ItemDTO, {default: [{}]})
}

class BoxDto extends BaseDTO {
    constructor(data) {
        super(data, BOX_MAPPING);
    }
}

module.exports = BoxDto
