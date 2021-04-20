//SCRIPT BY MANIK GANZ
//BOLEH RECORD ASAL GA DIJUAL♡
//BOLEH RECORD ASAL IZIN◇
//BOLEH RECORD ASAL NAMA GW TETEP ADA♧
//TQTO ALL CREATOR BOT-PENYEDIA APIKEY DISINI♤
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./maniklib/color')
const { fetchJson } = require('./maniklib/fetcher')
const { recognize } = require('./maniklib/ocr')
const fontPath = ('./maniklib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./maniklib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const FormData = require('form-data')
const ffmpeg = require('fluent-ffmpeg')
const toMs = require('ms')
const ms = require('parse-ms')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./manikbhsa')
const tebakgambar = JSON.parse(fs.readFileSync('./tebakgambar.json'))
const setiker = JSON.parse(fs.readFileSync('./maniksrc/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./maniksrc/video.json'))
const audionye = JSON.parse(fs.readFileSync('./maniksrc/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./maniksrc/image.json'))
const autosticker = JSON.parse(fs.readFileSync('./autosticker.json'))
const ncheck = JSON.parse(fs.readFileSync('./ncheck.json'))

/*[-- Load setting --]*/
prefix = '#',
blocked = [],   
limitawal = '500',
battre = 85 // JANGAN DIGANTI
memberlimit = '25',
cr = '*ManikGanz*',
fakedel = 'ManikBot-Antidelete',
numbernye = '6285737134572',
NamaOwner = 'ManikGanz',
NamaBot = 'ManikBot',
lolhumankey = 'b170074ac846042f35937286',
leyskey = 'freeKeY',
odckey = 'onlygay',
onlydev = 'onlygay', 
xteam = 'AbilGanss',
BarBarKey = 'IDxO1TFYnKADlX4pxcHa' 
AbilGanssVhtearKey = '1BlnApiIkyPake' // KALO ABIS BELI GBLG
XteamKey = 'AbilGanss' // KALO ABIS BELI GBLG
obzKey = 'Bidmzz1sJ2L1TKyqaMEU'
ApiDevolover = 'HokageBR' // KALO GKBISA BELI GBLG
TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
eksapi = 'apivinz'
shizukaapi = 'itsmeiky633'
apivhtear = '1BlnApiIkyPake' // KALO ABIS BELI GBLG
lolhuman = 'yogipwlolkey' // KALO GK BISA LU KE WEBNYA LAH TOLOL KAN GRATIS
l0lhuman = 'hEro'
ftake = 'Lord Manik Mengintai_',
ownerNumber = ["6282126073060@s.whatsapp.net"]   //ganti nomor lu! 

//file json
const _leveling = JSON.parse(fs.readFileSync('./manikdata/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./manikdata/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./manikdata/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./manikdata/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./manikdata/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./manikdata/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./manikdata/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./manikdata/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./manikdata/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./manikdata/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./manikdata/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./manikdata/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./manikdata/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./manikdata/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./manikdata/kelompok/badword.json'))
const afk = JSON.parse(fs.readFileSync('./maniksrc/afk.json'))

//function nya
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
    '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./manikdata/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./manikdata/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./manikdata/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./manikdata/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./manikdata/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./manikdata/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./manikdata/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./manikdata/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./manikdata/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

const _0x1e90=['6QtJhha','credentials\x20updated!','2CquPZf','1bvxmYb','Halo\x20Dunia!','931705fFBfOr','QR\x20code\x20Udah\x20Ada,\x20Scan\x20Ngab..','generate','connect','753wYNJjs','141mBQcHv','log','65998CVFmuT','4969gUzfxU','./ManikGanz.json','434473gZkZOf','631714FwFoPX','466261gaeSKn','credentials-updated'];function _0x56e8(_0x58fdff,_0x3ec50d){_0x58fdff=_0x58fdff-0x110;let _0x1e90f0=_0x1e90[_0x58fdff];return _0x1e90f0;}const _0x437c76=_0x56e8;(function(_0x55411b,_0xe0698b){const _0x3b1a28=_0x56e8;while(!![]){try{const _0x43b1dd=-parseInt(_0x3b1a28(0x114))*parseInt(_0x3b1a28(0x11e))+parseInt(_0x3b1a28(0x121))+-parseInt(_0x3b1a28(0x120))+parseInt(_0x3b1a28(0x11a))*-parseInt(_0x3b1a28(0x11b))+parseInt(_0x3b1a28(0x116))+-parseInt(_0x3b1a28(0x122))*parseInt(_0x3b1a28(0x113))+parseInt(_0x3b1a28(0x11d))*parseInt(_0x3b1a28(0x111));if(_0x43b1dd===_0xe0698b)break;else _0x55411b['push'](_0x55411b['shift']());}catch(_0x5daca5){_0x55411b['push'](_0x55411b['shift']());}}}(_0x1e90,0x757f6));const manik=new WAConnection();console['log'](_0x437c76(0x115)),manik['on']('qr',_0x23b8f1=>{const _0x4a5510=_0x437c76;qrcode[_0x4a5510(0x118)](_0x23b8f1,{'small':!![]}),console[_0x4a5510(0x11c)](color('[','white'),color('\x7f','red'),color(']','white'),color(_0x4a5510(0x117),'white'),color('Manik\x7f','red'),color('Bot\x7f','red'));}),manik['on'](_0x437c76(0x110),()=>{const _0x57a22a=_0x437c76;console[_0x57a22a(0x11c)]('Sukses\x20Tersambung\x20Tuan!');const _0x532c82=manik['base64EncodedAuthInfo']();console['log'](_0x57a22a(0x112)),fs['writeFileSync']('./ManikGanz.json',JSON['stringify'](_0x532c82,null,'\x09'));}),fs['existsSync']('./ManikGanz.json')&&manik['loadAuthInfo'](_0x437c76(0x11f)),manik[_0x437c76(0x119)]();

const _0x28a6=['split','sendMessage','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','2480eZiSBj','red','includes','groupMetadata','50063AbbUgV','add','21734lnwlgl','notify','subject','511979RwgNTF','http://hadi-api.herokuapp.com/api/card/welcome?nama=','1169824wQyytC','log','&descriminator=','&pp=','\x20intro*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20\x0a║┣❥\x20Umur\x20:\x0a║┣❥\x20Askot\x20:\x0a║┣❥\x20Cewe/Cowo?\x0a╚════\x20⸨\x20*MANIK-BOT*\x20⸩\x20\x20═════','3366LLzcpF','&bg=https://i.postimg.cc/8c0kDR8r/20210418-121539.jpg','\x0a*Kalo\x20Balik\x20Bawain\x20Gorengan\x20Ya️*','Error\x20:\x20%s','jid','contacts','*Babay*\x20@','&memcount=','283VvraUb','603VWtPMr','1194klcikH','action','image','length','&gcname=','26Gqojpz'];(function(_0x23171a,_0x34f5c8){const _0x3e3109=_0x86aa;while(!![]){try{const _0x1c4c6b=parseInt(_0x3e3109(0x152))*-parseInt(_0x3e3109(0x153))+parseInt(_0x3e3109(0x151))*-parseInt(_0x3e3109(0x16c))+parseInt(_0x3e3109(0x167))+parseInt(_0x3e3109(0x160))+parseInt(_0x3e3109(0x15c))+-parseInt(_0x3e3109(0x162))*-parseInt(_0x3e3109(0x158))+parseInt(_0x3e3109(0x165));if(_0x1c4c6b===_0x34f5c8)break;else _0x23171a['push'](_0x23171a['shift']());}catch(_0x59011e){_0x23171a['push'](_0x23171a['shift']());}}}(_0x28a6,0x990b6));const hebom=manik;function _0x86aa(_0x14d640,_0x598ab6){_0x14d640=_0x14d640-0x14b;let _0x28a69d=_0x28a6[_0x14d640];return _0x28a69d;}hebom['on']('group-participants-update',async _0x17dade=>{const _0x1bec94=_0x86aa;if(!welkom[_0x1bec94(0x15e)](_0x17dade[_0x1bec94(0x14d)]))return;try{mem=_0x17dade['participants'][0x0];try{var _0x157831='https://i.postimg.cc/mgpjTNB1/IMG-20210417-175039.jpg';}catch(_0xad60f){var _0x157831=_0x1bec94(0x15b);}if(_0x17dade['action']==_0x1bec94(0x161)){let _0x591bed=await hebom[_0x1bec94(0x15f)](_0x17dade[_0x1bec94(0x14d)]);memeg=_0x591bed['participants'][_0x1bec94(0x156)],num=_0x17dade['participants'][0x0],anu_user=hebom[_0x1bec94(0x14e)][mem],teks='╔═══\x20❰\x20「\x20*WELCOME*\x20」❱\x20════\x0a║\x20*@'+num[_0x1bec94(0x159)]('@')[0x0]+_0x1bec94(0x16b);let _0x277aa7=await getBuffer(_0x1bec94(0x166)+num[_0x1bec94(0x159)]('@')[0x0]+_0x1bec94(0x169)+memeg+_0x1bec94(0x150)+memeg+_0x1bec94(0x157)+encodeURI(_0x591bed[_0x1bec94(0x164)])+_0x1bec94(0x16a)+_0x157831+_0x1bec94(0x16d));hebom[_0x1bec94(0x15a)](_0x591bed['id'],_0x277aa7,MessageType[_0x1bec94(0x155)],{'caption':teks,'contextInfo':{'mentionedJid':[num]}});}if(_0x17dade[_0x1bec94(0x154)]=='remove'){let _0x435561=await hebom[_0x1bec94(0x15f)](_0x17dade[_0x1bec94(0x14d)]);num=_0x17dade['participants'][0x0],anu_user=hebom[_0x1bec94(0x14e)][mem],memeg=_0x435561['participants']['length'],out=_0x1bec94(0x14f)+num[_0x1bec94(0x159)]('@')[0x0]+_0x1bec94(0x14b);let _0x23c651=await getBuffer('http://hadi-api.herokuapp.com/api/card/goodbye?nama='+anu_user[_0x1bec94(0x163)]+_0x1bec94(0x169)+memeg+'&memcount='+memeg+_0x1bec94(0x157)+encodeURI(_0x435561[_0x1bec94(0x164)])+_0x1bec94(0x16a)+_0x157831+'&bg=https://i.postimg.cc/8c0kDR8r/20210418-121539.jpg');hebom[_0x1bec94(0x15a)](_0x435561['id'],_0x23c651,MessageType[_0x1bec94(0x155)],{'caption':out,'contextInfo':{'mentionedJid':[num]}});}}catch(_0x3ecac1){console[_0x1bec94(0x168)](_0x1bec94(0x14c),color(_0x3ecac1,_0x1bec94(0x15d)));}});
manik.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	const _0xb900=['\x0aStatus\x20semua\x20kontak\x20:\x20','59197QPPPTZ','\x0aStatus\x20kontak\x20dikecualikan\x20:\x20','messageStubType','length','╔═══\x20❰\x20「\x20*ANTI-DELETE*\x20」❱\x20════\x0a║┣❥\x20*Nama\x20:*\x20*','*\x0a║┣❥\x20*Nomer\x20:*\x20','timestamp','parse','stringify','message','participant','contextInfo','data','image','*\x0a║┣❥\x20*Tanggal\x20:*\x20*','audioMessage','jid','unlinkSync','fromMe','extendedTextMessage','*\x0a╚════\x20⸨\x20*','key','endsWith','name','split','308593mfqsIT','155257CirTQe','@g.us','32Obchsn','\x0a╚════\x20⸨\x20*','pdf','imageMessage','notify','Sticker','downloadAndSaveMediaMessage','862061emUXlR','MESSAGE','includes','vname','33320hlAoBM','HH:mm:ss','type','caption','text','green','1QvBIbu','3xQTUay','106581XOlWIJ','*\x0a║┣❥\x20*Nomer\x20:*\x20@','Status\x20untuk\x20grup\x20:\x20','Audio','audio','quotedM','@s.whatsapp.net','\x0a║┣❥\x20*Tipe\x20:*\x20Text\x0a║┣❥\x20*Waktu\x20:*\x20*','log','5MLbmGB','./maniksrc/ct-revoked-banlist.json','sendMessage','format','\x0a║┣❥\x20*Tipe\x20:*\x20video\x0a║┣❥\x20*Waktu\x20:*\x20*','video','./maniksrc/ct-revoked.json','14089mftsiO','./maniksrc/.dat/msg.data.json','\x0a║┣❥\x20*Tipe\x20:*\x20*Sticker*\x0a║┣❥\x20*Waktu\x20:*\x20*','unix','7sYkRYf','messageTimestamp','\x0a║┣❥\x20*Tipe\x20:*\x20image\x0a║┣❥\x20*Waktu\x20:*\x20*','conversation','keys','document','\x0a║┣❥\x20*Tipe\x20:*\x20Document\x0a║┣❥\x20*Waktu\x20:*\x20*','*\x20⸩\x20\x20═════','*\x0a║┣❥\x20*Pesan\x20:*\x20','videoMessage','DD/MM/YYYY','remoteJid','./maniksrc/gc-revoked.json','./manikmedia/revoke/','103HvsoEp','readFileSync','user','replace','stickerMessage'];function _0x15db(_0x58bf85,_0x227e0d){_0x58bf85=_0x58bf85-0x1c1;let _0xb90001=_0xb900[_0x58bf85];return _0xb90001;}(function(_0x84cdb2,_0x4e9685){const _0xdd7fad=_0x15db;while(!![]){try{const _0x568c90=parseInt(_0xdd7fad(0x1e1))*-parseInt(_0xdd7fad(0x200))+-parseInt(_0xdd7fad(0x1d6))*parseInt(_0xdd7fad(0x1cc))+parseInt(_0xdd7fad(0x1c2))+-parseInt(_0xdd7fad(0x1e8))*-parseInt(_0xdd7fad(0x1fa))+parseInt(_0xdd7fad(0x1d8))*parseInt(_0xdd7fad(0x1ec))+-parseInt(_0xdd7fad(0x1d0))*parseInt(_0xdd7fad(0x1c5))+-parseInt(_0xdd7fad(0x1c3))*-parseInt(_0xdd7fad(0x1d7));if(_0x568c90===_0x4e9685)break;else _0x84cdb2['push'](_0x84cdb2['shift']());}catch(_0x1c14f8){_0x84cdb2['push'](_0x84cdb2['shift']());}}}(_0xb900,0xb6730),manik['on']('message-update',async _0x45c008=>{const _0x38105a=_0x15db;try{const _0x3d0567=_0x45c008[_0x38105a(0x215)][_0x38105a(0x1f7)],_0x2faa18=WA_MESSAGE_STUB_TYPES[_0x45c008[_0x38105a(0x202)]]||_0x38105a(0x1cd),_0x1ca374=JSON['parse'](fs[_0x38105a(0x1fb)](_0x38105a(0x1f8))),_0x18330b=JSON[_0x38105a(0x207)](fs[_0x38105a(0x1fb)](_0x38105a(0x1e7))),_0x5f0f29=JSON[_0x38105a(0x207)](fs[_0x38105a(0x1fb)](_0x38105a(0x1e2))),_0x21c216=_0x45c008['key'][_0x38105a(0x212)]?manik['user'][_0x38105a(0x210)]:_0x45c008['key'][_0x38105a(0x1f7)][_0x38105a(0x216)](_0x38105a(0x1c4))?_0x45c008[_0x38105a(0x20a)]:_0x45c008[_0x38105a(0x215)][_0x38105a(0x1f7)],_0x1fa60e=_0x45c008[_0x38105a(0x215)][_0x38105a(0x1f7)][_0x38105a(0x216)](_0x38105a(0x1de))?!![]:_0x45c008['key']['remoteJid'][_0x38105a(0x216)](_0x38105a(0x1c4))?_0x1ca374[_0x38105a(0x1ce)](_0x3d0567):![],_0x61467b=_0x45c008['key']['remoteJid'][_0x38105a(0x216)]('@g.us')?!![]:_0x18330b[_0x38105a(0x20c)]?!![]:![],_0x21a711=_0x45c008[_0x38105a(0x215)][_0x38105a(0x1f7)][_0x38105a(0x216)](_0x38105a(0x1c4))?!![]:!_0x5f0f29[_0x38105a(0x1ce)](_0x21c216)?!![]:![];if(_0x2faa18=='REVOKE'){console[_0x38105a(0x1e0)](_0x38105a(0x1da)+!_0x1fa60e+_0x38105a(0x1ff)+!_0x61467b+_0x38105a(0x201)+!_0x21a711);if(!_0x1fa60e)return;if(!_0x61467b)return;if(!_0x21a711)return;const _0x357f47=_0x45c008['key'][_0x38105a(0x1f7)],_0xbc953=_0x45c008['key'][_0x38105a(0x1f7)][_0x38105a(0x216)](_0x38105a(0x1c4))?!![]:![];let _0x3ece8c,_0x3f1cbe=JSON[_0x38105a(0x207)](fs['readFileSync'](_0x38105a(0x1e9)));const _0x23e0d7=_0x45c008['key']['id'],_0x5ddba2=_0x45c008['key'][_0x38105a(0x212)]?manik[_0x38105a(0x1fc)][_0x38105a(0x210)]:manik['contacts'][_0x21c216]||{'notify':jid[_0x38105a(0x1fd)](/@.+/,'')},_0x28f0c1=_0x45c008[_0x38105a(0x215)][_0x38105a(0x212)]?manik[_0x38105a(0x1fc)][_0x38105a(0x217)]:_0x5ddba2[_0x38105a(0x1c9)]||_0x5ddba2[_0x38105a(0x1cf)]||_0x5ddba2[_0x38105a(0x217)]||'-',_0x14d388={'contextInfo':{'mentionedJid':[_0x21c216]}};for(let _0x1e3a07=0x0;_0x1e3a07<_0x3f1cbe[_0x38105a(0x203)];_0x1e3a07++){if(_0x3f1cbe[_0x1e3a07][_0x38105a(0x215)]['id']==_0x23e0d7){const _0x10eb79=_0x3f1cbe[_0x1e3a07],_0x52dcf9=Object[_0x38105a(0x1f0)](_0x3f1cbe[_0x1e3a07][_0x38105a(0x209)])[0x0],_0x1858dd=_0x3f1cbe[_0x1e3a07][_0x38105a(0x1ed)];_0x3ece8c={'no':_0x1e3a07,'type':_0x52dcf9,'timestamp':_0x1858dd,'data':_0x10eb79};}}const _0x2f0ea4=Number(_0x3ece8c['no']),_0x943993=_0x3ece8c['type']==_0x38105a(0x1ef)?_0x3f1cbe[_0x2f0ea4][_0x38105a(0x209)][_0x38105a(0x1ef)]:_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x213)?_0x3f1cbe[_0x2f0ea4][_0x38105a(0x209)]['extendedTextMessage'][_0x38105a(0x1d4)]:_0x3ece8c['type']==_0x38105a(0x1c8)?_0x3f1cbe[_0x2f0ea4]['message'][_0x38105a(0x1c8)]['caption']:_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x1fe)?_0x38105a(0x1ca):_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x20f)?_0x38105a(0x1db):_0x3ece8c['type']=='videoMessage'?_0x3f1cbe[_0x2f0ea4][_0x38105a(0x1f5)][_0x38105a(0x1d3)]:_0x3f1cbe[_0x2f0ea4],_0x28601d=_0x3ece8c['type']===_0x38105a(0x213)?JSON['parse'](JSON[_0x38105a(0x208)](_0x3ece8c['data'])[_0x38105a(0x1fd)](_0x38105a(0x1dd),'m'))[_0x38105a(0x209)][_0x38105a(0x213)][_0x38105a(0x20b)]:_0x3ece8c[_0x38105a(0x20c)];var _0x2d53a7=''+_0x21c216[_0x38105a(0x1fd)](_0x38105a(0x1de),''),_0x2b19e4=''+(_0x943993?_0x943993:'-'),_0x343173={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}};if(_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x1ef)||_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x213)){const _0xdb0502=_0x38105a(0x204)+_0x28f0c1+'*\x20\x0a║┣❥\x20*Nomer\x20:*\x20@'+_0x21c216['split']('@')[0x0]+_0x38105a(0x1df)+moment[_0x38105a(0x1eb)](_0x3ece8c['timestamp'])[_0x38105a(0x1e4)]('HH:mm:ss')+_0x38105a(0x20e)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])['format'](_0x38105a(0x1f6))+'*\x0a║┣❥\x20*Pesan\x20:*\x20*'+(_0x943993?_0x943993:'-')+_0x38105a(0x214)+NamaBot+_0x38105a(0x1f3);manik['sendMessage'](_0x357f47,_0xdb0502,MessageType['text'],_0x343173);}else{if(_0x3ece8c[_0x38105a(0x1d2)]==_0x38105a(0x1fe)){var _0x2d53a7=numbernye+'@s.whatsapp.net',_0x2b19e4=''+fakedel;const _0x5b65ac={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}},_0x37d88e=_0x21c216['replace'](_0x38105a(0x1de),'')+'-'+moment()[_0x38105a(0x1eb)](),_0x31b9fc=await manik[_0x38105a(0x1cb)](_0x3ece8c[_0x38105a(0x20c)],'./manikmedia/sticker/'+_0x37d88e),_0x3371d4='╔═══\x20❰\x20「\x20*ANTI-DELETE*\x20」❱\x20════\x0a║┣❥\x20*Nama\x20:*\x20*'+_0x28f0c1+'*\x20\x0a║┣❥\x20*Nomer\x20:*\x20@'+_0x21c216[_0x38105a(0x1c1)]('@')[0x0]+_0x38105a(0x1ea)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])[_0x38105a(0x1e4)](_0x38105a(0x1d1))+_0x38105a(0x20e)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])[_0x38105a(0x1e4)](_0x38105a(0x1f6))+'*\x0a╚════\x20⸨\x20*'+NamaBot+_0x38105a(0x1f3),_0xfcc9a0=fs['readFileSync'](_0x31b9fc);manik[_0x38105a(0x1e3)](_0x357f47,_0x3371d4,MessageType[_0x38105a(0x1d4)],_0x14d388),manik[_0x38105a(0x1e3)](_0x357f47,_0xfcc9a0,MessageType['sticker'],_0x5b65ac),fs[_0x38105a(0x211)](_0x31b9fc);}else{if(_0x3ece8c[_0x38105a(0x1d2)]=='imageMessage'){var _0x2d53a7=numbernye+'@s.whatsapp.net',_0x2b19e4=''+fakedel;const _0x325286={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}},_0x85d5ca=_0x21c216[_0x38105a(0x1fd)](_0x38105a(0x1de),'')+'-'+moment()[_0x38105a(0x1eb)](),_0x5d4705=await manik[_0x38105a(0x1cb)](_0x3ece8c[_0x38105a(0x20c)],_0x38105a(0x1f9)+_0x85d5ca),_0x8397ed=fs[_0x38105a(0x1fb)](_0x5d4705),_0xd847d9=_0x38105a(0x204)+_0x28f0c1+_0x38105a(0x1d9)+_0x21c216[_0x38105a(0x1c1)]('@')[0x0]+_0x38105a(0x1ee)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])[_0x38105a(0x1e4)]('HH:mm:ss')+'*\x0a║┣❥\x20*Tanggal\x20:*\x20*'+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])[_0x38105a(0x1e4)](_0x38105a(0x1f6))+_0x38105a(0x1f4)+(_0x943993?_0x943993:'-')+_0x38105a(0x1c6)+NamaBot+_0x38105a(0x1f3);manik[_0x38105a(0x1e3)](_0x357f47,_0x8397ed,MessageType[_0x38105a(0x20d)],{'contextInfo':{'mentionedJid':[_0x21c216]},'caption':_0xd847d9}),fs[_0x38105a(0x211)](_0x5d4705);}else{if(_0x3ece8c[_0x38105a(0x1d2)]=='documentMessage'){var _0x2d53a7=numbernye+_0x38105a(0x1de),_0x2b19e4=''+fakedel;const _0x38e688={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}},_0x37cb4c=_0x21c216[_0x38105a(0x1fd)](_0x38105a(0x1de),'')+'-'+moment()[_0x38105a(0x1eb)](),_0x1bac1c=await manik[_0x38105a(0x1cb)](_0x3ece8c[_0x38105a(0x20c)],'./manikmedia/revoke/'+_0x37cb4c),_0x2354a6=fs[_0x38105a(0x1fb)](_0x1bac1c),_0x45a253=_0x38105a(0x204)+_0x28f0c1+_0x38105a(0x205)+_0x21c216[_0x38105a(0x1c1)]('@')[0x0]+_0x38105a(0x1f2)+moment['unix'](_0x3ece8c[_0x38105a(0x206)])['format'](_0x38105a(0x1d1))+_0x38105a(0x20e)+moment[_0x38105a(0x1eb)](_0x3ece8c['timestamp'])[_0x38105a(0x1e4)]('DD/MM/YYYY')+'*\x0a╚════\x20⸨\x20*'+NamaBot+_0x38105a(0x1f3);manik[_0x38105a(0x1e3)](_0x357f47,_0x45a253,MessageType[_0x38105a(0x1d4)],{'contextInfo':{'forwardingScore':0x3e8,'isForwarded':!![]}}),manik[_0x38105a(0x1e3)](_0x357f47,_0x2354a6,MessageType[_0x38105a(0x1f1)],{'mimetype':Mimetype[_0x38105a(0x1c7)]}),fs[_0x38105a(0x211)](_0x1bac1c);}else{if(_0x3ece8c['type']==_0x38105a(0x20f)){var _0x2d53a7=numbernye+_0x38105a(0x1de),_0x2b19e4=''+fakedel;const _0x215b3a={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}},_0x9edab0=_0x21c216[_0x38105a(0x1fd)](_0x38105a(0x1de),'')+'-'+moment()[_0x38105a(0x1eb)](),_0x1b5edb=await manik[_0x38105a(0x1cb)](_0x3ece8c[_0x38105a(0x20c)],'./manikmedia/revoke/'+_0x9edab0),_0x5dd9f0=fs[_0x38105a(0x1fb)](_0x1b5edb),_0x2a4fdb=_0x38105a(0x204)+_0x28f0c1+'*\x0a║┣❥\x20*Nomer\x20:*\x20@'+_0x21c216[_0x38105a(0x1c1)]('@')[0x0]+'\x0a║┣❥\x20*Tipe\x20:*\x20audio\x0a║┣❥\x20*Waktu\x20:*\x20*'+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])[_0x38105a(0x1e4)](_0x38105a(0x1d1))+_0x38105a(0x20e)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])['format'](_0x38105a(0x1f6))+_0x38105a(0x214)+NamaBot+'*\x20⸩\x20\x20═════';manik[_0x38105a(0x1e3)](_0x357f47,_0x2a4fdb,MessageType[_0x38105a(0x1d4)],_0x215b3a,{'contextInfo':{'mentionedJid':[_0x21c216]}}),manik[_0x38105a(0x1e3)](_0x357f47,_0x5dd9f0,MessageType[_0x38105a(0x1dc)],_0x215b3a),fs[_0x38105a(0x211)](_0x1b5edb);}else{if(_0x3ece8c[_0x38105a(0x1d2)]=='videoMessage'){var _0x2d53a7=numbernye+_0x38105a(0x1de),_0x2b19e4=''+fakedel;const _0xa112a={'contextInfo':{'participant':_0x2d53a7,'quotedMessage':{'extendedTextMessage':{'text':_0x2b19e4}}}},_0x40b69d=_0x21c216[_0x38105a(0x1fd)](_0x38105a(0x1de),'')+'-'+moment()[_0x38105a(0x1eb)](),_0x362074=await manik[_0x38105a(0x1cb)](_0x3ece8c[_0x38105a(0x20c)],_0x38105a(0x1f9)+_0x40b69d),_0x2eb79c=fs[_0x38105a(0x1fb)](_0x362074),_0x113c86=_0x38105a(0x204)+_0x28f0c1+'*\x0a║┣❥\x20*Nomer\x20:*\x20'+_0x21c216['replace'](_0x38105a(0x1de),'')+_0x38105a(0x1e5)+moment[_0x38105a(0x1eb)](_0x3ece8c['timestamp'])['format'](_0x38105a(0x1d1))+_0x38105a(0x20e)+moment[_0x38105a(0x1eb)](_0x3ece8c[_0x38105a(0x206)])['format'](_0x38105a(0x1f6))+_0x38105a(0x214)+NamaBot+_0x38105a(0x1f3);manik['sendMessage'](_0x357f47,_0x2eb79c,MessageType[_0x38105a(0x1e6)],{'contextInfo':{'forwardingScore':0x3e8,'isForwarded':!![]},'caption':_0x113c86}),fs[_0x38105a(0x211)](_0x362074);}}}}}}}}catch(_0xaa8c20){console['log']('Message\x20:\x20%s',color(_0xaa8c20,_0x38105a(0x1d5)));}}));
manik.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./maniksrc/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./maniksrc/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./maniksrc/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.key.fromMe && mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const totalchat = await manik.chats.all()
			const botNumber = manik.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = manik.contacts[sender] != undefined ? manik.contacts[sender].vname || manik.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await manik.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const ultah = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=06&bulan=12')
		      const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isCheck = isGroup ? ncheck.includes(from) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			

			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const forwd = { forwardingScore: 1000, isForwarded: true }
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*ManikGanz\nFollow Ig: @Aryamanik___*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniksrc/odc.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./maniksrc/odc.jpeg`)}, "title": ftake, "description": "ManikGanz", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "ManikGanz", "productImageCount": 1}, "businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			manik.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
        })
			const reply = (teks) => {
				manik.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				manik.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? manik.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : manik.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    manik.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			manik.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    manik.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
			//TEBAK GAMBAR AUTO
			const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const mentionManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionManik.push(mentionByManik)
            // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Mantap kamu berhasil menjawab dengan tepat\nSelamat ")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Gagal coba lagi!")
                }
            }
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie '
        if (levelRole <= 2) {
            role = 'Newbie '
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 '
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 '
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 '
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 '
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 '
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 '
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 '
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 '
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 '
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 '
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 '
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 '
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 '
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 '
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 '
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 '
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 '
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 '
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 '
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 '
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 '
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 '
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 '
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 '
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 '
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 '
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 '
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 '
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 '
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1  '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 '
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 '
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 '
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 '
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 '
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 '
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 '
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 '
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 '
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 '
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 '
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 '
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 '
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 '
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 '
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 '
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 '
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 '
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 '
        } else if (levelRole <= 102) {
            role = 'Brigadier Early '
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver '
        } else if (levelRole <= 106) {
            role = 'Brigadier gold '
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum '
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond '
        } else if (levelRole <= 112) {
            role = 'Major General Early '
        } else if (levelRole <= 114) {
            role = 'Major General Silver '
        } else if (levelRole <= 116) {
            role = 'Major General gold '
        } else if (levelRole <= 118) {
            role = 'Major General Platinum '
        } else if (levelRole <= 120) {
            role = 'Major General Diamond '
        } else if (levelRole <= 122) {
            role = 'Lt. General Early '
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver '
        } else if (levelRole <= 126) {
            role = 'Lt. General gold '
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum '
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond '
        } else if (levelRole <= 132) {
            role = 'General Early '
        } else if (levelRole <= 134) {
            role = 'General Silver '
        } else if (levelRole <= 136) {
            role = 'General gold '
        } else if (levelRole <= 138) {
            role = 'General Platinum '
        } else if (levelRole <= 140) {
            role = 'General Diamond '
        } else if (levelRole <= 142) {
            role = 'Commander Early '
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate '
        } else if (levelRole <= 146) {
            role = 'Commander Elite '
        } else if (levelRole <= 148) {
            role = 'The Commander Hero '
        } else if (levelRole <= 152) {
            role = 'Legends '
        } else if (levelRole <= 154) {
            role = 'Legends '
        } else if (levelRole <= 156) {
            role = 'Legends '
        } else if (levelRole <= 158) {
            role = 'Legends '
        } else if (levelRole <= 160) {
            role = 'Legends '
        } else if (levelRole <= 162) {
            role = 'Legends '
        } else if (levelRole <= 164) {
            role = 'Legends '
        } else if (levelRole <= 166) {
            role = 'Legends '
        } else if (levelRole <= 168) {
            role = 'Legends '
        } else if (levelRole <= 170) {
            role = 'Legends '
        } else if (levelRole <= 172) {
            role = 'Legends '
        } else if (levelRole <= 174) {
            role = 'Legends '
        } else if (levelRole <= 176) {
            role = 'Legends '
        } else if (levelRole <= 178) {
            role = 'Legends '
        } else if (levelRole <= 180) {
            role = 'Legends '
        } else if (levelRole <= 182) {
            role = 'Legends '
        } else if (levelRole <= 184) {
            role = 'Legends '
        } else if (levelRole <= 186) {
            role = 'Legends '
        } else if (levelRole <= 188) {
            role = 'Legends '
        } else if (levelRole <= 190) {
            role = 'Legends '
        } else if (levelRole <= 192) {
            role = 'Legends '
        } else if (levelRole <= 194) {
            role = 'Legends '
        } else if (levelRole <= 196) {
            role = 'Legends '
        } else if (levelRole <= 198) {
            role = 'Legends '
        } else if (levelRole <= 200) {
            role = 'Legends '
        } else if (levelRole <= 210) {
            role = 'Legends '
        } else if (levelRole <= 220) {
            role = 'Legends '
        } else if (levelRole <= 230) {
            role = 'Legends '
        } else if (levelRole <= 240) {
            role = 'Legends '
        } else if (levelRole <= 250) {
            role = 'Legends '
        } else if (levelRole <= 260) {
            role = 'Legends '
        } else if (levelRole <= 270) {
            role = 'Legends '
        } else if (levelRole <= 280) {
            role = 'Legends '
        } else if (levelRole <= 290) {
            role = 'Legends '
        } else if (levelRole <= 300) {
            role = 'Legends '
        } else if (levelRole <= 310) {
            role = 'Legends '
        } else if (levelRole <= 320) {
            role = 'Legends '
        } else if (levelRole <= 330) {
            role = 'Legends '
        } else if (levelRole <= 340) {
            role = 'Legends '
        } else if (levelRole <= 350) {
            role = 'Legends '
        } else if (levelRole <= 360) {
            role = 'Legends '
        } else if (levelRole <= 370) {
            role = 'Legends '
        } else if (levelRole <= 380) {
            role = 'Legends '
        } else if (levelRole <= 390) {
            role = 'Legends '
        } else if (levelRole <= 400) {
            role = 'Legends '
        } else if (levelRole <= 410) {
            role = 'Legends '
        } else if (levelRole <= 420) {
            role = 'Legends '
        } else if (levelRole <= 430) {
            role = 'Legends '
        } else if (levelRole <= 440) {
            role = 'Legends '
        } else if (levelRole <= 450) {
            role = 'Legends '
        } else if (levelRole <= 460) {
            role = 'Legends '
        } else if (levelRole <= 470) {
            role = 'Legends '
        } else if (levelRole <= 480) {
            role = 'Legends '
        } else if (levelRole <= 490) {
            role = 'Legends '
        } else if (levelRole <= 500) {
            role = 'Legends '
        } else if (levelRole <= 600) {
            role = 'Legends '
        } else if (levelRole <= 700) {
            role = 'Legends '
        } else if (levelRole <= 800) {
            role = 'Legends '
        } else if (levelRole <= 900) {
            role = 'Legends '
        } else if (levelRole <= 1000) {
            role = 'Legends '
        } else if (levelRole <= 2000) {
            role = 'Legends '
        } else if (levelRole <= 3000) {
            role = 'Legends '
        } else if (levelRole <= 4000) {
            role = 'Legends '
        } else if (levelRole <= 5000) {
            role = 'Legends '
        } else if (levelRole <= 6000) {
            role = 'Legends '
        } else if (levelRole <= 7000) {
            role = 'Legends '
        } else if (levelRole <= 8000) {
            role = 'Legends '
        } else if (levelRole <= 9000) {
            role = 'Legends '
        } else if (levelRole <= 10000) {
            role = 'Legends '
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! ")
                        .then(() => manik.groupRemove(from, sender))
                        .then(() => {
                            manik.sendMessage(from, `* ANTI BADWORD *\nSOVIET-Bot akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => manik.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min ")
                }
            }
        }
        //ANTI VIRTEX 
        if (messagesC.includes("")){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
		
		if (messagesC.includes("")){
		if (!isGroup) return
		if (!isAntiFirtex2) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (messagesC.includes("-")){
		if (!isGroup) return
		if (!isAntiFirtex3) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (messagesC.includes("* ")){
		if (!isGroup) return
		if (!isAntiFirtex4) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (messagesC.includes(" ")){
		if (!isGroup) return
		if (!isAntiFirtex5) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (messagesC.includes("")){
		if (!isGroup) return
		if (!isAntiFirtex6) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS')
		manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("ShenraTensei")
		}, 4000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return manik.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            manik.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./manikdata/pengguna/limit.json', JSON.stringify(_limit))
                        manik.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			// AFK
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Dia Lagi Afk Coy!?\n"
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    manik.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./maniksrc/afk.json", JSON.stringify(afk))
            }
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    manik.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./manikdata/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		manik.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			manik.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			manik.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
//============================TAMBAHAN BY MANIK============================\\
// Islami //
                case 'listsurah':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhumankey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //
                case 'ytplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    manik.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'ytplay2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    manik.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    manik.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytsearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    manik.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp42':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    manik.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'telesticker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        manik.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolhumankey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    manik.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'tiktokmusic':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumankey}&url=${ini_link}`)
                    manik.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                case 'spotify':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhumankey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                case 'igdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    manik.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    manik.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'zippyshare':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhumankey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pinterestdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixiv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhumankey}&query=${query}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixivdl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'xhamstersearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhumankey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhumankey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        manik.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
               
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    manik.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
    case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 manik.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 manik.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
                case 'heroml':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    manik.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wikipedia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    manik.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'lirik':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolhumankey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    manik.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
                case 'covidindo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolhumankey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    manik.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolhumankey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n* ${author}*`)
                    break
                case 'quotesanime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhumankey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n* ${char}*\n* ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhumankey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhumankey}`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhumankey}&query=${query}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'gimage2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        manik.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolhumankey}&query=${query}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolhumankey}&query=${query}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolhumankey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'playstore':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += ` Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhumankey}&img=${x}`)
                        manik.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhumankey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolhumankey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    manik.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Creator
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
              
                case 'semoji':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} `)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'fakedonald':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'faketoko':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhumankey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Converter
                case 'togif':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolhumankey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            manik.sendMessage(from, ini_buff, video, { quoted: ftoko })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Other
                case 'spamsms':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhumankey}&nomor=${nomor}`)
                    reply("Success")
                    break

                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        manik.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhumankey}&text1=${txt1}&text2=${txt2}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Photo Oxy //

                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
//============================CASE DASAR============================\\

                  
                  case 'owner':
                  case 'creator':
                  const arya = fs.readFileSync(`./maniklib/manik.jpg`)
                  const boy = "6285737134572@s.whatsapp.net"
                    ownir = `╔═══ ❰ 「 *OWNER MANIK* 」❱ ════
║┣❥ *Nama :* Albert
║┣❥ *Nomer :* @${boy.split("@")[0]}
║┣❥ *Umur :* 15 Tahun
║┣❥ *Asal :* *Gatau, Kalo Tau Emang Datang?*
║┣❥ *Kelas :* *3 Smp*
╚════ ⸨ *${BOT MONLIGTH SHOP}* ⸩  ═════`
const ngonj = `${MONLIGTH SHOP}`
const ngenj = `${082126073069}`
const mrot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + ngonj + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + ngenj + ':+' + ngenj + '\n' + 'END:VCARD'
let thir= await manik.groupMetadata(from)
	let soton = thir.participants
	let bray = []
	for (let go of soton){
		bray.push(go.jid)
	}
	manik.sendMessage(from, arya, image, { quoted: ftoko, caption: ownir, contextInfo: {"mentionedJid": [boy], forwardingScore: 1000, isForwarded: true }})
	manik.sendMessage(from, {displayname: ngonj, vcard: mrot}, MessageType.contact, {contextInfo: {"mentionedJid": bray}})
	break
					case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await manik.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await manik.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await manik.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        case 'test':
				case 'ping':
				var value = (`Sip Online! Prefix Nih = ${prefix}`)
                var group = await manik.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                manik.sendMessage(from, options, text, {quoted: freply, contextInfo: { forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'donasi':
		               case 'donate':
                       if (!isRegistered) return reply( ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				       wew = fs.readFileSync(`./maniksrc/logo.jpg`)
teks = `*DONASI BRO*
*GOPAY* : 085942060393
*PULSA* : 085942060393
*Ig owner* : @shopgame_monligth65`
					   manik.sendMessage(from, wew, image, { quoted: freply, caption: manik, contextInfo: { forwardingScore: 1000, isForwarded: true }})  
					   break
					   case 'infoowner':
		               case 'infodeveloper':
		               case 'infopengembang':
                       if (!isRegistered) return reply( ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				const srd = "6282126073060@s.whatsapp.net"
				const bjir = `╔════ ◤ *Info Developer* ◢
║╔▸ 
║╠ *Nama* : Monligth 
║╠ *Nomer* : wa.me/6282126073060
║╠ *Github* : Cari Sendiri!?
║╠ *Tag Owner* : @${srd.split("@")[0]}
║╠ *Ig* : @shopgame_monligth65
║╠ *Ulang Tahun Owner:V*
║╠ *${ultah.data.result}*
║╚▸
╠════ ◤ *${NamaBot}* ◢`
					   manik.sendMessage(from, bjir, text, { quoted: ftoko, contextInfo: {"mentionedJid": [srd], forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'bahasa':
					case 'kodenegara':
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.sendMessage(from, `*A*
Afganistan 93
Afrika Selatan 27
Afrika Tengah 236
Albania 355
Algeria (Aljazair) 213
Amerika Serikat 1
Andorra 376
Angola 244
Anguila 1-264
Antigua 1-268
Antillen Belanda 599
Arab Saudi 966
Argentina 54
Armenia 374
Aruba 297
Australia 61
Austria 43
Azerbaijan 994

*B*
Bahama 1-242
Bahrain 973
Bangladesh 880
Barbados 1-246
Barbuda 1-268
Belanda 31
Belarus 375
Belgia 32
Belize 501
Benin 229
Bermuda 1-441
Bhutan 975
Bolivia 591
Bosnia dan Herzegovina 387
Botswana 267
Brasil 55
Brunei Darussalam 673
Bulgaria 359
Burkina Faso 226
Burundi 257

*C*
Cape Verde 238
Ceko 420
Chad 235
Chili 56
Cina 86
Cina Makau 853

*D*
Denmark 45
Djibouti 253
Domikia 1-767

*E*
Ekuador 593
El Salvador 503
Eritrea 291
Estonia 372
Ethiopia 251

*F*
Fiji 679
Filipina 63
Finlandia 358

*G*
Gabon 241
Gambia 220
Georgia 995
Ghana 233
Gibraltar 350
Greenland 299
Grenada 1-473
Guam 1-671
Guatemala 502
Guinea 224
Guinea Bissau 245
Guinea Ekuator 240
Guyana 592

*H*
Haiti 509
Honduras 504
Hongaria 36
Hongkong 852

*I*
Indonesia 62
India 91
Inggris (Britania Raya) 44
Irak 964
Iran 98
Irlandia 353
Islandia 354
Israel 972
Italia 39

*J*
Jamaika 1-876
Jepang 81
Jerman 49
Jersey 44-1534

*K*
Kamboja 855
Kamerun 237
Kanada 1
Kazakhstan 7
Kenya 254
Kepulauan Marshall 692
Kepulauan Turks dan Caicos 1-649
Kirgizstan 996
Kiribati 686
Kolombia 57
Komoros 682
Korea Selatan 82
Korea Utara 850
Kosta Rika 506
Kroasia 385
Kuba 53
Kuwait 965
Kurakao 599

*L*
Laos 856
Latvia 371
Lebanon 961
Lesotho 266
Liberia 231
Libya 218
Liechtenstein 423
Lituania 370
Luksemburg 352

*M*
Madagaskar 261
Makedonia 389
Maladewa 960
Malawi 265
Malaysia 60
Mali 223
Malta 356
Maroko 212
Mauritania 222
Mauritius 230
Mayotte 262
Meksiko 52
Mesir 20
Mikronesia 691
Moldova 373
Monako 377
Mongolia 976
Montenegro 382
Mozambik 258
Myanmar 95

*N*
Namibia 264
Nauru 674
Nepal 977
Niger 227
Nigeria 234
Nikaragua 505
Niue 683
Norwegia 47

*O*
Oman 968

*P*
Pakistan 92
Palau 680
Palestina 970
Panama 507
Pantai Gading 225
Papua Nugini 675
Paraguay 595
Perancis 33
Perancis Polinesia 689
Peru 51
Pitcairn 64
Polandia 48
Portugal 351
Puerto Riko 1-787, 1-939
Pulau Cocos 61
Pulau Cook 682
Pulau Falkland 500
Pulau Faroe 298
Pulau Man 44-1624
Pulau Mariana Utara 1-670
Pulau Reuni 262
Pulau Solomon 677
Pulau Virgin 1-340

*Q*
Qatar 974

*R*
Republik Ceko 420
Republik Demokrasi Kongo 243
Republik Dominika 1-809, 1-829, 1-849
Rumania 40
Rusia 7
Rwanda 250

*S*
Sahara Barat 212
Santo Barthelemy 590
Santo Helena 290
Santo Kitts dan Nevis 1-869
Santo Lucia 1-758
Santo Vincent dan Grenadines 1-784
Samoa 685
San Marino 378
Sao Tome dan Principe 239
Selandia Baru 64
Senegal 221
Serbia 381
Seychelles 248
Sierra Leone 232
Singapura 65
Siprus 357
Slovenia 386
Slowakia 421
Somalia 252
Spanyol 34
Sri Lanka 94
Sudan 249
Sudan 211
Suriah 963
Suriname 597
Svalbard dan Jan Mayen 47
Swaziland 268
Swedia 46
Swiss 41

*T*
Tajikistan 992
Tanjung Verde 238
Tanzania 255
Taiwan 886
Thailand 66
Timor Leste 670
Togo 228
Tokelau 690
Tonga 676
Trinidad dan Tobago 1-868
Tunisia 216
Turki 90
Turkmenistan 993
Tuvalu 688

*U*
Uganda 256
Ukraina 380
Uni Emirat Arab 971
Uruguay 598
Uzbekistan 998

*V*
Vanuatu 678
Vatican 379
Venezuela 58
Vietnam 84

*W*
Walls dan Futuna 681

*Y*
Yaman 967
Yunani 30
Yordania 962

*Z*
Zambia 260
Zimbabwe 263`, text, { quoted: ftoko})
					await limitAdd(sender)
					break
		            case 'del':
		            case 'd':
		            case 'delete':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					case 'info':
					me = manik.user
const nik = "6285737134572@s.whatsapp.net"
                    let jeg = []
				let giid = []
				for (mem of totalchat){
					jeg.push(mem.jid)
				}
				for (yuu of jeg){
					if (yuu && yuu.includes('g.us')){
						giid.push(yuu)
					}
				}
const suptime = process.uptime()
		            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const papik = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                   const teks = `
 *Selamat ${ucapan.data.result} I'm ${NamaBot}*
╔════ ◤ *Info Developer* ◢
║╔▸ 
║╠ *Nama* : monligth
║╠ *Nomer* : wa.me/6282126073060
║╠ *Github* : Cari Sendiri!?
║╠ *Tag Owner* : @${nik.split("@")[0]}
║╠ *Ig* : @Aryamanik___
║╠ *Ulang Tahun Owner:V*
║╠ *${ultah.data.result}*
║╚▸
╠════ ◤ *${BOT MONLIGTH SHOP}* ◢
║╔▸ 
║╠ *Name* : ${BOT MONLIGTH SHOP}
║╠ *Prefix* : ${prefix}
║╠ *Nomor bot* : @${me.jid.split('@')[0]}
║╠ *Speed* : ${process.suptime()}
║╠ *Runtime* : ${kyun(suptime)}
║╠ *Baterai* : Unlimited
║╠ *🕰Jam* : ${jam}:${menit}:${detik} ${ampm}
║╠ *🗓️Tanggal* : ${day} - ${myMonths[bulan]} - ${year}
║╠ *Versi Whatsapp* : ${manik.user.phone.wa_version}
║╠ *Group Chat* : ${good.length}
║╠ *Personal Chat*: ${totalchat.length - good.length}
║╠ *Total Chat* : ${totalchat.length}
║╠ *Total block contact* : ${blocked.length}
║╠ *Grup Wa : ${prefix}manikgroup*
║╠ *Sewabot? : ${prefix}sewabot*
║╠ *Bug? : ${prefix}bugreport*
║╠ *Req? : ${prefix}request*
║╚▸
╚══════════════`
					buffer = await getBuffer(me.imgUrl)
					manik.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid, nik]}})
					break
					case 'snk':
		            case 'peraturan':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
			        tuh = fs.readFileSync(`./maniksrc/logo.jpg`)
                    nehh = `* PERATURAN BOT *

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
		            manik.sendMessage(from, tuh, image, { quoted: freply, caption: nehh, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
					case 'help': 
		case 'menu':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    const wew = fs.readFileSync(`./maniksrc/logo.jpg`)
                   const send = "6282126073060@s.whatsapp.net"
                    let a = []
				let good = []
				for (mem of totalchat){
					a.push(mem.jid)
				}
				for (yaa of a){
					if (yaa && yaa.includes('g.us')){
						good.push(yaa)
					}
				}
const uptime = process.uptime()
		            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                   const mnik = `
 *Selamat ${ucapan.data.result} I'm ${NamaBot}*
╔════ ◤ *Info Developer* ◢
║╔════════════
║╠ *Nama* : monligth
║╠ *Nomer* : wa.me/6282126073060
║╠ *Github* : Cari Sendiri!?
║╠ *Tag Owner* : @${send.split("@")[0]}
║╠ *Ig* : @shopgame_monligth65
║╠ *Ulang Tahun Owner:V*
║╠ *${ultah.data.result}*
║╚════════════
║╔════════════
║╠ *Name* : ${BOT MONLIGTH SHOP}
║╠ *Prefix* : ${prefix}
║╠ *Speed* : ${process.uptime()}
║╠ *Runtime* : ${kyun(uptime)}
║╠ *Baterai :* ${battre}%
║╠ *🕰Jam* : ${jam}:${menit}:${detik} ${ampm}
║╠ *🗓️Tanggal* : ${day} - ${myMonths[bulan]} - ${year}
║╠ *Versi Whatsapp* : ${manik.user.phone.wa_version}
║╠ *Group Chat* : ${good.length}
║╠ *Personal Chat*: ${totalchat.length - good.length}
║╠ *Total Chat* : ${totalchat.length}
║╚════════════
║╔════════════
║╠ *Grup Wa : ${prefix}manikgroup*
║╠ *Sewabot? : ${prefix}sewabot*
║╠ *Bug? : ${prefix}bugreport*
║╠ *Req? : ${prefix}request*
║╠ *Surat? : ${prefix}suratto <628xxx|Surat>*
║╚════════════
╠════ ﹝ *FULL MENU ﹞ 
║╔▸ *◪ OWNER MENU ◪*
║╠❏ ${prefix}antidelete aktif/mati(Group)
║╠❏ ${prefix}antidelete ctaktif/ctmati (Cp)
║╠❏ ${prefix}antidelete banct (Cp)
║╠❏ ${prefix}attack gc (BugGc)
║╠❏ ${prefix}addlimit
║╠❏ ${prefix}setlimit
║╠❏ ${prefix}setmemlimit
║╠❏ ${prefix}addbadword
║╠❏ ${prefix}dellbadword
║╠❏ ${prefix}clearall
║╠❏ ${prefix}setprefix
║╠❏ ${prefix}bc
║╠❏ ${prefix}event 1/0
║╠❏ ${prefix}block
║╠❏ ${prefix}unblock
║╠❏ ${prefix}ban
║╠❏ ${prefix}unban
║╠❏ ${prefix}upswtext
║╠❏ ${prefix}upswimg
║╠❏ ${prefix}upswvid
║╠❏ ${prefix}sendkontak
║╠❏ ${prefix}sendkontag
║╠❏ ${prefix}spamchat 
║╠❏ ${prefix}term
║╠❏ ${prefix}setname
║╠❏ ${prefix}setbio
║╠❏ ${prefix}fdeface
║╠❏ ${prefix}spam
║╠❏ ${prefix}imgtag
║╠❏ ${prefix}stctag
║╠❏ ${prefix}toimg
║╠❏ ${prefix}togif
║╠❏ ${prefix}tovideo
║╠❏ ${prefix}grouplist
║╠❏ ${prefix}autosticker (1/0)
║╠❏ ${prefix}ncheck (1/0)
║╠❏ ${prefix}fordward
║╠❏ ${prefix}wame
║╠❏ ${prefix}nobg
║╚▸
║╔▸ *◪ GROUP MENU ◪*
║╠❏ ${prefix}antilink 1/0
║╠❏ ${prefix}nobadword 1/0
║╠❏ ${prefix}nsfw 1/0
║╠❏ ${prefix}welcome 1/0
║╠❏ ${prefix}leveling 1/0
║╠❏ ${prefix}event
║╠❏ ${prefix}grup buka/tutup
║╠❏ ${prefix}level
║╠❏ ${prefix}notif
║╠❏ ${prefix}infogc
║╠❏ ${prefix}hidetag
║╠❏ ${prefix}linkgc
║╠❏ ${prefix}leave
║╠❏ ${prefix}add
║╠❏ ${prefix}kick
║╠❏ ${prefix}promote
║╠❏ ${prefix}demote
║╠❏ ${prefix}setdesc
║╠❏ ${prefix}setname
║╠❏ ${prefix}afk 
║╠❏ ${prefix}antivirtex
║╠❏ ${prefix}antialakazam
║╠❏ ${prefix}antixvirus
║╠❏ ${prefix}antivirustebel
║╠❏ ${prefix}anticollosal
║╠❏ ${prefix}antiviruschina
║╚▸
║╔▸ *◪ ISLAM MENU ◪*
║╠❏ ${prefix}tahlil
║╠❏ ${prefix}jadwalsholat
║╠❏ ${prefix}kisahnabi
║╠❏ ${prefix}ayatkursi
║╠❏ ${prefix}doaharian
║╠❏ ${prefix}niatsholat
║╠❏ ${prefix}bacaansholat
║╠❏ ${prefix}listsurah
║╠❏ ${prefix}alquran
║╠❏ ${prefix}alquranaudio
║╠❏ ${prefix}asmaulhusna
║╠❏ ${prefix}niatsholat
║╠❏ ${prefix}bacaansholat
║╚▸
║╔▸ *◪ MAKER MENU ◪*
║╠❏ ${prefix}hartatahta
║╠❏ ${prefix}darkneon
║╠❏ ${prefix}candlemug
║╠❏ ${prefix}lovemsg
║╠❏ ${prefix}mugflower
║╠❏ ${prefix}narutobanner
║╠❏ ${prefix}paperonglass
║╠❏ ${prefix}romancetext
║╠❏ ${prefix}shadowtext
║╠❏ ${prefix}coffeecup
║╠❏ ${prefix}coffeecup2
║╠❏ ${prefix}glowingneon
║╠❏ ${prefix}underwater
║╠❏ ${prefix}hpotter
║╠❏ ${prefix}woodblock
║╠❏ ${prefix}logogaming
║╠❏ ${prefix}gplaybutton
║╠❏ ${prefix}splaybutton
║╠❏ ${prefix}qrencode
║╠❏ ${prefix}barcode
║╠❏ ${prefix}googlesearch teks/teks/teks
║╠❏ ${prefix}pubglogo teks/teks
║╠❏ ${prefix}glitchtext teks/teks
║╠❏ ${prefix}battlefield teks/teks
║╠❏ ${prefix}sticker
║╠❏ ${prefix}blackpink
║╠❏ ${prefix}neon
║╠❏ ${prefix}greenneon
║╠❏ ${prefix}advanceglow
║╠❏ ${prefix}futureneon
║╠❏ ${prefix}sandwriting
║╠❏ ${prefix}sandsummer
║╠❏ ${prefix}sandengraved
║╠❏ ${prefix}metaldark
║╠❏ ${prefix}neonlight
║╠❏ ${prefix}holographic
║╠❏ ${prefix}text1917
║╠❏ ${prefix}minion
║╠❏ ${prefix}deluxesilver
║╠❏ ${prefix}newyearcard
║╠❏ ${prefix}bloodfrosted
║╠❏ ${prefix}halloween
║╠❏ ${prefix}jokerlogo
║╠❏ ${prefix}fireworksparkle
║╠❏ ${prefix}natureleaves
║╠❏ ${prefix}bokeh
║╠❏ ${prefix}toxic
║╠❏ ${prefix}strawberry
║╠❏ ${prefix}box3d
║╠❏ ${prefix}roadwarning
║╠❏ ${prefix}breakwall
║╠❏ ${prefix}icecold
║╠❏ ${prefix}luxury
║╠❏ ${prefix}cloud
║╠❏ ${prefix}summersand
║╠❏ ${prefix}horrorblood
║╠❏ ${prefix}thunder
║╠❏ ${prefix}pornhub
║╠❏ ${prefix}glitch
║╠❏ ${prefix}avenger
║╠❏ ${prefix}space
║╠❏ ${prefix}ninjalogo
║╠❏ ${prefix}marvelstudio
║╠❏ ${prefix}lionlogo
║╠❏ ${prefix}wolflogo
║╠❏ ${prefix}steel3d
║╠❏ ${prefix}wallgravity
║╠❏ ${prefix}wetglass
║╠❏ ${prefix}multicolor3d
║╠❏ ${prefix}watercolor
║╠❏ ${prefix}luxurygold
║╠❏ ${prefix}galaxywallpaper
║╠❏ ${prefix}lighttext
║╠❏ ${prefix}beautifulflower
║╠❏ ${prefix}puppycute
║╠❏ ${prefix}royaltext
║╠❏ ${prefix}heartshaped
║╠❏ ${prefix}birthdaycake
║╠❏ ${prefix}galaxystyle
║╠❏ ${prefix}hologram3d
║╠❏ ${prefix}greenneon
║╠❏ ${prefix}glossychrome
║╠❏ ${prefix}greenbush
║╠❏ ${prefix}metallogo
║╠❏ ${prefix}noeltext
║╠❏ ${prefix}glittergold
║╠❏ ${prefix}textcake
║╠❏ ${prefix}starsnight
║╠❏ ${prefix}wooden3d
║╠❏ ${prefix}textbyname
║╠❏ ${prefix}writegalacy
║╠❏ ${prefix}galaxybat
║╠❏ ${prefix}snow3d
║╠❏ ${prefix}birthdayday
║╠❏ ${prefix}goldplaybutton
║╠❏ ${prefix}silverplaybutton
║╠❏ ${prefix}freefire
║╚▸
║╔▸   ﹝ *MAKER MENU 2* ﹞ 
║╠❏ ${prefix}blackpink
║╠❏ ${prefix}neon
║╠❏ ${prefix}greenneon
║╠❏ ${prefix}advanceglow
║╠❏ ${prefix}futureneon
║╠❏ ${prefix}sandwriting
║╠❏ ${prefix}sandsummer
║╠❏ ${prefix}sandengraved
║╠❏ ${prefix}metaldark
║╠❏ ${prefix}neonlight
║╠❏ ${prefix}holographic
║╠❏ ${prefix}ext1917
║╠❏ ${prefix}minion
║╠❏ ${prefix}dluxesilver
║╠❏ ${prefix}newyearcard
║╠❏ ${prefix}bloodrosted
║╠❏ ${prefix}halloween
║╠❏ ${prefix}jokerlogo
║╠❏ ${prefix}fireworksparkle
║╠❏ ${prefix}natureleaves
║╠❏ ${prefix}bokeh
║╠❏ ${prefix}toxic
║╠❏ ${prefix}strawberry
║╠❏ ${prefix}box3D
║╠❏ ${prefix}boadwarning
║╠❏ ${prefix}breakwall
║╠❏ ${prefix}ucecold
║╠❏ ${prefix}luxury
║╠❏ ${prefix}cloud
║╠❏ ${prefix}summersand
║╠❏ ${prefix}horrorblood
║╠❏ ${prefix}thunder
║╠❏ ${prefix}pornhub
║╠❏ ${prefix}glitch
║╠❏ ${prefix}avenger
║╠❏ ${prefix}space
║╠❏ ${prefix}ninjalogo
║╠❏ ${prefix}marvelstudio
║╠❏ ${prefix}lionlogo
║╠❏ ${prefix}wolflogo
║╠❏ ${prefix}steel3D
║╠❏ ${prefix}wallgravity
║╠❏ ${prefix}shadow
║╠❏ ${prefix}cup
║╠❏ ${prefix}cup2
║╠❏ ${prefix}romance
║╠❏ ${prefix}smoke
║╠❏ ${prefix}burnpaper
║╠❏ ${prefix}lovemessage
║╠❏ ${prefix}undergrass
║╠❏ ${prefix}love
║╠❏ ${prefix}coffe
║╠❏ ${prefix}woodheart
║╠❏ ${prefix}woodenboard
║╠❏ ${prefix}summer3D
║╠❏ ${prefix}wolfmetal
║╠❏ ${prefix}nature3D
║╠❏ ${prefix}underwater
║╠❏ ${prefix}goldenrose
║╠❏ ${prefix}summernature
║╠❏ ${prefix}letterleaves
║╠❏ ${prefix}glowingneon
║╠❏ ${prefix}fallleaves
║╠❏ ${prefix}flamming
║╠❏ ${prefix}harrypotter
║╠❏ ${prefix}carvedwood
║╠❏ ${prefix}tiktok
║╠❏ ${prefix}arcade8bit
║╠❏ ${prefix}battlefield4
║╠❏ ${prefix}pubg
║╠❏ ${prefix}bannerlol
║╠❏ ${prefix}wetglass
║╠❏ ${prefix}multicolor3D
║╠❏ ${prefix}watercolor		
║╠❏ ${prefix}luxurygold
║╠❏ ${prefix}galaxywallpaper
║╠❏ ${prefix}lighttext
║╠❏ ${prefix}beautifulflower
║╠❏ ${prefix}puppycute
║╠❏ ${prefix}royaltext
║╠❏ ${prefix}heartshaped
║╠❏ ${prefix}birthdaycake
║╠❏ ${prefix}galaxystyle
║╠❏ ${prefix}hologram3D
║╠❏ ${prefix}greenneon
║╠❏ ${prefix}glossychrome
║╠❏ ${prefix}greenbush
║╠❏ ${prefix}metallogo
║╠❏ ${prefix}noeltext
║╠❏ ${prefix}glittergold
║╠❏ ${prefix}textcake
║╠❏ ${prefix}starsnight
║╠❏ ${prefix}wooden3D
║╠❏ ${prefix}textbyname
║╠❏ ${prefix}writegalaxy
║╠❏ ${prefix}galaxybat
║╠❏ ${prefix}snow3D
║╠❏ ${prefix}birthdayday
║╠❏ ${prefix}goldplaybutton
║╠❏ ${prefix}silverplaybutton
║╠❏ ${prefix}freefire
║╚▸
║╔▸ *◪ DOWNLOADER MENU ◪*
║╠❏ ${prefix}ytplay
║╠❏ ${prefix}ytplay2
║╠❏ ${prefix}ytsearch
║╠❏ ${prefix}ytmp3
║╠❏ ${prefix}ytmp32
║╠❏ ${prefix}ytmp4
║╠❏ ${prefix}ytmp42
║╠❏ ${prefix}telesticker
║╠❏ ${prefix}tiktoknowm
║╠❏ ${prefix}tiktokmusic
║╠❏ ${prefix}spotify
║╠❏ ${prefix}spotifysearch
║╠❏ ${prefix}jooxplay
║╠❏ ${prefix}igdl
║╠❏ ${prefix}fbdl
║╠❏ ${prefix}pinterestdl
║╠❏ ${prefix}pixiv
║╠❏ ${prefix}pixivdl
║╚▸
║╔▸ *◪ IMAGE EDIT MENU ◪*
║╠❏ ${prefix}wanted
║╠❏ ${prefix}gtav
║╠❏ ${prefix}facebookpage
║╠❏ ${prefix}costumwp
║╠❏ ${prefix}pantaimalam
║╠❏ ${prefix}pencil
║╠❏ ${prefix}bakar
║╠❏ ${prefix}crossgun
║╠❏ ${prefix}komunis
║╠❏ ${prefix}deletepc
║╠❏ ${prefix}rotate
║╠❏ ${prefix}pixelate
║╠❏ ${prefix}imageflip
║╠❏ ${prefix}imagerotate
║╠❏ ${prefix}removebg
║╠❏ ${prefix}deepfry
║╠❏ ${prefix}fisheye
║╠❏ ${prefix}skullmask
║╠❏ ${prefix}grayscale
║╠❏ ${prefix}smile
║╠❏ ${prefix}alien
║╠❏ ${prefix}wanted
║╠❏ ${prefix}facebookpage
║╠❏ ${prefix}costumwp
║╠❏ ${prefix}pantaimalam
║╠❏ ${prefix}pencil
║╠❏ ${prefix}bakar
║╠❏ ${prefix}crossgun
║╠❏ ${prefix}hitler
║╠❏ ${prefix}trash
║╠❏ ${prefix}picture
║╠❏ ${prefix}blur
║╠❏ ${prefix}sepia
║╠❏ ${prefix}affect
║╠❏ ${prefix}sketch
║╠❏ ${prefix}raindrop
║╠❏ ${prefix}joke
║╠❏ ${prefix}invert
║╠❏ ${prefix}meme atas/bawah
║╚▸
║╔▸ *◪ SERTIFIKAT MENU ◪*
║╠❏ ${prefix}fftourserti
║╠❏ ${prefix}fftourserti2
║╠❏ ${prefix}fftourserti3
║╠❏ ${prefix}fftourserti4
║╠❏ ${prefix}fftourserti5
║╠❏ ${prefix}pubgtourserti
║╠❏ ${prefix}pubgtourserti2
║╠❏ ${prefix}pubgtourserti3
║╠❏ ${prefix}pubgtourserti4
║╠❏ ${prefix}pubgtourserti5
║╠❏ ${prefix}mltourserti
║╠❏ ${prefix}mltourserti2
║╠❏ ${prefix}mltourserti3
║╠❏ ${prefix}mltourserti4
║╠❏ ${prefix}mltourserti5
║╠❏ ${prefix}tweetfake
║╠❏ ${prefix}babu
║╠❏ ${prefix}bucinserti
║╠❏ ${prefix}bocilepep
║╠❏ ${prefix}gayserti
║╠❏ ${prefix}pacar
║╠❏ ${prefix}sadboy
║╠❏ ${prefix}surga
║╠❏ ${prefix}pintar
║╠❏ ${prefix}badboy
║╠❏ ${prefix}badgirl
║╠❏ ${prefix}goodboy
║╠❏ ${prefix}goodgirl
║╠❏ ${prefix}editorberkelas
║╚▸
║╔▸ *◪ NULIS MENU ◪*
║╠❏ ${prefix}nulis
║╠❏ ${prefix}nulis2
║╠❏ ${prefix}nulis3
║╠❏ ${prefix}nulis4
║╚▸
║╔▸ *◪ MEDIA MENU ◪*
║╠❏ ${prefix}heroml
║╠❏ ${prefix}trendtwit
║╠❏ ${prefix}cersex
║╠❏ ${prefix}tts
║╠❏ ${prefix}darkjokes
║╠❏ ${prefix}memeindo
║╠❏ ${prefix}nickff
║╠❏ ${prefix}jadwaltv
║╠❏ ${prefix}pinterest
║╠❏ ${prefix}translate
║╠❏ ${prefix}brainly
║╠❏ ${prefix}jadwaltv
║╠❏ ${prefix}jadwaltvnow
║╠❏ ${prefix}newsinfo
║╠❏ ${prefix}cnnindonesia
║╠❏ ${prefix}cnnnasional
║╠❏ ${prefix}cnninternasional
║╠❏ ${prefix}infogempa
║╠❏ ${prefix}lirik
║╠❏ ${prefix}cuaca
║╠❏ ${prefix}covidindo
║╠❏ ${prefix}covidglobal
║╠❏ ${prefix}kodepos
║╠❏ ${prefix}jadwalbola
║╠❏ ${prefix}indbeasiswa
║╠❏ ${prefix}hoax
║╠❏ ${prefix}nsfwcheck
║╠❏ ${prefix}cerpen
║╠❏ ${prefix}ceritahoror
║╠❏ ${prefix}wancak
║╠❏ ${prefix}asupan
║╠❏ ${prefix}semoji
║╠❏ ${prefix}ktpmaker
║╠❏ ${prefix}spamsms
║╚▸
║╔▸ *◪ SEARCH MENU ◪*
║╠❏ ${prefix}gimage
║╠❏ ${prefix}gimage2
║╠❏ ${prefix}konachan
║╠❏ ${prefix}wallpapersearch
║╠❏ ${prefix}wallpapersearch2
║╠❏ ${prefix}playstore
║╠❏ ${prefix}shopee
║╠❏ ${prefix}google
║╠❏ ${prefix}stickerwa
║╚▸
║╔▸ *◪ FILM MENU ◪*
║╠❏ ${prefix}film
║╠❏ ${prefix}film2
║╠❏ ${prefix}searchfilm
║╠❏ ${prefix}filmapikterbaru
║╠❏ ${prefix}filmapikdrama
║╠❏ ${prefix}lk21
║╠❏ ${prefix}drakorongoing
║╠❏ ${prefix}wattpad
║╠❏ ${prefix}wattpadsearch
║╚▸
║╔▸ *◪ FUN MENU ◪*
║╠❏ ${prefix}caklontong
║╠❏ ${prefix}tebakgambar
║╠❏ ${prefix}tebakgambar2
║╠❏ ${prefix}family100
║╠❏ ${prefix}terganteng
║╠❏ ${prefix}tercantik
║╠❏ ${prefix}gaycek
║╠❏ ${prefix}sangecek
║╠❏ ${prefix}gantengcek
║╠❏ ${prefix}cantikcek
║╠❏ ${prefix}ngewe
║╠❏ ${prefix}lesbicek
║╠❏ ${prefix}bagaimanakah
║╠❏ ${prefix}apakah
║╠❏ ${prefix}bisakah
║╠❏ ${prefix}rate
║╠❏ ${prefix}kapankah
║╠❏ ${prefix}watak
║╠❏ ${prefix}hobby
║╠❏ ${prefix}slot
║╚▸
║╔▸ *◪ RANDOM TEXT ◪*
║╠❏ ${prefix}quotes
║╠❏ ${prefix}quotesanime
║╠❏ ${prefix}quotesdilan
║╠❏ ${prefix}quotesimage
║╠❏ ${prefix}faktaunik
║╠❏ ${prefix}katabijak
║╠❏ ${prefix}pantun
║╚▸
║╔▸ *◪ TTP MENU ◪*
║╠❏ ${prefix}ttp
║╠❏ ${prefix}ttp2
║╠❏ ${prefix}ttp3
║╠❏ ${prefix}ttp4
║╠❏ ${prefix}attp
║╚▸
║╔▸ *◪ BERITA MENU ◪*
║╠❏ ${prefix}tribunews
║╠❏ ${prefix}liputan6
║╠❏ ${prefix}foxnews
║╠❏ ${prefix}newsinfo
║╚▸
║╔▸ *◪ DETEKSI MENU ◪*
║╠❏ ${prefix}deteksiwajah
║╠❏ ${prefix}deteksigender
║╠❏ ${prefix}deteksiumur
║╚▸
║╔▸ *◪ NSFW MENU ◪*
║╠❏ ${prefix}randombokep
║╠❏ ${prefix}pussy
║╠❏ ${prefix}nekonime
║╠❏ ${prefix}baka
║╠❏ ${prefix}blowjob
║╠❏ ${prefix}lewd
║╠❏ ${prefix}hentai
║╠❏ ${prefix}waifu
║╠❏ ${prefix}eroyuri
║╠❏ ${prefix}hug
║╠❏ ${prefix}hug2
║╠❏ ${prefix}chiisaihentai
║╠❏ ${prefix}trap
║╠❏ ${prefix}blowjob
║╠❏ ${prefix}yaoi
║╠❏ ${prefix}ecchi
║╠❏ ${prefix}hentai
║╠❏ ${prefix}ahegao
║╠❏ ${prefix}hololewd
║╠❏ ${prefix}sideoppai
║╠❏ ${prefix}animefeets
║╠❏ ${prefix}animebooty
║╠❏ ${prefix}animethighss
║╠❏ ${prefix}hentaiparadise
║╠❏ ${prefix}animearmpits
║╠❏ ${prefix}hentaifemdom
║╠❏ ${prefix}lewdanimegirls
║╠❏ ${prefix}biganimetiddies
║╠❏ ${prefix}animebellybutton
║╠❏ ${prefix}hentai4everyone
║╠❏ ${prefix}ero
║╠❏ ${prefix}cum
║╠❏ ${prefix}feet
║╠❏ ${prefix}yuri
║╠❏ ${prefix}trap
║╠❏ ${prefix}lewd
║╠❏ ${prefix}feed
║╠❏ ${prefix}eron
║╠❏ ${prefix}solo
║╠❏ ${prefix}gasm
║╠❏ ${prefix}poke
║╠❏ ${prefix}anal
║╠❏ ${prefix}holo
║╠❏ ${prefix}tits
║╠❏ ${prefix}kuni
║╠❏ ${prefix}kiss
║╠❏ ${prefix}erok
║╠❏ ${prefix}smug
║╠❏ ${prefix}baka
║╠❏ ${prefix}solog
║╠❏ ${prefix}feetg
║╠❏ ${prefix}lewdk
║╠❏ ${prefix}waifu
║╠❏ ${prefix}pussy
║╠❏ ${prefix}femdom
║╠❏ ${prefix}cuddle
║╠❏ ${prefix}hentai
║╠❏ ${prefix}eroyuri
║╠❏ ${prefix}cum_jpg
║╠❏ ${prefix}blowjob
║╠❏ ${prefix}erofeet
║╠❏ ${prefix}holoero
║╠❏ ${prefix}classic
║╠❏ ${prefix}erokemo
║╠❏ ${prefix}fox_girl
║╠❏ ${prefix}futanari
║╠❏ ${prefix}lewdkemo
║╠❏ ${prefix}wallpaper
║╠❏ ${prefix}pussy_jpg
║╠❏ ${prefix}kemonomimi
║╠❏ ${prefix}nsfw_avatar
║╠❏ ${prefix}nhentai
║╠❏ ${prefix}nhentaisearch
║╠❏ ${prefix}nhentaipdf
║╠❏ ${prefix}nekopoi
║╠❏ ${prefix}nekopoisearch
║╠❏ ${prefix}xhamstersearch
║╠❏ ${prefix}xhamster
║╠❏ ${prefix}xnxxsearch
║╠❏ ${prefix}xnxx
║╚▸
║╔▸ *◪ ANIME MENU ◪*
║╠❏ ${prefix}dewabatch
║╠❏ ${prefix}neonime
║╠❏ ${prefix}samehadaku
║╠❏ ${prefix}kusonime
║╠❏ ${prefix}animeboy
║╠❏ ${prefix}animegirl
║╠❏ ${prefix}waifu
║╠❏ ${prefix}character
║╠❏ ${prefix}manga
║╠❏ ${prefix}anime
║╠❏ ${prefix}wait
║╠❏ ${prefix}kusonime
║╠❏ ${prefix}kusonimesearch
║╠❏ ${prefix}otakudesu
║╠❏ ${prefix}otakudesusearch
║╚▸
║╔▸ *◪ RANDOM IMAGE MENU ◪*
║╠❏ ${prefix}freefireimg
║╠❏ ${prefix}ww2
║╠❏ ${prefix}anjing
║╠❏ ${prefix}kucing
║╠❏ ${prefix}doraemon
║╠❏ ${prefix}hamster
║╠❏ ${prefix}kelinci
║╠❏ ${prefix}art
║╠❏ ${prefix}bts
║╠❏ ${prefix}exo
║╠❏ ${prefix}elf
║╠❏ ${prefix}loli
║╠❏ ${prefix}neko
║╠❏ ${prefix}waifu
║╠❏ ${prefix}shota
║╠❏ ${prefix}husbu
║╠❏ ${prefix}sagiri
║╠❏ ${prefix}shinobu
║╠❏ ${prefix}megumin
║╠❏ ${prefix}wallnime
║╚▸
║╔▸﹝ *SOVIET MENU* ﹞ 
║╠❏ ${prefix}lenin
║╠❏ ${prefix}stalin
║╠❏ ${prefix}kalashnikov
║╠❏ ${prefix}unisoviet
║╠❏ ${prefix}nikitakhrushchev
║╠❏ ${prefix}andreigromyko
║╠❏ ${prefix}yurigagarin
║╠❏ ${prefix}T-34
║╠❏ ${prefix}YAK-3
║╠❏ ${prefix}YAK-9
║╠❏ ${prefix}LA-7
║╠❏ ${prefix}ak47
║╠❏ ${prefix}katyusha
║╠❏ ${prefix}mig-15
║╠❏ ${prefix}rpg-7
║╚▸
║╔▸   ﹝ *STORAGE MENU* ﹞ 
║╠❏ ${prefix}addvn
║╠❏ ${prefix}listvn
║╠❏ ${prefix}getvn
║╠❏ ${prefix}addsticker
║╠❏ ${prefix}liststicker
║╠❏ ${prefix}getsticker
║╠❏ ${prefix}addimage
║╠❏ ${prefix}listimage
║╠❏ ${prefix}getimage
║╠❏ ${prefix}addvideo
║╠❏ ${prefix}listvideo
║╠❏ ${prefix}getvideo
║╚▸
║╔▸   ﹝ *ENTAH MENU* ﹞ 
║╠ ${prefix}redglass*
║╠ ${prefix}webmatrix*
║╠ ${prefix}multimaterial*
║╠ ${prefix}tagsticker*
║╠ ${prefix}superhero*
║╠ ${prefix}skeleton*
║╠ ${prefix}avatarhacker*
║╠ ${prefix}watermaker*
║╠ ${prefix}ballon*
║╠ ${prefix}girlgrafity*
║╠ ${prefix}matrick*
║╠ ${prefix}viettel*
║╠ ${prefix}glowmetallic*
║╠ ${prefix}textgoogle*
║╠ ${prefix}tinyurl*
║╠ ${prefix}amongus*
║╠ ${prefix}githubstalk*
║╚▸
║╔▸   ﹝ *BASE ENC MENU* ﹞ 
║╠ ${prefix}base64enc*
║╠ ${prefix}base64dec*
║╠ ${prefix}base32enc*
║╠ ${prefix}base32dec*
║╠ ${prefix}sha1enc*
║╠ ${prefix}sha256enc*
║╠ ${prefix}sha512enc*
║╠ ${prefix}encbinary*
║╠ ${prefix}decbinary*
║╚▸
║╔▸   ﹝ *ASUPAN MENU* ﹞ 
║╠ ${prefix}asupan
║╠ ${prefix}amel
║╠ ${prefix}una
║╚▸
║╔▸   ﹝ *SHORTLINK MENU* ﹞ 
║╠ ${prefix}bitly*
║╠ ${prefix}cuttly*
║╠ ${prefix}tinyurl*
║╠ ${prefix}shortlink*
║╠ ${prefix}shortlink2*
║╠ ${prefix}shortlink3*
║╠ ${prefix}shortlink4*
║╠ ${prefix}shortlink5*
║╠ ${prefix}shortlink6*
║╚▸
╠═══ ◤ *SOUND MENU* ◢ 
║╔▸﹝ *Sound islam☪️* ﹞ 
║╠❏ ${prefix}ayatkursi2
║╠❏ ${prefix}tilawah
║╠❏ ${prefix}sholawatnabi
║╠❏ ${prefix}ngaji
║╠❏ ${prefix}ngaji2
║╚▸
║╔▸﹝ *Sound Jedag jedug🔊* ﹞ 
║╠❏ ${prefix}iri
║╠❏ ${prefix}pale
║╠❏ ${prefix}sound
║╠❏ ${prefix}sound1
║╠❏ ${prefix}sound2
║╠❏ ${prefix}sound3
║╠❏ ${prefix}sound4
║╠❏ ${prefix}sound5
║╠❏ ${prefix}sound6
║╠❏ ${prefix}sound7
║╚▸
║╔▸﹝ *Sound Musik🎧 ﹞ 
║╠❏ ${prefix}sad
║╠❏ ${prefix}sad2
║╠❏ ${prefix}sad3
║╠❏ ${prefix}sad4
║╠❏ ${prefix}aeshtetic
║╠❏ ${prefix}aeshtetic2
║╠❏ ${prefix}aeshtetic3
║╠❏ ${prefix}aeshtetic4
║╠❏ ${prefix}home
║╠❏ ${prefix}gettingold
║╠❏ ${prefix}allnight
║╠❏ ${prefix}lucas
║╠❏ ${prefix}wanna
║╠❏ ${prefix}yourskin
║╠❏ ${prefix}up
║╠❏ ${prefix}cutmeoff
║╠❏ ${prefix}beautiful
║╠❏ ${prefix}loosinggame
║╠❏ ${prefix}loosinginterest
║╠❏ ${prefix}playdate
║╚▸
║╔▸﹝ THX TO ﹞ 
║╠❏ MANIK
║╠❏ ALL CREATOR BOT
║╠❏ PENYEDIA APIKEY
║╠❏ TUHANKU
║╠❏ ORANG TUAKU
║╠❏ SEMUA YG SUPORT AKU
║╠❏ TERIMAKASIIHHH...
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `
                    manik.sendMessage(from, wew, image, { quoted: ftoko, caption: mnik, contextInfo: {"mentionedJid": [send], forwardingScore: 1000, isForwarded: true }})
					break
//============================New Fitur By Manik============================\\
//Manik Group
case 'manikgroup':
case 'manikgrup':
case 'grupmanik':
case 'groupmanik':
reply('*https://chat.whatsapp.com/HlKfFMMQvce9WkFllw3aef*\n*INI ADALAH LINKGROUP FANBOT MANIK*')
break
//stick By Manik
case 'swm':
				case 'stickerwm':
				case 'stcwm':
				if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./maniksrc/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return manik.sendMessage(from, String(err), text, { quoted: mek })
            manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediaFinalys = await manik.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var has = kls.split("|")[0];
			   var kas = kls.split("|")[1];
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
case 'nobg':
if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await manik.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
                    teks = `${anu.display_url}`
                    ranpp = getRandom('.png')
                    ranop = getRandom('.webp')
                    anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${VhtearKey}l`, { method: 'get' })
                    exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranpp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                        fs.unlinkSync(ranpp)
                        if (err) return reply(mess.error.stick)
                        nobg = fs.readFileSync(ranop)
                        manik.sendMessage(from, nobg, sticker, { quoted: mek })
                        fs.unlinkSync(ranop)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
//forward by manik
case 'fordward':
                    if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply('Maaf kamu sudah terbenned!')
	         manik.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
           case 'wame':
        if (isBanned) return reply('```Lu kebanned kontol```')
       if (!isRegistered) return reply(ind.noregis())
          manik.updatePresence(from, Presence.composing)
          options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            manik.sendMessage(from, options, text, {quoted: mek})
           break
//CASE AUTO BY MANIK
case 'ncheck':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Text nya ilang ya')
					if (Number(args[0]) === 1) {
						if (isCheck) return reply('Udah aktif um')
						ncheck.push(from)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur nsfwcheck di group ini ')
					} else if (Number(args[0]) === 0) {
						ncheck.splice(from)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur nsfwcheck di group ini ')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
//New Fitur Autosticker By Manik
case 'autosticker':

					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Owner Only')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses mengaktifkan fitur autosticker di group ini ')
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses menonaktifkan fitur autosticker di group ini ')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
//HUH INTINYA BY MANIK
case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			manik.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			break
case 'shortlink':
				 // Fix Bug By manik				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolhuman}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					manik.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					manik.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${NamaBot} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					manik.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
case 'asupan':
		
				axios.get(`https://onlydevcity.herokuapp.com/api/asupan?apikey=onlygay`)
				.then((res) => arya.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break
     case 'amel':
       
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=onlygay`)
				.then((res) => arya.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break  
				case 'una':
				
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=onlygay`)
				.then((res) => arya.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, mek)
				})
				break
case 'skeleton':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${aruga}&APIKEY=${xteam}`)
					manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'avatarhacker':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${txt}&apikey=${apivhtear}`, {method: 'get'})
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'glowmetallic':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${txt}&apikey=${apivhtear}`)
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'viettel':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/viettel_text?text=${txt}&apikey=${apivhtear}`)
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'matrick':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/matrix_text?text=${txt}&apikey=${apivhtear}`)
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'girlgrafity':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(12)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${txt1}&text2=${txt2}&apikey=${apivhtear}`)
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'watermaker':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(10)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/water_maker?text=${txt}&apikey=manikGithub`)
					manik.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
// Encrypt Fiture
				case 'base64enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					manik.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break  
				case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					manik.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break
				//New Fiture
				case 'tagsticker':
                    if (sender.split("@")[0] != isOwner) return reply("Command only for owner bot")
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await manik.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        manik.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
//SLOT BY MANIK
case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            manik.sendMessage(from, `[   | SLOTS ]\n-----------------\n :  : \n${somtoy}<=====\n :  : \n[   | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh :  :  : <=====`, text, { quoted: mek })
            break
//TEBAK GAMBAR AUTO BY MANIK
case 'tebakgambar2': // case by Manik
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab jawab jawabbb" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
//SURAT TO MENU
case 'suratto': //
                if (!isOwner) return reply('Owner Only')
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender.replace('@s.whatsapp.net')}`
				manik.sendMessage(`${noorg2}@s.whatsapp.net`, `╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ From* : ${pushname}
║╠ Number* : @${sender.split("@")[0]}
║╠ For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (Surat lu|No Penerima)
║╠ Contoh: 
║╠ #suratto (Hai Juga|6282126073060)
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `, text, {quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},
				message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender] }}}});	
				reply('Surat Sukses Dikirim')
				break
//Gatau ni Apa
case 'togif2':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await manik.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        manik.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
					if (!isQuotedSticker) return reply('Reply Gif nya')
					reply(mess.wait)
					anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await manik.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						manik.sendMessage(from, buffers, video, { quoted: freply, caption: 'DONE...' })
						fs.unlinkSync(ran)
					})
					break
case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await manik.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						manik.sendMessage(from, buffer, image, {quoted: freply})
						fs.unlinkSync(ran)
					})
					
					break 
case 'stctag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await manik.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await manik.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        manik.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await manik.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        manik.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
case 'notif':
if (!isGroup) return reply('Gc Only')
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await manik.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await manik.sendMessage(from, options, text)
break
//SETBOT BY MANIK
case 'upswtext':
					manik.updatePresence(from, Presence.composing)
					manik.sendMessage('status@broadcast', `${q}`, extendedText)
					manik.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					manik.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await manik.downloadMediaMessage(swsw)
						manik.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					manik.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					manik.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await manik.downloadMediaMessage(swsw)
						manik.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					manik.sendMessage(from, bur, text, { quoted: mek })
					break
case 'setname':
if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, 'masukkan nama', mek)
				arya.setName(arg)
				.then((res) => arya.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => arya.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
			if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, 'masukkan bio', mek)
				arya.setBio(arg)
				.then((res) => arya.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => arya.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': 
			case 'hack':
			if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aryazz|https://arya.com`, mek)
				argz = arg.split("|")
				if (!argz) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aryazz|https://arya.com`, mek)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await manik.downloadMediaMessage(encmedia)
					arya.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					arya.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
				case 'spam':
				if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, mek)
				argz = arg.split("|")
				if (!argz) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, mek)
				if (isNaN(argz[1])) return reply(from, `harus berupa angka`, mek)
				for (let i = 0; i < argz[1]; i++){
					arya.sendText(from, argz[0])
				}
				break
//KONTAK BY MANIK
case 'sendkontak':
const took = body.slice(12)
const nama = took.split("|")[0]
const nomor = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	manik.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
	break
	case 'sendkontag':
const pepek = body.slice(12)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await manik.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	manik.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
	break
//SYSTEM BY MANIK
        case 'return':
                if (!isOwner) return reply('Owner Only')
				return manik.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: mek})
				break
				case 'term':
				if (!isOwner) return reply('Owner Only')
				const cmd = body.slice(6)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `*EXECUTOR*`
				const term = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				exec(cmd, (err, stdout) => {
					if (err) return manik.sendMessage(from, `EXEC ${err}`, text, { quoted: mek })
					if (stdout) {
						manik.sendMessage(from, stdout, text, term)
					}
				})
				break
//MAKER MENU 2 BY MANIK
// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        manik.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhumankey}&text1=${txt1}&text2=${txt2}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Photo Oxy //

                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    manik.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
//NEW SOVIET BY MANIK
		case 'lenin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=lenin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					
					case 'kalashnikov':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'unisoviet':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'nikitakhrushchev':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=nikita khrushchev`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'yurigagarin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'T-34':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-3':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-9':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'LA-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'ak47':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'katyusha':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'mig-15':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=mig-15`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'rpg-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rpg-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
//New AntiVirtex by Manik
case 'antivirtex':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('UDAH NYALA KAK')
						antifirtex.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
					case 'antialakazam':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex2) return reply('UDAH NYALA KAK')
						antifirtex2.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ALAKAZAM DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex2) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex2.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ALAKAZAM DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
					case 'antixvirus':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex3) return reply('UDAH NYALA KAK')
						antifirtex3.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX - DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex3) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex3.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MEMATIKAN ANTI VIRTEX - DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
					case 'antivirustebel':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex4) return reply('UDAH NYALA KAK')
						antifirtex4.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX *** DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex4) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex4.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MEMATIKAN ANTI VIRTEX *** DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
					case 'anticollosal':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex5) return reply('UDAH NYALA KAK')
						antifirtex5.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX   DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex5) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex5.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MEMATIKAN ANTI VIRTEX   DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
					case 'antiviruschina':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex6) return reply('UDAH NYALA KAK')
						antifirtex6.push(from)
						fs.writeFileSync('./manikdatabase/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX  DI GROUP')
						manik.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex6) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex6.splice(ini, 1)
						fs.writeFileSync('./manikdatabase/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MEMATIKAN ANTI VIRTEX  DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					manik.sendMessage(from, { quoted: mek})
					break
//New Image Menu
case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} manik`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolhuman}&text=${body.slice(9)}`)
                    manik.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
case 'webmatrix':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${aruga}&APIKEY=${xteam}`)
					manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'redglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/redglass?text=${aruga}&APIKEY=${xteam}`)
					manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'joke':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'sepia':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'alien':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolhumankey}&img=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolhuman}&img=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolhuman}&img=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'affect':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${apileys}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${apileys}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'meme':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
			case 'gtav':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
			case 'gay':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
manik.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'laptop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'linephoto':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'raindrop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'sketch':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 manik.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'facebookpage':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	  manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
//New lagi Add fitur By Manik
case 'addsticker':
if (!isOwner) return reply('Owner Only')
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await manik.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./maniksrc/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./maniksrc/stick.json', JSON.stringify(setiker))
				manik.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} } } })
				manik.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')}}}})
break
			case 'addvn':
			if (!isOwner) return reply('Owner Only')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await manik.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./maniksrc/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./maniksrc/audio.json', JSON.stringify(audionye))
				manik.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tsukasa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} }} }) 
				break
			case 'getvn':
			if (!isOwner) return reply('Owner Only')
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./maniksrc/audio/${namastc}.mp3`)
				manik.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tsukasa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} }}, ptt: true })
				break
			case 'getsticker':
			case 'gets':
			if (!isOwner) return reply('Owner Only')
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./maniksrc/sticker/${namastc}.webp`)
				manik.sendMessage(from, result, sticker)
				break
           case 'liststicker':
           if (!isOwner) return reply('Owner Only')
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				manik.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
			if (!isOwner) return reply('Owner Only')
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				manik.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
			if (!isOwner) return reply('Owner Only')
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await manik.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./maniksrc/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./maniksrc/image.json', JSON.stringify(imagenye))
				manik.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tsukasa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} }} }) 
				await limitAdd(sender)
				break
			case 'getimage':
            case 'getimg':
            if (!isOwner) return reply('Owner Only')
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./maniksrc/image/${namastc}.jpeg`)
				manik.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
			if (!isOwner) return reply('Owner Only')
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				manik.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'addvideo':
			if (!isOwner) return reply('Owner Only')
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await manik.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./maniksrc/video/${svst}.mp4`, delb)
				fs.writeFileSync('./maniksrc/video.json', JSON.stringify(videonye))
				manik.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tsukasa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} }} }) 
				break
			case 'getvideo':
			if (!isOwner) return reply('Owner Only')
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./maniksrc/video/${namastc}.mp4`)
				manik.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tsukasa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('maniklib/manik.jpg')} }} }) 
				break
			case 'listvideo':
			case 'videolist':
			if (!isOwner) return reply('Owner Only')
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				manik.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": videonye } })
				break
//INFO GC BY MANIK
case 'groupinfo':
                case 'infogc':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					 if (isBanned) return reply('Maaf kamu sudah terbenned!')
                
					if (!isRegistered) return reply(ind.noregis())
                				 if (isBanned) return reply(ind.baned())    
                  
                 if (!isGroup) return reply(ind.groupo())
                ppUrl = await manik.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
			    var welgrp = welkom.includes(from)
			    var ngrp = nsfw.includes(from)
            var simu = samih.includes(from)
           var liling = _leveling.includes(from)
		        manik.sendMessage(from, buffer, image, {quoted: ftoko, caption: `* GROUP INFO *
* Nama: ${groupName}* 

* Anggota : ${groupMembers.length}*

* Admin :  ${groupAdmins.length}*

* Selamat Datang : ${welgrp ? 'Benar' : 'Salah'}*

* Hentai : ${ngrp ? 'Benar' : 'Salah'}*

* Level : ${liling ? 'Benar' : 'Salah'}*

* Deskripsi:* 
${groupDesc}`})
                
break
//REQ-REP BY MANIK
case 'request':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return manik.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonor = mek.participant
                       const ress = `*[REQUEST]*\nNomor : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    manik.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
                     case 'bugreport':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
          			
          				const kontil = body.slice(11)
                      if (kontil.length > 300) return manik.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    manik.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
 //============================Batas Aman============================\\
//mediamenu
             case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply('*Loading.. Sedang membuat sticker*')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await manik.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								manik.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await manik.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								manik.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
			    break
			case 'heroml':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				cuk = await fetchJson(`http://docs-jojo.herokuapp.com/api/heroml?hero=alucard`) 
				buffer = await getBuffer(cuk.result.hero.img) 
				ml = `* HERO ML *\n\nNama : ${cuk.result.hero.name}\nQuotes : ${cuk.result.hero.quotes}\nRole : ${cuk.result.hero.role}\nRelease : ${cuk.result.hero.release_date}\nSpeciality : ${cuk.result.hero.release_date}`
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: ml}) 
				break

case 'trendtwit':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
manik.updatePresence(from, Presence.composing) 
data = await fetchJson(`http://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Hastag* : ${i.hastag}\n*Peringkat* : ${i.rank}\n*Tweet* : ${i.tweet}\n*Link* : ${i.link}\n=====================\n`
					}
					reply(teks.trim())
					break

case 'cersex':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${leyskey}`) 
buffer = await getBuffer(anu.gambar) 
s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
manik.sendMessage(from, buffer, image, {quoted: mek, caption: s3x})
break
                case 'gtts':
		        case 'tts':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return manik.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./maniklib/gtts')(args[0])
					if (args.length < 2) return manik.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! ')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							manik.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
			    break
                case 'darkjokes':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				 data = fs.readFileSync('./maniklib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 manik.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case 'memeindo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				manik.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'tribunews':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=WEMPYGANSS`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'pinterest':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
					case 'jadwaltv':
					 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'igstalk':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					manik.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//leveling
                  case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//film menu
                 case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += ` *Judul:* ${plyll.title}\n *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case 'filmapikterbaru':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikdrama':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
//=====================================BATES NGAB=====================================\\
//islammenu
                case 'tahlil': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/tahlil?apikey=yogipw`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                
		        case 'ayatkursi': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/ayatkursi?apikey=yogipw`)
				teks = ` *Arab* : ${anu.result.data.arabic}\n* Latin :* ${anu.result.data.latin}\n* Arti :* ${anu.result.data.translation}\n* Tafsir :* ${anu.result.data.tafsir}`
				manik.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'doaharian': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				manik.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/doaharian?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/niatshalat?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/bacaanshalat?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
//=====================================BATES NGAB=====================================\\
//groupmenu
                case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./manikdata/kelompok/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./manikdata/kelompok/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                break
		      case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./maniksrc/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk\n"
                    if (alasan != "") {
                        ini_txt += "Dengan alasan :" + alasan
                    }
                    reply(ini_txt)
                    break
                case 'mutual':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: \n*${prefix}next*  find a new partner`)
				await limitAdd(sender)
				break
		        case 'next':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: \n*${prefix}next*  find a new partner`)
				await limitAdd(sender)
				break
				case 'setname':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				manik.groupUpdateSubject(from, `${body.slice(9)}`)
				manik.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                manik.groupUpdateDescription(from, `${body.slice(9)}`)
                manik.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                break
                case 'demote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                manik.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                manik.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Selamat*  *Anda naik menjadi admin group*  :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                manik.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat*  @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* `, mentioned, true)
                manik.groupMakeAdmin(from, mentioned)
                }
                break
		        case 'kick':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('  ??   !')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Asek jatah kick, otw kick*  :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                manik.groupRemove(from, mentioned)
                } else {
                mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} `, mentioned, true)
                manik.groupRemove(from, mentioned)
                }
                break
		        case 'listadmin':
                if (!isGroup) return reply(ind.groupo())
                teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break			
	        	case 'add':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                manik.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
                case 'blockk':
				manik.updatePresence(from, Presence.composing) 
				manik.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
                manik.blockUser (`${body.slice(8)}@c.us`, "add")
                manik.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
	        	
		        case 'unblock':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
			    manik.blockUser (`${body.slice(9)}@c.us`, "remove")
                manik.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'leave':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                setTimeout( () => {
                manik.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                manik.updatePresence(from, Presence.composing) 
                manik.sendMessage(from, 'Bye cuk', text) // ur cods
                }, 0)
                break
                case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await manik.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				manik.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'hidetag':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                var value = body.slice(9)
                var group = await manik.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                manik.sendMessage(from, options, text, {quoted: freply})
                await limitAdd(sender)
                break
                case 'level':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = ` *LEVEL*\n�� *Name* : ${pushname}\n�� *Nomor* : ${sender.split("@")[0]}\n�� *User XP* : ${userXp}/${requiredXp}\n�� *User Level* : ${userLevel}\n`
                manik.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
		        case 'grup':
		        case 'group':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                manik.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				manik.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				samih.push(from)
				fs.writeFileSync('./manikdata/bot/simi.json', JSON.stringify(samih))
				reply('Sukses mengaktifkan mode simi di group ini ')
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./manikdata/bot/simi.json', JSON.stringify(samih))
				reply('Sukes menonaktifkan mode simi di group ini ')
				} else {
				reply(ind.satukos())
				}
				break
		        case 'nsfw':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./manikdata/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./manikdata/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ')
				} else {
				reply(ind.satukos())
				}
				break
				case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./manikdata/kelompok/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvlon())
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./manikdata/kelompok/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvloff())
				} else {
				reply(ind.satukos())
				}
				break
				case 'welcome':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./manikdata/bot/welkom.json', JSON.stringify(welkom))
				reply(' SUCCSESS  mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./manikdata/bot/welkom.json', JSON.stringify(welkom))
				reply(' SUCCSESS  menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				break
                case 'antilink':
                if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntilink) return reply('Anti link group sudah aktif')
				antilink.push(from)
				fs.writeFileSync('./manikdata/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan anti link group di group ini ')
				manik.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntilink) return reply('Mode anti link group sudah disable')
				antilink.splice(from, 1)
				fs.writeFileSync('./manikdata/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukes menonaktifkan anti link group di group ini ')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
                case 'event':
				if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
				event.push(from)
				fs.writeFileSync('./manikdata/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  mengaktifkan fitur event di group ini')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./manikdata/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  menonaktifkan fitur event di group ini')
				} else {
				reply(ind.satukos())
				}
				break
				
				case 'clone':
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerg()) 
				if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(' SUCCSESS ')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await manik.getProfilePicture(id)
				buffer = await getBuffer(pp)
				manik.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(ind.stikga())
				}
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//sertifikatmenu
                
				case 'hekelserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'babuserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(10)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'ffserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'bucinserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'bocilepepserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'gayserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pacarserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'sadboyserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'surgaserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pinterserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'badgirlserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'badboyserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'goodgirlserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'goodboyserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'editodberkelasserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'goodlookingserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fucekboyserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'jametserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'youtuberserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fftourserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fftourserti2': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fftourserti3': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fftourserti4': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'fftourserti5': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'mltourserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'mltourserti2': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'mltourserti3': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'mltourserti4': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'mltourserti5': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubgtourserti': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubgtourserti2': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubgtourserti3': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubgtourserti4': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubgtourserti5': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
//=====================================BATES NGAB=====================================\\
//animemenu
                     case 'waifu':
                     if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	manik.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				    break
					case 'animeboy':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'samehadaku':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
manikgans = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
manik.sendMessage(from, buffer, image, {quoted: mek, caption: manikgans})
break
case 'neonime':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
manik.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case 'dewabatch':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    manik = `* DEWABATCH *\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    manik.sendMessage(from, buffer, image, {quoted: mek, caption: manik})
			    break
			case 'kusonime':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cuk = await fetchJson(`http://zekais-api.herokuapp.com/kusonime?query=${body.slice(10)}`)
					buffer = await getBuffer(cuk.thumb)
					hasil = `*[ KUSONIME ]*\n\nNama : ${cuk.title}\nView : ${cuk.view}\nGenre : ${cuk.genre}\nSeason : ${cuk.season}\nType : ${cuk.type}\nStatus : ${cuk.status_anime}\nDuration : ${cuk.duration}\nRealesed : ${cuk.released}\n\nDeskripsi : ${cuk.description}`
					manik.sendMessage(from, buffer, image, {quoted: mek, caption: hasil })
					await limitAdd(sender)
					break
					case 'animegirl':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'animeimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
				    case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					break
                	case 'dewabatch':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    manik.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 	break
//=====================================BATES NGAB=====================================\\
//soundmenu
case 'home':
const home = fs.readFileSync('manikmp3/home.mp3')
manik.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('manikmp3/gettingold.mp3')
manik.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('manikmp3/sad.mp3')
manik.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('manikmp3/sad2.mp3')
manik.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('manikmp3/sad3.mp3')
manik.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('manikmp3/sad4.mp3')
manik.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('manikmp3/aeshtetic.mp3')
manik.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('manikmp3/aeshtetic2.mp3')
manik.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('manikmp3/aeshtetic3.mp3')
manik.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('manikmp3/aeshtetic4.mp3')
manik.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('manikmp3/allnight.mp3')
manik.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('manikmp3/lucas.mp3')
manik.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('manikmp3/sowell.mp3')
manik.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('manikmp3/wanna.mp3')
manik.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('manikmp3/up.mp3')
manik.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('manikmp3/yourskin.mp3')
manik.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('manikmp3/cutmeoff.mp3')
manik.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('manikmp3/beautiful.mp3')
manik.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('manikmp3/loosinggame.mp3')
manik.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('manikmp3/loosinginterest.mp3')
manik.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('manikmp3/playdate.mp3')
manik.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('manikmp3/ayatkursi2.mp3')
manik.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('manikmp3/tilawah.mp3')
manik.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('manikmp3/sholawatnabi.mp3')
manik.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('manikmp3/ngaji.mp3')
manik.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('manikmp3/ngaji2.mp3')
manik.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./manikmp3/iri.mp3');
manik.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
manik.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
manik.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./manikmp3/sound1.mp3');
manik.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./manikmp3/sound2.mp3');
manik.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./manikmp3/sound3.mp3');
manik.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./manikmp3/sound4.mp3');
manik.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./manikmp3/sound5.mp3');
manik.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./manikmp3/sound6.mp3');
manik.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./manikmp3/sound7.mp3');
manik.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break	
case 'slowmo':
				
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await manik. downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				manik. sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await manik. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						manik. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await manik. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						manik. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await manik. downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						manik. sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//=====================================BATES NGAB=====================================\\
//funmenu
                case 'bisakah':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'kapankah':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'apakah':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'bagaimanakah':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'rate':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'sangecek':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gaycek':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'lesbicek':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gantengcek':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'cantikcek':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'watak':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case 'hobby':
					//  Case by ManikGanz&YogPw

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					manik.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'jadian':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case 'ngewe':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'terganteng':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'caklontong':
                    if (!isRegistered) return reply(ind.noregis())
	            	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/caklontong?apikey=dappabotwa`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					manik.sendMessage(from, '* Jawaban :* '+anu.result.jawaban+ '\n\n Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			        case 'family100':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isLimit(sender)) return reply(ind.limitend(pusname))
	      	        
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/family100?apikey=${leyskey}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					manik.sendMessage(from, '* Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				    case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/tebakgambar?apikey=dappabotwa`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = ` Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					manik.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'truth':
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					manik.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					manik.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//Downloader menu
                
//=====================================BATES NGAB=====================================\\
//RandomImagemenu
                    // MENU COMMAND SOVIET
					case 'ww2':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					manik.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
//=====================================BATES NGAB=====================================\\
//image edit menu
case 'wanted':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/removebg?apikey=${lolhumankey}&img=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'rotate':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/rotate?url=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'komunis':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deletepc':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 manik.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
//=====================================BATES NGAB=====================================\\
//makermenu
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} manik`)
                    manikg = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${manikg}`)
                    manik.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Subscribe Channel Manik Y:V*', quoted: mek})
                break
                case 'bakarnama': 				
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'nulis':
                //case by ManikGanz
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis ManikGanz`)
                dapuhy = body.slice(6)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                manik.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe ManikGanz', quoted: mek})
                break
				case 'nulis2':
                //case by ManikGanz 
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis ManikGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                manik.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe ManikGanz', quoted: mek})
                break
                case 'nulis3':
                //case by ManikGanz
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis ManikGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                manik.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe ManikGanz', quoted: mek})
                break
                case 'nulis4':
                //case by ManikGanz
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis ManikGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                manik.sendMessage(from, asu, image, {caption: 'Nih Jan Lupa Subscribe ManikGanz', quoted: mek})
                break
                case 'attp':
                //case by ManikGanz
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}attp ManikGanz`)
                dapuhy = body.slice(5)
				dapzz = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dapuhy}`)
				manik.sendMessage(from, dapzz, sticker, {quoted: mek})
				break
                case 'ttp':
                //case by ManikGanz
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}ttp ManikGanz`)
                dapuhy = body.slice(4)
				dapzz = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${dapuhy}`)
				manik.sendMessage(from, dapzz, sticker, {quoted: mek})
				break
                case 'logogaming':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Manik*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
manik.sendMessage(from, game, image, {quoted: mek})
break
                case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    manik.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Subscribe Channel Manik Y:V*', quoted: mek})
                    break
         
               case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    manik.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Subscribe Channel Manik Y:V*', quoted: mek})
                break
                case 'googlesearch':
			    
	        	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Manik|Ganz|Banget`)
				reply(ind.wait())
				ct = body.slice(14)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				dap3 = ct.split("/")[2];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'pubglogo':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Manik|Ganz`)
				reply(ind.wait())
				ct = body.slice(9)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=pubg&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'glitchtext':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext Manik|Ganz`)
				reply(ind.wait())
				ct = body.slice(11)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&theme=glitch&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'cup':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup ManikGanz`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'cup2':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'battlefield':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}battlefield Manik|Ganz`)
				reply(ind.wait())
				ct = body.slice(12)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=battlefield&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				manik.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				case 'hartatahta':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta ManikGanz`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				manik.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//ownermenu
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./manikdata/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./manikdata/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
case 'spamchat': //CASE BY manik
if (!isOwner) return reply(ind.ownerb()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
jumblah = args[1]
Pesan = args[2]
for ( let i = 0 ; i < jumblah; i++) {
manik.sendMessage( nomer + '@s.whatsapp.net' , pesan , Text)
}  
break
					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					btoih = await manik.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await manik.downloadMediaMessage(encmedia)
						for (let _ of btoih) {
							manik.sendMessage(_.jid, buff, image, {caption: `* PESAN BROADCAST *\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of btoih) {
							manik.sendMessage(_.jid, `* BROADCAST SOVIET BOT *\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
					case 'block':
				 manik.updatePresence(from, Presence.composing) 
				 manik.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					manik.blockUser (`${body.slice(7)}@c.us`, "add")
					manik.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		            case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    manik.blockUser (`${body.slice(9)}@c.us`, "remove")
					manik.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
					case 'leave':
                 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					manik.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					manik.updatePresence(from, Presence.composing) 
					manik.sendMessage(from, 'Bye cuk', text) // ur cods
					}, 0)
					break
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `** @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		            case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					bajik = await manik.chats.all()
					manik.setMaxListeners(25)
					for (let _ of bajik) {
						manik.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		            case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setlimitt':
		            case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		            case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		            case 'setmemlimitt':
					if (args.length < 1) return
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					case 'addbadword':  // Fix Bug By ManikGanz*
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./manikdata/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                    case 'delbadword':  
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./manikdata/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					manik.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await manik.downloadAndSaveMediaMessage(enmedia)
					await manik.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break 
					case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./manikdata/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./manikdata/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
					case 'unblockk':
                if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				manik.blockUser (`${body.slice(10)}@c.us`, "remove")
                manik.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                break
		        case 'block':
				manik.updatePresence(from, Presence.composing) 
				manik.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                manik.blockUser (`${body.slice(7)}@c.us`, "add")
                manik.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                break
//=====================================BATES NGAB=====================================\\
//InformationMenu
                case 'infogempa': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/infogempa?apikey=alpinofc`)
				hasil = ` *Waktu* : ${anu.result.Waktu}\n* Lintang :* ${anu.result.Lintang}\n* Bujur :* ${anu.result.Bujur}\n* Magnitudo :* ${anu.result.Magnitudo}\n* Kedalaman :* ${anu.result.Kedalaman}\n* Wilayah :* ${anu.result.Wilayah}`
				manik.sendMessage(from, hasil, text, {quoted: mek})
				break
				case 'kbbi':	
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/kbbi?kata=${body.slice(6)}&apikey=yogipw`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
				case 'kodepos': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				manik.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(ind.wait())
				asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=zahirgans`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
				case 'covidindo': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				manik.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/covidindo?apikey=yogipw`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
					teks += `*Kode Provinsi:* : ${i.attributes.Kode_Provi}\n*Provinsi* : ${i.attributes.Provinsi}\n*Total Positif* : ${i.attributes.Kasus_Posi}\n*Total Sembuh* : ${i.attributes.Kasus_Semb}\n*Total Meninggal* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break
				case 'covidglobal': 
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlygay`)
				teks = ` *Total Cases* : ${anu.result.totalCases}\n* Recovered :* ${anu.result.recovered}\n* Deaths :* ${anu.result.deaths}\n* Active Cases :* ${anu.result.activeCases}\n* Closed Cases :* ${anu.result.closedCases}\n* Last Update :* ${anu.result.lastUpdate}`
				manik.sendMessage(from, teks, text, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
				case 'fakeaddress':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/fakedata?country=en&apikey=zahirgans`)
				teks = ` *Nama* : ${anu.result.name}\n* Birthday :* ${anu.result.birthday}\n* Address :* ${anu.result.address}\n* City :* ${anu.result.city}\n* Region :* ${anu.result.region}\n* Country :* ${anu.result.country}\n* Zip Code :* ${anu.result.zip}\n* Phone Number :* ${anu.result.phone_number}\n* Username :* ${anu.result.username}\n* Password :* ${anu.result.password}\n* Email :* ${anu.result.email}`
				manik.sendMessage(from, teks, text, {quoted: mek})
				break
				case 'kalkulator':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n Untuk Perkalian Menggunakan *\n Untuk Pertambahan Menggunakan +\n Untuk Pengurangan Menggunakan -\n Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n Untuk Perkalian Menggunakan *\n Untuk Pertambahan Menggunakan +\n Untuk Pengurangan Menggunakan -\n Untuk Pembagian Menggunakan /`)
				} else {
					reply(`* MATH *\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
				case 'infonomor':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `� internasional : ${data.international}\n� nomor : ${data.nomor}\n� operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
					case 'cuaca':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ca = await fetchJson(`http://zekais-api.herokuapp.com/cuaca?daerah=${body.slice(7)}`)
					hasil = `*Cuaca*\nNama : ${ca.Nama}\nLongitude : ${ca.longitude}\nLatitude : ${ca.latitude}\nSuhu : ${ca.Suhu}\nAngin : ${ca.Angin}\nKelembapan : ${ca.Kelembapan}\nCuaca : ${ca.Cuaca}\nUdara : ${ca.Udara}`
					manik.sendMessage(from, ca, text, {quoted: mek })
					await limitAdd(sender)
					break
                case 'beritahoax':
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 

//=====================================BATES NGAB=====================================\\
//nsfwmenu
                case 'randombokep':
                if (!isNsfw) return reply(ind.nsfwoff())
			     manik.updatePresence(from, Presence.composing) 
				 dappz = fs.readFileSync('./maniklib/18.js');
                 jsonData = JSON.parse(dappz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 dapbokepp = await getBuffer(anjglu.image)
                 reply(ind.wait())
                 asww = anjglu.teks
                 manik.sendMessage(from, dapbokepp, image, {quoted: mek, caption: asww})
                 break
                
		        case 'pussy': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'nekonime': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'blowjob': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'lewd': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'hentai': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'waifu': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
			case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./maniksrc/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./maniksrc/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./maniksrc/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return manik.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return manik.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./maniksrc/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						manik.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						manik.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return manik.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./maniksrc/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						manik.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						manik.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return manik.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return manik.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./maniksrc/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					manik.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./maniksrc/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						manik.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						manik.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./maniksrc/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						manik.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						manik.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
		        case 'hug': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
		        case 'hug2': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				manik.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				break
				default:
                  if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Kak *${pushname}*, *${prefix}${command}* Gada Di ${prefix}Menu Nih, Jan Buta Ya+___+\nHi ${pushname}, ${prefix}${command} Not on the ${prefix}menu`)
                  }
                  if (budy.includes(`@6285737134572`)) {
       	     var value = (`Hekhem:v\nItu yg tag owner gw suka kah ama dia:v`)
                var group = await manik.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                manik.sendMessage(from, options, text, {quoted: freply, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
				if (isMedia && isQuotedImage){
encmedia = mek
media = await manik.downloadAndSaveMediaMessage(encmedia)
const model = await nsfwjs.load()
predictions = await model.classify(media)
console.log('Predictions: ', predictions)
fs.unlinkSync(media)
}
if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await manik.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								manik.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await manik.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								manik.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                    if (isMedia && isCheck && isQuotedImage) {
                        const encmedia = mek
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 60) is_nsfw = "Yes"
                        reply(`*[ NsfwCheck ]*\n Nsfw : ${is_nsfw}\n Keakuratan : ${get_result}`)
                        if (Number(get_result.replace("%", "")) >= 70){
                        	setTimeout( () => {
		            manik.groupRemove(from, [sender])
					}, 3000) // 1000 = 1s
					setTimeout( () => {
					manik.sendMessage(from, '_Baybay_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					manik.sendMessage(from, '_Kamu akan dikick_', text) // ur cods
					}, 1000) // 1000 = 1s,
                    }
                    }
                      
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	 