
/**
 * Expose `tasks`.
 */

module.exports = tasks;

/**
 * Tasks.
 */

function tasks(){
  return {
    restrict: 'E',
    scope: {tasks: '='},
    template: require('./template.html'),
    transclude: true
  };
}

