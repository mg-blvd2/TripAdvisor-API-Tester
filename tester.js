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

/*******Middleware*********/

function getCityCode(cityName) {
  return new Promise(function(resolve, reject) {
    let airportCode = {
      method: 'GET',
      url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
      qs: {locale: 'en_US', query: cityName},
      headers: {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
      }
    };
    request(airportCode, function(error, response, body) {
      if(error)  reject(Error("getCityCode error"));
      
      resolve(JSON.parse(body));
      
  });
 });
}

function startSession(flightDetails){
  return new Promise(function(resolve, reject) {
    let sessionStart = {
      method : 'GET',
      url : 'https://tripadvisor1.p.rapidapi.com/flights/create-session',
      qs : {
        currency : 'USD',
        o1 : flightDetails.origin,
        d1 : flightDetails.destination,
        dd1 : '2020-06-05'
      },
      headers: {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
      }
    }
    
    request(sessionStart, function(error, response, body) {
        if(error) reject(Error("start session error"));
        
        resolve(JSON.parse(body));
    });
  });
}

function pollSession(flightData) {
  return new Promise(function(resolve, reject){
    let sessionPoll = {
      method : 'GET',
      url : 'https://tripadvisor1.p.rapidapi.com/flights/poll',
      qs : {
        currency : 'USD',
        sid : flightData
      },
      headers: {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
      }
    }
    
    request(sessionPoll, function(error, response, body) {
        if(error) reject(Error('polling error'));
        
        resolve(JSON.parse(body));
    })
  });
}

function getURL(specificFlightInfo, currentId) {
  return new Promise(function(resolve, reject){
    let getBooking = {
      method : 'GET',
      url : 'https://tripadvisor1.p.rapidapi.com/flights/get-booking-url',
      qs : {
        Dest : specificFlightInfo.destination,
        Orig : specificFlightInfo.origin,
        searchId : specificFlightInfo.sid,
        id : currentId,
        searchHash : specificFlightInfo.sh
      },
      headers: {
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': 'ad1468446emshdc678975791152cp11a26fjsnc7d999beafe5'
      }
    }
    
    request(getBooking, function(error, response, body) {
        if(error) reject(Error('Problem getting the links'));
        
        resolve(JSON.parse(body));
    })
  });
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}


app.get('/', function(req, res){
  res.render('home');
});

app.get('/search', function(req, res){
  var flightDetails = {};
  
  var cityOne = getCityCode(req.query.starting);
  var cityTwo = getCityCode(req.query.ending);
  
  Promise.all([cityOne, cityTwo])
    .then(function(result){
      if(result[0][0].display_sub_title.includes('All Airports')) {
        flightDetails.origin = result[0][1].code;
      } else {
        flightDetails.origin = result[0][0].code;
      }
      
      if(result[1][0].display_sub_title.includes('All Airports')) {
        flightDetails.destination = result[1][1].code;
      } else {
        flightDetails.destination = result[1][0].code;
      }
      
      startSession(flightDetails)
        .then(function(result) {
          flightDetails.sid = result.search_params.sid;
          
          pollSession(flightDetails.sid)
            .then(function(result) {
              flightDetails.sh = result.summary.sh;
              
              if(result.summary.p === -1){
                res.send('no flights could be found');
              } else {
                var allFlights = [];
                
                result.itineraries.forEach(async (currentIt, index) => {
                  if(index % 5 === 0)
                    await sleep(1100);
                  allFlights.push(getURL(flightDetails, currentIt.l[0].id));
                });
                
                Promise.all(allFlights)
                  .then(function(result) {console.log(result); res.render('home')})
                  .catch(function(error) {throw error;});
              }
              
            })
            .catch(function(error) {throw error});
        })
        .catch(function(error) {throw error});
          
    })
    .catch(function(result){throw result;});
  
  //var sessionStart = startSession(flightDetails);
  

  
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})