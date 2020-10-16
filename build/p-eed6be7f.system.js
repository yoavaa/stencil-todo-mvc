System.register(["./p-24afcbad.system.js"],(function(t){"use strict";var o,s;return{setters:[function(t){o=t.s;s=t.u}],execute:function(){var i=function(){function t(t){this.key=t;this.todos=o(t);this.onChanges=[]}t.prototype.subscribe=function(t){this.onChanges.push(t)};t.prototype.inform=function(){o(this.key,this.todos);this.onChanges.forEach((function(t){t()}))};t.prototype.addTodo=function(t){this.todos=this.todos.concat({id:s(),title:t,completed:false});this.inform()};t.prototype.toggleAll=function(t){this.todos=this.todos.map((function(o){return Object.assign(Object.assign({},o),{completed:t})}));this.inform()};t.prototype.toggle=function(t){this.todos=this.todos.map((function(o){return o.id!==t?o:Object.assign(Object.assign({},o),{completed:!o.completed})}));this.inform()};t.prototype.destroy=function(t){this.todos=this.todos.filter((function(o){return o.id!==t}));this.inform()};t.prototype.save=function(t,o){this.todos=this.todos.map((function(s){return s.id!==t?s:Object.assign(Object.assign({},s),{title:o})}));this.inform()};t.prototype.clearCompleted=function(){this.todos=this.todos.filter((function(t){return!t.completed}));this.inform()};return t}();t("TodoModelImpl",i)}}}));