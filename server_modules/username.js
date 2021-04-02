var kiwiModules = require('../server/modules');
 
var module = new kiwiModules.Module('Ident Cookie Module');
 
module.on('irc connecting', function(event, event_data) {
	var cookies = event_data.connection.state.client.websocket.transport.req ?
				event_data.connection.state.client.websocket.transport.req.headers.cookie || '' :
				'';

	var cookie_val = cookies.match(/[ ;^]?kiwi_username=([^;]+)/);
	
	if (cookie_val) {
		event_data.connection.username = cookie_val[1];
	}
});