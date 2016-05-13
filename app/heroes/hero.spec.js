System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Hero', function () {
                it('has name of Super Cat', function () {
                    var hero = { id: 1, name: 'Super Cat', color: 'blue' };
                    expect(hero.name).toEqual('Super Cat');
                });
                it('has id of 1', function () {
                    var hero = { id: 1, name: 'Super Cat', color: 'green' };
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map