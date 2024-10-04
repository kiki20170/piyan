global.owner = ['6285731416490']  
global.mods = ['6285731416490'] 
global.prems = ['6285731416490']
global.nameowner = 'ʜᴏᴋᴀᴄʀᴏᴏᴛ'
global.numberowner = '6285731416490' 
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/La3WuFUCgSX5bzzM0q6gvV'
global.instagram = 'https://instagram.com/piyanhkacrt'
global.wm = '© ʜᴏᴋᴀᴄʀᴏᴏᴛ'
global.wait = '_*ᴡᴀɪᴛ sᴇᴅᴀɴɢ ᴅɪᴘʀᴏsᴇs...*_'
global.eror = '_*sᴇʀᴠᴇʀ ᴇʀᴏʀ*_'
global.stiker_wait = '*⫹⫺ sᴛɪᴄᴋᴇʀ sᴇᴅᴀɴɢ ᴅɪ ʙᴜᴀᴛ...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'Piyanagul_27' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'Piyanagul_27'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'Piyanagul_27' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
