sap.ui.jsview("xrouting2test.fullPage1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.fullPage1
	*/ 
	getControllerName : function() {
		return "xrouting2test.fullPage1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.fullPage1
	*/ 
	createContent : function(oController) {
		
		var oButton = new sap.m.Button({
			text : "press 1st Full Page",
			press : [oController.on1stpage, oController],
		});
		
 		return new sap.m.Page({
			title: "second Full Page",
			content: [
			          	oButton
			]
		});
	}

});