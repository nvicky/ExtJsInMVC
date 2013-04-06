Ext.define("Verizon.controller.LoginController",{
	extend:"Ext.app.Controller",
	views:["LoginPanel"],
	stores:[],
	models:[],
	refs:[
	      {ref:"userName",selector:"#userName"},
	      {ref:"passWord",selector:"#passWord"},
	      {ref:"loginButton",selector:"#loginButton"},
	      {ref:"mainPanel",selector:"#mainPanel"}
	      
	      ],
	init:function(){
		this.control(
					{
						"#loginButton":{
							click:this.onLoginButtonClick	
						},
					}
				);
	},
	onLoginButtonClick:function(){
		console.log("Clicked.....");
		console.log("UserName:::",this.getUserName().getValue(),"Password:::",this.getPassWord().getValue());
		//this.getMainPanel().add({xtype:'homepanel',id:'homePanel'});
		//this.getMainPanel().getLayout().setActiveItem("homePanel");
		this.application.mainPanel.add({xtype:'homepanel',id:'homePanel'});
		this.application.mainPanel.getLayout().setActiveItem("homePanel");
	},
});