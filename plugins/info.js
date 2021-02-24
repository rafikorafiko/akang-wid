let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick


➥ JIKA BOT OFF ATAU BELUM MERESPON COBALHA LAGI! JANGAN DI SPAM!

*Thanks To :*
Tuhan yg maha esa
Dan kawan yang lain :)
yg udh berdonasi

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 08819547416
╠➥ Indosat: 085807173620
║>Request? Wa.me/628819547416
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

