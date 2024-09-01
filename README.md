# Boho

The Boho library implements cryptographic authentication protocols, secure communication, and general cryptography.

- ``boho`` means Protection 

## features
- general encryption.
- authentication.
- secure communication.
- End-to-End Encryption with Symmetric.
- support JS & C/C++ for Arduino.

## libraries
- JavaScript: Node.js , Web Browser. [ [github](https://github.com/remocons/boho) ] 
- C/C++: Arduino [ [github](https://github.com/remocons/boho-arduino) ] 

## applications

- Websocket authentication, secure communication.
- secure TCP/Serial/Stream communication, authentication.
- secure MQTT payload.
- local file encryption.

## core
- Using SHA256
- xotp
- generateOTP
- generateHMAC

## general purpose encryption

- encryptPack
- decryptPack


## authentication protocol.

- AUTH_REQ
- AUTH_NONCE
- AUTH_HMAC
- check_auth_hmac
- AUTH_ACK
- check_auth_ack_hamc
- AUTH_FAIL

## secure communication after auth.

- ENC_488
- ENC_E2E


## license
- MIT

## changelog Update

### v1.0.0 : **Breaking Changes**
- update module: `meta-buffer-pack` v2.x.x
- dist/filename change
  - IIFE for browser
    - v0.9.0: boho.min.js
    - v1.0.0: `boho.iife.js`
  - ESM for browser
    - v0.9.0: boho.esm.js
    - v1.0.0: `boho.js`