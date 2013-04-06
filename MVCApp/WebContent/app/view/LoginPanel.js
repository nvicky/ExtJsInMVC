Ext.define("Verizon.view.LoginPanel",{
		extend:"Ext.panel.Panel",
		xtype:'loginpanel',
		title:'Login',
		width:'150',
		layout:{
			type:'vbox',
			align:'center'
		},
		items:[
		       {
		    	   xtype:'textfield',
		    	   fieldLabel:'UserName',
		    	   id:'userName'
		       },
		       {
		    	   xtype:'textfield',
		    	   fieldLabel:'Password',
		    	   inputType:'password',
		    	   id:'passWord'
		    		   
		       },
		       {
		    	   xtype:'button',
		    	   text:'Login',
		    	   id:'loginButton'
		       }
		       ]
});
