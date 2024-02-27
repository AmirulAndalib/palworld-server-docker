"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[360],{8735:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var d=n(4848),t=n(8453);const i={sidebar_position:1},s="Servereinstellungen",l={id:"getting-started/configuration/server-settings",title:"Servereinstellungen",description:"\xc4ndern von Servereinstellungen mithilfe von Umgebungsvariablen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/configuration/server-settings.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/server-settings",permalink:"/de/getting-started/configuration/server-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/server-settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/de/category/configuration"},next:{title:"Spiel-Einstellungen",permalink:"/de/getting-started/configuration/game-settings"}},c={},h=[{value:"Umgebungsvariablen",id:"umgebungsvariablen",level:2},{value:"Spieleports",id:"spieleports",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"servereinstellungen",children:"Servereinstellungen"}),"\n",(0,d.jsx)(r.p,{children:"\xc4ndern von Servereinstellungen mithilfe von Umgebungsvariablen."}),"\n",(0,d.jsx)(r.h2,{id:"umgebungsvariablen",children:"Umgebungsvariablen"}),"\n",(0,d.jsx)(r.p,{children:"Sie k\xf6nnen die folgenden Werte verwenden, um die Einstellungen des Servers beim Start zu \xe4ndern.\nEs wird dringend empfohlen, die folgenden Umgebungsvariablen festzulegen, bevor der Server gestartet wird:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"PLAYERS"}),"\n",(0,d.jsx)(r.li,{children:"PORT"}),"\n",(0,d.jsx)(r.li,{children:"PUID"}),"\n",(0,d.jsx)(r.li,{children:"PGID"}),"\n"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Variable"}),(0,d.jsx)(r.th,{children:"Info"}),(0,d.jsx)(r.th,{children:"Standardwerte"}),(0,d.jsx)(r.th,{children:"Erlaubte Werte"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"TZ"}),(0,d.jsx)(r.td,{children:"Zeitzone, die f\xfcr die Zeitstempel des Backup-Servers verwendet wird"}),(0,d.jsx)(r.td,{children:"UTC"}),(0,d.jsxs)(r.td,{children:["Siehe ",(0,d.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#Time_Zone_abbreviations",children:"TZ-Identifikatoren"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PLAYERS*"}),(0,d.jsx)(r.td,{children:"Maximale Anzahl von Spielern, die dem Server beitreten k\xf6nnen"}),(0,d.jsx)(r.td,{children:"16"}),(0,d.jsx)(r.td,{children:"1-32"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PORT*"}),(0,d.jsx)(r.td,{children:"UDP-Port, den der Server freigibt"}),(0,d.jsx)(r.td,{children:"8211"}),(0,d.jsx)(r.td,{children:"1024-65535"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PUID*"}),(0,d.jsx)(r.td,{children:"Die Benutzer-ID des Benutzers, unter dem der Server ausgef\xfchrt werden soll"}),(0,d.jsx)(r.td,{children:"1000"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PGID*"}),(0,d.jsx)(r.td,{children:"Die Gruppen-ID der Gruppe, unter der der Server ausgef\xfchrt werden soll"}),(0,d.jsx)(r.td,{children:"1000"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"MULTITHREADING**"}),(0,d.jsx)(r.td,{children:"Verbessert die Leistung in Umgebungen mit mehreren Threads. Es ist bis zu einer maximalen Anzahl von etwa 4 Threads effektiv, und das Zuweisen von mehr Threads als dieser Anzahl macht nicht viel Sinn."}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"COMMUNITY"}),(0,d.jsx)(r.td,{children:"Ob der Server im Community-Server-Browser angezeigt wird (VERWENDEN SIE ES AUSSCHLIE\u1e9eLICH MIT SERVER_PASSWORD!)"}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PUBLIC_IP"}),(0,d.jsx)(r.td,{children:"Sie k\xf6nnen die globale IP-Adresse des Netzwerks angeben, auf dem der Server ausgef\xfchrt wird. Wenn nicht angegeben, wird sie automatisch erkannt. Wenn dies nicht gut funktioniert, versuchen Sie eine manuelle Konfiguration."}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"x.x.x.x"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PUBLIC_PORT"}),(0,d.jsx)(r.td,{children:"Sie k\xf6nnen die Portnummer des Netzwerks angeben, auf dem der Server ausgef\xfchrt wird. Wenn nicht angegeben, wird sie automatisch erkannt. Wenn dies nicht gut funktioniert, versuchen Sie eine manuelle Konfiguration."}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"1024-65535"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SERVER_NAME"}),(0,d.jsx)(r.td,{children:"Ein Name f\xfcr Ihren Server"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SERVER_DESCRIPTION"}),(0,d.jsx)(r.td,{children:"Ihre Serverbeschreibung"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"SERVER_PASSWORD"}),(0,d.jsx)(r.td,{children:"Sichern Sie Ihren Community-Server mit einem Passwort"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ADMIN_PASSWORD"}),(0,d.jsx)(r.td,{children:"Sichern Sie den Administrationszugriff auf dem Server mit einem Passwort"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"UPDATE_ON_BOOT**"}),(0,d.jsx)(r.td,{children:"Update/Installieren Sie den Server, wenn der Docker-Container gestartet wird (DIESES MUSS BEIM ERSTEN MAL, WENN SIE DEN CONTAINER AUSF\xdcHREN, AKTIVIERT WERDEN)"}),(0,d.jsx)(r.td,{children:"true"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"RCON_ENABLED***"}),(0,d.jsx)(r.td,{children:"Aktivieren Sie RCON f\xfcr den Palworld-Server"}),(0,d.jsx)(r.td,{children:"true"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"RCON_PORT"}),(0,d.jsx)(r.td,{children:"RCON-Port, um eine Verbindung herzustellen"}),(0,d.jsx)(r.td,{children:"25575"}),(0,d.jsx)(r.td,{children:"1024-65535"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"QUERY_PORT"}),(0,d.jsx)(r.td,{children:"Abfrageport, der zur Kommunikation mit Steam-Servern verwendet wird"}),(0,d.jsx)(r.td,{children:"27015"}),(0,d.jsx)(r.td,{children:"1024-65535"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"BACKUP_CRON_EXPRESSION"}),(0,d.jsx)(r.td,{children:"Einstellung beeinflusst die H\xe4ufigkeit automatischer Backups."}),(0,d.jsx)(r.td,{children:"0 0 * * *"}),(0,d.jsxs)(r.td,{children:["Erfordert einen Cron-Ausdruck - Siehe ",(0,d.jsx)(r.a,{href:"https://palworld-server-docker.loef.dev/de/guides/backup/automated-backup",children:"Konfigurieren automatischer Backups mit Cron"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"BACKUP_ENABLED"}),(0,d.jsx)(r.td,{children:"Aktiviert automatische Backups"}),(0,d.jsx)(r.td,{children:"true"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DELETE_OLD_BACKUPS"}),(0,d.jsx)(r.td,{children:"L\xf6scht Backups nach einer bestimmten Anzahl von Tagen"}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"OLD_BACKUP_DAYS"}),(0,d.jsx)(r.td,{children:"Wie viele Tage sollen Backups aufbewahrt werden"}),(0,d.jsx)(r.td,{children:"30"}),(0,d.jsx)(r.td,{children:"jede positive Ganzzahl"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_UPDATE_CRON_EXPRESSION"}),(0,d.jsx)(r.td,{children:"Einstellung beeinflusst die H\xe4ufigkeit automatischer Updates."}),(0,d.jsx)(r.td,{children:"0 * * * *"}),(0,d.jsxs)(r.td,{children:["Erfordert einen Cron-Ausdruck - Siehe ",(0,d.jsx)(r.a,{href:"https://palworld-server-docker.loef.dev/de/guides/automatic-updates",children:"Konfigurieren automatischer Updates mit Cron"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_UPDATE_ENABLED"}),(0,d.jsx)(r.td,{children:"Aktiviert automatische Updates"}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_UPDATE_WARN_MINUTES"}),(0,d.jsx)(r.td,{children:"Wie lange soll gewartet werden, um den Server zu aktualisieren, nachdem die Spieler informiert wurden."}),(0,d.jsx)(r.td,{children:"30"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,d.jsx)(r.td,{children:"Einstellung beeinflusst die H\xe4ufigkeit automatischer Neustarts."}),(0,d.jsx)(r.td,{children:"0 0 * * *"}),(0,d.jsxs)(r.td,{children:["Erfordert einen Cron-Ausdruck - Siehe ",(0,d.jsx)(r.a,{href:"https://palworld-server-docker.loef.dev/de/guides/automatic-reboots",children:"Konfigurieren automatischer Neustarts mit Cron"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_REBOOT_ENABLED"}),(0,d.jsx)(r.td,{children:"Aktiviert automatische Neustarts"}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,d.jsx)(r.td,{children:"Wie lange soll gewartet werden, um den Server neu zu starten, nachdem die Spieler informiert wurden."}),(0,d.jsx)(r.td,{children:"5"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,d.jsx)(r.td,{children:"Starten Sie den Server neu, auch wenn Spieler online sind."}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{children:"true/false"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_WEBHOOK_URL"}),(0,d.jsx)(r.td,{children:"Discord-Webhook-URL, die nach Erstellung eines Webhooks auf einem Discord-Server gefunden werden kann"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"https://discord.com/api/webhooks/<webhook_id>"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_CONNECT_TIMEOUT"}),(0,d.jsx)(r.td,{children:"Discord-Befehlsverbindungstimeout"}),(0,d.jsx)(r.td,{children:"30"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_MAX_TIMEOUT"}),(0,d.jsx)(r.td,{children:"Discord-Webhook Timeout"}),(0,d.jsx)(r.td,{children:"30"}),(0,d.jsx)(r.td,{children:"!0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_PRE_UPDATE_BOOT_MESSAGE"}),(0,d.jsx)(r.td,{children:"Discord-Nachricht, die gesendet wird, wenn der Server mit dem Update beginnt"}),(0,d.jsx)(r.td,{children:"Server wird aktualisiert..."}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_POST_UPDATE_BOOT_MESSAGE"}),(0,d.jsx)(r.td,{children:"Discord-Nachricht, die gesendet wird, wenn der Server das Update abgeschlossen hat"}),(0,d.jsx)(r.td,{children:"Serverupdate abgeschlossen!"}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_PRE_START_MESSAGE"}),(0,d.jsx)(r.td,{children:"Discord-Nachricht, die gesendet wird, wenn der Server mit dem Starten beginnt"}),(0,d.jsx)(r.td,{children:"Server wurde gestartet!"}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_PRE_SHUTDOWN_MESSAGE"}),(0,d.jsx)(r.td,{children:"Discord-Nachricht, die gesendet wird, wenn der Server mit dem Herunterfahren beginnt"}),(0,d.jsx)(r.td,{children:"Server wird heruntergefahren..."}),(0,d.jsx)(r.td,{children:'"string"'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DISCORD_POST_SHUTDOWN_MESSAGE"}),(0,d.jsx)(r.td,{children:"Discord-Nachricht, die gesendet wird, wenn der Server gestoppt wurde"}),(0,d.jsx)(r.td,{children:"Server wurde gestoppt!"}),(0,d.jsx)(r.td,{children:'"string"'})]})]})]}),"\n",(0,d.jsx)(r.p,{children:"*dringend empfohlen, festzulegen"}),"\n",(0,d.jsx)(r.p,{children:"** Stellen Sie sicher, dass Sie wissen, was Sie tun, wenn Sie diese Option aktivieren"}),"\n",(0,d.jsxs)(r.p,{children:["*** Erforderlich f\xfcr das Speichern und ordnungsgem\xe4\xdfe Herunterfahren des Servers bei ",(0,d.jsx)(r.code,{children:"docker stop"})]}),"\n",(0,d.jsx)(r.h3,{id:"spieleports",children:"Spieleports"}),"\n",(0,d.jsx)(r.p,{children:"Der Server ben\xf6tigt standardm\xe4\xdfig die folgenden Ports."}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Port"}),(0,d.jsx)(r.th,{children:"Info"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"8211"}),(0,d.jsx)(r.td,{children:"Spielport (UDP)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"27015"}),(0,d.jsx)(r.td,{children:"Abfrageport (UDP)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"25575"}),(0,d.jsx)(r.td,{children:"RCON-Port (TCP)"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var d=n(6540);const t={},i=d.createContext(t);function s(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);