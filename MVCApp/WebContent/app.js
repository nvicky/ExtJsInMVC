Ext.Loader.setConfig({enabled:true});
Ext.application({
	name:"Verizon",
	appFolder:"app",// default
	controllers:["LoginController","HomeController"],
	launch:function(){
		console.log("loadded....");
		this.mainPanel=Ext.create("Ext.container.Viewport",{
			renderTo:Ext.getBody(),
			id:'mainPanel',
			layout:{
				type:'card'
			},
			items:[{xtype:'loginpanel'}]
		});
	}
});