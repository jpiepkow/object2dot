var object2dot = require('./index.js');
var nestedObj = {

    key1: {
        nest1: {
            value: '12341512'
        }
    },
    key2: {
        value: [{this:'wefwef',sfef:['qwefqwe','qwefqwef']},{wefef:'sdfwef'}],
        value2: '234234'
    },
    key3: {
        nest1: {
            value: '1234134'
        },
        nestArr : [{
           this1:'wefsdf',
           thouwehf:'wefasdpfoj',
           wefdf:'wefjhpi'
        },{
           this1:'wefsdf',
           thouwehf:'wefasdpfoj',
           wefdf:'wefjhpi'
        }],
        nest2: {
            value: '12341234',
            value2: '1234343'
        }
    }
};
var newObj = object2dot.flatten(nestedObj);
console.dir(object2dot.rebuild(newObj), {depth:5});
