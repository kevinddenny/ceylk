"use strict";(self["webpackChunkvuecey"]=self["webpackChunkvuecey"]||[]).push([[152],{152:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(3396),r=o(7139);const i={class:"paypalpayment"},a={key:0},d={ref:"paypal"},c={key:1},p=(0,n._)("h1",null,"Paid",-1),u=(0,n._)("a",{href:"/"},"Go to Home, Await verification",-1),s=[p,u];function l(e,t,o,p,u,l){return(0,n.wg)(),(0,n.iD)("div",i,[e.paidFor?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("h1",null,"Registration - $"+(0,r.zw)(e.product.price),1),(0,n._)("p",null,(0,r.zw)(e.product.description),1),(0,n._)("div",d,null,512)])),e.paidFor?((0,n.wg)(),(0,n.iD)("div",c,s)):(0,n.kq)("",!0)])}var h=o(1135),y=o(9196),v={name:"PaypalPayment",data:function(){return{loaded:!1,paidFor:!1,product:{price:20,description:"One Time Payment"}}},mounted:function(){const e=document.createElement("script");e.src="https://www.paypal.com/sdk/js?client-id=ARi_3vwuY3GCBk4Duvb9WyQpTaLKBOJVlivyi4BUj4Zap2v0_kp_CvZ65pFpIWEymN6Pt9drGiMz1qOl",e.addEventListener("load",this.setLoaded),document.body.appendChild(e)},methods:{setLoaded:function(){this.loaded=!0,window.paypal.Buttons({createOrder:(e,t)=>t.order.create({purchase_units:[{description:this.product.description,amount:{currency_code:"USD",value:this.product.price}}]}),onApprove:async(e,t)=>{const o=await t.order.capture();this.paidFor=!0,console.log(o);var n=h.Z.auth().currentUser;y.db.collection("hotel_profiles").doc(n.uid).update({paid:"yes"}).then((()=>{console.log("Signout"),h.Z.auth().signOut()}))},onError:e=>{console.log(e)}}).render(this.$refs.paypal)}}},w=o(89);const f=(0,w.Z)(v,[["render",l]]);var m=f}}]);
//# sourceMappingURL=152.65b12830.js.map