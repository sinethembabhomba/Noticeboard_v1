angular.module('NTCB.provincialGovernment', [])

  .controller('ProvincialGovernmentMeetingListController', function($scope,$state,$ionicLoading,UpcomingAndCurrentMeetingServiceNationalGovernment){

  })

  .controller('ProvincialGovernmentmeetingDetailsController', function($scope,$state,$ionicLoading,UpcomingAndCurrentMeetingServiceNationalGovernment,$stateParams){

  })

  .controller('ProvincialGovernmentPastMeetingListController', function($scope,$state,HistoryOfPasttMeetingServiceNationalGovernment,$ionicLoading){

  })

  .controller('ProvincialGovernmentpastmeetingDetailsController', function($stateParams,$scope,$state,$ionicLoading,HistoryOfPasttMeetingServiceNationalGovernment){

  })
  .controller('ProvincialGovernmentPastEventListController', function($scope,$state,$ionicLoading,UpcomingAndCurrentEventsServiceNationalGovernment){

  })

  .controller('ProvincialGovernmentPastEventDetailsController', function($stateParams,$scope,$state,$ionicLoading,UpcomingAndCurrentEventsServiceNationalGovernment){

  })

  .controller('ProvincialGovernmentPastEventListController', function($ionicLoading,$scope,$state, PastEventsServiceNationalGovernment){

  })

  .controller('ProvincialGovernmentPastEventDetailsController', function($scope,$state,PastEventsServiceNationalGovernment,$ionicLoading,$stateParams){

  })
  .controller('ProvincialGovernmentEmployeesListController', function($scope, $stateParams,GovernmentEmployeeServiceInNational,$ionicLoading){

  })
  .controller('ProvincialGovernmentEmployeesDetailsController', function($scope,$state,$ionicLoading,$stateParams,GovernmentEmployeeServiceInNational){

  });

