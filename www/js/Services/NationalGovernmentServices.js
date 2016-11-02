angular.module('NTCB.NationalGovernmentServices', [])

  /* Upcoming And Current Events Service  */
  .service('UpcomingAndCurrentEventsServiceNationalGovernment',function($http, $q){


  })
  /*-----------------------------------------End of Upcoming And CurrentEvents Service------------------------------------------------------*/



  /* Upcoming And Current Events Service  */
  .service('PastEventsServiceNationalGovernment',function($http, $q){


      /*--------------------------------Ends here--------------------------------------------*/

      /* get specific event by event Id*/

      /*-------------------------------------Ends here------------------------------------------*/
      /*get speakers for a specific event using a event speaker ID*/


      /*----------------------------------------------------Ends here----------------------------------------------------------*/

      /*get event schedule using event Id */


      /*------------------------------------------------Ends here-----------------------------------------------------------------*/

      /*get location by event Id */

    /*------------------------------------Ends here--------------------------------------*/

  })
  /*-----------------------------------------End of Upcoming And CurrentEvents Service------------------------------------------------------*/



  /*get all upcoming and current meetings service*/
  .service('UpcomingAndCurrentMeetingServiceNationalGovernment', function($http, $q){

    /*----------------------------------Ends here----------------------------------------------------------*/
  })
  /*---------------------------------Service Ends here-----------------------------------*/



  /*get all past meetings minutes meetings service*/
  .service('HistoryOfPasttMeetingServiceNationalGovernment', function($http, $q){

    return{

      /*  get All Past Meetings function  */
      getAllPastMeetingsNationalGovernment:function(){
        var dfd = $q.defer();

        $http.get('').success(function(data){

          dfd.resolve(data);

        }).error (function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      },
      /*------------------------------Ends here-------------------------------------*/


      /*get single meeting details*/
      getPastMeetingDetailsByMeetingIdNationalGovernment:function(agendaByMeetingId){
        var dfd = $q.defer();
        var agenda = null;
        $http.get('Upcomingmeetings.json').success(function(data){
          for (var i = 0; i < data.length; i++) {
            if(data[i].id === parseInt(agendaByMeetingId))
            {
              agenda = data[i];
            }

          }
          dfd.resolve(data);

        }).error(function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      },

      /*------------------------------Ends here--------------------------------*/

      /*get minutes of a specific meeting by meeting Id function*/
      getMinutesOfPastMeetingIdNationalGovernment:function(minutesByMeetingId){
        var dfd = $q.defer();
        var agenda = null;
        $http.get('').success(function(data){
          for (var i = 0; i < data.length; i++) {
            if(data[i].id === parseInt(minutesByMeetingId))
            {
              agenda = data[i];
            }
          }
          dfd.resolve(data);

        }).error(function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      },


      /*------------------------------Ends here-----------------------------------------------*/

      /*get location of the specific meeting using meeting Id function*/
      getLocationByMeetingIdNationalGovernment:function(locationByMeetingId){
        var dft = $q.defer();
        var location = null;

        $http.get('').success(function(data){
          for (var i = 0; i < data.length; i++) {
            if(data[i].id=== parseInt(locationByMeetingId))
            {
              location = data[i];
            }
          }
          dfd.resolve(data);

        }).error(function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      }
    }
    /*----------------------------------Ends here----------------------------------------------------------*/
  })
  /*---------------------------------Service Ends here-----------------------------------*/



  /*Government employee service, to display list of the employees national government*/
  .service('GovernmentEmployeeServiceInNational', function($http, $q){
    return{
      getAllEmployeesForNationalGovernment:function(){
        var dfd = $q.defer();

        $http.get('Employees.json').success(function(data){

          dfd.resolve(data);

        }).error (function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      },
      viewfulldetailsOfAspecificEmployeeNationalGovernment:function(employeeId){

        var dfd = $q.defer();
        var employeeDetails= null;

        $http.get('Employees.json').success(function(data){

          for (var i =0; i<data.length; i++) {
            if(data[i].id === parseInt(employeeId))
            {
              employeeDetails = data[i];
            }
          }
          dfd.resolve(employeeDetails);

        }).error(function(data){
          dfd.reject(data);
        });
        return dfd.promise;
      }
    };
  });




