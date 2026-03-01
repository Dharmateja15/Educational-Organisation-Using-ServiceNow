function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading) {
      return;
   }

   var a = parseInt(g_form.getValue('u_telugu')) || 0;
   var b = parseInt(g_form.getValue('u_hindi')) || 0;
   var c = parseInt(g_form.getValue('u_english')) || 0;
   var d = parseInt(g_form.getValue('u_maths')) || 0;
   var e = parseInt(g_form.getValue('u_science')) || 0;
   var f = parseInt(g_form.getValue('u_social')) || 0;

   var Total = a + b + c + d + e + f;

   g_form.setValue('u_total', Total);

}
