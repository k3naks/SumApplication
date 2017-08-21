/**
 * Created by yshybeka on 8/21/2017.
 */

const {BaseDTO, BaseListDTO, fields} = require('dtox')
const TabDto = require('./tab')

const SEARCH_MAPPING = {
    Engine: fields.string(),
    DocumentCount: fields.number(),
    TotalCount: fields.number(),
    PageCount: fields.number(),
    CurrentPage: fields.number(),
    DocumentsPerPage: fields.number(),
    DocumentsThisPage: fields.number(),
    Tabs: fields.listWithDTO(TabDto)
};


class SearchDTO extends BaseDTO {
    constructor(data) {
        super(data, SEARCH_MAPPING);
    }
}

module.exports = SearchDTO

