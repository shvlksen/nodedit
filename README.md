# nodedit readme

Essential facts about the app:

Working app in nodedit/nodetry.

Usage -> clone nodetry -> cd /nodetry -> node app.js || As easy as pie.

Tech used:

NodeJS server for app and ShareJS server for the collaboration part

The collaboration is browserchannels/websockets based. Here I've used browserchannel but websockets is just as good.

Dashboard and styling inspired from bootstrap and sb-admin. 

Live charts using HighchartsJS. Easier for simple graphs than D3 and quicker to load because of DOM retrieval issue.

The dashboard and live charts feature was originally designed for a Django app, but they've been adapted for the nodejs app later. The Django app had to be abandoned because of scoketio compatibility issues. 
