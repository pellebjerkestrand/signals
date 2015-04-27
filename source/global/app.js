require([
    'ko',
    'organisms/grid',
    'organisms/grid-init',
    'molecules/tile--boolean',
    'molecules/tile--debug',
    'molecules/tile--double',
    'molecules/tile--int',
    'molecules/tile--string'], function(ko, grid, gridInit, booleanTile, debugTile, doubleTile, intTile, stringTile){
    ko.components.register('grid', {
        require: 'organisms/grid'
    });

    ko.components.register('grid-init', {
        require: 'organisms/grid-init'
    });

    ko.components.register('tile--boolean', {
        require: 'molecules/tile--boolean'
    });

    ko.components.register('tile--debug', {
        require: 'molecules/tile--debug'
    });

    ko.components.register('tile--double', {
        require: 'molecules/tile--double'
    });

    ko.components.register('tile--int', {
        require: 'molecules/tile--int'
    });

    ko.components.register('tile--string', {
        require: 'molecules/tile--string'
    });

    ko.applyBindings();
});