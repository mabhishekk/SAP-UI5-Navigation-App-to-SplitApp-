sap.ui.jsview("xrouting2test.third", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.third
	*/ 
	getControllerName : function() {
		return "xrouting2test.third";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.third
	*/ 
	createContent : function(oController) {
		var oButton = new sap.m.Button({
			text : "press 3rd Page",
			press : [oController.on3rdpage, oController],
		});
 		return new sap.m.Page({
			title: "Third page",
			content: [
			          oButton		
			]
		});
	}

});