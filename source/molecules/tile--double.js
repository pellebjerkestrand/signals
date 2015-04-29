define(['./tile--default-vm', 'text!./tile--double.tmpl.html'], function(vm, tmpl){
    return {
        viewModel: vm,
        template: tmpl
    };
});