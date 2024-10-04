/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  let regex = /^(assalamualaikum|salam|ass|salo?m|p)$/i;
  if (regex.test(m.text)) {
    let user = global.db.data.users[m.sender];
    let name = user.name;
    let caption = `وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\nᴡᴀᴀʟᴀɪᴋᴜᴍᴜssᴀʟᴀᴍ *@${m.sender.split('@')[0]}* 👋🏻\n\nوَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا

“Apabila kamu diberi penghormatan dengan sesuatu penghormatan, balaslah penghormatan itu dengan yang lebih baik dari padanya, atau balaslah penghormatan itu (dengan yang serupa).” (QS. An Nisa ayat 86).`;
    m.reply(caption, null, {
      sendEphemeral: true,
      quoted: m,
      contextInfo: {
        mentionedJid: [m.sender]
      }
    });
  }
};

handler.command = /.*/;
handler.customPrefix = /^(assalamualaikum|salam|ass|salo?m)$/i;
handler.exp = 0;

module.exports = handler;
