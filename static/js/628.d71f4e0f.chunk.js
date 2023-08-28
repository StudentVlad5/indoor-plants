"use strict";(self.webpackChunkindoor_plants=self.webpackChunkindoor_plants||[]).push([[628],{9272:function(n,e,i){var o=i(6727),r=o.Ry().shape({email:o.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require field"),password:o.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field"),confirmPassword:o.Z_().oneOf([o.iH("password")],"Password must match").required("Require field"),name:o.Z_().matches(/\S{2,}/,"Name too short (min 2)").matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,"Name must includes only Latin alphabet").required("Require field"),phone:o.Rx().nullable(!0).required("Require field").min(99999).max(999999999999),location:o.Z_().matches(/(([A-Za-zsd&.-]){1,}, ([A-Za-zsd&,.-]){1,})/,"Invalid format. Example: Brovary, Kyiv ...").required("Require field")}),t=o.Ry().shape({email:o.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require"),password:o.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require")}),a=o.Ry().shape({category:o.Z_().required("Category is Required!"),typeofpet:o.Z_().required("Type of Pet is Required!"),title:o.Z_().min(2,"Too Short!").max(48,"Too Long!").required("Title is Required!"),name:o.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:o.hT().required("BirthDay is Required!"),breed:o.Z_().min(2,"Too Short!").max(34,"Too Long!").required("Breed is Required!")}),s=o.Ry().shape({sex:o.Z_().required("Sex is Required!"),size:o.Z_().required("Size is Required!"),height:o.Rx().moreThan("0").positive().integer().max(100,"Too Match!").required("Height is Required!"),weight:o.Rx().moreThan("0").positive().max(100,"Too Match!").required("Weight is Required!"),location:o.Z_().matches(/(([0-9A-Za-zsd&.-]){1,}, ([0-9A-Za-zsd&,.-]){1,})/,"Invalid format. Example: Brovary, Kyiv ...").required("Location is Required!")}),l=s.concat(o.Ry().shape({price:o.Rx().moreThan("0").positive().integer().required("Price is Required!"),currency:o.Z_().required("Currency is Required!")})),d={registerSchema:r,schemasLogin:t,noticeSchemaFirst:a,noticeSchemaSecond:s,noticeSchemaSecondPrice:l,noticeSchemaThird:o.Ry().shape({imageUrl:o.Z_().required("Image is Required!"),imageUrl_1:o.Z_(),imageUrl_2:o.Z_(),passport:o.Z_().required("Passport is Required!"),sterilization:o.Z_().required("Sterilization is Required!"),lives:o.Z_().required("Lives is Required!"),comments:o.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")}),noticeSchemaThirdforEdit:o.Ry().shape({imageUrl:o.Z_(),imageUrl_1:o.Z_(),imageUrl_2:o.Z_(),passport:o.Z_().required("Passport is Required!"),sterilization:o.Z_().required("Sterilization is Required!"),lives:o.Z_().required("Lives is Required!"),comments:o.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")}),addPetsUser:o.Ry().shape({name:o.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),data:o.hT().required("BirthDay is Required!"),breed:o.Z_().min(2,"Too Short!").max(34,"Too Long!").required("Breed is Required!"),comments:o.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")})};e.Z=d},2700:function(n,e,i){i.d(e,{z:function(){return s}});var o,r=i(168),t=i(6444),a=i(8126),s=t.ZP.button(o||(o=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 180px;\n  height: 48px;\n  padding: 4px 20px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 700;\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n  text-transform: uppercase;\n\n  background-color: transparent;\n  border: 1px solid ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),a.Z.fonts[0],a.Z.fontSizes.small,a.Z.colors.green,a.Z.colors.green,a.Z.colors.green,a.Z.colors.white)},1628:function(n,e,i){i.r(e),i.d(e,{default:function(){return W}});var o,r,t,a,s,l,d,m,c,p,h,u,x,Z,g,f,b=i(2791),w=i(9439),q=i(9434),y=i(5705),v=i(828),z=i(9272),S=i(8126),R=i(168),k=i(6444),_=i(1087),j=i(6355),P=i(2700),T=i(8081),L=k.ZP.section(o||(o=(0,R.Z)(["\n  @media screen and (max-width: ",") {\n    background-repeat: no-repeat;\n    background-size: 620px auto;\n    background-position: bottom -250px left 30%;\n  }\n\n  @media screen and (min-width: ",") and (max-width: ",") {\n    background-repeat: no-repeat;\n    background-size: 1396px auto;\n    background-position: bottom -130px left 50%;\n  }\n"])),S.Z.breakpoints.tablet_max,S.Z.breakpoints.tablet,S.Z.breakpoints.desktop_max),A=k.ZP.div(r||(r=(0,R.Z)(["\n  height: 100%;\n  min-height: calc(100vh - 140px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: ",") {\n    padding-top: 170px;\n  }\n  @media screen and (min-width: ",") {\n    padding-top: 80px;\n    min-height: calc(100vh - 120px);\n\n    background-repeat: no-repeat;\n    background-size: 1280px auto;\n    background-position: bottom 0 left 50%;\n  }\n"])),S.Z.breakpoints.tablet,S.Z.breakpoints.desktop),C=(0,k.ZP)(T.Dx)(t||(t=(0,R.Z)(["\n  margin-bottom: 40px;\n  margin-top: 0;\n  text-transform: uppercase;\n\n  @media screen and (min-width: ",") {\n    font-size: ",";\n    font-weight: 500;\n    margin-bottom: 32px;\n    color: ",";\n  }\n"])),S.Z.breakpoints.tablet,S.Z.fontSizes.extraXL,S.Z.colors.brown1),B=(0,k.ZP)(T.Dx)(a||(a=(0,R.Z)(["\n  font-family: ",";\n  font-weight: 700;\n  font-style: normal;\n  font-size: ",";\n  line-height: 42px;\n  letter-spacing: 0.07em;\n  color: ",";\n  text-decoration: none;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: ",") {\n    line-height: 48px;\n    font-size: ",";\n  }\n"])),S.Z.fonts[0],S.Z.fontSizes.extraXL,S.Z.colors.brown2,S.Z.breakpoints.tablet,S.Z.fontSizes.extraXXL),$=(0,k.ZP)(j.l_A)(s||(s=(0,R.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 6%;\n  top: 62%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),I=(0,k.ZP)(j.aHS)(l||(l=(0,R.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 6%;\n  top: 62%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),E=(0,k.ZP)(y.l0)(d||(d=(0,R.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 44px;\n  margin: 0 auto;\n\n  @media screen and (min-width: ",") {\n    width: 608px;\n    height: 100%;\n    margin: 0 auto;\n    padding: 60px 0 40px 0;\n    background-color: transparent;\n  }\n  @media screen and (min-width: ",") {\n    width: 618px;\n    padding: 60px 0 60px 0;\n  }\n  > div {\n    position: relative;\n  }\n"])),S.Z.breakpoints.tablet,S.Z.breakpoints.desktop),U=k.ZP.span(m||(m=(0,R.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 6%;\n  top: 62%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),N=(0,k.ZP)(y.gN)(c||(c=(0,R.Z)(["\n  width: 280px;\n  font-size: ",";\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: ",";\n  color: ",";\n  border: none;\n  transition: all 0.25s ease-in;\n  &:focus,\n  &:hover {\n    border-color: ",";\n    color: ",";\n    outline: none;\n  }\n  @media screen and (min-width: ",") {\n    width: 448px;\n    font-size: ",";\n    padding: 14px 0 13px 32px;\n  }\n  @media screen and (min-width: ",") {\n    width: 558px;\n  }\n  &::placeholder {\n    text-transform: uppercase;\n  }\n  &:focus ~ .floating-label,\n  &:not([value='']):not(:focus):invalid ~ .floating-label,\n  &:not([value='']):not(:focus):valid ~ .floating-label {\n    top: -15px;\n    left: 20px;\n    font-size: 11px;\n    opacity: 1;\n  }\n"])),S.Z.fontSizes.small,S.Z.colors.blue1,S.Z.colors.brown2,S.Z.colors.darkGreen,S.Z.colors.darkGreen,S.Z.breakpoints.tablet,S.Z.fontSizes.medium,S.Z.breakpoints.desktop),D=k.ZP.span(p||(p=(0,R.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  pointer-events: none;\n  left: 20px;\n  top: 18px;\n  transition: 0.2s ease all;\n"])),S.Z.fonts[0],S.Z.fontSizes.small),F=(0,k.ZP)(P.z)(h||(h=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 4px;\n  color: ",";\n  background: ",";\n  transform: scale(1);\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  transition: all 0.25s ease-in;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n    color: ",";\n    background: ",";\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n"])),S.Z.colors.brown1,S.Z.colors.green4,S.Z.colors.white,S.Z.colors.brown2),H=k.ZP.div(u||(u=(0,R.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: -5px;\n  left: 15px;\n  color: #e53e3e;\n  font-family: ",";\n  font-size: ",";\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: 0.03em;\n  margin-bottom: -16px;\n  @media screen and (min-width: ",") {\n    left: 32px;\n  }\n"])),S.Z.fonts[1],S.Z.fontSizes.small,S.Z.breakpoints.tablet),X=k.ZP.div(x||(x=(0,R.Z)(["\n  margin-bottom: 32px;\n"]))),G=k.ZP.div(Z||(Z=(0,R.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 280px;\n  margin-bottom: 32px;\n  @media screen and (min-width: ",") {\n    width: 448px;\n    font-size: ",";\n  }\n  @media screen and (min-width: ",") {\n    width: 558px;\n  }\n"])),S.Z.breakpoints.tablet,S.Z.fontSizes.medium,S.Z.breakpoints.desktop),Y=(0,k.ZP)(_.rU)(g||(g=(0,R.Z)(["\n  color: ",";\n  transition: all 0.25s ease-in;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),S.Z.colors.brown2,S.Z.colors.brown3),K=k.ZP.div(f||(f=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  flex-direction: column;\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: ",";\n  letter-spacing: 0.04em;\n  color: ",";\n"])),S.Z.fonts[0],S.Z.fontSizes.small,S.Z.brown2),M=i(9982),J=i(3329),O=function(){var n=(0,b.useState)(!0),e=(0,w.Z)(n,2),i=e[0],o=e[1],r=(0,b.useState)(!1),t=(0,w.Z)(r,2),a=t[0],s=t[1],l=(0,b.useState)(!1),d=(0,w.Z)(l,2),m=d[0],c=d[1],p=(0,q.I0)(),h=(0,y.TA)({initialValues:{email:"",password:""},validationSchema:z.Z.schemasLogin,onSubmit:function(n){c(!0);var e=n.email,i=n.password;p((0,M.Ib)({email:e,password:i}),void o(!0))}}),u=!!(h.errors.email&&h.touched.email||h.errors.password&&h.touched.password||""===h.values.email),x=function(n,e){return n?"".concat(e?S.Z.colors.red:S.Z.colors.darkGreen):null};return(0,J.jsx)(L,{children:(0,J.jsx)(A,{children:(0,J.jsx)(y.J9,{validationSchema:z.Z.schemasLogin,children:(0,J.jsxs)(E,{onSubmit:h.handleSubmit,autoComplete:"off",children:[(0,J.jsx)(B,{children:"homeforest"}),(0,J.jsx)(C,{children:"Login Page"}),i&&(0,J.jsxs)(X,{children:[(0,J.jsx)(N,{style:{borderColor:x(h.values.email,h.errors.email)},name:"email",type:"email",validate:z.Z.schemasLogin.email,onChange:h.handleChange,value:h.values.email,onBlur:h.handleBlur}),h.values.email?h.errors.email?(0,J.jsx)(I,{color:S.Z.colors.red}):(0,J.jsx)($,{color:S.Z.colors.green}):null,h.errors.email||h.touched.email?(0,J.jsx)(H,{children:h.errors.email}):null,(0,J.jsx)(D,{className:"floating-label",children:"Email"})]}),i&&(0,J.jsxs)(X,{children:[(0,J.jsx)(N,{style:{borderColor:x(h.values.password,h.errors.password)},name:"password",type:a?"text":"password",onChange:h.handleChange,value:h.values.password,onBlur:h.handleBlur}),(0,J.jsx)(U,{onClick:function(){s(!a)},children:a?(0,J.jsx)(v.bt0,{}):(0,J.jsx)(v.RF8,{})}),h.errors.password&&h.touched.password?(0,J.jsx)(H,{children:h.errors.password}):null,(0,J.jsx)(D,{className:"floating-label",children:"Password"})]}),(0,J.jsxs)(G,{children:[i&&(0,J.jsx)(F,{type:"submit",disabled:u,children:m?"Loading":"Sign In"}),!i&&(0,J.jsx)(F,{type:"submit",children:m?"Loading":"Sign In"}),(0,J.jsxs)(K,{children:[(0,J.jsx)(Y,{to:"/register",children:"Create acount"}),(0,J.jsx)(Y,{to:"/",children:"Forgot your password?"})]})]})]})})})})},V=i(4116),W=function(){return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(V.H,{title:"HomeForest Log in",description:"Log in to your account"}),(0,J.jsx)(O,{})]})}}}]);
//# sourceMappingURL=628.d71f4e0f.chunk.js.map