define(['./tile--default-vm', 'text!./tile--int.tmpl.html'], function(vm, tmpl){
    return {
        viewModel: vm,
        template: tmpl
    };
});