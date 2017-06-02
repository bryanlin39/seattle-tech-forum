import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    updateQuestion2(params, question) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },

    deleteQuestion2(question) {
      var answers_to_delete = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answers_to_delete).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    submitAnswer2(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
    },

    updateAnswer3(params, answer) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },

    deleteAnswer3(answer) {
      answer.destroyRecord();
    }

  }
});
