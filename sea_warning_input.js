(function(){
	var columns = 'occurtime, serial, disastertype, acquisitionsite_longitude, acquisitionsite_latitude, disastersite, summary, disasterdetail';
	function _post(request, script) {
		var flag = request.param.flag,
			occurtime = request.param.occurtime,
			serial = request.param.serial,
			disastertype = request.param.disastertype,
			acquisitionsite_longitude = request.param.acquisitionsite_longitude,
			acquisitionsite_latitude = request.param.acquisitionsite_latitude,
			disastersite = request.param.disastersite,
			summary = request.param.summary,
			disasterdetail = request.param.disasterdetail;
		var sql_1 = '';
		if (flag == '01') {
			sql_1 = "INSERT INTO oceandisaster(" + columns + ") VALUES('" + occurtime + "', '" + serial + "', '" + disastertype + "', '" 
				+ acquisitionsite_longitude + "', '" + acquisitionsite_latitude + "', '" + disastersite + "', '" + summary + "', '" + disasterdetail + "');";
		}
		return Data.update(sql_1);
	}

	return {
		post : _post
	}
})();
