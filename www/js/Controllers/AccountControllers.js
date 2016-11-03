angular.module('NTCB.AccountControllers', [])
  .controller('LoadingController', function ($state,$ionicPopup) {

    $state.go('login');
  })

  .controller('MainContainerController', function($scope) {

  })


  .controller('HomeController', function($scope) {

  })

  .controller('HomeSubscriptionsController', function($scope) {

  })

  .controller('CreateAccountController',function($scope,$ionicPopup,$state,ionicToast,$ionicLoading,UserProfileService){

  })

  .controller('ProfilePageController', function ($ionicScrollDelegate, $scope, $state, ionicToast, $ionicLoading, LocalStorageService, $filter, DB_CONSTANTS, ProfileFactory, $controller, $translate) {

  })

  .controller('loginController', function($scope,$state,$ionicPopup,LoginService,$ionicLoading,ionicToast){

  })
  .controller('SubscriptionsController', function($scope,$stateParams,UserSubscriptions,$ionicLoading){

  });
