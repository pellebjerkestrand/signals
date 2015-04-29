define(['./tile--default-vm', 'text!./tile--boolean.tmpl.html'], function(vm, tmpl){
    return {
        viewModel: vm,
        template: tmpl
    };
});