angular.module('NTCB.localGovernment', [])
  .controller('LocalGovernmentMeetingListController', function($ionicLoading,ionicToast,$scope,$state, UpcomingAndCurrentMeetingServiceLocalGovernment){

  })
  .controller('LocalGovernmentMeetingDetailsController', function($stateParams,$ionicLoading,ionicToast,$scope,$state,UpcomingAndCurrentMeetingServiceLocalGovernment){

  })

  .controller('LocalGovernmentPastMeetingListController', function($ionicLoading,ionicToast,$stateParams,$scope,$state,HistoryOfPasttMeetingServiceLocalGovernment){

  })

  .controller('LocalGovernmentpastmeetingDetailsController', function($ionicLoading,ionicToast,$stateParams,$scope,$state,HistoryOfPasttMeetingServiceLocalGovernment){

  })


  .controller('LocalGovernmentEventListController', function($scope,$state,UpcomingAndCurrentEventsServiceLocalGovernment,$ionicLoading,ionicToast){

  })
  .controller('LocalGovernmentEventDetailsController', function($stateParams,$scope,$state,UpcomingAndCurrentEventsServiceLocalGovernment,$ionicLoading,ionicToast){

  })

  .controller('LocalGovernmentPastEventListController', function($stateParams,$scope,$state,PastEventsServiceLocalGovernment,$ionicLoading,ionicToast){

  })
  .controller('LocalGovernmentPastEventDetailsController', function($stateParams,$scope,$state,PastEventsServiceLocalGovernment,$ionicLoading,ionicToast){

  })

  .controller('LocalGovernmentEmployeesListController', function($scope,$state,LocalGovernmentEmployeeService,$ionicLoading,ionicToast){

  })

  .controller('LocalGovernmentEmployeesDetailsController', function($scope,$state,LocalGovernmentEmployeeService,$stateParams,$ionicLoading,ionicToast){

  });
