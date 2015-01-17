module.exports = function substitute(str, obj) {
    return str.replace((/\\?\{([^{}]+)\}/g), function(match, name){
        if (match.charAt(0) == '\\') return match.slice(1);
        return (obj[name] != null) ? obj[name] : '';
    });};

// http://stackoverflow.com/questions/2621170/has-any-method-like-substitute-of-mootools-in-jquery
// https://github.com/mootools/mootools-core/blob/20b395409152e5c88964c51a1d81d813e26cdb1c/Source/Types/String.js
