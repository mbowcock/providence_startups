ProvidenceStartups.com
======================
Project to learn node.js

Uses node / express / jade / postgres

Site is hosted on a vps. node app is currently running on a non standard port and nginx is forwarding requests for providencestartups.com to node.

This is very much a work in progress and may break, set your expectations accordingly.

Check out the site here - http://providencestartups.com

Development happens in master. Deploy branch contains ga tracking code.
To deploy I logon to server and do:
> git pull origin deploy
