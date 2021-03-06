import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    submitQuestion2(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    }
  }
});
