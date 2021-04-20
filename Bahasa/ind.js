exports.wait = () => {
	return`*「 WAIT 」 SEDANG DIPROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`「*LEVELMU MASIH KOSONG*」`
}
exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}
exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`
╭◪ *「 DAFTAR DULU 」*
╰───────────────╮  
╭───────────────╯
├❏ Cara daftar ${prefix}daftar nama|umur* 
├❏*contoh ${prefix}daftar Manik|16*
├❏ *Nb* : Jan Spam Bot
╰───────────────╯
`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database MANIK-bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Manikツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*
Untuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim 
NOTE:
*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`
╭◪ *「 DATA NEGARA MANIK BOT 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nama:
├━⊱${namaUser}
├━⊱Nomer:
├━⊱wa.me/${sender.split("@")[0]}
├━⊱Umur:
├━⊱${umurUser}
├━⊱Waktu pendaftaran:
├━⊱${time}
├━⊱NS:
├━⊱${serialUser}
╰───────────────╯
NOTE : Jangan dilupakan ni kode cuk`
}

exports.premon = (pushname) => {
	return`Maaf Wahai ${pushname} Lu Ga Premium:V`
}

exports.dellprem = (hnom) => {
	return`
╭◪ *「 PREMIUM DELETE 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nomer:
├━⊱${pnom}
├━⊱Expired:
├━⊱SORRY UDAH ABIS
├━⊱NOTE:
├━⊱NIKMATI PREMIUMNYA:)
╰───────────────╯`
}

exports.premadd = (pnom) => {
	return`
╭◪ *「 PREMIUM ADD 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nomer:
├━⊱${pnom}
├━⊱Expired:
├━⊱30 DAY
├━⊱NOTE:
├━⊱NIKMATI PREMIUMNYA:)
╰───────────────╯`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭◪ *「 SELAMAT 」* 
╰───────────────╮  
╭───────────────╯
├⊱❏ Nama : ${pushname}
├⊱❏ Nomer : ${sender.split("@")[0]}
├⊱❏ Xp : ${getLevelingXp(sender)}
├⊱❏ Limit :  +3
├⊱❏ Pangkat :  ${role}
├⊱❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰───────────────╯`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6283815956151\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
╭◪ *「 ATM 」*
╰───────────────╮  
╭───────────────╯
├❏ *Name* : ${pushname}
├❏ *Nomor* : ${sender.split("@")[0]}
├❏ *Uang* : ${uangkau}
╰───────────────╯
`}
