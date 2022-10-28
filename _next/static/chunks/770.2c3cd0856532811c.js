"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{6770:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=i(6729),s=i.n(n),o=i(2621),r=i(7191),d=i.n(r),a=function(e,t,i,n){return new(i||(i=Promise))(function(s,o){function r(e){try{a(n.next(e))}catch(t){o(t)}}function d(e){try{a(n.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,d)}a((n=n.apply(e,t||[])).next())})};class c extends s(){constructor(e,t){if(super(),this._network=t,this._publicKey=null,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._autoApprove=!1,this._responsePromises=new Map,this.handleMessage=e=>{var t;if(this._injectedProvider&&e.source===window||e.origin===(null===(t=this._providerUrl)||void 0===t?void 0:t.origin)&&e.source===this._popup){if("connected"===e.data.method){let i=new o.nh(e.data.params.publicKey);this._publicKey&&this._publicKey.equals(i)||(this._publicKey&&!this._publicKey.equals(i)&&this.handleDisconnect(),this._publicKey=i,this._autoApprove=!!e.data.params.autoApprove,this.emit("connect",this._publicKey))}else if("disconnected"===e.data.method)this.handleDisconnect();else if(e.data.result||e.data.error){let n=this._responsePromises.get(e.data.id);if(n){let[s,r]=n;e.data.result?s(e.data.result):r(Error(e.data.error))}}}},this._beforeUnload=()=>{this.disconnect()},"object"==typeof e&&null!==e&&"postMessage"in e&&"function"==typeof e.postMessage)this._injectedProvider=e;else if("string"==typeof e)this._providerUrl=new URL(e),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:this._network}).toString();else throw Error("provider parameter must be an injected provider or a URL string.")}handleConnect(){var e;return(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this.handleMessage),window.addEventListener("beforeunload",this._beforeUnload)),this._injectedProvider)?new Promise(e=>{this.sendRequest("connect",{}),e()}):(window.name="parent",this._popup=window.open(null===(e=this._providerUrl)||void 0===e?void 0:e.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(e=>{this.once("connect",e)}))}handleDisconnect(){this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this.handleMessage),window.removeEventListener("beforeunload",this._beforeUnload)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(([,e],t)=>{this._responsePromises.delete(t),e(Error("Wallet disconnected"))})}sendRequest(e,t){return a(this,void 0,void 0,function*(){if("connect"!==e&&!this.connected)throw Error("Wallet not connected");let i=this._nextRequestId;return++this._nextRequestId,new Promise((n,s)=>{var o,r,d,a;this._responsePromises.set(i,[n,s]),this._injectedProvider?this._injectedProvider.postMessage({jsonrpc:"2.0",id:i,method:e,params:Object.assign({network:this._network},t)}):(null===(o=this._popup)||void 0===o||o.postMessage({jsonrpc:"2.0",id:i,method:e,params:t},null!==(d=null===(r=this._providerUrl)||void 0===r?void 0:r.origin)&&void 0!==d?d:""),this.autoApprove||null===(a=this._popup)||void 0===a||a.focus())})})}get publicKey(){return this._publicKey}get connected(){return null!==this._publicKey}get autoApprove(){return this._autoApprove}connect(){return a(this,void 0,void 0,function*(){this._popup&&this._popup.close(),yield this.handleConnect()})}disconnect(){return a(this,void 0,void 0,function*(){this._injectedProvider&&(yield this.sendRequest("disconnect",{})),this._popup&&this._popup.close(),this.handleDisconnect()})}sign(e,t){return a(this,void 0,void 0,function*(){if(!(e instanceof Uint8Array))throw Error("Data must be an instance of Uint8Array");let i=yield this.sendRequest("sign",{data:e,display:t}),n=d().decode(i.signature),s=new o.nh(i.publicKey);return{signature:n,publicKey:s}})}signTransaction(e){return a(this,void 0,void 0,function*(){let t=yield this.sendRequest("signTransaction",{message:d().encode(e.serializeMessage())}),i=d().decode(t.signature),n=new o.nh(t.publicKey);return e.addSignature(n,i),e})}signAllTransactions(e){return a(this,void 0,void 0,function*(){let t=yield this.sendRequest("signAllTransactions",{messages:e.map(e=>d().encode(e.serializeMessage()))}),i=t.signatures.map(e=>d().decode(e)),n=new o.nh(t.publicKey);return e=e.map((e,t)=>(e.addSignature(n,i[t]),e))})}diffieHellman(e){return a(this,void 0,void 0,function*(){if(!(e instanceof Uint8Array))throw Error("Data must be an instance of Uint8Array");let t=yield this.sendRequest("diffieHellman",{publicKey:e});return t})}}}}]);