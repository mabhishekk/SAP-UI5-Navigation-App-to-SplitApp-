sap.ui.jsview("xrouting2test.fullPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.fullPage
	*/ 
	getControllerName : function() {
		return "xrouting2test.fullPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.fullPage
	*/ 
	createContent : function(oController) {
		var tile1 = new sap.m.StandardTile({
      	  title : "SplitView",
    	  info : "From Single View to Split View",
    	  press: [oController.onFullPage, oController],
        });
		var tile2 = new sap.m.StandardTile({
	      	  title : "SingleView",
	    	  info : "From Single View to Single View",
	    	  press: [oController.onFullPage1, oController],
	   });
		
 		return new sap.m.Page({
			title: "FullPage",
			content: [
			           tile1, tile2
			]
		});
	}

});