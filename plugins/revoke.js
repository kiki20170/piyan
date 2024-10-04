let handler = async (m, { isAdmin, isOwner, conn, command }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, `sᴜᴋsᴇs ʀᴇsᴇᴛ ʟɪɴᴋ ɢʀᴜᴘ! ⚡`, m)
  await delay(1000)
  let linknya = await conn.groupInviteCode(m.chat)
  conn.reply()
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^revoke|riset|resetlink$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))