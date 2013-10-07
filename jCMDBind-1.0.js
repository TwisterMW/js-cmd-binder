// Command Bind Free Plugin by TwisterMW
// Version: 1.0
// Last Date Update: 26/09/2013

var paneldisplayed = false;

function showPanel(){
	switch(paneldisplayed){
		case true:
			paneldisplayed = false;
			$("#bindingsPanel").animate({ opacity: 0, top: "-=60px" },300,function(){
				$("#bindingsPanel").css({ display: "none" });
				$("#displayBindings").attr("value","Mostrar bindings");
			}).clearQueue();
		break;
		case false:
			paneldisplayed = true;
			$("#bindingsPanel").css({ display: "table" });
			$("#bindingsPanel").animate({ opacity: 0.9, top: "+=60px" },300,function(){
				$("#displayBindings").attr("value","Ocultar bindings");
			}).clearQueue();
		break;
	}
}

function bindingsPanel(color,container,bindings,descriptions){	
	var panelContainer = document.createElement("aside");
	panelContainer.id = "bindingsPanel";
	panelContainer.style.cssText = "\
		padding:20px;margin:auto;background:"+color+";top:-60px;\
		position:absolute;opacity:0;font-family:'Calibri';		\
		font-weight:bold;color:#999;display:none;z-index:10;	\
		box-shadow:0px 0px 10px #CCC;align:center;width:300px;left:50%;margin-left:-150px;";

	var innerHTML = "<table style='text-align:left;vertical-align:middle;margin:0px auto;'>";
	var i = 0;
	for (var bind in bindings){
		innerHTML += "<tr><td style='width:30px;'><img src='img/keys/"+bind.toUpperCase()+".png' style='height:32px;' /></td><td>"+descriptions[i]+"</td></tr>";
		i++;
	}
	innerHTML += "</table>";

	panelContainer.innerHTML = innerHTML;
	document.body.appendChild(panelContainer);

	var panelShower = document.createElement("input");
	panelShower.type = "button";
	panelShower.id = "displayBindings";
	panelShower.value = "Mostrar bindings";
	panelShower.setAttribute("onclick","showPanel()");

	document.getElementById(container).appendChild(panelShower);
}

function testBindings(e,bindings){
	var keycode = e.keyCode? e.keyCode : e.charCode;
	var binding = String.fromCharCode(keycode);

	var element = null;
	for (var bind in bindings){
		if(bind.toUpperCase() == binding.toUpperCase())
			window.setTimeout(bindings[bind]);
	}
}

function shortCuts(bindings,showable,container,color,descriptions){
	document.onkeyup = function(){
		testBindings(event,bindings);
	}
	if(showable){
		if(document.getElementById(container)){
			var panel = new bindingsPanel(color,container,bindings,descriptions);
		}
	}
}
