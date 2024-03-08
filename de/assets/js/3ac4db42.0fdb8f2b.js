"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[538],{536:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(4848),r=i(8453);const s={sidebar_position:3},d="Engine-Einstellungen",l={id:"getting-started/configuration/engine-settings",title:"Engine-Einstellungen",description:"\xc4ndern der Engine-Einstellungen mit Umgebungsvariablen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/configuration/engine-settings.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/engine-settings",permalink:"/de/getting-started/configuration/engine-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/engine-settings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Spiel-Einstellungen",permalink:"/de/getting-started/configuration/game-settings"},next:{title:"Serverbefehle (RCON)",permalink:"/de/getting-started/configuration/server-commands"}},c={},a=[{value:"Mit Umgebungsvariablen",id:"mit-umgebungsvariablen",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"engine-einstellungen",children:"Engine-Einstellungen"}),"\n",(0,t.jsx)(n.p,{children:"\xc4ndern der Engine-Einstellungen mit Umgebungsvariablen."}),"\n",(0,t.jsx)(n.h2,{id:"mit-umgebungsvariablen",children:"Mit Umgebungsvariablen"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Diese Umgebungsvariablen und Einstellungen k\xf6nnen sich \xe4ndern, da das Spiel sich noch in der Beta-Phase befindet."})}),"\n",(0,t.jsxs)(n.p,{children:["Um diese Einstellungen zu nutzen, musst du ",(0,t.jsx)(n.code,{children:"DISABLE_GENERATE_ENGINE: false"})," setzen."]}),"\n",(0,t.jsx)(n.p,{children:"Um Engine-Einstellungen in Umgebungsvariablen zu konvertieren m\xfcssen folgende Regeln eingehalten werden:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"alle Buchstaben gro\xdf schreiben"}),"\n",(0,t.jsx)(n.li,{children:"W\xf6rter durch Einf\xfcgen eines Unterstrichs trennen"}),"\n",(0,t.jsx)(n.li,{children:"falls die Einstellung mit einem einzelnen Buchstaben beginnt, muss dieser entfernt werden (z.B. 'b')"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"LanServerMaxTickRate -> LAN_SERVER_MAX_TICK_RATE"}),"\n",(0,t.jsx)(n.li,{children:"bUseFixedFrameRate -> USE_FIXED_FRAME_RATE"}),"\n",(0,t.jsx)(n.li,{children:"NetClientTicksPerSecond -> NET_CLIENT_TICKS_PER_SECOND"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Beschreibung"}),(0,t.jsx)(n.th,{children:"Standardwert"}),(0,t.jsx)(n.th,{children:"Erlaubter Wert"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DISABLE_GENERATE_ENGINE"}),(0,t.jsx)(n.td,{children:"Deaktiviert die Generierung der Engine.ini"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LAN_SERVER_MAX_TICK_RATE"}),(0,t.jsx)(n.td,{children:"Setzt die maximale Anzahl an Ticks pro Sekunde f\xfcr LAN-Server. H\xf6here Raten sorgen f\xfcr ein fl\xfcssigeres Gameplay."}),(0,t.jsx)(n.td,{children:"120"}),(0,t.jsx)(n.td,{children:"Integer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NET_SERVER_MAX_TICK_RATE"}),(0,t.jsx)(n.td,{children:"Setzt die maximale Anzahl an Ticks pro Sekunde f\xfcr dedizierte Server, um ein ebenso fl\xfcssiges Online-Spiel zu gew\xe4hrleisten."}),(0,t.jsx)(n.td,{children:"120"}),(0,t.jsx)(n.td,{children:"Integer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CONFIGURED_INTERNET_SPEED"}),(0,t.jsx)(n.td,{children:"Setzt die angenommene Internetgeschwindigkeit der Spieler in Bytes pro Sekunde. Ein hoher Wert reduziert die Wahrscheinlichkeit von Bandbreiten-Drosselung."}),(0,t.jsx)(n.td,{children:"104857600"}),(0,t.jsx)(n.td,{children:"Integer (in Bytes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CONFIGURED_LAN_SPEED"}),(0,t.jsx)(n.td,{children:"Setzt die LAN-Geschwindigkeit, um sicherzustellen, dass LAN-Spieler die maximale Netzwerkkapazit\xe4t nutzen k\xf6nnen."}),(0,t.jsx)(n.td,{children:"104857600"}),(0,t.jsx)(n.td,{children:"GInteger (in Bytes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MAX_CLIENT_RATE"}),(0,t.jsx)(n.td,{children:"Maximale Daten\xfcbertragungsrate pro Client f\xfcr alle Verbindungen, um eine Datenbeschr\xe4nkung zu verhindern."}),(0,t.jsx)(n.td,{children:"104857600"}),(0,t.jsx)(n.td,{children:"Integer (in Bytes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MAX_INTERNET_CLIENT_RATE"}),(0,t.jsx)(n.td,{children:"Zielt speziell auf Internet-Clients ab, um eine uneingeschr\xe4nkte Daten\xfcbertragung in gro\xdfem Umfang zu erm\xf6glichen."}),(0,t.jsx)(n.td,{children:"104857600"}),(0,t.jsx)(n.td,{children:"Integer (in Bytes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SMOOTH_FRAME_RATE"}),(0,t.jsx)(n.td,{children:"Erm\xf6glicht es der Spiel-Engine, Schwankungen der Bildrate auszugleichen, f\xfcr ein konsistenteres visuelles Erlebnis."}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SMOOTH_FRAME_RATE_UPPER_LIMIT"}),(0,t.jsx)(n.td,{children:"Setzt einen maximalen Ziel-Bildratenbereich f\xfcr die Frame-Gl\xe4ttung fest."}),(0,t.jsx)(n.td,{children:"120.000000"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SMOOTH_FRAME_RATE_LOWER_LIMIT"}),(0,t.jsx)(n.td,{children:"Setzt einen minimalen Ziel-Bildratenbereich f\xfcr die Frame-Gl\xe4ttung fest."}),(0,t.jsx)(n.td,{children:"30.000000"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"USE_FIXED_FRAME_RATE"}),(0,t.jsx)(n.td,{children:"Aktiviert die Verwendung einer festen Bildrate"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FIXED_FRAME_RATE"}),(0,t.jsx)(n.td,{children:"Feste Bildrate"}),(0,t.jsx)(n.td,{children:"120.000000"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MIN_DESIRED_FRAME_RATE"}),(0,t.jsx)(n.td,{children:"Legt eine minimale akzeptable Bildrate fest, um sicherzustellen, dass das Spiel zumindest mit dieser Bildrate fl\xfcssig l\xe4uft."}),(0,t.jsx)(n.td,{children:"60.000000"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NET_CLIENT_TICKS_PER_SECOND"}),(0,t.jsx)(n.td,{children:"Erh\xf6ht die Update-Frequenz f\xfcr Clients, um die Reaktionsf\xe4higkeit zu verbessern und die Verz\xf6gerung zu reduzieren."}),(0,t.jsx)(n.td,{children:"120"}),(0,t.jsx)(n.td,{children:"Integer"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Das Erh\xf6hen der Server-Tickrate auf \xfcber 120 fps macht zwar einige Gameplay-Aspekte fl\xfcssiger,\nbehebt jedoch keine Ruckler und belastet deine Hardware erheblich mehr."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);