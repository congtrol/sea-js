"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3231],{7489:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(5893),i=t(1151);const o={sidebar_position:2},r="My Markdown page",l={id:"remotesignal/my-markdown-2",title:"My Markdown page",description:"AWS lightsail \uc5d0 \uc124\uce58\ub41c Mosquitto \ube0c\ub85c\ucee4\uc758 \ucd5c\ub300 \ud5c8\uc6a9 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc218\ub97c \ud14c\uc2a4\ud2b8\ud574\ubd24\ub2e4.",source:"@site/docs/remotesignal/my-markdown-2.md",sourceDirName:"remotesignal",slug:"/remotesignal/my-markdown-2",permalink:"/docs/remotesignal/my-markdown-2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/remotesignal/my-markdown-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"My Markdown page",permalink:"/docs/remotesignal/my-markdown-page"},next:{title:"RemoteSignal",permalink:"/docs/remotesignal/"}},a={},c=[];function m(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"my-markdown-page",children:"My Markdown page"}),"\n",(0,s.jsx)(e.h1,{id:"\uc2e4\ud5d8-aws-mqtt-client-max",children:"\uc2e4\ud5d8 AWS MQTT client max"}),"\n",(0,s.jsx)(e.p,{children:"AWS lightsail \uc5d0 \uc124\uce58\ub41c Mosquitto \ube0c\ub85c\ucee4\uc758 \ucd5c\ub300 \ud5c8\uc6a9 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc218\ub97c \ud14c\uc2a4\ud2b8\ud574\ubd24\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"Macbook \uc5d0\uc11c \ub2e4\uc218\uc758 MQTT.JS  Node client \ub97c \uc0dd\uc131\ud588\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"let { Command } = require('commander')\nvar mqtt = require('mqtt')\nlet intervalID = null;\n\nlet program  = new Command()\nlet clients = [];\nprogram.option('-n, --number-Clients <number>','number of client instance')\nprogram.parse()\n\nlet opt = program.opts();\n\nfunction onMessage( topic ,message){\n  console.log(\"\\n##### topic:\"+ topic);\n  console.log(\"playloadString:\"+message.toString());\n}\n  \nfunction onError(e){\n  if(e) console.log('onError', e)\n}\n\nif(opt.numberClients >= 1){\n  console.log('N', opt.numberClients )\n  for(let i = 0 ; i < opt.numberClients  ; i++){\n     let c = mqtt.connect('mqtt://congtrol.com');\n      c.on('connect', e=>{\n        c.subscribe('#', onError); } );\n      c.on('message', onMessage)\n\n      clients =  [ ...clients, c];\n      console.log('len: ',clients.length)\n  }\n \n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"$ node pubsub-multiple.js -n 100\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\uacb0\uacfc1.  \ucd5c\ub300 \uc811\uc18d\uc218\uac00 1000\uc744 \ub118\uc790 \ubaa8\uc2a4\ud0a4\ud1a0\uac00 \uc11c\ube44\uc2a4 \ubd88\ub2a5\uc0c1\ud0dc\uac00 \ub428."}),"\n",(0,s.jsx)(e.p,{children:"\ud30c\uc77c\uac1c\uc218 \ucd5c\ub300\uac1c\uc218\uac00 1000\uc73c\ub85c \uc9c0\uc815\ub418\uc5b4\uc788\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"nofile \ucd5c\ub300\uce58\ub97c \ub298\ub824\uc918\uc57c\ud55c\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"$ ulimit -a\n\nbitnami@bayo:~$ ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) unlimited\npending signals                 (-i) 1884\nmax locked memory       (kbytes, -l) 64\nmax memory size         (kbytes, -m) unlimited\nopen files                      (-n) 5000\npipe size            (512 bytes, -p) 8\nPOSIX message queues     (bytes, -q) 819200\nreal-time priority              (-r) 0\nstack size              (kbytes, -s) 8192\ncpu time               (seconds, -t) unlimited\nmax user processes              (-u) 32768\nvirtual memory          (kbytes, -v) unlimited\nfile locks                      (-x) unlimited\nbitnami@bayo:~$\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\uc784\uc2dc\ub85c \uc124\uc815\ud558\uba74 \uadf8\ud6c4 \uc2e4\ud589\uc2dc \uc77c\uc2dc \ubc18\uc601\ub418\ub294\uac83 \uac19\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"$ ulimit -n 2000\n"})}),"\n",(0,s.jsx)(e.p,{children:"\ud558\uc9c0\ub9cc \uc2dc\uc2a4\ud15c \uc804\ubc18 \ubc18\uc601\ud558\ub824\uba74 \uc124\uc815\ud30c\uc77c\uc744 \uc218\uc815\ud574\uc918\uc57c\ud55c\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"root \uc758 \uacbd\uc6b0  \ub3c4\uba54\uc778\uc744 root \ub85c \uba85\uc2dc\ud574\uc57c\ud55c\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\uc628\ub77c\uc778 \ubb38\uc11c\uc0c1 \uc5ec\ub7ec\ub0b4\uc6a9\uc774 \ub098\uc624\uace0 \uc5ec\ub7ec \ud30c\uc77c\uc758 \uc218\uc815\uc774 \uc548\ub0b4\ub418\uc5b4\uc788\uc5c8\ub2e4"}),"\n",(0,s.jsx)(e.p,{children:"/etc/systemd/system.conf  ?"}),"\n",(0,s.jsx)(e.p,{children:"\uadf8\ub7f0\ub370 \uc544\ub798 \ud30c\uc77c\ub9cc \uc218\uc815\ud574\ub3c4 \uc791\ub3d9\ub428\uc744 \ud655\uc778\ud568."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"$ sudo vi /etc/security/limits.conf\n\n# \uc544\ub798 \ub450\uc904 \ucd94\uac00\nbitnami soft nofile 5000\nbitnami hard nofile 10000\n\n\ub3c4\uba54\uc778:  id, group \ub4f1\nsoft: \uacbd\uace0 \uc218\uc900\nhard: \uc2e4\uc81c \ud55c\uacc4\n"})}),"\n",(0,s.jsx)(e.p,{children:"\uc774\ud6c4, 2500 \uc5f0\uacb0 \uc815\ub3c4\ub294 \uc791\ub3d9\ub418\uc5c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\ubb38\uc81c\ub294  CPU 5%\uc218\uc900\uc774 600\uc811\uc18d \uc815\ub3c4\uc5d0\uc11c 5% \ub3c4\ub2ec."})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);