(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{8143:function(e,t,r){Promise.resolve().then(r.t.bind(r,6656,23)),Promise.resolve().then(r.t.bind(r,6208,23)),Promise.resolve().then(r.t.bind(r,8169,23)),Promise.resolve().then(r.t.bind(r,3699,23)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,7303)),Promise.resolve().then(r.bind(r,3082))},4178:function(e,t,r){"use strict";r.d(t,{p:function(){return f}});var n=r(7437),s=r(2549),a=r(8734),o=r(6691),i=r.n(o),l=r(9331);let{UploadButton:d,UploadDropzone:c,Uploader:u}=(0,l.jp)();r(7320);let f=e=>{let{onChange:t,value:r,endpoint:o}=e,l=null==r?void 0:r.split(".").pop();return r&&"pdf"!==l?(0,n.jsxs)("div",{className:"relative h-20 w-20",children:[(0,n.jsx)(i(),{fill:!0,src:r,alt:"Upload",className:"rounded-full"}),(0,n.jsx)("button",{onClick:()=>t(""),className:"bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm",type:"button",children:(0,n.jsx)(s.Z,{className:"h-4 w-4"})})]}):r&&"pdf"===l?(0,n.jsxs)("div",{className:"relative flex items-center p-2 mt-2 rounded-md bg-background/10",children:[(0,n.jsx)(a.Z,{className:"h-10 w-10 fill-indigo-200 stroke-indigo-400"}),(0,n.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline",children:r}),(0,n.jsx)("button",{onClick:()=>t(""),className:"bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm",type:"button",children:(0,n.jsx)(s.Z,{className:"h-4 w-4"})})]}):(0,n.jsx)(c,{endpoint:o,onClientUploadComplete:e=>{t(null==e?void 0:e[0].url)},onUploadError:e=>{console.log(e)}})}},3082:function(e,t,r){"use strict";r.r(t),r.d(t,{InitialModal:function(){return g}});var n=r(7437),s=r(9222),a=r(4578),o=r(8110),i=r(1865),l=r(2265),d=r(5018),c=r(603),u=r(3904),f=r(3762),m=r(4178),x=r(4033);let p=a.Ry({name:a.Z_().min(1,{message:"WorkSpace name is required."}),imageUrl:a.Z_().min(1,{message:"WorkSpace image is required."})}),g=()=>{let[e,t]=(0,l.useState)(!1),r=(0,x.useRouter)();(0,l.useEffect)(()=>{t(!0)},[]);let a=(0,i.cI)({resolver:(0,o.F)(p),defaultValues:{name:"",imageUrl:""}}),g=a.formState.isSubmitting,b=async e=>{try{await s.Z.post("/api/servers",e),a.reset(),r.refresh(),window.location.reload()}catch(e){console.log(e)}};return e?(0,n.jsx)(d.Vq,{open:!0,children:(0,n.jsxs)(d.cZ,{className:"bg-white text-black p-0 overflow-hidden",children:[(0,n.jsxs)(d.fK,{className:"pt-8 px-6",children:[(0,n.jsx)(d.$N,{className:"text-2xl text-center font-bold",children:"Customize your server"}),(0,n.jsx)(d.Be,{className:"text-center text-zinc-500",children:"Give your server a personality with a name and an image. You can always change it later."})]}),(0,n.jsx)(c.l0,{...a,children:(0,n.jsxs)("form",{onSubmit:a.handleSubmit(b),className:"space-y-8",children:[(0,n.jsxs)("div",{className:"space-y-8 px-6",children:[(0,n.jsx)("div",{className:"flex items-center justify-center text-center",children:(0,n.jsx)(c.Wi,{control:a.control,name:"imageUrl",render:e=>{let{field:t}=e;return(0,n.jsx)(c.xJ,{children:(0,n.jsx)(c.NI,{children:(0,n.jsx)(m.p,{endpoint:"serverImage",value:t.value,onChange:t.onChange})})})}})}),(0,n.jsx)(c.Wi,{control:a.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(c.xJ,{children:[(0,n.jsx)(c.lX,{className:"uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70",children:"WorkSpace name"}),(0,n.jsx)(c.NI,{children:(0,n.jsx)(u.I,{disabled:g,className:"bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0",placeholder:"Enter WorkSpace",...t})}),(0,n.jsx)(c.zG,{})]})}})]}),(0,n.jsx)(d.cN,{className:"bg-gray-100 px-6 py-4",children:(0,n.jsx)(f.z,{variant:"primary",disabled:g,children:"Create"})})]})})]})}):null}},3762:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),s=r(2265),a=r(7256),o=r(6061),i=r(306);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",primary:"bg-indigo-500 text-white hover:bg-indigo-500/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...c})});d.displayName="Button"},5018:function(e,t,r){"use strict";r.d(t,{$N:function(){return x},Be:function(){return p},Vq:function(){return l},cN:function(){return m},cZ:function(){return u},fK:function(){return f}});var n=r(7437),s=r(2265),a=r(8712),o=r(2549),i=r(306);let l=a.fC;a.xz;let d=e=>{let{className:t,...r}=e;return(0,n.jsx)(a.h_,{className:(0,i.cn)(t),...r})};d.displayName=a.h_.displayName;let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});c.displayName=a.aV.displayName;let u=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(a.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",r),...l,children:[s,(0,n.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(o.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=a.VY.displayName;let f=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};f.displayName="DialogHeader";let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};m.displayName="DialogFooter";let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});x.displayName=a.Dx.displayName;let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});p.displayName=a.dk.displayName},603:function(e,t,r){"use strict";r.d(t,{NI:function(){return g},Wi:function(){return u},l0:function(){return d},lX:function(){return p},xJ:function(){return x},zG:function(){return h}});var n=r(7437),s=r(2265),a=r(7256),o=r(1865),i=r(306),l=r(7764);let d=o.RV,c=s.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},f=()=>{let e=s.useContext(c),t=s.useContext(m),{getFieldState:r,formState:n}=(0,o.Gc)(),a=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...a}},m=s.createContext({}),x=s.forwardRef((e,t)=>{let{className:r,...a}=e,o=s.useId();return(0,n.jsx)(m.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",r),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:a,formItemId:o}=f();return(0,n.jsx)(l._,{ref:t,className:(0,i.cn)(a&&"text-destructive",r),htmlFor:o,...s})});p.displayName="FormLabel";let g=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:o,formDescriptionId:i,formMessageId:l}=f();return(0,n.jsx)(a.g7,{ref:t,id:o,"aria-describedby":s?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!s,...r})});g.displayName="FormControl";let b=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("p",{ref:t,id:a,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});b.displayName="FormDescription";let h=s.forwardRef((e,t)=>{let{className:r,children:s,...a}=e,{error:o,formMessageId:l}=f(),d=o?String(null==o?void 0:o.message):s;return d?(0,n.jsx)("p",{ref:t,id:l,className:(0,i.cn)("text-sm font-medium text-destructive",r),...a,children:d}):null});h.displayName="FormMessage"},3904:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(7437),s=r(2265),a=r(306);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},7764:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n=r(7437),s=r(2265),a=r(6743),o=r(6061),i=r(306);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.f,{ref:t,className:(0,i.cn)(l(),r),...s})});d.displayName=a.f.displayName},306:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(7042),s=r(3986);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}},3699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return s},NoSSR:function(){return a}}),r(1024),r(2265);let n=r(7669);function s(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}}},function(e){e.O(0,[304,906,504,698,129,468,971,596,744],function(){return e(e.s=8143)}),_N_E=e.O()}]);