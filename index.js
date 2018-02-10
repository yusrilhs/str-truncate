(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        factory();
    }
}(this, function () {
    /**
     * Truncate String
     * @param  {Number} length
     * @param  {String} clamp
     * @return {String}
     */
    String.prototype.truncate = function(length, clamp) {
        clamp = clamp || '...';

        // Return original when length is satisfied
        if (this.length <= length) return this;

        var cpText = this.slice(0, length - clamp.length);
        var last = cpText.length - 1;

        while (last > 0 && cpText[last] !== ' ' && cpText[last] !== clamp[0]) {
          last -= 1;
        }

        last = last || length - clamp.length;

        return cpText.slice(0, last) + clamp;
    };

}));
