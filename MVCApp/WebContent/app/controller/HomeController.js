Ext.define("Verizon.controller.HomeController",{
	extend:"Ext.app.Controller",
	views:["HomePanel","home.NorthRegion","home.CenterRegion","home.WestRegion"],
	models:["StudentModel"],
	stores:["StudentStore"],
	
	refs:[
	      {ref:"stugrid",selector:"#stugrid"}
	      ],
	init:function(){
		this.control(
					{
						"#westBtn":{
							click:this.onWestButtonClick
						}
					}
				);
	},
	onWestButtonClick:function(){
		console.log("Clickedddddd.....");
		var store = Ext.getStore("StudentStore");
		store.load();
		this.getStugrid().reconfigure(store);
		this.getStugrid().show();
		
	}
});