sap.ui.controller("mypackage.Events", {
	onInit : function() {
		this.byId("eventDetail").setVisible(false);
	},
	onRowSelect : function(event) {
		eventDetail = this.byId("eventDetail");
		eventDetail.bindElement(event.getParameter("rowContext").sPath);
		eventDetail.setVisible(true);
	}
});