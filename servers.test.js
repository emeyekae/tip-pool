describe("Servers test (with setup and tear-down)", function() {
      // initializatize
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    // create server object and add to allServers, update html and reset input
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect(serverId).toEqual(1);
    expect(serverNameInput.value).toEqual('');
  });

  it('should create table row element and pass to appendTd function with input value on updateServerTable()', function () {
   // Create table row element and pass to appendTd function with input value
    submitServerInfo();
    updateServerTable();
    let currentTlist =document.querySelectorAll("#serverTable tbody tr td")
    //expect(document.querySelectorAll("#serverTable tbody tr td").length).toEqual(2);
    expect(currentTlist.length).toEqual(3);
    expect(currentTlist[0].textContent).toEqual('Alice');  
    expect(currentTlist[1].textContent).toEqual('$0.00');

});

  afterEach(function() {
    // Reset
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});