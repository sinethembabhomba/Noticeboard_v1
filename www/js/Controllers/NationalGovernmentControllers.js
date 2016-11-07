angular.module('NTCB.nationalGovernment', [])

  .controller('NationalGovernmentMeetingListController', function($scope,$state,$ionicLoading,UpcomingAndCurrentMeetingServiceNationalGovernment){

  })

  .controller('NationalGovernmentMeetingDetailsController', function($scope,$state,$ionicLoading,UpcomingAndCurrentMeetingServiceNationalGovernment,$stateParams){

    })

  .controller('NationalGovernmentPastMeetingListController', function($scope,$state,HistoryOfPasttMeetingServiceNationalGovernment,$ionicLoading){

  })

  .controller('NationalGovernmentPastMeetingDetailsController', function($stateParams,$scope,$state,$ionicLoading,HistoryOfPasttMeetingServiceNationalGovernment){

    })

  .controller('NationalGovernmentEventListController', function($scope,$state,UpcomingAndCurrentEventsServiceNationalGovernment){

  })

  .controller('NationalGovernmentEventDetailsController', function($stateParams,$scope,$state,$ionicLoading,UpcomingAndCurrentEventsServiceNationalGovernment){

  })

  .controller('NationalGovernmentPastEventListController', function($ionicLoading,$scope,$state, PastEventsServiceNationalGovernment){
  })

  .controller('NationalGovernmentPastEventDetailsController', function($scope,$state,PastEventsServiceNationalGovernment,$ionicLoading,$stateParams){

  })

  .controller('NationalGovernmentEmployeesListController', function($scope, $stateParams,GovernmentEmployeeServiceInNational,$ionicLoading){


  })
  .controller('NationalGovernmentEmployeesDetailsController', function($scope,$state,$ionicLoading,$stateParams,GovernmentEmployeeServiceInNational){

  });
