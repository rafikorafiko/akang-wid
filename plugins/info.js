let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick


Script: @Nurotomo



*Sosmed :*
Kritik kami di sosmed
Instagram: @kangwid_20



*Thanks To :*
Nurotomo
Drawl Nag
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0881-954-7416
╠➥ Indosat: 0858-0717-4320
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

