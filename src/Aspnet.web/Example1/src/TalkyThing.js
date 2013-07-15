CTM.TalkyThing = function () {
	var self = this;
	self.Say = function (name) {
		if(name)
		{
		return "Hello "+ name;
		}
		else
		{
		return "Hello World";
		}
	};

	self.GudBye = function (name)
		{
		return "Goodbye " + name;	
		}
};