import Ember from 'ember';

export default Ember.Component.extend({
  questionForm: false,

  actions: {
    showQuestionForm: function() {
      this.set('questionForm', true);
    },

    submitQuestion1: function() {
      var date = new Date();
      var params = {
        date: date.toDateString(),
        title: this.get('question-title'),
        author: this.get('question-author'),
        notes: this.get('question-notes')
      };
      this.set('questionForm', false);
      this.set('question-title', '');
      this.set('question-author', '');
      this.set('question-notes', '');
      this.sendAction('submitQuestion1', params);
    },

    hideQuestionForm: function() {
      this.set('questionForm', false);
      this.set('question-title', '');
      this.set('question-author', '');
      this.set('question-notes', '');
    }
  }
});
