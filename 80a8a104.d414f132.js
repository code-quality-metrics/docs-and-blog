(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(10),c=(a(0),a(167)),i={id:"doc2",title:"Cryptography in node",sidebar_label:"Cryptography in node"},o={id:"doc2",title:"Cryptography in node",description:"## intro",source:"@site/docs/cryptography-node.md",permalink:"/docs-and-blog/docs/doc2",sidebar_label:"Cryptography in node"},s=[{value:"intro",id:"intro",children:[{value:"crypto module",id:"crypto-module",children:[]}]},{value:"Passwords",id:"passwords",children:[{value:"Good algorithms",id:"good-algorithms",children:[]},{value:"Salt",id:"salt",children:[]}]},{value:"Protect data at rest",id:"protect-data-at-rest",children:[{value:"Encrypt",id:"encrypt",children:[]},{value:"Protect keys",id:"protect-keys",children:[]}]},{value:"Protect data in transit",id:"protect-data-in-transit",children:[{value:"Implementation",id:"implementation",children:[]},{value:"HTTPS",id:"https",children:[]}]},{value:"Two factor auth",id:"two-factor-auth",children:[{value:"MFA Implementation",id:"mfa-implementation",children:[]}]},{value:"Implementing cryptography",id:"implementing-cryptography",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"intro"},"intro"),Object(c.b)("h3",{id:"crypto-module"},"crypto module"),Object(c.b)("p",null,"Built in module."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"cipher/decipher classes"),Object(c.b)("li",{parentName:"ul"},"DiffieHellman/ECDH exchange keys for asymmetric cryptography. (needed for https)"),Object(c.b)("li",{parentName:"ul"},"hash (to generate hashes) given a hash output the input cannot be computed."),Object(c.b)("li",{parentName:"ul"},"HMAC for data in transit"),Object(c.b)("li",{parentName:"ul"},"sign/verify"),Object(c.b)("li",{parentName:"ul"},"random numbers, initialization vectors...")),Object(c.b)("h2",{id:"passwords"},"Passwords"),Object(c.b)("p",null,"Passwords cause problem. They are susceptible to:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dictionary atacks, people choose poor passwords with common words."),Object(c.b)("li",{parentName:"ul"},"Credential stuffing, caused by using the same password in multiple websites."),Object(c.b)("li",{parentName:"ul"},"Data breaches, they make passwords public.")),Object(c.b)("p",null,"Hashing is the best way to protect passwords. Hashes are randomized, one way functions. Not all hash algorithms are secure, for example MD5 is now weak and should not be used for passwords. MD5 has a small output and does is not well protected against collisions."),Object(c.b)("p",null,"The crypto module has a createHash function that accepts the hashing algorithm, then with the update method we provide the password and finally calling digest will compute the hash. digest and update can only be called once per instance of the hash."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto')\nconst hash = crypto.createHash('md5')\nhash.update('pass')\nconst hashedPassword = hash.digest('hex')\n")),Object(c.b)("p",null,"A rainbow table is a db with all possible hash values to common strings."),Object(c.b)("p",null,"sha(256) is longer and better protected but the rainbow table is still a problem."),Object(c.b)("h3",{id:"good-algorithms"},"Good algorithms"),Object(c.b)("p",null,"From best to worst"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Argon2, (academically) new and not well integrated in node yet"),Object(c.b)("li",{parentName:"ul"},"PBKDF2, good for enterprices"),Object(c.b)("li",{parentName:"ul"},"scrypt"),Object(c.b)("li",{parentName:"ul"},"bcrypt based on blowfish")),Object(c.b)("p",null,"TODO: Best practice for changing algoritm? update hash on successful login? double-hash?"),Object(c.b)("h3",{id:"salt"},"Salt"),Object(c.b)("p",null,"Salt is a random value added to the hash computation. Every hash need a different salt. Same passwords will have different hashes and thus, removing the rainbow table problem."),Object(c.b)("p",null,"Salts can be generated with randomBytes, that returns a random buffer. Then we can use pbkdf2Sync (or async) to generate a hash with PBKDF2. Third parameter is the number of iterations. The returned hash is returned as a buffer."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto')\nconst password = 'pass'\nconst salt = crypto.randomBytes(256).toString('hex')\nconst hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512')\n")),Object(c.b)("p",null,"Always store passwords hashed with a salt."),Object(c.b)("h2",{id:"protect-data-at-rest"},"Protect data at rest"),Object(c.b)("p",null,"Threats to data stored on disk (databases and files)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Confidentiality. Show the right data to the right people."),Object(c.b)("li",{parentName:"ul"},"Integrity. Prevent data changes by an unauthorized party."),Object(c.b)("li",{parentName:"ul"},"Availability. Data available when needed.")),Object(c.b)("h3",{id:"encrypt"},"Encrypt"),Object(c.b)("p",null,"Symmetric encryption. Encrypt when saved decrypt when reading. Symmetric encription relies on one key (protect well). "),Object(c.b)("p",null,"Tools in node: cypher/dechiper\n",Object(c.b)("inlineCode",{parentName:"p"},"crypto.createCipheriv")," iv = initialization vector. That creates a cipher then we can call ",Object(c.b)("inlineCode",{parentName:"p"},"update")," and ",Object(c.b)("inlineCode",{parentName:"p"},"final")," to encrypt the data. Both functions can only be called once or they throw. Do not use crypto.createCipher (without iv), it's deprecated and not secure."),Object(c.b)("p",null,"AES-256 algorithm"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"aes Advanced Encryption Standard"),Object(c.b)("li",{parentName:"ul"},"256 bits of output"),Object(c.b)("li",{parentName:"ul"},"cbc cipher block chaining. chop data in blocks and encrypt each block. ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://bitly/crypto-basics"}),"http://bitly/crypto-basics"))),Object(c.b)("p",null,"Generate a key for encryption with scrypt"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// CONFIG\n// common variables\nconst crypto = require('crypto')\n// AES-256 algorithm\nconst algorithm = 'aes-256-cbc'\nconst key = crypto.scryptSync('password', crypto.randomBytes(32), 32)\n// create random initialization vector\nconst iv = crypto.randomBytes(16)\n\n// ENCRYPT\n// cipher\nconst cipher = crypto.createCipheriv(algorithm, key, iv)\nlet encrypted = cipher.update('111-000-0000', 'utf8', 'hex')\nencrypted = cipher.final('hex')\n\n// DECRYPT\n// decipher\nconst decipher = crypto.createDecipheriv(algorithm, key, iv)\nlet decrypted = decipher.update(encrypted, 'hex', 'utf8')\ndecrypted = decipher.final('utf8')\n")),Object(c.b)("h3",{id:"protect-keys"},"Protect keys"),Object(c.b)("p",null,'Find a KMS. Store keys encrypted by a master key. Keys will be store in a "key store". Rotate keys. AWS kms, Azure key vault, vault (open source).'),Object(c.b)("p",null,"TODO: Best practice for rotating keys? re-encrypt with new key?"),Object(c.b)("h4",{id:"vault"},"Vault"),Object(c.b)("p",null,"Master key is divided in pieces (shard) to be shared by different people/machines. With n shards the master key can be generated."),Object(c.b)("p",null,"Authenticate with vault api with user+pass or certificates. Then request the key and connect to your db to decrypt or encrypt data."),Object(c.b)("h2",{id:"protect-data-in-transit"},"Protect data in transit"),Object(c.b)("p",null,"Data on the wire."),Object(c.b)("p",null,"Threats:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Lose confidentiality. Attacker accessing the data (read or change) while the data is in transit. Man-in-the-middle attack."),Object(c.b)("li",{parentName:"ul"},"Impersonation. Verify the identity of the other end of the communication.")),Object(c.b)("p",null,"Asymmetric encription -> encrypt with one key, decrypt with another key (public/private key pair) For solving impersonation."),Object(c.b)("p",null,"HMAC -> hash based message authentication code. Hashes the data and sends it, then the receiver hashes anc compares. For knowing if data was changed."),Object(c.b)("p",null,"Digital signatures -> hashing + asymmetric encryption. Big part of the PKI (backbone of https)"),Object(c.b)("h3",{id:"implementation"},"Implementation"),Object(c.b)("p",null,"Diffie Hellman key exchange. How to generate a shared secret over a public channel."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"crypto.createDiffieHellman")," creates a diffiehellman object and takes the number of bits of the key as param. (asymetric keys should be larger than symmetric). On the diffihellman object we can call ",Object(c.b)("inlineCode",{parentName:"p"},"generateKeys()")," to get the keys. For generating bob we use the prime number and the generator from alice. When we have both keys we can generate the shared secret."),Object(c.b)("p",null,"The shared values over the channel are the prime and the generator numbers and the computed public key."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto')\n\nconst alice = crypto.createDiffieHellman(2048)\nconst aliceKey = alice.generateKeys()\n\nconst bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator())\nconst bobKey = bob.generateKeys()\n\n// Generate the shared secret both will be equal\nconst aliceSecret = alice.computeSecret(bobKey)\nconst bobSecret = bob.computeSecret(aliceKey)\n")),Object(c.b)("p",null,"also useful: ",Object(c.b)("inlineCode",{parentName:"p"},"crypto.generateKeyPair()")),Object(c.b)("p",null,"HMAC. ",Object(c.b)("inlineCode",{parentName:"p"},"crypto.createHmac()")," with the algoritm and a secret (shared between both parties) then update it with data and calculate the signedhash with ",Object(c.b)("inlineCode",{parentName:"p"},"digest()"),". Now we can send the data along with the signedhash. Then Bob can calculate a signed hash with the same secret and compare."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto')\nconst hmac = crypto.createHmac('sha256', 'secret')\nhmac.update('some data to be hashed')\nconst signedHash = hmac.digest('hex')\n")),Object(c.b)("h3",{id:"https"},"HTTPS"),Object(c.b)("p",null,"Asymmetric encryption for exchanging keys and symmetric encryption for messages."),Object(c.b)("h2",{id:"two-factor-auth"},"Two factor auth"),Object(c.b)("p",null,"A factor is a method for identifying someone like password, token (physical object) or biometrics."),Object(c.b)("p",null,"Time-based OTP. A secret (usually qr) is sent to the client (smartphone) and is used to generate tokens based on time (change fast). That token is used when authenticating."),Object(c.b)("h3",{id:"mfa-implementation"},"MFA Implementation"),Object(c.b)("p",null,"Using speakeasy and qrcode packages."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// generate secret with speakeasy\nconst secret = speakeasy.generateSecret()\n// generate qr based on secret and send it to the user\n// data_url is the url of the image\nqrcode.toDataURL(secret.otpauth_url, (err, data_url) => {})\n// get the token from the user and validate with speakeasy\nconst verified = speakeasy.totp.verify({secret, encoding, token})\n// when verified, store the secret in the user model\n")),Object(c.b)("h2",{id:"implementing-cryptography"},"Implementing cryptography"),Object(c.b)("p",null,"Add authentication service for authenticating requests (data in transit). Asymmetric encryption between servers/microservices (data in transit). Microservices for db access (data on rest) and a key store for the encryption keys."),Object(c.b)("p",null,"Check ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OWASP/NodeGoat"}),"https://github.com/OWASP/NodeGoat")," for the security errors."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"no password hashing"),Object(c.b)("li",{parentName:"ul"},"no data in transit protection (uses http) we can use https module providing a key and a certificate."),Object(c.b)("li",{parentName:"ul"},"no data a rest protection.")))}p.isMDXComponent=!0}}]);