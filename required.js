define(['jquery', 'rdk'], function($,rdk){
	return {
		disasterInput: function(disaster_date, disaster_num, disaster_type, longitude, latitude, disaster_area, disaster_summary, disaster_detail) {
			var json_params = {
				'flag' : '01', 
				'occurtime' : disaster_date,
				'serial' : disaster_num,
				'disastertype' : disaster_type,
				'acquisitionsite_longitude' : longitude,
				'acquisitionsite_latitude' : latitude,
				'disastersite' : disaster_area,
				'summary' : disaster_summary,
				'disasterdetail' : disaster_detail
			};
			$.ajax({
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				url: rdk.rdkUrl('sea_warning_input.js', 'homePage'),
				data: json_params,
				async: false,
				success: functioin(data){
					// var result = eval('(' + data.result + ')');
					alert('提交成功');
				}
			});
		}
	}
});
