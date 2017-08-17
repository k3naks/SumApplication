/**
 * Created by yshybeka on 8/17/2017.
 */
var nconf = require('nconf');
var path = require('path');

nconf.argv().
env().
file({file : path.join(__dirname, 'config.json')});

module.exports = nconf;