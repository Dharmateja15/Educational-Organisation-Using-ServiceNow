function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {
      return;
   }

   // Calculate Percentage from Total
   if (newValue) {

      var total = parseInt(g_form.getValue('u_total'));

      // 6 subjects, each out of 100 → total max = 600
      var percentage = (total / 600) * 100;

      // Round to 2 decimal places
      percentage = percentage.toFixed(2);

      g_form.setValue('u_percentage', percentage);

   }
}
