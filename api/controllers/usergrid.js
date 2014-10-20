var usergrid = require('usergrid');
var client = new usergrid.client({
    'orgName': "mike.malloy",
    'appName': "sandbox",
    "clientId" : "b3U6PhMyOiOsEeSrWrHM8FuiuQ",
    "clientSecret" : "b3U6ViIGc_QC3FZANaSTvfGFuPx0x94"
});

module.exports = {
  getUsergridData: getUsergridData
};

function getUsergridData(req, res){
  var opts = {'type':'lorems', 'name': 'ipsum'}
  client.getEntity(opts, function(err, entity, data){
    if(err){console.entity(err);}
    else{
      var ipsum = entity.get('ipsum');
      res.json(ipsum);
    }
  });
}