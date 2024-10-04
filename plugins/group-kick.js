let handler = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await conn.groupParticipantsUpdate(m.chat, [usr], "remove"); return;
}
  if (!m.mentionedJid[0]) throw `ᴛᴀɢ/ʀᴇᴘʟʏ ʏᴀɴɢ ᴍᴀᴜ ᴅɪ ᴋɪᴄᴋ ɢᴏʙʟᴏᴋ!`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupParticipantsUpdate(m.chat, [user], "remove");
};

handler.help = ['kick @tag/reply']
handler.tags = ['group']
handler.command = /^(kick|k|berisik|riper|sampah|anjing)$/i

handler.admin = true 
handler.group = true
handler.botAdmin = true

module.exports = handler