Ext.define("Verizon.view.home.CenterRegion",{
	extend:"Ext.panel.Panel",
	xtype:'centerregion',
	width:150,
	items:[
	       {
	    	   xtype:'grid',
	    	   id:'stugrid',
	    	   title:'StudentList',
	    	   hidden:true,
	    	   columns:[
	    	         {text:"Rno",dataIndex:'rno',flex:1},
	    	         {text:"Name",dataIndex:'name',flex:1}
	    	   ],
	    	   store:null
	       }
	]
});