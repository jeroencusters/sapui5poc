sap.ui.controller("view.App", {

	onInit: function() {
		this.getView().LoginDialog.open();
	},

	dialogConfirm : function(evt){
		var oView = sap.ui.getCore().byId("app");

		// TODO: Load model with provided credentials (i.e with Base64 encode)		  

		// Add SplitApp as Page & close login dialog		  
		oView.app.addPage(oView.splitApp);
		oView.LoginDialog.close();		  
	},
	
	dialogCancel : function(evt){ 
		var oView = sap.ui.getCore().byId("app");
		
		// Close login dialog
		oView.LoginDialog.close();	
	}
});