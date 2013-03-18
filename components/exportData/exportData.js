var exportData = BaseComponent.extend({
	update : function() {
		var myself=this;
		if(this.label == undefined){
			this.label = "Joe";
		}
		
		// get an array of all dashboard components
		var dbComponentsArr = Dashboards.components; // get the array of objects
		
		
		
		// filter dashboards components array
		var validComponents = $.grep(dbComponentsArr,function(obj){
			
			var validTypes = ['cccPieChart','cccBarChart', 'Table'];
		
			if($.inArray(obj.type, validTypes) >= 0 ){
				return obj;
			}
		});
		
		console.log(validComponents);
		
		/*
		
		var validComponents = [];

		$.each(dbComponentsArr, function(index, obj){
			
			if(obj.type == "cccPieChart"){
				validComponents = obj;
			}
		});

		*/

		// generate popup HTML
		var exportHTML = "";
		exportHTML += "<div id='DIV_EXPORT' style='height:200px;display:none;'>";
		exportHTML += "<div id='exportForm' class='span-8 last '>";
		exportHTML += "<div id='' class='clearfix ' style='height:40px;'>";
		exportHTML += "<h2>Select Components to Export</h2> ";
		exportHTML += "</div>";
		
		exportHTML += "<ul id='chartExportList'>";
		
		// loop through each component and generate list HTML
		$.each(validComponents, function(index, obj) {
			
			var componentTitle = "";

			if(obj.chartDefinition.title == undefined){
				componentTitle = "Table Data ("+obj.name.substring(7)+")";
			} else {
				componentTitle = obj.chartDefinition.title+" Chart";
			}

			if(typeof obj.queryState==undefined){
				exportHTML += "<li id='ex"+index+"' style=''><span>Export "+componentTitle+" - Select Data!!</span><span>Excel</span></li>";
			} else {
				exportHTML += "<li id='ex"+index+"' style=''><span>Export "+componentTitle+"</li>";
			}
		});
		
		// finish popup HTML
		exportHTML += "</ul>"
		
		exportHTML += "</div></div>";
		
		// append popup HTML to blueprint container
		$('.container').append(exportHTML);
		
		// loop through list items
		$('#chartExportList > li').each(function(index, value){
			
			// assign a click function to each li
			$(this).click(function(){
				
				// attach execution exportData method to click action
				validComponents[index].queryState.exportData('xls');
			});

		});
		
		// attach export link to dashboard HTML Object
		$("#"+this.htmlObject).html("<a href='#exportForm' id='exportClick' style='font-size:130%;'>"+this.label+"</a>");
		
		$('#exportClick').fancybox({
			'width': 600,
			'height': 300
		});
	}
});