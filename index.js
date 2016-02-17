var object2dot = {
    keys: function (obj) {
        var r = {};
        (function object2dot(obj, current) {
            for (var key in obj) {
                var value = obj[key];
                var nKey = (current ? current + "." + key : key);
                if (value && typeof value === "object") {
                    //if current key in object value is object then loop again
                    object2dot(value, nKey);
                } else {
                    //if at the end of the nest add the new key and its value to the return object
                    r[nKey] = value;
                }
            }
        })(obj);
        return Object.keys(r)

    },
    flatten: function (obj) {
        var r = {};
        (function object2dot(obj, current) {
            for (var key in obj) {
                var value = obj[key];
                var nKey = (current ? current + "." + key : key);
                if (value && typeof value === "object") {
                    //if current key in object value is object then loop again
                    object2dot(value, nKey);
                } else {
                    //if at the end of the nest add the new key and its value to the return object
                    r[nKey] = value;
                }
            }
        })(obj);
        return r

    },
    rebuild: function (flat_obj) {
        obj = {};
        for(key in flat_obj) {
        (function nest(path, value) {
            var builder = obj;
            var nestList = path.split('.');
            for (var i = 0; i < nestList.length - 1; i++) {
                var current = nestList[i];
                if (!builder[current] && isNaN(parseInt(nestList[i+1])) === true) {
                  builder[current] = {}
                }else if(!builder[current] && isNaN(parseInt(nestList[i+1])) === false) {
                   builder[current] = [];
                } {
                    builder = builder[current];
                }
            }
            if(Array.isArray(builder[nestList[nestList.length - 1]])){
              builder[nestList[nestList.length - 1]].push(value)
            } else {
               builder[nestList[nestList.length - 1]]= value;
            }
        })(key,flat_obj[key]);
        }
        return obj;
    }
};
module.exports = object2dot;



