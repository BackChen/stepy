describe('validate', function() {
  'use strict';

  context('enabled', function() {
    context('fails', function() {
      it ('displays the error', function() {
        // given
        var self  = $('form').stepy({ validate: true }),
          steps = self.children('fieldset');

        self.validate({
          errorPlacement: function(error, element) {
            $('#stepy div.stepy-errors').append(error);
          }, rules: {
            'password':  'required'
          }, messages: {
            'password':  { required: 'Password field is requerid!' }
          }
        });

        // when
        steps.eq(1).find('.button-next').click();

        // then
        expect(self.find('.stepy-errors label.error').length).toEqual(1);
      });
    });
  });
});
