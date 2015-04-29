define(['./tile--default-vm', 'text!./tile--string.tmpl.html'], function(vm, tmpl){
    return {
        viewModel: vm,
        template: tmpl
    };
});