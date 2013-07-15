$.extend($.fn, {
    unparam:   function (p) {
        var ret = {},
        seg = p.replace(/^.*\?/, '').split('&'),
        len = seg.length, i = 0, s;
        for (; i < len; i++) {
            if (!seg[i]) { continue; }
            s = seg[i].split('=');
            ret[s[0]] = s[1];
        }
        return ret;
    }
});

var spec_utils = {
    getPropertyNames: function(object) {
        var propertyNames = [];
        for (var propertyName in object) {
            propertyNames.push(propertyName);
        }
        return propertyNames;
    }
};

var using = function (name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }
        func.apply(this, values[i]);
        jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
}

