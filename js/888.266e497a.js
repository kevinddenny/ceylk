"use strict";(self["webpackChunkvuecey"]=self["webpackChunkvuecey"]||[]).push([[888],{5888:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var l=a(3396),r=a(9242);const i={class:"login"},s={class:"container"},o={class:"card"},n=(0,l._)("div",{class:"card-image"},[(0,l._)("img",{class:"card-image",src:"Images/loginImg.jpg",alt:"Resort"})],-1),u={class:"card-form"},c=(0,l._)("h2",null,"Log In",-1),d={class:"input"},p={class:"input"},h={class:"action"},g={class:"registerMessage"},m=(0,l.Uk)(" Not a part of our family? Register now as a "),_=(0,l._)("br",null,null,-1),v=(0,l.Uk)("Hotel"),f=(0,l.Uk)("Tourist"),w=(0,l._)("br",null,null,-1);function k(e,t,a,k,b,Z){const y=(0,l.up)("Navigation"),U=(0,l.up)("router-link"),$=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(y),(0,l._)("div",s,[(0,l._)("div",o,[n,(0,l._)("div",u,[(0,l._)("div",null,[c,(0,l._)("div",d,[(0,l.wy)((0,l._)("input",{class:"input-field",type:"email",placeholder:"Enter Email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>b.email=e)},null,512),[[r.nr,b.email]])]),(0,l._)("div",p,[(0,l.wy)((0,l._)("input",{class:"input-field",type:"password",placeholder:"Enter Password",name:"psw","onUpdate:modelValue":t[1]||(t[1]=e=>b.password=e)},null,512),[[r.nr,b.password]])]),(0,l._)("div",h,[(0,l._)("button",{class:"action-button",onClick:t[2]||(t[2]=(...e)=>Z.login&&Z.login(...e))},"Login")]),(0,l._)("p",g,[m,_,(0,l.Wm)(U,{class:"links",to:"/RegHotel"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(U,{class:"links",to:"/RegTourist"},{default:(0,l.w5)((()=>[f])),_:1}),w])])])])]),(0,l.Wm)($)])}var b=a(2877),Z=a(1135),y=a(9196),U=a(9881),$={name:"LoginView",data(){return{email:"",password:"",sid:"",role:""}},methods:{login(){Z.Z.auth().setPersistence(Z.Z.auth.Auth.Persistence.LOCAL).then((()=>Z.Z.auth().signInWithEmailAndPassword(this.email,this.password).then((()=>{var e=Z.Z.auth().currentUser;y.db.collection("admin_id").doc(e.uid).get().then((e=>{"a"==e.data().role?this.$router.replace("/admin/console"):this.$router.replace("/touristpage")}))}),(e=>{alert(e)})).then((()=>{var e=Z.Z.auth().currentUser;y.db.collection("hotel_profiles").doc(e.uid).get().then((t=>{"h"==t.data().role?y.db.collection("hotel_profiles").doc(e.uid).get().then((e=>{"yes"==e.data().verify?this.$router.replace("/hotelpage/hotelprofile"):(alert("Await Admin Verification! Thank You"),Z.Z.auth().signOut(),this.$router.replace("/"))})):this.$router.replace("/touristpage")}))}),(e=>{alert(e)})).then((()=>{var e=Z.Z.auth().currentUser;y.db.collection("tourist_profiles").doc(e.uid).get().then((e=>{"t"==e.data().role?this.$router.replace("/"):this.$router.replace("/login")}))}),(e=>{alert(e)}))))}},components:{Footer:U.Z,Navigation:b.Z}},A=a(89);const L=(0,A.Z)($,[["render",k]]);var W=L}}]);
//# sourceMappingURL=888.266e497a.js.map