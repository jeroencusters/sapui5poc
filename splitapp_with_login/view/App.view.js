sap.ui.jsview("view.App", {

	getControllerName : function() {
		return "view.App";
	},

	createContent : function(oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
			
		// create app
		this.app = new sap.m.App();
		
		var empty = sap.ui.xmlview("Empty", "view.Empty")
		this.app.addPage(empty);
		
		var LoginView = sap.ui.xmlview("Login", "view.Login");
		this.LoginDialog = new sap.m.Dialog("LoginDialog", {
			title: "Login",
			content: [LoginView],
			beginButton: new sap.m.Button({
				text: "Login",
				press: this.getController().dialogConfirm
			}),
			endButton: new sap.m.Button({
				text: "Cancel",
				press: this.getController().dialogCancel
			})	
		});
		
		this.splitApp = new sap.m.SplitApp();

		// load the master page
		this.splitApp.addMasterPage(sap.ui.xmlview("Master", "view.Master")); 
		
		// load the detail page
		this.splitApp.addDetailPage(empty);

		
		// done
		return new sap.m.Shell("Shell", {
			title : "{i18n>SHELL_TITLE}",
			showLogout : true,
			app : this.app
		});
		
	}
});