const log4js = require('log4js');

const LOG_MAX_SIZE    = 262144;
const LOG_QTY_BACKUP  = 10;
const LOG_LEVEL_OUT   = 'trace' // trace, debug, info, warn, error, fatal
const LOG_LEVEL_MULTI = 'warn' // trace, debug, info, warn, error, fatal

log4js.configure({
    appenders: { 
        out: {type: "console"},
        multi: {
            type: 'multiFile', base: 'logs/', property:'categoryName', extension: '.log',
            maxLogSize: LOG_MAX_SIZE, backup: LOG_QTY_BACKUP, compress:false
        },
        _out: { type: 'logLevelFilter', appender: 'out', level: LOG_LEVEL_OUT},
		_multi: { type: 'logLevelFilter', appender: 'multi', level: LOG_LEVEL_MULTI}
    },
    categories: { 
        default: { appenders: ['_out','_multi'], level: "trace" } }
});

module.exports = log4js;