const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/d2b25f5109f5c52434e03.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_54_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTElDVVNDL21Ea01Gbm5idU5lMjFrVEpkQmV2bEpCMk1BMGtyY3R4UXpsST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3NjAyNjM2MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxQjZEMkNBODdGRUU2QkM4MkU5MzAxMTFBRUE4NUMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzAzODg4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4ZE1nZGtGV1FqdUN5QS0tYjVib0FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5N2U1ZDVhLTMzZTctNGU5ZC05YWMxLWExMmQxNzI4YzhmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAyMTMsXG4gICAgICAwLFxuICAgICAgMjI0LFxuICAgICAgMjM2LFxuICAgICAgMzMsXG4gICAgICAyMCxcbiAgICAgIDE0NixcbiAgICAgIDg4LFxuICAgICAgMTU1LFxuICAgICAgNjQsXG4gICAgICA0NSxcbiAgICAgIDE2NixcbiAgICAgIDI0MSxcbiAgICAgIDI0MCxcbiAgICAgIDI0OSxcbiAgICAgIDIxNCxcbiAgICAgIDE4OCxcbiAgICAgIDIyNSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNDYsXG4gICAgICA4LFxuICAgICAgODEsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgNTUsXG4gICAgICAyNTUsXG4gICAgICAxOTYsXG4gICAgICAxMzUsXG4gICAgICAyMjAsXG4gICAgICAyMDYsXG4gICAgICAyMjEsXG4gICAgICAxNDYsXG4gICAgICAzOSxcbiAgICAgIDIzMyxcbiAgICAgIDE1OSxcbiAgICAgIDc2LFxuICAgICAgMjA1LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY0TEZYUEtEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NjAyNjM2MzE6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjg5Pjg7zjgrPjg57jg6suQmljb21hcnUgU2hvZ3VuYcSrXCIsXG4gICAgXCJsaWRcIjogXCI4Mzk2Njc3ODQwOTE1OTo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM1MyS3dHRUp6NXpiVUdHQ1FnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJFM0x3MEczRHI1LzdQU1lxMEhaQWs4bndoLyttUmVvQ3VZTnRHRFlKd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickhUZVZlVkRsL3E2TXVKVXhsMitjcitndUc3UlljK0gvZ2FCM2pzcjNmTGltelNESjRZUUo5bFFmU05NQjBwb3JIclhaSS9iWXFuLzhtZXQzb1pOREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGF0U2IwNVFhSDZ5WTFEQUdqc3F0YlZIQXF5WGtWSUtYTC9UZTZreTZQZGlwYXduRVlHOWVYdzI4dXNNTzd5YkdQN1RrZmgwSjNJcmlBZVEvNGpFaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzYwMjYzNjMxOjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAzODg4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxKS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkdPVEtRTVA2ODd5NkZ0bWVYbE9rTjlqQVBzWWNsNHliVnlIcnAySW9PMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA0MzM5NzM0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "★",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BICOM LAB",
  packname: process.env.PACK_NAME || "🇸🇳💫🇯🇵🔋.ILLUSION",
  botname : process.env.BOT_NAME  || "NO.GAME.NO.LIFE",
  ownername:process.env.OWNER_NAME|| "DIAGNE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
