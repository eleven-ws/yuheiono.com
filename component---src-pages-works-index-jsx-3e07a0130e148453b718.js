"use strict";(self.webpackChunkyuheiono_com=self.webpackChunkyuheiono_com||[]).push([[638],{6486:function(e,t,l){l.r(t),l.d(t,{Head:function(){return w}});var o=l(4041),n=l(8930),r=(l(6193),l(1448)),s=l(8239),a=l(4336),i=l(237),c=l(9738),u=l(4496),m=l(3173),d=l(4875),y=l(7437);t.default=e=>{const[t,l]=o.useState("all"),u=d.N;return o.useEffect((()=>{const t=new URLSearchParams(e.location.search);l(t.get("category")),setTimeout((()=>{const e=window.localStorage.getItem("scrollY")||0;window.scroll(0,e)}),100)}),[e.location.search]),(0,y.Y)(a.P,null,(0,y.Y)(c.V,null),(0,y.Y)(r.A,{py:10},(0,y.Y)(r.A,{mb:4,sx:{display:"flex",justifyContent:"center"}},m.LZ.map(((e,l)=>{let{label:o,id:n}=e;const r="/works/"+("all"===n?"":`?category=${n}`),s="all"===n&&null===t||n===t;return(0,y.Y)(i.N,{key:l,href:r,sx:{mx:{md:4,sm:2,xs:1},textDecoration:s&&"underline",pointerEvents:s&&"none"}},o)}))),(0,y.Y)(s.Ay,{container:!0,direction:"row",spacing:4},void 0!==t&&u.filter((e=>{let{category:l}=e;return!t||"all"===t||(Array.isArray(l)?l.includes(t):l===t)})).map(((e,l)=>{let{name:o,link:r,image:a}=e;return r+="/"+(t?`?category=${t}`:""),(0,y.Y)(s.Ay,{item:!0,key:l,lg:2,md:3,sm:3,xs:6,sx:{transition:"all 250ms ease-out"}},(0,y.Y)(i.N,{href:`/works/${r}`,sx:{display:"block",width:"100%",height:"100%"},onClick:e=>{e.preventDefault(),window.localStorage.setItem("scrollY",window.scrollY),(0,n.navigate)(r)}},(0,y.Y)("img",{src:`https://cdn.yuheiono.com/images/${o}_00.webp`,style:{display:"block",width:"100%"}})))})))))};const w=()=>(0,y.Y)(u.G,{title:"WORKS"})}}]);
//# sourceMappingURL=component---src-pages-works-index-jsx-3e07a0130e148453b718.js.map