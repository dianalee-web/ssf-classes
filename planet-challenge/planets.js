"use strict";
exports.__esModule = true;
var planet = /** @class */ (function () {
    function planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return planet;
}());
exports.planet = planet;
exports.krypton = new planet(25, 'red');
exports.omicronPersei8 = new planet(1, 'green');
exports.nemesis = new planet(2, 'blue');
