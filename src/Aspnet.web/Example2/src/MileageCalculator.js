CTM.GrossMileage = 0;

CTM.MileageCalculator = function () {
    var self = this;
    
    self.WeekdayMilesPerDay = 0;
    self.WeekendMilesPerWeekend = 0;
    self.AdhocMilesPerYear = 0;
    
    
    self.TotalMiles = function () {        
        if (self.WeekdayMilesPerDay > 0) {
			return weekdaytotal();
		}
		if(self.WeekendMilesPerWeekend){
		return  weekenddaytotal();
		}
		if(self.AdhocMilesPerYear){
		return AdhocMilestotal();
		}
    };
	
    var weekdaytotal = function () {
        CTM.GrossMileage = CTM.GrossMileage + (self.WeekdayMilesPerDay * 260);
	return self.WeekdayMilesPerDay * 260;
	};
    var weekenddaytotal = function () {
        CTM.GrossMileage = CTM.GrossMileage + (self.WeekendMilesPerWeekend * 52);
	    return self.WeekendMilesPerWeekend * 52;
	};
	
    var AdhocMilestotal = function () {
        CTM.GrossMileage = CTM.GrossMileage + (self.AdhocMilesPerYear * 1);
	return self.AdhocMilesPerYear;
    };

    self.GrossMileageDisplay = function () {
       return  CTM.GrossMileage;
    };

}