define(['ko', 'text!./grid.tmpl.html', 'reqwest'], function(ko, tmpl, reqwest){
    function ViewModel(params){
        var self = this;

        self.options = params;

        self.availableTiles =  ko.observableArray([]);
        self.activeTiles =  ko.observableArray([]);

        self.showActiveGrid = ko.computed(function(){
            return self.activeTiles().length > 0;
        });

        self.showPicker = ko.computed(function(){
            return !self.showActiveGrid();
        });

        reqwest({
            url: self.options.tiles,
            method: 'get',
            success: function(response){
                // TODO: set available tiles and make a picker that sets active tiles
                self.activeTiles(response);
            },
            error: function(error){
                // TODO: Proper logging
                console.log(error);
            }
        });
    }

    return {
        viewModel: ViewModel,
        template: tmpl
    };
});