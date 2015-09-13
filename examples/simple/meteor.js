
// Level 0
Router.route('/', {
  name: 'dashboard',
  template: 'dashboard',
  title: 'Dashboard',
  data: {name: 'Gandalf'}
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/analytics', {
  name: 'analytics',
  parent: 'dashboard',
  template: 'analytics',
  title: 'Analytics'
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/analytics/books', {
  name: 'analytics.books',
  parent: 'analytics',
  template: 'analyticsBooks',
  title: 'Category Books'
});

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/tags', {
  name: 'tags',
  parent: 'dashboard',
  template: 'tags',
  title: 'Taglist'
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/tag/:_name', {
  name: 'tag',
  parent: 'tags',
  template: 'tagDetail',
  title: 'Detailpage for :_name',
  data: function () {
    return this.params;
  },
});
