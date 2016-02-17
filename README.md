Object2dot
====
Description: This npm module is used to take a nested object and return an array of dot notation keys, return a new object where keys are dot notation or rebuild a flattened object.

	npm install object2dot --save

	var object2dot = require('object2dot');
	
methods:
	
	object2dot.keys(object) //returns array of keys.
	object2dot.flatten(object) //returns object flattened to dot notation.	
	object2dot.rebuild(flat_object) //returns object rebuild from flattened state 
	
Usage:	

	var nestedObj = {

    key1: {
        nest1: {
            value: '12341512'
        }
    },
    key2: {
        value: 'awef1234125qw2ef',
        value2: '234234'
    },
    key3: {
        nest1: {
            value: '1234134'
        },
        nest2: {
            value: '12341234',
            value2: '1234343'
        }
    }
	};	

	console.log(object2dot.keys(nestedObj));
	
	//Returns
	
	[ 'key1.nest1.value',
	  'key2.value',
	  'key2.value2',
	  'key3.nest1.value',
	  'key3.nest2.value',
	  'key3.nest2.value2' ]
	  
	console.log(object2dot.flatten(nestedObj));
	
	//returns
	
	var flatObj ={ 'key1.nest1.value': '12341512',
	  'key2.value': 'awef1234125qw2ef',
     'key2.value2': '234234',
     'key3.nest1.value': '1234134',
     'key3.nest2.value': '12341234',
     'key3.nest2.value2': '1234343' }
     
     console.log(object2dot.rebuild(flatObj));
     
     //returns 
     
     key1: {
        nest1: {
            value: '12341512'
        }
    },
     key2: {
        value: 'awef1234125qw2ef',
        value2: '234234'
    },
     key3: {
        nest1: {
            value: '1234134'
        },
        nest2: {
            value: '12341234',
            value2: '1234343'
        }
    } 
  
	  
	  
