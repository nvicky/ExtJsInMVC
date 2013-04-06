Ext.define("Verizon.view.HomePanel",{
		extend:"Ext.panel.Panel",
		xtype:'homepanel',
		height:500,
		layout:{
			type:'border'
			
		},
		items:[
		       {xtype:'northregion',region:'north'},
		       {xtype:'westregion',region:'west'},
		       {xtype:'centerregion',region:'center'}
		]
});
