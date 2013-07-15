describe("TalkyThing", function(){
 
 describe("Greet", function () {
	it("should say Hello World by default", function () {
        var talker = new CTM.TalkyThing();
		expect(talker.Say()).toEqual("Hello World");
	});
	
    it("should say Hello Bob", function () {
        var talker = new CTM.TalkyThing();
		expect(talker.Say('Bob')).toEqual("Hello Bob");
	});
});
 
 describe("BidFarewellTo", function(){

   it("should say Goodbye Dave", function () {
        var talker = new CTM.TalkyThing();
		expect(talker.GudBye('Dave')).toEqual("Goodbye Dave");
	});	
	});
	
});