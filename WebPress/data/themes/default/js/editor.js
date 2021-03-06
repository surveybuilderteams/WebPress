var selectedItem='';
var targetItem = '';
function warn(){
	console.warn('You must select a string to add element');
	alert('You must select a string to add element');
}
function wait(timeout, func){
	setTimeout(func, timeout);
}

function selectedString(elem){
 if(typeof elem != "undefined"){
	targetItem = elem;
  s=elem.selectionStart;
  e=elem.selectionEnd;
   selectedItem = elem.value.substring(s, e);
 }else{
  selectedItem = '';
 }
}
function paragraphFormat(format){
	if(selectedItem===''){
		warn();
	}else{
	let code = document.querySelector('#highlighting-content');
	format = (format!=='' ? format : 'p');
	code.innerText = targetItem.value.replace(selectedItem, '<'+(format!=='pre' ? format : format+' class="viewCode"')+'>'+selectedItem+'</'+format+'>');
	targetItem.value = targetItem.value.replace(selectedItem, '<'+(format!=='pre' ? format : format+' class="viewCode"')+'>'+selectedItem+'</'+format+'>');
	 Prism.highlightElement(code);
	}

}
function fontSize(size){
	if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	let tag = (size!=='' ? 'span' : 'p');
	size = (size!=='' ? ' style="font-size:'+size+'px;"' : '');
	code.innerText = targetItem.value.replace(selectedItem, '<'+tag+size+'>'+selectedItem+'</'+tag+'>');
	targetItem.value = targetItem.value.replace(selectedItem, '<'+tag+size+'>'+selectedItem+'</'+tag+'>');
	 Prism.highlightElement(code);
	}
}
function fontName(font){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
		font = (font!='' ? '<span style="font-family:'+font+';">'+selectedItem+'</span>' : selectedItem);
	code.innerText = targetItem.value.replace(selectedItem, font);
	targetItem.value = targetItem.value.replace(selectedItem, font);
	 Prism.highlightElement(code);
	}
}
function blockStyle(style){
	flat = '';
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
		let splitCode = style.split(',');
		if(splitCode[0]==='h2'||splitCode[0]==='h3'&&splitCode[1]==='italic'){
			flat = '<'+splitCode[0] + ' style="font-style:italic;">'+selectedItem+'</'+splitCode[0]+'>';
		}else if(splitCode[0]==='attr'&&splitCode[1]==="marker"||splitCode[1]==="special-container"){
			flat = '<span class="'+splitCode[1]+'">'+selectedItem+'</span>';
		}else if(splitCode[0]==='attr'&&splitCode[1]==="ltr"||splitCode[1]==="rtl"){
			flat = '<span dir="'+splitCode[1]+'">'+selectedItem+'</span>';
		}else{
			flat = '<'+style+'>'+selectedItem+'</'+style+'>';
		}
		
	code.innerText = targetItem.value.replace(selectedItem, flat);
	targetItem.value = targetItem.value.replace(selectedItem, flat);
	 Prism.highlightElement(code);
	}
}

function textColor(color){
	if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
		color = (color!='' ? '<span style="color:'+color+';">'+selectedItem+'</span>' : selectedItem);
	code.innerText = targetItem.value.replace(selectedItem, color);
	targetItem.value = targetItem.value.replace(selectedItem, color);
	 Prism.highlightElement(code);
	}
}

function backgroundColor(color){
	if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
		color = (color!='' ? '<span style="background-color:'+color+';">'+selectedItem+'</span>' : selectedItem);
	code.innerText = targetItem.value.replace(selectedItem, color);
	targetItem.value = targetItem.value.replace(selectedItem, color);
	 Prism.highlightElement(code);
	}
}
function createBold(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<strong>'+selectedItem+'</strong>');
	targetItem.value = targetItem.value.replace(selectedItem, '<strong>'+selectedItem+'</strong>');
	 Prism.highlightElement(code);
	}
}

function createItalic(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<em>'+selectedItem+'</em>');
	targetItem.value = targetItem.value.replace(selectedItem, '<em>'+selectedItem+'</em>');
	 Prism.highlightElement(code);
	}
}

function createUnderline(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<u>'+selectedItem+'</u>');
	targetItem.value = targetItem.value.replace(selectedItem, '<u>'+selectedItem+'</u>');
	 Prism.highlightElement(code);
	}
}

function createStrikethrough(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<s>'+selectedItem+'</s>');
	targetItem.value = targetItem.value.replace(selectedItem, '<s>'+selectedItem+'</s>');
	 Prism.highlightElement(code);
	}
}

function createSuper(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<sup>'+selectedItem+'</sup>');
	targetItem.value = targetItem.value.replace(selectedItem, '<sup>'+selectedItem+'</sup>');
	 Prism.highlightElement(code);
	}
}

function createSub(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<sub>'+selectedItem+'</sub>');
	targetItem.value = targetItem.value.replace(selectedItem, '<sub>'+selectedItem+'</sub>');
	 Prism.highlightElement(code);
	}
}

function textAlign(alignment){
	if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<p style="text-align:'+alignment+';">'+selectedItem+'</p>');
	targetItem.value = targetItem.value.replace(selectedItem, '<p style="text-align:'+alignment+';">'+selectedItem+'</p>');
	 Prism.highlightElement(code);
	}
}
function createBlockQuote(){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<figure><blockquote class="blockquote"><p>'+selectedItem+'</p></blockquote><figcaption class="blockquote-footer"><cite>Source Title</cite></figcaption></figure>');
	targetItem.value = targetItem.value.replace(selectedItem, '<figure><blockquote class="blockquote"><p>'+selectedItem+'</p></blockquote><figcaption class="blockquote-footer"><cite>Source Title</cite></figcaption></figure>');
	 Prism.highlightElement(code);
	}
}

/*start div*/
function createDiv(style='', classes='', id='', lang='', styleText='', title='', dir=''){
		if(selectedItem===''){
		warn();
	}else{
		let addClass = (classes!=='' ? ' '+classes : '');
		let divClass = (style!==''||classes!=='' ? ' class="'+style+addClass+'"' : '');
		let divID = (id!=='' ? ' id="'+id+'"' : '');
		let divLang = (lang!=='' ? ' lang="'+lang+'"': '');
		let divTitle = (title!=='' ? ' data-bs-toggle="tooltip" data-bs-placement="top" title="'+title+'"' : '');
		let divStyle = (styleText!=='' ? ' style="'+styleText+';"' : '');
		let divDir = (dir!=='' ? ' dir="'+dir+'"' : '');
		
		let divAttr = divClass+divID+divLang+divLang+divTitle+divStyle+divDir;
		
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<div'+divAttr+'><p>'+selectedItem+'</p></div>');
	targetItem.value = targetItem.value.replace(selectedItem, '<div'+divAttr+'><p>'+selectedItem+'</p></div>');
	 Prism.highlightElement(code);
	 $('#divEditContainer').modal("hide");
	}
}
function toggleDiv(){
	document.querySelector('.editDivContainer').click();
}
setTimeout(function(){
	if(document.querySelector('.saveDiv')){
		document.querySelector('.saveDiv').addEventListener('click',function(){
	let style = document.querySelector('#DivStyle');
	let classes = document.querySelector('#DivClasses');
	let id = document.querySelector('#DivID');
	let lang = document.querySelector('#DivLang');
	let styleText = document.querySelector('#DivStyleTxt');
	let title = document.querySelector('#DivTitle'); 
	let dir = document.querySelector('#DivDir');
	createDiv(style.value, classes.value, id.value, lang.value, styleText.value, title.value, dir.value);
	style.value='';
	classes.value='';
	id.value='';
	lang.value='';
	styleText.value='';
	title.value='';
	dir.value='';
});	
	}
}, 300);

/*end Div*/

function copyText(){
    document.querySelector('#editing').select();
    if(document.execCommand('copy')){
			$.notify("Copied to clipboard",{
				'className':'success',
				'autoHide': true,
				'clickToHide': true,
				'globalPosition': 'top right'
			});
	}else{
			$.notify("Failed to copy",{
				'className':'error',
				'autoHide': true,
				'clickToHide': true,
				'globalPosition': 'top right'
			});
	}
}

function pasteText(){
    let ta = document.querySelector('#editing');
	let code = document.querySelector('#highlighting-content');
    if(navigator.clipboard.readText()){
		navigator.clipboard.readText().then((clipText)=>(ta.value = clipText));
		navigator.clipboard.readText().then((clipText)=>(code.innerHTML = clipText.replace(/\</g, '&lt;').replace(/\>/g, '&gt;')));
		Prism.highlightElement(code);
			$.notify("Pasted",{
				'className':'success',
				'autoHide': true,
				'clickToHide': true,
				'globalPosition': 'top right'
			});
	}else{
			$.notify("Failed to paste, try using CTRL+V",{
				'className':'error',
				'autoHide': true,
				'clickToHide': true,
				'globalPosition': 'top right'
			});
	}
}

function fullScreen(){
	let expend = document.querySelector('.editorpanel');
	if(expend.getAttribute('expended')==='false'){
		expend.setAttribute('expended', 'true');
	}else{
		expend.setAttribute('expended', 'false');
	}
}

function paragraphDir(dir){
		if(selectedItem===''){
		warn();
	}else{
	let code = document.querySelector('#highlighting-content');
	let direct = (dir==="rtl" ? 'rtl' : 'ltr');
	code.innerText = targetItem.value.replace(selectedItem, '<p dir="'+direct+'">'+selectedItem+'</p>');
	targetItem.value = targetItem.value.replace(selectedItem, '<p dir="'+direct+'">'+selectedItem+'</p>');
	 Prism.highlightElement(code);
	}
}

function indent(indent){
		if(selectedItem===''){
		warn();
	}else{
	let code = document.querySelector('#highlighting-content');
	let ind = (indent==="increase" ? ' style="margin-left:40px;"' : '');
	code.innerText = targetItem.value.replace(selectedItem, '<p'+ind+'>'+selectedItem+'</p>');
	targetItem.value = targetItem.value.replace(selectedItem, '<p'+ind+'>'+selectedItem+'</p>');
	 Prism.highlightElement(code);
	}
}

function listing(list){
		if(selectedItem===''){
		warn();
	}else{
	let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<'+list+' class="list-group list-group-flush'+(list==='ol' ? ' list-group-numbered' : '')+'"><li class="list-group-item">'+selectedItem+'</li></'+list+'>');
	targetItem.value = targetItem.value.replace(selectedItem, '<'+list+' class="list-group list-group-flush'+(list==='ol' ? ' list-group-numbered' : '')+'"><li class="list-group-item">'+selectedItem+'</li></'+list+'>');
	 Prism.highlightElement(code);
	}
}

/*start anchor*/
function createAnchor(name){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
	code.innerText = targetItem.value.replace(selectedItem, '<p><a id="'+name+'" name="'+name+'">'+selectedItem+'</a></p>');
	targetItem.value = targetItem.value.replace(selectedItem, '<p><a id="'+name+'" name="'+name+'">'+selectedItem+'</a></p>');
	 Prism.highlightElement(code);
	}
}

function toggleAnchor(){
	document.querySelector('.editAnchorEdit').click();
}

setTimeout(function(){
	if(document.querySelector('.saveAnchor')){
		document.querySelector('.saveAnchor').addEventListener('click', function(){
		let name = document.querySelector('#anchorName');
		createAnchor(name.value);
		name.value = '';
		$('#anchorEditContainer').modal('hide');
	});
	}
	
});
/*end anchor*/

/*start link*/
function createLink(display, id, name, href, lang, dir, download, title, charset, type, classes, rel, style){
		if(selectedItem===''){
		warn();
	}else{
		let code = document.querySelector('#highlighting-content');
		id = (id!=='' ? ' id="'+id+'"' : '');
		name = (name!=='' ? ' name="'+name+'"' : '');
		href = (href!=='' ? ' '+ href : '');
		lang = (lang!=='' ? ' lang="'+lang+'"' : '');
		dir = (dir!=='' ? ' dir="'+dir+'"' : '');
		download = (download ? ' download' : '');
		title = (title!=='' ? ' title="'+title+'"' : '');
		charset = (charset!=='' ? ' charset="'+charset+'"' : '');
		type = (type!=='' ? ' type="'+type+'"' : '');
		classes = (classes!=='' ? ' class="'+classes+'"' : '');
		rel = (rel!=='' ? ' rel="'+rel+'"' : '');
		style = (style!==''&&typeof(style)!=='undefined' ? ' style="'+style+'"' : '');
		
	code.innerText = targetItem.value.replace(selectedItem, '<p><a'+id+name+href+lang+dir+download+title+charset+type+classes+rel+style+'>'+(display!=='' ? display : selectedItem)+'</a></p>');
	targetItem.value = targetItem.value.replace(selectedItem, '<p><a'+id+name+href+lang+dir+download+title+charset+type+classes+rel+style+'>'+(display!=='' ? display : selectedItem)+'</a></p>');
	 Prism.highlightElement(code);
	}
}

function toggleLink(){
	document.querySelector('.editLinkEdit').click();
}

setTimeout(function(){
	if(document.querySelector('.saveLink')){
		document.querySelector('.saveLink').addEventListener('click', function(){
		let display = document.querySelector('#displayName');
		let linktype = document.querySelector('#LinkType');
		let Protocol = document.querySelector('#Protocol');
		let url = document.querySelector('#url');
		let target = document.querySelector('#target');
		let anchor = document.querySelector('#anchor');
		let email = document.querySelector('#email');
		let sub = document.querySelector('#subject');
		let body = document.querySelector('#body');
		let phone = document.querySelector('#phone');
		
		let href = '';
		if(linktype.value==='url'){
			href = 'href="'+Protocol.value+url.value+'" target="'+target.value+'"';
		}else if(linktype.value==='anchor'){
			href = 'href="#'+anchor.value+'"';
		}else if(linktype.value==='email'){
			href = 'href="mailto:'+email.value+'?subject='+sub.value+'&amp;body='+body.value+'"';
		}else{
			href = 'href="tel:'+phone.value+'"';
		}
		let id = document.querySelector('#linkid');
		let name = document.querySelector('#linkname');
		let lang = document.querySelector('#LinkLang');
		let dir = document.querySelector('#LinkDir');
		let title = document.querySelector('#LinkTitle');
		let type = document.querySelector('#LinkType');
		let classes = document.querySelector('#LinkClasses');
		let charset = document.querySelector('#LinkCharset');
		let rel = document.querySelector('#LinkRel');
		let style = document.querySelector('#LinkStyle');
		let download = document.querySelector('#LinkDownload');

		createLink(display.value, id.value, name.value, href, lang.value, dir.value, download.checked, title.value, charset.value, type.value, classes.value, rel.value, style.value);
		name.value = '';
		href = '';
		display.value = '';
		linktype.querySelectorAll('option')[0].setAttribute('selected', 'selected');
		id.value = '';
		Protocol.value = '';
		url.value = '';
		target.value = '';
		anchor.value = '';
		email.value = '';
		sub.value = '';
		body.value = '';
		phone.value = '';
		lang.value = '';
		dir.value = '';
		title.value = '';
		type.value = '';
		classes.value = '';
		charset.value = '';
		rel.value = '';
		style.value = '';
		download.checked = false;
		$('#LinkEditContainer').modal('hide');
	});	
	}
});
/*end link*/

function selectAll(){
		document.querySelector('#editing').select();
}

/*Preview*/
function togglePreview(element, mode){
		 let result_element = document.querySelector("#highlighting-content");
		 let textbox = document.querySelector('#editing');
	if(mode==="preview"){
		result_element.innerText = textbox.value;
		element.setAttribute('toggle-mode', 'edit');
		Prism.highlightElement(result_element);
		textbox.style.zIndex = 1;
		result_element.style.zIndex = 0;
		textbox.disabled = false;
	}else{
		result_element.innerHTML = textbox.value.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<").replace(new RegExp('<\\?','g'), '&lt;?').replace(new RegExp('\\?\>','g'), '?&gt;'); /* Global RegExp */;
		element.setAttribute('toggle-mode', 'preview');
		textbox.style.zIndex = 0;
		if(document.querySelector('.editor pre.viewCode')){
			Prism.highlightAllUnder(document.querySelector('.editor pre.viewCode'));
		}
		result_element.style.zIndex = 1;
		textbox.disabled = true;
	}
} 