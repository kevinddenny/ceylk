"use strict";(self["webpackChunkvuecey"]=self["webpackChunkvuecey"]||[]).push([[134],{6134:function(t,e,l){l.r(e),l.d(e,{default:function(){return j}});var o=l(3396),n=l(7139);const s={class:"hotel"},i=(0,o._)("h1",{class:"container p-5"},"Hotels",-1),c={class:"form-group"},r=(0,o._)("hr",null,null,-1),u={class:"container p-5 my-5 border"},a={class:"d-flex justify-content-around"},d={class:"container pr-6"},h=["src"],p={class:"h4"},f={class:"form-group d-flex justify-content-start"},m={class:"d-flex justify-content-start p-2"},g=["src"],_={type:"button",class:"btn btn-light"},v=(0,o.Uk)("View more >>"),w=(0,o._)("hr",null,null,-1);function b(t,e,l,b,k,y){const D=(0,o.up)("Navigation"),H=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(D),i,(0,o._)("div",null,[(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.hotels,((t,e)=>((0,o.wg)(),(0,o.iD)("div",null,[r,(0,o._)("div",u,[(0,o._)("div",a,[(0,o._)("div",d,[(0,o._)("img",{class:"rounded",src:t.profilepic,style:{width:"400px"},alt:"User picture"},null,8,h)]),(0,o._)("div",null,[(0,o._)("p",p,[(0,o._)("b",null,(0,n.zw)(t.hotel_name),1)]),(0,o._)("p",null,"Description - "+(0,n.zw)(t.descript),1),(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.hotelpics,(t=>((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("img",{src:t,alt:"",style:{width:"100px"}},null,8,g)])))),256))]),(0,o._)("button",_,[(0,o.Wm)(H,{to:{name:"hotelinfo",params:{id:t.id}}},{default:(0,o.w5)((()=>[v])),_:2},1032,["to"])])])]),w])])))),256))])])])}var k=l(1135),y=l(9196),D=l(2877),H=l(9881),x={name:"HotelView",components:{Footer:H.Z,Navigation:D.Z},data(){return{std:null,num:null,hotel:null,hotels:[],images:[]}},mounted:function(){this.fetchHotels(),console.info("mounted, packs:",this.packs)},computed:{items:function(){return this.packs}},methods:{fetchHotels(){y.db.collection("hotel_bios").get().then((t=>{t.forEach((t=>{const e=t.data();t.id;console.log(e.profilepic),e.id=t.id,this.hotels.push(e)}))})).catch((t=>{console.error(t)})),console.debug("fetchUser return: ",this.users)},book(t,e,l,o,n){var s=k.Z.auth().currentUser;null!=s?y.db.collection("bookings").doc(s.uid).set({user_id:s.uid,hotel:t,start:o,end:n,price:l}):(confirm("Please login")&&this.$router.replace("/login"),console.log("Document successfully written!"))},viewmore(t){console.log(t)}}},U=l(89);const Z=(0,U.Z)(x,[["render",b]]);var j=Z}}]);
//# sourceMappingURL=134.24b543e1.js.map