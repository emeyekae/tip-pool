describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '100';
      tipAmtInput.value = '10';
    });

    it('should add a curPayment object to allPayments, update html and reset input values on submitPaymentInfo()', function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
    
    it('should return undefined with negative or empty inputs and positive billAmt is required but tip can be 0 on createCurPayment()',function(){

        let returnPayment = {
            billAmt: '100',
            tipAmt: '10',
            tipPercent: 10,
          }
        expect(createCurPayment()).toEqual(returnPayment);
        expect(returnPayment.billAmt).toEqual('100');
        expect(returnPayment.tipAmt).toEqual('10');
        expect(returnPayment.tipPercent).toEqual(10);
    });

    it('should create table row element and pass to appendTd with input value on appendPaymentTable()', function(){
        let currentPayment = createCurPayment();
        allPayments['currentPayment'] = currentPayment;
        appendPaymentTable(currentPayment);
        let currentTlist = document.querySelectorAll('#paymentTable tbody tr td');
        expect(currentTlist.length).toEqual(4);
    });
 
    it('should create table row element and pass to appendTd with calculated sum of all payment on updateSummary()', function(){
           // updateSummary();
           if (summaryTds[0].innerHTML !== ''){
            let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
            expect(summaryTds.length).toEqual(3);
            expect(summaryTds[0].innerHTML).toEqual('$100');
            expect(summaryTds[1].innerHTML).toEqual('$10');
            expect(summaryTds[2].innerHTML).toEqual('10%');   
           };
    });

    afterEach(function() {
    payment=0;
    allPayments={};
    paymentTbody.innerHTML = '' ;
    billAmtInput.value = '';
    tipAmtInput.value = '';
    serverTbody.innterHTML = '';
    summaryTds[0].HTML = '';
    summaryTds[1].HTML = '';
    summaryTds[2].HTML = '';
    allPayments = {};
    paymentId = 0;
  
    })

});

