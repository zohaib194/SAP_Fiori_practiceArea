sap.ui.define([
	"PracticeArea/PracticeArea/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("PracticeArea.PracticeArea.controller.EmployeeInfo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf PracticeArea.PracticeArea.view.EmployeeInfo
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.getRoute("EmployeeView").attachMatched(this._onRouteMatched, this);
		    
		    this.createViewModel("employee");
		},
		
		_onRouteMatched: function(oEvent) {
		    var oModel = this.getOwnerComponent().getModel("employeeData");
		    this.getView().getModel("employee").setData(oModel.getData());
		    // OR var oModel = sap.ui.getCore().getModel("viewCartData");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf PracticeArea.PracticeArea.view.EmployeeInfo
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf PracticeArea.PracticeArea.view.EmployeeInfo
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf PracticeArea.PracticeArea.view.EmployeeInfo
		 */
		//	onExit: function() {
		//
		//	}

	});

});