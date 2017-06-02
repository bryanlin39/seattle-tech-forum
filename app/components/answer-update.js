import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    showUpdateAnswer: function() {
      this.set('updateAnswerForm', true);
    },

    updateAnswer1: function(answer) {
      var params = {
        content: this.get('update-answer-content')
      };
      this.set('updateAnswerForm', false);
      this.set('update-answer-content', '');
      this.sendAction('updateAnswer1', params, answer)
    },

    deleteAnswer1: function(answer) {
      this.sendAction('deleteAnswer1', answer)
    },

    hideUpdateAnswer: function() {
      this.set('updateAnswerForm', false);
      this.set('update-answer-content', '');
    }
  }
});
