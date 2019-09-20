sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller, Button, MessageToast) {
	"use strict";

	return Controller.extend("PracticeArea.PracticeArea.controller.BaseController", {
	
		createViewModel : function(name){
			var model = new sap.ui.model.json.JSONModel();
			this.getView().setModel(model, name);
		},
		
		createComponentModel : function(name){
			var model = new sap.ui.model.json.JSONModel();
        	this.getOwnerComponent().setModel(model, name);
		}
		
	});
});

