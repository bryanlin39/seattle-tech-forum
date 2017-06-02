import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,

  actions: {
    showAnswerForm: function() {
      this.set('answerForm', true);
    },

    submitAnswer1: function() {
      var date = new Date();
      var params = {
        date: date.toDateString(),
        content: this.get('answer-content'),
        author: this.get('answer-author'),
        question: this.get('question')
      };
      this.set('answerForm', false);
      this.set('answer-content', '');
      this.set('answer-author', '');
      this.sendAction('submitAnswer1', params)
    },

    hideAnswerForm: function() {
      this.set('answerForm', false);
      this.set('answer-content', '');
      this.set('answer-author', '');
    }
  }
});
