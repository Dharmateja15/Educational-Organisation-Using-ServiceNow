function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {
      return;
   }

   var percentage = parseInt(newValue);

   if (percentage >= 0 && percentage <= 59) {
      g_form.setValue('u_result', 'Fail');

   } else if (percentage >= 60 && percentage <= 100) {
      g_form.setValue('u_result', 'Pass');

   } else {
      g_form.addErrorMessage('Percentage should be between 0 and 100.');
      g_form.clearValue('u_result');
   }

}
