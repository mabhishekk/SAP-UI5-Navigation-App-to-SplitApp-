sap.ui.jsview("xrouting2test.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.second
	*/ 
	getControllerName : function() {
		return "xrouting2test.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.second
	*/ 
	createContent : function(oController) {
		var oButton = new sap.m.Button({
			text : "press 2nd Page",
			press : [oController.on2ndpage, oController],
		});
 		return new sap.m.Page({
			title: "second page",
			content: [
			          oButton		
			]
		});
	}

});