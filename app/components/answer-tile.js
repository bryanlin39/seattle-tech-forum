import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswer2(params, answer) {
      this.sendAction('updateAnswer2', params, answer);
    },

    deleteAnswer2(answer) {
      this.sendAction('deleteAnswer2', answer);
    }
  }
});
