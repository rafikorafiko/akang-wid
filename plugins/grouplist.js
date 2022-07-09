let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n' + txt, m)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

