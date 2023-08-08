describe("Helper tests (with setup and tear-down)", function() {
  
    beforeEach(function () {
       // initialization logic
       billAmtInput.value = '100';
       tipAmtInput.value = '10'
       submitPaymentInfo();
     });
  
    it('should accept "tipAmt", "billAmt", "tipPercent" and sum total from allPayments objects for sumPaymentTotal()', function () {

      expect(sumPaymentTotal('billAmt')).toEqual(100);
      expect(sumPaymentTotal('tipAmt')).toEqual(10);
      expect(sumPaymentTotal('tipPercent')).toEqual(10);

      billAmtInput.value = 50;
      tipAmtInput.value = 5;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(150);
      billAmt = 100;
      tipAmt = 10;
    }) 

     it('should convert the bill and tip amount into a tip percent calculateTipPercent()', function(){
        let tTipPercent = calculateTipPercent(300,45)
        expect(tTipPercent).toEqual(15);
     })

    it('should expect a table row element, appends a newly created td element from the value for appendTd(tr, value)', function(){
      let newTr = document.createElement('tr');
      appendTd(newTr, 'mike');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('mike');
    })

    it("should create a ‘td’ with the value ‘X’, when clicked it will delete the table row it belongs to on appendDeleteBtn(tr, type)", function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);

      expect(newTr.firstChild.textContent).toEqual('X');
      expect(newTr.children.length).toEqual(1);

    });

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
  });

  });