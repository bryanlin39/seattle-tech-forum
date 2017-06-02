import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    showUpdateQuestion: function() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion1: function(question) {
      var params = {
        title: this.get('update-question-title'),
        notes: this.get('update-question-notes')
      };
      this.set('updateQuestionForm', false);
      this.set('update-question-title', '');
      this.set('update-question-notes', '');
      this.sendAction('updateQuestion1', params, question)
    },

    hideUpdateQuestion: function() {
      this.set('updateQuestionForm', false);
      this.set('update-question-title', '');
      this.set('update-question-notes', '');
    },

    deleteQuestion1: function(question) {
      this.sendAction('deleteQuestion1', question);
    }
  }
});
