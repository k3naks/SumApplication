const {BaseDTO, fields} = require('dtox')
const DOCUMENT_MAPPING = {
    Title: fields.string(),
    DocFormat: fields.string(),
    Url1: fields.string(),
    DocumentClasses: fields.list()
}

class DocumentDto extends BaseDTO {
    constructor(data) {
        super(data, DOCUMENT_MAPPING);
    }
}

module.exports = DocumentDto