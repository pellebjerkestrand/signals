define(['ko', 'text!./grid-init.tmpl.html'], function(ko, tmpl){
    function ViewModel(){
        var self = this;

        self.initialized = ko.observable(false);
        self.url = ko.observable('../api/datapoints.json');
        self.method = ko.observable('websocket');
        self.sleep = ko.observable(1000);

        self.gridOptions = ko.computed(function(){
            return {
                tiles: self.url(),
                method: self.method(),
                sleep: self.sleep()
            };
        });

        self.showInitializer = ko.computed(function(){
            return !self.initialized();
        });

        self.showGrid = ko.computed(function(){
            return self.initialized();
        });

        self.initialize = function(){
            self.initialized(true);
        };
    }

    return {
        viewModel: ViewModel,
        template: tmpl
    };
});