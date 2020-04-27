var express = require("express");
var app = express();

/* Configure our server to read public folder and ejs files */
app.set('view engine', 'ejs');
app.use(express.static('public'));
var request = require("request");

// var options = { 
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/flights/create-session',
//   qs: {
//     currency: 'USD',
//     ta: '',
//     tc: '',
//     c: '',
//     dd2: '',
//     o2: '',
//     d2: '',
//     ts: '',
//     d1: '',
//     o1: '',
//     dd1: '',
//   },
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5',
//   },
// };

/*
  Notes:
    Don't change the header

    qs Required parameters:
    - d1: The airport code of the first destination
    - o1: Airport code of first origin
    - dd1: The first departure date from first origin

    qs Optional parameters:
    - currency: The currency code
    ta: Number of adults
    tc: The age of every children seperated by comma
    c: Cabin code {0 = Economy, 1 = Business Class, 2 = First class, 3 = Premium Economy}
    dd2: Departure date of second origin
    o2: The airport code of second origin
    d2: The airport code of second destination location 
    ts: The number of seniors
*/

// var options = {
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/flights/poll',
//   qs: {
//     currency: 'USD',
//     n: '15',
//     ns: 'NON_STOP%2CONE_STOP',
//     so: 'PRICE',
//     o: '0',
//     sid: '',
//     mc: '',
//     ca: '',
//     am: '',
//   },
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5',
//   },
// };

/*
  Notes:
  Don't change the header

  qs Required Parameters:
  - sid: The value of sid returned in the create-session results

  qs Optional Parameters:
  - curreny: The currency code
  - mc: check for suitable valur of the "summary/cp" or "summary/ocp" fields
        returned in the create session results
  - ca: Check for suitable value of "summary/ap" field returned in the create
        session results
  - n: The number of item per response
  - ns: NON_STOP, ONE_STOP, or TWO_PLUS seperated by comma for multiple
  - so: check for so in create-session results
  - am: check for value in "itineraries/ac" returned in the create-session
  - o: The offset of items to be ingored in resposne for paging 
*/

// var options = {
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/flights/get-booking-url',
//   qs: {
//     searchHash: '<required>',
//     Dest: '<required>',
//     id: '<required>',
//     Orig: '<required>',
//     searchId: '<required>'
//   },
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
//   }
// };

/*
Notes
Don't change header

qs required parameters:
- searchHash : the value of summary/sh field returned in response of the
               create-session
- Dest : airport code of destination
- id : The value of itineraries/l/id field retuend in the poll
- Orig : airport code of origin
- searchId : the value of search_params/sid field returned in the create-session

qs optional parameters:
impressionId : the value of itineraries/l/impressionId returned in poll
*/

//*****************************GET AIRPORT****************************************
// var options = {
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
//   qs: {locale: 'en_US', query: 'new york'},
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
//   }
// };


// var options = {
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/flights/create-session',
//   qs: {
//     currency: 'USD',
//     ta: '1',
//     d1: endingLocation,
//     o1: startingLocation,
//     dd1: '2020-05-01'
//   },
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
// 	var newBody = JSON.parse(body);
	
// 	var poll = {
//     method: 'GET',
//     url: 'https://tripadvisor1.p.rapidapi.com/flights/poll',
//     qs: {
//       currency: 'USD',
//       n: '15',
//       ns: "NON_STOP,ONE_STOP",
//       sid: newBody.search_params.sid
//     },
//     headers: {
//       'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//       'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5',
//     },
//   };
  
//   request(poll, function(error, response, body){
//     if(error) throw new Error(error);
    
//     var poll_body = JSON.parse(body);
    
    
//     var url_request = {
//       method: 'GET',
//       url: 'https://tripadvisor1.p.rapidapi.com/flights/get-booking-url',
//       qs: {
//         searchHash: newBody.summary.sh,
//         Dest: endingLocation,
//         id: poll_body.itineraries[0].l[0].id,
//         Orig: startingLocation,
//         searchId: newBody.search_params.sid
//       },
//       headers: {
//         'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//         'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
//       }
//     };
    
//     request(url_request, function(error, response, body) {
//         if(error) throw new Error(error);
        
//         var url_body = JSON.parse(body);
//         console.log(url_body.partner_url);
//     });

//   });

// });



app.get('/', function(req, res){
  res.render('home');
});

app.get('/search', function(req, res){
  
  var getDeparting = {
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
    qs: {locale: 'en_US', query: req.query.starting},
    headers: {
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
    }
  };
  
  var getLanding = {
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
    qs: {locale: 'en_US', query: req.query.ending},
    headers: {
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
    }
  };
  
  request(getDeparting, function(error, response, body){
   
    var departingBody = JSON.parse(body);
    
    request(getLanding, function(error, response, body) {
        
        var landingBody = JSON.parse(body);
        
        var endingLocation = landingBody[0].code;
        var startingLocation = departingBody[0].code;
        
        var options = {
          method: 'GET',
          url: 'https://tripadvisor1.p.rapidapi.com/flights/create-session',
          qs: {
            currency: 'USD',
            ta: '1',
            d1: endingLocation,
            o1: startingLocation,
            dd1: '2020-05-01'
          },
          headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
          }
        };
        
        request(options, function (error, response, body) {
        	if (error) throw new Error(error);
        	var newBody = JSON.parse(body);
        	
        	var poll = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/flights/poll',
            qs: {
              currency: 'USD',
              n: '15',
              ns: "NON_STOP,ONE_STOP",
              sid: newBody.search_params.sid
            },
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5',
            },
          };
          
          request(poll, function(error, response, body){
            if(error) throw new Error(error);
            
            var poll_body = JSON.parse(body);
            
            
            var url_request = {
              method: 'GET',
              url: 'https://tripadvisor1.p.rapidapi.com/flights/get-booking-url',
              qs: {
                searchHash: newBody.summary.sh,
                Dest: endingLocation,
                id: poll_body.itineraries[0].l[0].id,
                Orig: startingLocation,
                searchId: newBody.search_params.sid
              },
              headers: {
                'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
                'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
              }
            };
            
            request(url_request, function(error, response, body) {
                if(error) throw new Error(error);
                
                var url_body = JSON.parse(body);
                res.render('results', {url: url_body.partner_url});
            });
        
          });
        
        });
    });
  });
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})