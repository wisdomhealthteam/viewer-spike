Template.studyBrowser.helpers({
  studies : function() {
    var studies = Session.get('studies');
    //console.log(studies);
    return studies;
  }
});