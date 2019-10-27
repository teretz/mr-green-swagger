
/*
 * Swagger Petstore
 *
 * This is a sample Petstore server.  You can find
 * out more about Swagger at
 * [http://swagger.io](http://swagger.io) or on
 * [irc.freenode.net, #swagger](http://swagger.io/irc/).
 */


var teretz = require("./routes/teretz.js");

state.closingIndicators = state.closingIndicators || {}
var closingIndicatorsMap = state.closingIndicators

state.trendIndicators = state.trendIndicators || {}
var trendIndicatorsMap = state.trendIndicators

state.momentumIndicators = state.momentumIndicators || {}
var momentumIndicatorsMap = state.momentumIndicators



/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/teretz/scratch/1.0.0/pet", "PUT", teretz.putTeretzScratch1_0_0Pet);
Sandbox.define("/teretz/scratch/1.0.0/pet", "POST", teretz.postTeretzScratch1_0_0Pet);
Sandbox.define("/teretz/scratch/1.0.0/pet/findByStatus", "GET", teretz.getTeretzScratch1_0_0PetFindbystatus);
Sandbox.define("/teretz/scratch/1.0.0/pet/findByTags", "GET", teretz.getTeretzScratch1_0_0PetFindbytags);
Sandbox.define("/teretz/scratch/1.0.0/pet/{petId}", "GET", teretz.getTeretzScratch1_0_0Pet);
Sandbox.define("/teretz/scratch/1.0.0/pet/{petId}", "POST", teretz.postTeretzScratch1_0_0Pet2);
Sandbox.define("/teretz/scratch/1.0.0/pet/{petId}", "DELETE", teretz.deleteTeretzScratch1_0_0Pet);
Sandbox.define("/teretz/scratch/1.0.0/pet/{petId}/uploadImage", "POST", teretz.postTeretzScratch1_0_0PetUploadimage);
Sandbox.define("/teretz/scratch/1.0.0/stop", "PUT", teretz.putTeretzScratch1_0_0Stop);
Sandbox.define("/teretz/scratch/1.0.0/stop", "POST", teretz.postTeretzScratch1_0_0Stop);
Sandbox.define("/teretz/scratch/1.0.0/stop/findByStatus", "GET", teretz.getTeretzScratch1_0_0StopFindbystatus);
Sandbox.define("/teretz/scratch/1.0.0/stop/findByTags", "GET", teretz.getTeretzScratch1_0_0StopFindbytags);
Sandbox.define("/teretz/scratch/1.0.0/stop/{stopId}", "GET", teretz.getTeretzScratch1_0_0Stop);
Sandbox.define("/teretz/scratch/1.0.0/stop/{stopId}", "POST", teretz.postTeretzScratch1_0_0Stop2);
Sandbox.define("/teretz/scratch/1.0.0/stop/{stopId}", "DELETE", teretz.deleteTeretzScratch1_0_0Stop);
Sandbox.define("/teretz/scratch/1.0.0/stop/{stopId}/uploadImage", "POST", teretz.postTeretzScratch1_0_0StopUploadimage);
Sandbox.define("/teretz/scratch/1.0.0/indicator", "PUT", teretz.putTeretzScratch1_0_0Indicator);
Sandbox.define("/teretz/scratch/1.0.0/indicator", "POST", teretz.postTeretzScratch1_0_0Indicator);
Sandbox.define('/teretz/scratch/1.0.0/indicator/findByType', 'GET', teretz.getTeretzScratch1_0_0IndicatorFindbystatus);
Sandbox.define("/teretz/scratch/1.0.0/indicator/findByTags", "GET", teretz.getTeretzScratch1_0_0IndicatorFindbytags);
Sandbox.define("/teretz/scratch/1.0.0/indicator/{indicatorId}", "GET", teretz.getTeretzScratch1_0_0Indicator);
Sandbox.define("/teretz/scratch/1.0.0/indicator/{indicatorId}", "POST", teretz.postTeretzScratch1_0_0Indicator2);
Sandbox.define("/teretz/scratch/1.0.0/indicator/{indicatorId}", "DELETE", teretz.deleteTeretzScratch1_0_0Indicator);
Sandbox.define("/teretz/scratch/1.0.0/indicator/{indicatorId}/uploadImage", "POST", teretz.postTeretzScratch1_0_0IndicatorUploadimage);
Sandbox.define("/teretz/scratch/1.0.0/contract", "PUT", teretz.putTeretzScratch1_0_0Contract);
Sandbox.define("/teretz/scratch/1.0.0/contract", "POST", teretz.postTeretzScratch1_0_0Contract);
Sandbox.define("/teretz/scratch/1.0.0/contract/findByStatus", "GET", teretz.getTeretzScratch1_0_0ContractFindbystatus);
Sandbox.define("/teretz/scratch/1.0.0/contract/findByTags", "GET", teretz.getTeretzScratch1_0_0ContractFindbytags);
Sandbox.define("/teretz/scratch/1.0.0/contract/{contractId}", "GET", teretz.getTeretzScratch1_0_0Contract);
Sandbox.define("/teretz/scratch/1.0.0/contract/{contractId}", "POST", teretz.postTeretzScratch1_0_0Contract2);
Sandbox.define("/teretz/scratch/1.0.0/contract/{contractId}", "DELETE", teretz.deleteTeretzScratch1_0_0Contract);
Sandbox.define("/teretz/scratch/1.0.0/contract/{contractId}/uploadImage", "POST", teretz.postTeretzScratch1_0_0ContractUploadimage);
Sandbox.define("/teretz/scratch/1.0.0/store/inventory", "GET", teretz.getTeretzScratch1_0_0StoreInventory);
Sandbox.define("/teretz/scratch/1.0.0/store/order", "POST", teretz.postTeretzScratch1_0_0StoreOrder);
Sandbox.define("/teretz/scratch/1.0.0/store/order/{orderId}", "GET", teretz.getTeretzScratch1_0_0StoreOrder);
Sandbox.define("/teretz/scratch/1.0.0/store/order/{orderId}", "DELETE", teretz.deleteTeretzScratch1_0_0StoreOrder);
Sandbox.define("/teretz/scratch/1.0.0/user", "POST", teretz.postTeretzScratch1_0_0User);
Sandbox.define("/teretz/scratch/1.0.0/user/createWithArray", "POST", teretz.postTeretzScratch1_0_0UserCreatewitharray);
Sandbox.define("/teretz/scratch/1.0.0/user/createWithList", "POST", teretz.postTeretzScratch1_0_0UserCreatewithlist);
Sandbox.define("/teretz/scratch/1.0.0/user/login", "GET", teretz.getTeretzScratch1_0_0UserLogin);
Sandbox.define("/teretz/scratch/1.0.0/user/logout", "GET", teretz.getTeretzScratch1_0_0UserLogout);
Sandbox.define("/teretz/scratch/1.0.0/user/{username}", "GET", teretz.getTeretzScratch1_0_0User);
Sandbox.define("/teretz/scratch/1.0.0/user/{username}", "PUT", teretz.putTeretzScratch1_0_0User);
Sandbox.define("/teretz/scratch/1.0.0/user/{username}", "DELETE", teretz.deleteTeretzScratch1_0_0User);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  routes
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/stops/:stopId','get', function(req, res){
    try{
        res.json(lookupObject(req.params.stopId, stopMap))
    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }
})
Sandbox.define('/v2/stops','post', function(req, res){
    var stop = {
        id: "ind_" + getId(),
        object: "stop",
        name: null,
        street1: req.body['stop[street1]'],
        street2: req.body['stop[street2]'],
        city: req.body['stop[city]'],
        state: req.body['stop[state]'],
        zip: req.body['stop[zip]'],
        country: req.body['stop[country]'],
        phone: req.body['stop[phone]'],
        email: req.body['stop[email]'],
        created_at:getCurrentTimestamp(),
        updated_at:getCurrentTimestamp()
    }

    stopMap[stop.id] = stop
    console.log("Added stop with id: " + stop.id)
    res.json(stop)
})

////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/contracts/:contractId','get', function(req, res){
    try{
        res.json(lookupObject(req.params.contractId, contractMap))
    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }
})
Sandbox.define('/v2/contracts','post', function(req, res){
    var contract = {
        id: "ind_" + getId(),
        object: "contract",
        name: null,
        purchasePrice: req.body["purchasePrice"],
        entryStrategy: req.body["entryStrategy"],
        exitStrategy: req.body["exitStrategy"],
        timeUntilFilled: req.body["timeUntilFilled"],
        tag00: req.body["tag00"],
        tag01: req.body["tag01"],
        tag02: req.body["tag02"],
        tag03: req.body["tag03"],
        tag04: req.body["tag04"],
        orderID: req.body["orderID"],
        breakevenPrice: req.body["breakevenPrice"],
        stopID: req.body["stopID"],
        leverage: req.body["leverage"],
        comission: req.body["comission"],
        
        created_at: getCurrentTimestamp(),
        updated_at: getCurrentTimestamp()
    }
    
    contractMap[contract.id] = contract
    console.log("Added contract with id: " + contract.id)
    res.json(indicator)
});

////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/indicators/{indicatorId}','get', function(req, res){
    try{
        res.json(lookupObject(req.params.indicatorId, indicatorMap));
    } catch(e) {
        res.json(400, { error: { message: e.message } });
    }
});

Sandbox.define('/v2/indicator/byType/{indicatorType}','get', function(req, res){
    var returned=[];
    if (req.params.indicatorType === "Closing"){
        returned= closingIndicatorsMap;
    }
    if (req.params.indicatorType === "Trend"){
        returned= trendIndicatorsMap;
    }
     res.json( returned);
});


Sandbox.define('/v2/indicators','post', function(req, res){
    var indicator = {
        id: "ind_" + getId(),
        object: "indicator",
        name: null,
        label: req.body["L"],
        type: req.body["type"],
        tag00: req.body["tag00"],
        tag01: req.body["tag01"],
        tag02: req.body["tag02"],
        tag03: req.body["tag03"],
        inReference: req.body["inReference"],
        status: req.body["status"],
        message: req.body["message"],
        weight: req.body["weight"],
        created_at: getCurrentTimestamp(),
        updated_at: getCurrentTimestamp()
    };
    
    indicatorMap[indicator.id] = indicator;
    
   if(indicator.type === "Closing"){        closingIndicatorsMap[indicator.id] = indicator;   }
    if(indicator.tag00 === "Closing"){        closingIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag01 === "Closing"){        closingIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag02 === "Closing"){        closingIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag03 === "Closing"){        closingIndicatorsMap[indicator.id] = indicator;   }
   
   if(indicator.type === "Trend" ){        trendIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag00 === "Trend"){        trendIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag01 === "Trend"){        trendIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag02 === "Trend"){        trendIndicatorsMap[indicator.id] = indicator;   }
   if(indicator.tag03 === "Trend"){        trendIndicatorsMap[indicator.id] = indicator;   }
   
    console.log("Added indicator with id: " + indicator.id + '||' + indicator.label +'||'+ indicator.type + '||' + indicator.status);
    res.json(indicator);
});

////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/addresses/:addressId','get', function(req, res){
    try{
        res.json(lookupObject(req.params.addressId, addressMap))
    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }
})
Sandbox.define('/v2/addresses','post', function(req, res){
    var address = {
        id: "adr_" + getId(),
        object: "Address",
        name: null,
        street1: req.body['address[street1]'],
        street2: req.body['address[street2]'],
        city: req.body['address[city]'],
        state: req.body['address[state]'],
        zip: req.body['address[zip]'],
        country: req.body['address[country]'],
        phone: req.body['address[phone]'],
        email: req.body['address[email]'],
        created_at:getCurrentTimestamp(),
        updated_at:getCurrentTimestamp()
    }

    addressMap[address.id] = address
    console.log("Added address with id: " + address.id)
    res.json(address)
})

////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/parcels/{parcelId}','get', function(req, res){
    try{
        res.json(lookupObject(req.params.parcelId, parcelMap))
    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }
})
Sandbox.define('/v2/parcels','post', function(req, res){
    var parcel = {
        id: "prcl_" + getId(),
        object:"Parcel",
        length: Number(req.body["parcel[length]"]),
        width: Number(req.body["parcel[width]"]),
        height: Number(req.body["parcel[height]"]),
        weight: Number(req.body["parcel[weight]"]),
        predefined_package: req.body["parcel[predefined_package]"],
        created_at:getCurrentTimestamp(),
        updated_at:getCurrentTimestamp()
    }

    parcelMap[parcel.id] = parcel
    console.log("Added parcel with id: " + parcel.id)
    res.json(parcel)

})

////////////////////////////////////////////////////////////////////////////////

Sandbox.define('/v2/shipments/{shipmentId}','get', function(req, res){
    try{
        res.json(lookupObject(req.params.shipmentId, shipmentMap))
    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }
})
Sandbox.define('/v2/shipments','post', function(req, res){
    var shipmentId = "shp_" + getId();

    try {

        var shipment = {
            id: shipmentId,
            object:"Shipment",
            mode:"test",
            to_address: lookupObject(req.body["shipment[to_address][id]"], addressMap),
            from_address: lookupObject(req.body["shipment[from_address][id]"], addressMap),
            parcel: lookupObject(req.body["shipment[parcel][id]"], parcelMap),
            customs_info: undefined, //req.body["shipment[customs_info][id]"],
            predefined_package: req.body["shipment[predefined_package]"],
            rates:[
                {
                    id: "rate_" + getId(),
                    object: "Rate",
                    service: "FirstClassPackageInternationalService",
                    rate: "9.50",
                    carrier: "USPS",
                    shipment_id: shipmentId,
                    created_at: getCurrentTimestamp(),
                    updated_at: getCurrentTimestamp()
                }
            ],
            scan_form: null,
            selected_rate: null,
            postage_label: null,
            return_label: null,
            tracking_code: null,
            refund_status: null,
            insurance: null,
            created_at:getCurrentTimestamp(),
            updated_at:getCurrentTimestamp()
        }

        shipmentMap[shipment.id] = shipment
        console.log("Added shipment with id: " + shipment.id)
        res.json(shipment)

    } catch(e) {
        res.json(400, { error: { message: e.message } })
    }

})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  END ROUTES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////////
//                  FUNCTIONS
//////////////////////////////////////////////////////////////////////////////
//persistent storage
state.indicators = state.indicators || {}
var indicatorMap = state.indicators

state.stops = state.stops || {}
var stopMap = state.stops

state.contracts = state.contracts || {}
var contractMap = state.contracts

state.addresses = state.addresses || {}
var addressMap = state.addresses

state.parcels = state.parcels || {}
var parcelMap = state.parcels

state.shipments = state.shipments || {}
var shipmentMap = state.shipments

//helpers
function lookupObject(id, map){
    var result = map[id]
    if(result == undefined){
        throw({message: "Can't find " + id})
    }
    return result
}

function lookupType(req, res){
    if (req.query.type) {
    // convert req.query.age from String to a Number before comparing
    return res.json(_.filter(indicatorMap, { 'type': req.query.type }))
  }
  return res.json(state.indicators)
    /*if(result == undefined){
        throw({message: "Can't find " + type + str + thing})
    }
    return result*/
}

function getId() {
    var s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    };

    return s4() + s4();
}

function getCurrentTimestamp(){
    return moment().format("YYYY-MM-DDTHH:mm:ss[Z]")
}

Sandbox.define('/v2/indicators/{post_id}','DELETE', function(req, res) {
   var user = _.find(state.indicators, { 'username': req.params.post_id })
    
  if (!user) {
      return res.json(404, { error: { mesage: 'User doesnt exist'} })
  }
  
  // use Lodash reject to remove the user
  state.users = _.reject(state.users, { 'username': req.params.username })
  
  return res.json({status: 'ok'})
})