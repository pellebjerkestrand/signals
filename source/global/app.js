require(['ko', 'molecules/tile--debug'], function(ko){
    ko.components.register('tile--debug', {
        require: 'molecules/tile--debug'
    });

    ko.applyBindings();
});