Ext.define("Verizon.store.StudentStore",{
		extend:"Ext.data.Store",
		model:"Verizon.model.StudentModel",
		proxy:{
			type:'ajax',
			url:'stulist.txt',
			reader:{
				type:"json",
				root:'student'
			}
		}
		
});