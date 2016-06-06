sap.ui.jsview("xrouting2test.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.first
	*/ 
	getControllerName : function() {
		return "xrouting2test.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.first
	*/ 
	createContent : function(oController) {
		var oButton = new sap.m.Button({
			text : "press 1st Page",
			press : [oController.on1stpage, oController],
		});
 		return new sap.m.Page({
			title: "first page",
			content: [
			          oButton
			]
		});
	}

});