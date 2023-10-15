function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skill-members.html',
    controller: 'SkillMembersCtrl',
    controllerAs: 'skillMembersCtrl',
    bindToController: true,
    scope: {
      skill: '='
    }
  };
}