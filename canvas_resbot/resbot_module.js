const _0x5611be=_0x3d1f;(function(_0x500f76,_0x1d28bd){const _0x43528f=_0x3d1f,_0x537916=_0x500f76();while(!![]){try{const _0x3addaa=-parseInt(_0x43528f(0xc6))/0x1+-parseInt(_0x43528f(0xbc))/0x2+parseInt(_0x43528f(0xc5))/0x3*(-parseInt(_0x43528f(0xcd))/0x4)+parseInt(_0x43528f(0xc1))/0x5*(-parseInt(_0x43528f(0xbe))/0x6)+parseInt(_0x43528f(0xc4))/0x7*(parseInt(_0x43528f(0xa8))/0x8)+-parseInt(_0x43528f(0xc8))/0x9*(-parseInt(_0x43528f(0xc9))/0xa)+parseInt(_0x43528f(0xc3))/0xb;if(_0x3addaa===_0x1d28bd)break;else _0x537916['push'](_0x537916['shift']());}catch(_0x310378){_0x537916['push'](_0x537916['shift']());}}}(_0x4ef9,0x57a34));const {createCanvas,registerFont,loadImage}=require('canvas'),path=require(_0x5611be(0xa4)),fs2=require('fs'),fs=require('fs')[_0x5611be(0xab)],axios=require(_0x5611be(0xaf)),moment=require(_0x5611be(0xc2)),zonaWaktuIndonesia=_0x5611be(0x9f),waktuSekarangIndonesia=moment()['tz'](zonaWaktuIndonesia);waktuSekarangIndonesia[_0x5611be(0xad)]('id');const formatTanggal=waktuSekarangIndonesia[_0x5611be(0xbf)]('D\x20MMMM\x20YYYY');async function getImageAndSaveToTempFile(_0x4c708e){const _0x2307bc=_0x5611be;try{const _0x86171f=await getImageBufferFromURL(_0x4c708e),_0x1e6bd3=await saveBufferToTempFile(_0x86171f);return _0x1e6bd3;}catch(_0x381e3d){console['error'](_0x2307bc(0xbb),_0x381e3d);throw _0x381e3d;}}function _0x4ef9(){const _0x4ad62d=['arraybuffer','promises','.jpg','locale','closePath','axios','restore','clip','resolve','image/png','fillText','error','LEMONMILK-Bold.otf','LEMONMILK','data','now','drawImage','Error\x20getting\x20image\x20and\x20saving\x20to\x20temp\x20file:','365204yyEDDx','fillStyle','3499458hhnfIO','format','textAlign','5qUBZVo','moment-timezone','12742455qWywzc','7tPrrOA','141957KIuKoA','628231gQqBKs','Error\x20fetching\x20image:','1194489XHCmAW','40nOYMDK','substring','length','lineWidth','16Tczuft','center','save','join','/tmp','log','binary','arc','writeFile','beginPath','tempfile_','exports','Enter\x20valid\x20parameters\x20(name,\x20pp)','55px\x20\x22LEMONMILK\x22','Asia/Jakarta','toBuffer','strokeText','mkdir','#000000','path','font','unlink','Error\x20saving\x20buffer\x20to\x20temp\x20file:','2024216deRkHz','from'];_0x4ef9=function(){return _0x4ad62d;};return _0x4ef9();}function _0x3d1f(_0x4d7737,_0x59fe9e){const _0x4ef91b=_0x4ef9();return _0x3d1f=function(_0x3d1feb,_0x5a44c0){_0x3d1feb=_0x3d1feb-0x9b;let _0x34d9bd=_0x4ef91b[_0x3d1feb];return _0x34d9bd;},_0x3d1f(_0x4d7737,_0x59fe9e);}async function getImageBufferFromURL(_0x2b1ebb){const _0xd74168=_0x5611be;try{const _0x458eff=await axios['get'](_0x2b1ebb,{'responseType':_0xd74168(0xaa)}),_0x39c09=Buffer[_0xd74168(0xa9)](_0x458eff[_0xd74168(0xb8)],_0xd74168(0xd3));return _0x39c09;}catch(_0x314efb){console['error'](_0xd74168(0xc7),_0x314efb);throw _0x314efb;}}async function saveBufferToTempFile(_0x149370){const _0x232f4d=_0x5611be;try{const _0x4961e6=_0x232f4d(0xd1),_0x2d6bee=path[_0x232f4d(0xd0)](__dirname,_0x4961e6);await fs[_0x232f4d(0xa2)](_0x2d6bee,{'recursive':!![]});const _0x3fc3fa=path[_0x232f4d(0xd0)](_0x2d6bee,_0x232f4d(0x9b)+Date[_0x232f4d(0xb9)]()+_0x232f4d(0xac));return await fs[_0x232f4d(0xd5)](_0x3fc3fa,_0x149370),_0x3fc3fa;}catch(_0x3b48a0){console['error'](_0x232f4d(0xa7),_0x3b48a0);throw _0x3b48a0;}}async function generateImage(_0x41b3b0,_0x1a2ce5,_0x47bcf1){const _0x18a31e=_0x5611be;try{if(!_0x41b3b0||!_0x1a2ce5)return console[_0x18a31e(0xd2)](_0x18a31e(0x9d));_0x41b3b0[_0x18a31e(0xcb)]>0x12&&(_0x41b3b0=_0x41b3b0[_0x18a31e(0xca)](0x0,0x12));const _0x17a338=await getImageAndSaveToTempFile(_0x1a2ce5),_0x3f2544=formatTanggal;registerFont(path['resolve'](__dirname,_0x18a31e(0xb6)),{'family':_0x18a31e(0xb7)});const _0x381552=0x500,_0x4db57a=0x2d0,_0x59892e=createCanvas(_0x381552,_0x4db57a),_0xb984d2=_0x59892e['getContext']('2d'),_0xd849b2=await loadImage(path['resolve'](__dirname,'./'+_0x47bcf1));_0xb984d2['drawImage'](_0xd849b2,0x0,0x0,_0x381552,_0x4db57a);const _0x3e9bd5=0x0,_0x302821=-0x47,_0x136e7b=0xdc,_0x43bc09=(_0x381552-_0x136e7b*0x2)/0x2+_0x3e9bd5,_0x5eb297=(_0x4db57a-_0x136e7b*0x2)/0x2+_0x302821;_0xb984d2[_0x18a31e(0xcf)](),_0xb984d2[_0x18a31e(0xd6)](),_0xb984d2[_0x18a31e(0xd4)](_0x43bc09+_0x136e7b,_0x5eb297+_0x136e7b,_0x136e7b,0x0,Math['PI']*0x2,!![]),_0xb984d2[_0x18a31e(0xae)](),_0xb984d2[_0x18a31e(0xb1)]();const _0x39d349=await loadImage(path[_0x18a31e(0xb2)](__dirname,_0x17a338));_0xb984d2[_0x18a31e(0xba)](_0x39d349,_0x43bc09,_0x5eb297,_0x136e7b*0x2,_0x136e7b*0x2),_0xb984d2[_0x18a31e(0xb0)](),_0xb984d2[_0x18a31e(0xa5)]=_0x18a31e(0x9e),_0xb984d2[_0x18a31e(0xbd)]='#ffffff',_0xb984d2['strokeStyle']=_0x18a31e(0xa3),_0xb984d2[_0x18a31e(0xcc)]=0x2,_0xb984d2[_0x18a31e(0xc0)]=_0x18a31e(0xce),_0xb984d2[_0x18a31e(0xa1)](''+_0x41b3b0,0x280,0x278),_0xb984d2[_0x18a31e(0xb4)](''+_0x41b3b0,0x280,0x278),await fs[_0x18a31e(0xa6)](_0x17a338);const _0x3c84a1=_0x59892e[_0x18a31e(0xa0)](_0x18a31e(0xb3));return _0x3c84a1;}catch(_0x11d093){return console[_0x18a31e(0xb5)](_0x11d093);}}module[_0x5611be(0x9c)]={'generateImage':generateImage};