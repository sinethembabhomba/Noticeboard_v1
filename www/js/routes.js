angular.module('NTCB.Routers', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
     // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
   // Each state's controller can be found in controllers.js
  $stateProvider


  .state('loading', {
        url: '/0',
        cache: false,
        templateUrl: 'menu/loading.html',
        controller: 'LoadingController'
    })


   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'menu/menu.html',
    controller: 'MainContainerController'
  })

 /*dash board page*/
  .state('app.dashboard', {
      url: '/dashboard',
        views:{
        'menuContent':{
         templateUrl: 'menu/dashboard.html'
         }
       }
    })

  /*Profile page*/
  .state('app.profile', {
      url: '/profile',
        views:{
        'menuContent':{
      controller: 'MembersProfileController',
      templateUrl: 'Templates/Authentication/profile.html'
         }
      }
    })
    /*---------------------Ends here------------------------------------*/
/*About us page*/
 .state('aboutus', {
      url: '/aboutus',
      templateUrl: 'Templates/Authentication/aboutus.html'
    })

/*Personal details and residential details tabs*/

 .state('app.personalAndResidentialDetails', {
      url: '/profileAndResidentialDetailsTabs',
        views:{
        'menuContent':{
         templateUrl: 'menu/profileTabs.html'
         }
  }})

.state('app.personalAndResidentialDetails.Personal', {
      url: '/personalDetails',
        views:{
        'personalDetails':{
      controller: 'PersonalDetailsController',
      templateUrl: 'Templates/ProfileDetails/personalDetails.html'
         }
      }
    })

.state('app.personalAndResidentialDetails.Residential', {
      url: '/residentialDetails',
        views:{
        'residentialDetails':{
         controller: 'ResidentialDetailsController',
         templateUrl: 'Templates/ProfileDetails/residentialDetails.html'
         }
      }
    })

/*--------------------------Ends here ---------------------------------*/

 /*login and forget password pages and their controllers*/

   .state('login', {
      url: '/login',
       cache: false,
      controller: 'loginController',
      templateUrl: 'Templates/Authentication/login.html'
    })

   .state('forgetpassword', {
      url: '/forgetpassword',
       cache: false,
      controller: 'forgetpasswordController',
      templateUrl: 'Templates/Authentication/forgetpassword.html'
    })
   /*---------------------------Ends here-------------------------------------*/
   /*Terms and conditions */
   .state('termsandconditions', {
      url: '/termsandconditions',
      templateUrl: 'Authentications/termsandconditions.html'
    })
   /*--------------------------------Ends here---------------------------------------------*/

/* create new account controller and its page*/

  .state('createaccount', {
      url: '/newaccount',
      controller: 'CreateAccountController',
      templateUrl: 'Templates/Authentication/createaccount.html'
    })

  /*--------------------------------------------------------------------------------------------*/



  /*  National government  pages */

.state('nationalgovernmentmenu', {
      url: '/nationalgovernmentmenupage',
      templateUrl: 'Templates/NationalGovernmentList/NationalGovernmentMenu.html'
    })
.state('nationalgovernmentmeetinglist',{
      url: '/nationalgovernmentMeetingList',
       cache: false,
          controller:'NationalGovernmentMeetingListController',
          templateUrl: 'Templates/NationalGovernmentList/NationalGovernmentMeetingsList.html'
        })
.state('nationalgovernmentmeetingDetails',{
  url:'nationalgovernmentMeetingList/:meetingId',
  controller :'NationalGovernmentMeetingDetailsController',
  templateUrl : 'Templates/NationalGovernmentDetails/meetingFullDetails.html'})
.state('nationalgovernmentpastmeetinglist',{
      url: '/nationalgovernmentPastMeetingList',
       cache: false,
          controller: 'NationalGovernmentPastMeetingListController',
          templateUrl: 'Templates/NationalGovernmentList/NationGovernmentPastMeetingsList.html'
        })
.state('nationalgovernmentpastmeetingdetails',{
     url : '/nationalgovernmentPastMeetingList:pastMeetingId',
     controller:'NationalGovernmentPastMeetingDetailsController',
     templateUrl : 'Templates/NationalGovernmentDetails/pastMeetingDetails.html'})
.state('nationalgovernmenteventlist',{
      url: '/nationalgovernmentEventList',
       cache: false,
          controller:'NationalGovernmentEventListController',
          templateUrl: 'Templates/NationalGovernmentList/NationalGovernmentEventsList.html'})
.state('app.nationalgovernmentEventDetails',{
      url : '/nationalgovernmentEventList/:eventId',
      templateUrl : 'Templates/NationalGovernmentDetails/eventFullDetails.html',
      controller : 'NationalGovernmentPastEventDetailsController'})
.state('nationalgovernmentpasteventlist',{
      url: '/nationalgovernmentPastEventList',
       cache: false,
          controller : 'NationalGovernmentPastEventListController',
          templateUrl: 'Templates/NationalGovernmentList/NationalGovernmentEventsList.html'
         })
.state('nationalgovernmentPastEventDetails'{
  url:'/nationalgovernmentPastEventList/:pastEventId',
  templateUrl : 'Templates/NationalGovernmentDetails/pastEventFullDetails.html',
  controller : 'NationalGovernmentPastEventDetailsController'})
.state('nationalgovernmentemployeeslist',{
      url: '/nationalgovernmentEmployeesList',
       cache: false,
          controller : 'NationalGovernmentEmployeesListController',
          templateUrl: 'Templates/NationalGovernmentList/NationalGovernmentEmployeesList.html'
           })
.state('nationalgovernmentemployeesDetails',{
      url: '/nationalgovernmentEmployeesList/:employeeid',
          templateUrl: 'Templates/NationalGovernmentDetails/employeeDetails.html',
          controller: 'NationalGovernmentEmployeesDetailsController' })
/*  provincial government  pages */
.state('provincialgovernmentmenu',{
      url: '/provincialgovernmentmenupage',
      templateUrl: 'Provincialgovernment/provincialgovernmentmenu.html'      
  })

.state('provincialgovernmentmeetinglist',{
      url: '/provincialgovernmentMeetingList',
       cache: false,
          controller:'ProvincialGovernmentMeetingListController',
          templateUrl: 'Provincialgovernment/provincialgovernmentmeetingslist.html'
      })

.state('provincialgovernmentpastmeetinglist',{
      url: '/provincialgovernmentPastMeetingList',
       cache: false,
          controller: 'ProvincialGovernmentPastMeetingListController',
          templateUrl: 'Provincialgovernment/provincialgovernmentpastmeetingslist.html'
         })

.state('provincialgovernmenteventlist',{
      url: '/provincialgovernmentEventList',
       cache: false, 
          controller:'ProvincialGovernmentEventListController',
          templateUrl: 'Provincialgovernment/provincialgovernmenteventlist.html'
         })

.state('provincialgovernmentpasteventlist',{
      url: '/provincialgovernmentPastEventList',
       cache: false,
       
          controller : 'ProvincialGovernmentPastEventListController',
          templateUrl: 'Provincialgovernment/provincialgovernmentpasteventlist.html'
         })

.state('provincialgovernmentemployeeslist',{
      url: '/provincialgovernmentEmployeesList',
       cache: false,
          controller : 'ProvincialGovernmentEmployeesListController',
          templateUrl: 'Provincialgovernment/provincialgovernmentemployeelist.html'
         })

.state('provincialgovernmentEmployeesDetails',{
      url: '/provincialgovernmentEmployeesList/:employeeid',
          templateUrl: 'ProvincialgovernmentDetails/provincialgovernmentemployeedetails.html',
          controller: 'ProvincialGovernmentEmployeesDetailsController'
        })

.state('provincialgovernmentjobpostslist',{
      url: '/provincialgovernmentjobpostsList',
       cache: false,
       
          controller : 'ProvincialGovernmentJobPostsListController',
          templateUrl: 'Provincialgovernment/provincialgovernmentjobpostslist.html'
         })

/* Local government  pages */
.state('locallgovernmentmenu',{
      url: '/localgovernmentmenupage',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentMenu.html'
        })

.state('localgovernmentmeetinglist',{
      url: '/localgovernmentMeetingList',
       cache: false,
          controller:'LocalGovernmentMeetingListController',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentMeetingList.html'
         })

.state('localgovernmentmeetingDetails',{
      url: '/localgovernmentMeetingList/:meetingid',
       cache: false,
          controller: 'LocalGovernmentmeetingDetailsController',
          templateUrl: 'Templates/LocalGovernmentDetails/meetingFullDetails.html'
         })

.state('localgovernmentpastmeetinglist',{
      url: '/localgovernmentpastMeetingList',
       cache: false,
          controller:'LocalGovernmentPastMeetingListController',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentPastMeetingList.html'
         })

.state('localgovernmentpastmeetingdetails',{
      url: '/localgovernmentpastMeetingList/:localgovernmentpastmeetingId',
       cache: false,
          controller:'LocalGovernmentPastMeetingDetailstController',
          templateUrl: 'Templates/LocalGovernmentDetails/pastMeetingFullDetails.html'
    })

.state('localgovernmenteventlist',{
      url: '/localgovernmenteventList',
       cache: false,
          controller:'LocalGovernmentEventListController',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentevEentList.html'
        })

.state('localgovernmenteventDetails',{
      url: '/localgovernmenteventList/:eventId',
       cache: false,
       templateUrl: 'Templates/LocalgovernmentDetails/eventFullDetails.html',
       controller: 'LocalGovernmentEventDetailsController' 
    })

.state('localgovernmentpasteventlist',{
      url: '/localgovernmentPastEventList',
        cache: false,
          controller : 'LocalGovernmentPastEventListController',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentPasteventsList.html'
         })

.state('localgovernmentpasteventDetails',{
      url: '/localgovernmentPastEventList/:eventId',
          templateUrl: 'Templates/LocalgovernmentDetails/pastEventFullDetails.html',
          controller: 'LocalGovernmentPastEventDetailsController' 
    })

.state('localgovernmentemployeeslist',{
      url: '/localgovernmentemployeeslist',
         cache: false,
          controller : 'LocalGovernmentEmployeesListController',
          templateUrl: 'Templates/LocalgovernmentList/localGovernmentEmployeeList.html'
         })

.state('localgovernmentemployeesDetails',{
      url: '/localgovernmentemployeeslist/:employeeid',
          templateUrl: 'Templates/LocalGovernmentDetails/employeeFullDetails.html',
          controller: 'LocalGovernmentEmployeesDetailsController' 
    })

/* subscription page tabs*/
 .state('app.subscriptiontab', {
      url: '/subscriptiontabs',
        views:{
        'menuContent':{
          templateUrl: 'menu/subscriptiontabs.html'
         }
      }})

 .state('app.subscriptiontab.otherareaofinterest', {
      url: '/OtherAreasOfInterest',
        views:{
        'otherareasafinterest':{
          controller:'OtherAreasOfInterestController',
           templateUrl: 'Templates/subscriptions/OtherAreasOfInterest.html'
           
         }
      }
    })
 .state('app.subscriptiontab.myLocation', {
      url: '/subscribe',
        views:{
        'subscriptions':{
      controller: 'SubscriptionsController',
      templateUrl: 'Templates/subscriptions/subscriptions.html'
         }
      }
    })
 /*--------------------------Ends here-------------------------------*/

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise("/0");
  $urlRouterProvider.otherwise('/login');
});