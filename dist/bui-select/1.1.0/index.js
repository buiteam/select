define("bui-select/1.1.0/index",["bui-common/1.1.0/common","bui-select/1.1.0/src/select","bui-select/1.1.0/src/combox","bui-select/1.1.0/src/suggest","bui-data/1.1.0/index","bui-list/1.1.0/index","bui-overlay/1.1.0/index","bui-picker/1.1.0/index","bui-select/1.1.0/src/tag"],function(e,t,i){var n=e("bui-common/1.1.0/common"),a=n.namespace("Select");n.mix(a,{Select:e("bui-select/1.1.0/src/select"),Combox:e("bui-select/1.1.0/src/combox"),Suggest:e("bui-select/1.1.0/src/suggest")}),i.exports=a}),define("bui-select/1.1.0/src/select",["bui-common/1.1.0/common","bui-data/1.1.0/index","bui-list/1.1.0/index","bui-overlay/1.1.0/index","bui-picker/1.1.0/index"],function(e,t,i){"use strict";function n(e){if($.isPlainObject(e)){var t=[];return a.each(e,function(e,i){t.push({value:i,text:e})}),t}var i=[];return a.each(e,function(e){i.push(a.isString(e)?{value:e,text:e}:e)}),i}var a=e("bui-common/1.1.0/common"),u=e("bui-picker/1.1.0/index").ListPicker,s=a.prefix,c=a.Component,l=u,r=s+"select-input",o=c.Controller.extend({initializer:function(){var e,t=this,i=t.get("multipleSelect"),a=t.get("picker");a?t.get("valueField")&&a.set("valueField",t.get("valueField")):(e=i?"listbox":"simple-list",a=new l({children:[{xclass:e,elCls:s+"select-list",store:t.get("store"),items:n(t.get("items"))}],valueField:t.get("valueField")}),t.set("picker",a)),i&&a.set("hideEvent","")},renderUI:function(){var e=this,t=e.get("picker"),i=e._getTextEl();t.set("trigger",e.getTrigger()),t.set("triggerEvent",e.get("triggerEvent")),t.set("autoSetValue",e.get("autoSetValue")),t.set("textField",i),t.render(),e.set("list",t.get("list"))},bindUI:function(){{var e=this,t=e.get("picker"),i=t.get("list");i.get("store")}t.on("selectedchange",function(t){e.fire("change",{text:t.text,value:t.value,item:t.item})}),i.on("itemsshow",function(){e._syncValue()}),t.on("show",function(){e.get("forceFit")&&t.set("width",e.get("el").outerWidth())})},containsElement:function(e){var t=this,i=t.get("picker");return c.Controller.prototype.containsElement.call(this,e)||i.containsElement(e)},getTrigger:function(){return this.get("el")},_uiSetItems:function(e){if(e){var t=this,i=t.get("picker"),a=i.get("list");a.set("items",n(e)),t._syncValue()}},_syncValue:function(){var e=this,t=e.get("picker"),i=e.get("valueField");i&&t.setSelectedValue($(i).val())},_uiSetName:function(e){var t=this,i=t._getTextEl();e&&i.attr("name",e)},_uiSetWidth:function(e){var t=this;if(null!=e){if(t.get("inputForceFit")){var i=t._getTextEl(),n=t.get("el").find(".x-icon"),a=i.outerWidth()-i.width(),u=e-n.outerWidth()-a;i.width(u)}if(t.get("forceFit")){var s=t.get("picker");s.set("width",e)}}},_uiSetDisabled:function(e){var t=this,i=t.get("picker"),n=t._getTextEl();i.set("disabled",e),n&&n.attr("disabled",e)},_getTextEl:function(){var e=this,t=e.get("el");return t.is("input")?t:t.find("input")},destructor:function(){var e=this,t=e.get("picker");t&&t.destroy()},_getList:function(){var e=this,t=e.get("picker"),i=t.get("list");return i},getSelectedValue:function(){return this.get("picker").getSelectedValue()},setSelectedValue:function(e){var t=this,i=t.get("picker");i.setSelectedValue(e)},getSelectedText:function(){return this.get("picker").getSelectedText()}},{ATTRS:{picker:{},list:{},valueField:{},store:{},focusable:{value:!0},autoSetValue:{value:!0},multipleSelect:{value:!1},inputForceFit:{value:!0},name:{},items:{sync:!1},inputCls:{value:r},forceFit:{value:!0},events:{value:{change:!1}},tpl:{view:!0,value:'<input type="text" readonly="readonly" class="'+r+'"/><span class="x-icon x-icon-normal"><i class="icon icon-caret icon-caret-down"></i></span>'},triggerEvent:{value:"click"}}},{xclass:"select"});i.exports=o}),define("bui-select/1.1.0/src/combox",["bui-common/1.1.0/common","bui-select/1.1.0/src/select","bui-select/1.1.0/src/tag","bui-data/1.1.0/index","bui-list/1.1.0/index","bui-overlay/1.1.0/index","bui-picker/1.1.0/index"],function(e,t,i){var n=e("bui-common/1.1.0/common"),a=e("bui-select/1.1.0/src/select"),u=e("bui-select/1.1.0/src/tag"),s=n.prefix+"combox-input",c=a.extend([u],{renderUI:function(){var e=this,t=e.get("picker");t.set("autoFocused",!1)},_uiSetItems:function(e){for(var t=this,i=0;i<e.length;i++){var a=e[i];n.isString(a)&&(e[i]={value:a,text:a})}c.superclass._uiSetItems.call(t,e)},bindUI:function(){var e=this,t=e.get("picker"),i=t.get("list"),n=t.get("textField");$(n).on("keyup",function(){var e=i.getSelected();e&&i.clearItemStatus(e)}),t.on("show",function(){i.clearSelected()})},_uiSetValueField:function(){},getTrigger:function(){return this._getTextEl()}},{ATTRS:{tpl:{view:!0,value:'<input type="text" class="'+s+'"/>'},inputCls:{value:s},autoSetValue:{value:!1}}},{xclass:"combox"});i.exports=c}),define("bui-select/1.1.0/src/suggest",["bui-common/1.1.0/common","bui-select/1.1.0/src/combox","bui-select/1.1.0/src/select","bui-select/1.1.0/src/tag","bui-data/1.1.0/index","bui-list/1.1.0/index","bui-overlay/1.1.0/index","bui-picker/1.1.0/index"],function(e,t,i){"use strict";var n=e("bui-common/1.1.0/common"),a=e("bui-select/1.1.0/src/combox"),u=200,s="",c=a.extend({bindUI:function(){var e=this,t=e.get("el").find("input"),i="keyup"===e.get("triggerEvent")?"keyup":"keyup click";t.on(i,function(){e._start()})},_start:function(){var e=this;e._timer=e.later(function(){e._updateContent()},u)},_updateContent:function(){var e,t=this,i=t.get("data"),n=t.get("el").find("input");if((i||n.val()!==t.get("query"))&&(t.set("query",n.val()),e=n.val(),i||e)){var a=t.get("cacheable"),u=t.get("url"),s=t.get("data");if(a&&u){var c=t.get("dataCache");void 0!==c[e]?t._handleResponse(c[e]):t._requestData()}else u?t._requestData():s&&t._handleResponse(s,!0)}},_getStore:function(){var e=this,t=e.get("picker"),i=t.get("list");return i?i.get("store"):void 0},_requestData:function(){var e=this,t=e.get("el").find("input"),i=e.get("callback"),n=e.get("store"),a={};a[t.attr("name")]=t.val(),n?(a.start=0,n.load(a,i)):$.ajax({url:e.get("url"),type:"post",dataType:e.get("dataType"),data:a,success:function(t){e._handleResponse(t),i&&i(t)}})},_handleResponse:function(e,t){var i=this,n=t?i._getFilterItems(e):e;i.set("items",n),i.get("cacheable")&&(i.get("dataCache")[i.get("query")]=n)},_getItemText:function(e){var t=this,i=t.get("picker"),n=i.get("list");return n?n.getItemText(e):""},_getFilterItems:function(e){function t(e,t){a.push(n.isString(t)?e:t)}var i=this,a=[],u=i.get("el").find("input"),s=u.val(),c=i.get("data");return e=e||[],n.each(e,function(e){var a=n.isString(e)?e:i._getItemText(e);c?-1!==a.indexOf($.trim(s))&&t(a,e):t(a,e)}),a},later:function(e,t,i){t=t||0;var n=i?setInterval(e,t):setTimeout(e,t);return{id:n,interval:i,cancel:function(){this.interval?clearInterval(n):clearTimeout(n)}}}},{ATTRS:{data:{value:null},query:{value:s},cacheable:{value:!1},dataCache:{shared:!1,value:{}},dataType:{value:"jsonp"},url:{},callback:{},triggerEvent:{valueFn:function(){return this.get("data")?"click":"keyup"}},autoSetValue:{value:!1}}},{xclass:"suggest"});i.exports=c}),define("bui-select/1.1.0/src/tag",["bui-common/1.1.0/common","bui-data/1.1.0/index","bui-list/1.1.0/index"],function(e,t,i){var n=e("bui-common/1.1.0/common"),a=e("bui-list/1.1.0/index"),u=n.KeyCode,s="warn",c=function(){};c.ATTRS={showTag:{value:!1},tagItemTpl:{value:"<li>{value}<button>×</button></li>"},tagList:{value:null},tagPlaceholder:{value:"输入标签"},separator:{value:";"}},n.augment(c,{__renderUI:function(){var e=this,t=e.get("showTag"),i=e.get("tagPlaceholder"),n=e.getTagInput();t&&!n.attr("placeholder")&&(n.attr("placeholder",i),e.set("inputForceFit",!1))},__bindUI:function(){var e=this,t=e.get("showTag"),i=e.getTagInput();t&&(i.on("keydown",function(t){if(!i.val()){var n=e.get("tagList"),a=n.getLastItem(),c=e.get("picker");t.which==u.DELETE||t.which==u.BACKSPACE?(n.hasStatus(a,s)?e._delTag(a):n.setItemStatus(a,s,!0),c.hide()):n.setItemStatus(a,s,!1)}}),i.on("change",function(){setTimeout(function(){var t=i.val();t&&e._addTag(t)})}))},__syncUI:function(){var e=this,t=e.get("showTag"),i=e.get("valueField");t&&i&&e._setTags($(i).val())},_setTags:function(e){var t=this,i=t.get("tagList"),a=t.get("separator"),u=e.split(a);i||(i=t._initTagList()),e&&n.each(u,function(e){i.addItem({value:e})})},_addTag:function(e){var t=this,i=t.get("tagList"),n=t.getTagInput(),a=i.getItem(e);a?t._blurItem(i,a):(i.addItem({value:e}),t._synTagsValue()),n.val("")},_blurItem:function(e,t){e.setItemStatus(t,"active",!0),setTimeout(function(){e.setItemStatus(t,"active",!1)},400)},_delTag:function(e){var t=this,i=t.get("tagList");i.removeItem(e),t._synTagsValue()},getTagsValue:function(){var e=this,t=e.get("tagList"),i=t.getItems(),a=[];return n.each(i,function(e){a.push(e.value)}),a.join(e.get("separator"))},_initTagList:function(){var e=this,t=e.getTagInput(),i=new a.SimpleList({elBefore:t,itemTpl:e.get("tagItemTpl"),idField:"value"});return i.render(),e._initTagEvent(i),e.set("tagList",i),i},_initTagEvent:function(e){var t=this;e.on("itemclick",function(e){var i=$(e.domTarget);i.is("button")&&t._delTag(e.item)})},getTagInput:function(){var e=this,t=e.get("el");return t.is("input")?t:t.find("input")},_synTagsValue:function(){var e=this,t=e.get("valueField");t&&$(t).val(e.getTagsValue())}}),i.exports=c});