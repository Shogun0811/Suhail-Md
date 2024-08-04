const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://starmd:xcelsama@excel.xmckecq.mongodb.net"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_47_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZxMEtsTHg1RHhPVTFYRFZWS29zQjM1UFl5WENkMzFPMGJSSGwvRFlKQnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFuN1lZWmR6U1FxbUhodkdtYmNhUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjRlMDgxZGQtNDFkNi00NDI0LTlkMmEtYzIxYmQyMDVlY2Y0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDQ3LFxuICAgICAgNDgsXG4gICAgICAyMTYsXG4gICAgICA1NyxcbiAgICAgIDIwOCxcbiAgICAgIDIxOCxcbiAgICAgIDgxLFxuICAgICAgMTM4LFxuICAgICAgMjI2LFxuICAgICAgMTU3LFxuICAgICAgNDcsXG4gICAgICAxNTQsXG4gICAgICA3LFxuICAgICAgMTU3LFxuICAgICAgMTY1LFxuICAgICAgMjMwLFxuICAgICAgMTc3LFxuICAgICAgMjQxLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjM1LFxuICAgICAgMjA4LFxuICAgICAgMTY2LFxuICAgICAgMTk3LFxuICAgICAgNSxcbiAgICAgIDEzOSxcbiAgICAgIDUwLFxuICAgICAgMjI0LFxuICAgICAgMjA4LFxuICAgICAgNDksXG4gICAgICA1NSxcbiAgICAgIDE5NCxcbiAgICAgIDEyMCxcbiAgICAgIDE4MCxcbiAgICAgIDE4MixcbiAgICAgIDEwMixcbiAgICAgIDE4NCxcbiAgICAgIDIwMCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIR0NUSDRUNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzYwMjYzNjMxOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44OT44O844Kz44Oe44OrLkJpY29tYXJ1IFNob2d1bmHEq1wiLFxuICAgIFwibGlkXCI6IFwiODM5NjY3Nzg0MDkxNTk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjNTMkt3R0VQN0t1clVHR0IwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSRTNMdzBHM0RyNS83UFNZcTBIWkFrOG53aC8rbVJlb0N1WU50R0RZSndJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkszNXZ0WHNwSU96d0kzNTRyTmU0UmxReU95YWplZXVFZEZZa050eUg1RE9sNVhnRTNheUcyMkVCSFJDSGpSUGZLblZtOUxwR1lTY0c3KzRac2ZMbkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxaK3BaSDRPSUhrMTNhaDNQWlJtWFpBb0NUT3J1U0xYWk5XeEoxVGhFVjZqVjF3WWh4NnlsblhPaVRRandwWHRKVm85aVVMZ2drYmlrMzlWSzZyUmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc2MDI2MzYzMTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MjE2NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxKSy5qc29uIjogIntcImtleURhdGFcIjpcImZHT1RLUU1QNjg3eTZGdG1lWGxPa045akFQc1ljbDR5YlZ5SHJwMklvTzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwNDMzOTczNCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
