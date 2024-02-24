"use strict";(self.webpackChunkallerta_vvf=self.webpackChunkallerta_vvf||[]).push([[924],{8578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const r={sidebar_position:1},s="Getting started",a={id:"getting-started",title:"Getting started",description:"You can install Allerta-VVF in a few minutes.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/allerta-vvf/allerta-vvf.github.io/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Developers",permalink:"/docs/category/developers"}},l={},d=[{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Downloading source code",id:"downloading-source-code",level:2},{value:"Using Git",id:"using-git",level:3},{value:"Using &#39;Download ZIP&#39; button",id:"using-download-zip-button",level:3},{value:"Starting Docker Compose stack",id:"starting-docker-compose-stack",level:2},{value:"Creating .env.docker file",id:"creating-envdocker-file",level:3},{value:"Starting the stack",id:"starting-the-stack",level:3},{value:"Stopping",id:"stopping",level:3},{value:"Debugging",id:"debugging",level:2},{value:"PHPMyAdmin",id:"phpmyadmin",level:3},{value:"Logs",id:"logs",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsx)(n.p,{children:"You can install Allerta-VVF in a few minutes."}),"\n",(0,o.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Docker"})," version 19.0 or above:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If using a Desktop device to test this, you can install ",(0,o.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker Desktop"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," version 3 or above"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"downloading-source-code",children:"Downloading source code"}),"\n",(0,o.jsx)(n.p,{children:"You can download the source code of Allerta-VVF in two ways:"}),"\n",(0,o.jsx)(n.h3,{id:"using-git",children:"Using Git"}),"\n",(0,o.jsx)(n.p,{children:"If you have Git installed on your machine, you can clone the repository using the following command in your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/allerta-vvf/allerta-vvf.git\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will create a new directory named ",(0,o.jsx)(n.code,{children:"allerta-vvf"})," in your current directory, containing the source code of Allerta-VVF."]}),"\n",(0,o.jsx)(n.h3,{id:"using-download-zip-button",children:"Using 'Download ZIP' button"}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can download the source code as a ZIP file:"}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.a,{href:"https://github.com/allerta-vvf/allerta-vvf",children:"https://github.com/allerta-vvf/allerta-vvf"}),".\nClick on the Code button, which is usually green and located on the right side of the screen.\nIn the dropdown menu, click Download ZIP.\nOnce the ZIP file is downloaded, extract it to your desired location."]}),"\n",(0,o.jsx)(n.p,{children:"Now you have the source code on your machine and you're ready to proceed with the installation."}),"\n",(0,o.jsx)(n.h2,{id:"starting-docker-compose-stack",children:"Starting Docker Compose stack"}),"\n",(0,o.jsx)(n.p,{children:"Now you can use Docker Compose to start the process, but before proceeding:"}),"\n",(0,o.jsx)(n.h3,{id:"creating-envdocker-file",children:"Creating .env.docker file"}),"\n",(0,o.jsxs)(n.p,{children:["You should make an empty file called .env.docker in the root of the project.\nYou can use command line (using ",(0,o.jsx)(n.code,{children:"touch .env.docker"}),"), your IDE or any file manager,\nbut make sure the new file has no extension."]}),"\n",(0,o.jsx)(n.h3,{id:"starting-the-stack",children:"Starting the stack"}),"\n",(0,o.jsx)(n.p,{children:"Now you are ready to start AllertaVVF!\nType these commands in your terminal, in the root of the directory where you downloaded/cloned the project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can go to ",(0,o.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),". Have fun!"]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Please remember that this setup is ",(0,o.jsx)(n.em,{children:"NOT"})," production-ready.",(0,o.jsx)(n.br,{}),"\n","If you are planning to use Allerta-VVF in production environments, contact me at ",(0,o.jsx)(n.em,{children:"me [at] matteogheza [dot] it"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"backend"})," and ",(0,o.jsx)(n.code,{children:"server"})," containers may be slow to start, especially the first time.",(0,o.jsx)(n.br,{}),"\n","This is due to the fact that the server needs to wait for the database, and then seed it with some initial data.",(0,o.jsx)(n.br,{}),"\n","Please be patient and wait for the server to be ready."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Allerta hasn't reached the stable version yet, especially for the initial configuration/personalization part.",(0,o.jsx)(n.br,{}),"\n","For now, after first run, it seeds the DB with some users data.",(0,o.jsx)(n.br,{}),"\n","There are 10 users + 1 super-admin.",(0,o.jsx)(n.br,{}),"\n","You can login with user and password ",(0,o.jsx)(n.code,{children:"admin"})," or ",(0,o.jsx)(n.code,{children:"userN"})," where N is the normal user number from 1 to 10."]})}),"\n",(0,o.jsx)(n.h3,{id:"stopping",children:"Stopping"}),"\n",(0,o.jsx)(n.p,{children:"When you finish testing AllertaVVF on your machine, you should use the proper procedure to stop the Docker Compose stack:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker compose stop\n"})}),"\n",(0,o.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsx)(n.h3,{id:"phpmyadmin",children:"PHPMyAdmin"}),"\n",(0,o.jsxs)(n.p,{children:["By default, this Docker Compose exposes a phpmyadmin installation on port 8080.",(0,o.jsx)(n.br,{}),"\n","You can access it with any browser, and with auto-login."]}),"\n",(0,o.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,o.jsx)(n.p,{children:"If you want to access any component logs, type:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker compose logs -f\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);