

/*
 * PUT /teretz/scratch/1.0.0/pet
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putTeretzScratch1_0_0Pet = function(req, res) {
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/pet
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0Pet = function(req, res) {
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/pet/findByStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: array) - query parameter - Status values that need to be considered for filter
 */
exports.getTeretzScratch1_0_0PetFindbystatus = function(req, res) {
	req.checkQuery('status', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0PetFindbystatus');
};

/*
 * GET /teretz/scratch/1.0.0/pet/findByTags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tags(type: array) - query parameter - Tags to filter by
 */
exports.getTeretzScratch1_0_0PetFindbytags = function(req, res) {
	req.checkQuery('tags', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0PetFindbytags');
};

/*
 * GET /teretz/scratch/1.0.0/pet/{petId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * petId(type: integer) - path parameter - ID of pet to return
 */
exports.getTeretzScratch1_0_0Pet = function(req, res) {
	req.check('petId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0Pet');
};

/*
 * POST /teretz/scratch/1.0.0/pet/{petId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * petId(type: integer) - path parameter - ID of pet that needs to be updated
 */
exports.postTeretzScratch1_0_0Pet2 = function(req, res) {
	req.check('petId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * DELETE /teretz/scratch/1.0.0/pet/{petId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * api_key(type: string) - header parameter
 * petId(type: integer) - path parameter - Pet id to delete
 */
exports.deleteTeretzScratch1_0_0Pet = function(req, res) {
	req.check('petId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/pet/{petId}/uploadImage
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * petId(type: integer) - path parameter - ID of pet to update
 */
exports.postTeretzScratch1_0_0PetUploadimage = function(req, res) {
	req.check('petId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_postTeretzScratch1_0_0PetUploadimage');
};

/*
 * PUT /teretz/scratch/1.0.0/stop
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putTeretzScratch1_0_0Stop = function(req, res) {
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/stop
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0Stop = function(req, res) {
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/stop/findByStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: array) - query parameter - Status values that need to be considered for filter
 */
exports.getTeretzScratch1_0_0StopFindbystatus = function(req, res) {
	req.checkQuery('status', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0StopFindbystatus');
};

/*
 * GET /teretz/scratch/1.0.0/stop/findByTags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tags(type: array) - query parameter - Tags to filter by
 */
exports.getTeretzScratch1_0_0StopFindbytags = function(req, res) {
	req.checkQuery('tags', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0StopFindbytags');
};

/*
 * GET /teretz/scratch/1.0.0/stop/{stopId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * stopId(type: integer) - path parameter - ID of stop to return
 */
exports.getTeretzScratch1_0_0Stop = function(req, res) {
	req.check('stopId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0Stop');
};

/*
 * POST /teretz/scratch/1.0.0/stop/{stopId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * stopId(type: integer) - path parameter - ID of stop that needs to be updated
 */
exports.postTeretzScratch1_0_0Stop2 = function(req, res) {
	req.check('stopId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * DELETE /teretz/scratch/1.0.0/stop/{stopId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * api_key(type: string) - header parameter
 * stopId(type: integer) - path parameter - Stop id to delete
 */
exports.deleteTeretzScratch1_0_0Stop = function(req, res) {
	req.check('stopId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/stop/{stopId}/uploadImage
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * stopId(type: integer) - path parameter - ID of stop to update
 */
exports.postTeretzScratch1_0_0StopUploadimage = function(req, res) {
	req.check('stopId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_postTeretzScratch1_0_0StopUploadimage');
};

/*
 * PUT /teretz/scratch/1.0.0/indicator
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putTeretzScratch1_0_0Indicator = function(req, res) {
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/indicator
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0Indicator = function(req, res) {
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/indicator/findByStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: array) - query parameter - Status values that need to be considered for filter
 */
exports.getTeretzScratch1_0_0IndicatorFindbystatus = function(req, res){
    req.checkQuery('type', 'Invalid query parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    
    // set response body and send
    res.type('json');
    res.render('teretz_getTeretzScratch1_0_0IndicatorFindbytype');
};

/*
 * GET /teretz/scratch/1.0.0/indicator/findByTags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tags(type: array) - query parameter - Tags to filter by
 */
exports.getTeretzScratch1_0_0IndicatorFindbytags = function(req, res) {
	req.checkQuery('tags', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0IndicatorFindbytags');
};

/*
 * GET /teretz/scratch/1.0.0/indicator/{indicatorId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * indicatorId(type: integer) - path parameter - ID of indicator to return
 */
exports.getTeretzScratch1_0_0Indicator = function(req, res) {
	req.check('indicatorId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0Indicator');
};

/*
 * POST /teretz/scratch/1.0.0/indicator/{indicatorId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * indicatorId(type: integer) - path parameter - ID of indicator that needs to be updated
 */
exports.postTeretzScratch1_0_0Indicator2 = function(req, res) {
	req.check('indicatorId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * DELETE /teretz/scratch/1.0.0/indicator/{indicatorId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * api_key(type: string) - header parameter
 * indicatorId(type: integer) - path parameter - Indicator id to delete
 */
exports.deleteTeretzScratch1_0_0Indicator = function(req, res) {
	req.check('indicatorId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/indicator/{indicatorId}/uploadImage
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * indicatorId(type: integer) - path parameter - ID of indicator to update
 */
exports.postTeretzScratch1_0_0IndicatorUploadimage = function(req, res) {
	req.check('indicatorId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_postTeretzScratch1_0_0IndicatorUploadimage');
};

/*
 * PUT /teretz/scratch/1.0.0/contract
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putTeretzScratch1_0_0Contract = function(req, res) {
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/contract
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0Contract = function(req, res) {
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/contract/findByStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: array) - query parameter - Status values that need to be considered for filter
 */
exports.getTeretzScratch1_0_0ContractFindbystatus = function(req, res) {
	req.checkQuery('status', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0ContractFindbystatus');
};

/*
 * GET /teretz/scratch/1.0.0/contract/findByTags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tags(type: array) - query parameter - Tags to filter by
 */
exports.getTeretzScratch1_0_0ContractFindbytags = function(req, res) {
	req.checkQuery('tags', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0ContractFindbytags');
};

/*
 * GET /teretz/scratch/1.0.0/contract/{contractId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * contractId(type: integer) - path parameter - ID of contract to return
 */
exports.getTeretzScratch1_0_0Contract = function(req, res) {
	req.check('contractId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0Contract');
};

/*
 * POST /teretz/scratch/1.0.0/contract/{contractId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * contractId(type: integer) - path parameter - ID of contract that needs to be updated
 */
exports.postTeretzScratch1_0_0Contract2 = function(req, res) {
	req.check('contractId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(405);

	// set response body and send
	res.json({});
};

/*
 * DELETE /teretz/scratch/1.0.0/contract/{contractId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * api_key(type: string) - header parameter
 * contractId(type: integer) - path parameter - Contract id to delete
 */
exports.deleteTeretzScratch1_0_0Contract = function(req, res) {
	req.check('contractId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/contract/{contractId}/uploadImage
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * contractId(type: integer) - path parameter - ID of contract to update
 */
exports.postTeretzScratch1_0_0ContractUploadimage = function(req, res) {
	req.check('contractId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_postTeretzScratch1_0_0ContractUploadimage');
};

/*
 * GET /teretz/scratch/1.0.0/store/inventory
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getTeretzScratch1_0_0StoreInventory = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0StoreInventory');
};

/*
 * POST /teretz/scratch/1.0.0/store/order
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0StoreOrder = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_postTeretzScratch1_0_0StoreOrder');
};

/*
 * GET /teretz/scratch/1.0.0/store/order/{orderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderId(type: integer) - path parameter - ID of pet that needs to be fetched
 */
exports.getTeretzScratch1_0_0StoreOrder = function(req, res) {
	req.check('orderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0StoreOrder');
};

/*
 * DELETE /teretz/scratch/1.0.0/store/order/{orderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderId(type: integer) - path parameter - ID of the order that needs to be deleted
 */
exports.deleteTeretzScratch1_0_0StoreOrder = function(req, res) {
	req.check('orderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/user
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0User = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/user/createWithArray
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0UserCreatewitharray = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /teretz/scratch/1.0.0/user/createWithList
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postTeretzScratch1_0_0UserCreatewithlist = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/user/login
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - query parameter - The user name for login
 * password(type: string) - query parameter - The password for login in clear text
 */
exports.getTeretzScratch1_0_0UserLogin = function(req, res) {
	req.checkQuery('username', 'Invalid query parameter').notEmpty();
	req.checkQuery('password', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.set('X-Rate-Limit', 'some value');
	res.set('X-Expires-After', 'some value');
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0UserLogin');
};

/*
 * GET /teretz/scratch/1.0.0/user/logout
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getTeretzScratch1_0_0UserLogout = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /teretz/scratch/1.0.0/user/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - path parameter - The name that needs to be fetched. Use user1 for testing.
 */
exports.getTeretzScratch1_0_0User = function(req, res) {
	req.check('username', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('teretz_getTeretzScratch1_0_0User');
};

/*
 * PUT /teretz/scratch/1.0.0/user/{username}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * username(type: string) - path parameter - name that need to be updated
 */
exports.putTeretzScratch1_0_0User = function(req, res) {
	req.check('username', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};

/*
 * DELETE /teretz/scratch/1.0.0/user/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - path parameter - The name that needs to be deleted
 */
exports.deleteTeretzScratch1_0_0User = function(req, res) {
	req.check('username', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(400);

	// set response body and send
	res.json({});
};