sap.ui.define([
	"PracticeArea/PracticeArea/controller/BaseController",
	"sap/m/Button",
	"sap/m/MessageToast"
], function (BaseController, Button, MessageToast) {
	"use strict";

	return BaseController.extend("PracticeArea.PracticeArea.controller.App", {
		onInit: function () {
			this.createViewModel("employees");
			this.createComponentModel("employeeData");
		},
		
		
		/**
		 * 
		 * Logging error function
		 * 
		 *
		LogMessage : function(message){
			jQuery.sap.log.error(message);	
		},*/
		
		onButtonPress : function(){
			var defaultModel = this.getView().getModel();
			var that = this;
			defaultModel.read("/Employees", {
				
				success: function (data, msg){
					that.getView().getModel("employees").setData(data);
				}	
			});
		},
		
		/**
		 * Add two numbers.
		 * @param {evt} num1 The first number.
		 */
		onListItemPress : function(evt){
			var rowNum = evt.getSource().getBindingContextPath().split("/")[2];
			var employeeData = this.getView().getModel("employees").getData().results[rowNum];
			var data = {
				"employeeID": employeeData.EmployeeID,
				"firstName": evt.getSource().getTitle(),
				"lastName": employeeData.LastName,
				"title": employeeData.Title
			};
			
			jQuery.sap.log.info(data);	
			this.getOwnerComponent().getModel("employeeData").setData(data);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("EmployeeView");
			//this.getView().getModel("employees")
			//MessageToast.show(evt.getSource().getTitle());
		}
	});

});


/*
	oDataModel.read("/PutawayAdHocSet", {
                success: function (data, msg) {
                    oGlobalBusyDialog.close();
                    var sMessageResponse = that.checkMessage(msg);

                    switch (sMessageResponse) {
                    case "Success":
                        that.getView().byId("searchFieldProduct").setValue();
                        that.getView().getModel("putawayModel").setData(data);
                        that._updateView();
                        jQuery.sap.delayedCall(300, this, function () {
                            that.getView().byId("searchFieldProduct").focus();
                        });
                        break;
                    case "Error":
                        that.getView().getModel("putawayModel").setData(data);
                        that._updateView();
                        break;
                    case "Warning":
                        that.getView().getModel("putawayModel").setData(data);
                        that._updateView();
                        break;
                    default:
                        break;
                    }
                    // Clear list filters
                    if (bClearFilter === true) {
                        that.handleClearFilterButton();
                    }
                },
                error: function (data, msg) {
                    oGlobalBusyDialog.close();
                    that.getModel("putawayModel").setData(); // Clear cache
                    sap.m.MessageBox.error(that._getLocalizationText("notAbleToLoadData"));
                }
            }); `



*/

