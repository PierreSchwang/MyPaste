# MyPaste - Open Source Paste Server
[![Docker Hub Build Status](https://img.shields.io/docker/cloud/build/pierreschwang/mypaste)](https://hub.docker.com/repository/docker/pierreschwang/mypaste)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/495bbf3ffced45978aa533b7b8a94c1d)](https://www.codacy.com/manual/PierreSchwang/MyPaste)
<br />
MyPaste is an open-source paste server written in NodeJS using express, the twig template engine and TypeScript.

## Todo
 + Install Page
 + Authentication Integration
    + User-Management
    + Password hashing
 + Multiple Paste-Storage-Systems (Priority is File-System)
 + View / Create Pastes
 + Encrypt / secure pastes (with password)
 
 # Development
 To use MyPaste, NodeJS and Git must be installed on the system. 
 First you should clone the repository:
 ```
git clone https://github.com/PierreSchwang/MyPaste.git
```
Afterwards, all required modules are installed using `npm install`. <br />
If that is finished, start the server with `npm run dev`. This command starts nodemon, which automatically translates the TypeScript code into JavaScript and restarts the server whenever the code changes
