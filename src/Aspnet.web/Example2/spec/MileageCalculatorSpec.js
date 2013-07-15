describe("MileageCalculator", function () {
    var calc;
    
    beforeEach(function () {
        calc = new CTM.MileageCalculator();
    });
    
    it("should multiply WeekdayMiles by 260", function () {
        calc.WeekdayMilesPerDay = 10;
        expect(calc.TotalMiles()).toBe(2600);        
    });
    
    it("should multiply WeekendMiles by 52", function () {
        calc.WeekendMilesPerWeekend = 10;
        expect(calc.TotalMiles()).toBe(520);
    });
    
    it("should multiply the AdhocMiles by 1", function () {
        calc.AdhocMilesPerYear = 10;
        expect(calc.TotalMiles()).toBe(10);
    });

    it("should display the grand total of mileages", function () {
        expect(calc.GrossMileageDisplay()).toBe(3130);
    });
})