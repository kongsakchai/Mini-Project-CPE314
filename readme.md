# Mini Project

Mini Project วิชา Compute Networks - CPE314

## Tech Stack

---

### Program

- [Typescript](https://www.typescriptlang.org/)
- [MQTT.JS](https://github.com/mqttjs/MQTT.js)
- [SheetJS](https://www.npmjs.com/package/xlsx)
- [Moment](https://momentjs.com/)
- [node-postgres](https://node-postgres.com/)

### Database

- Postgresql

#### Setup scripts

[setup.sql](database/setup.sql)

## Project Structure

---

```
├── client                              โฟลเดอร์โปรแกรมของ Client
│  ├── config.json                      ไฟล์ config ของ Client
│  ├── package-lock.json                ไฟล์ log ของ package
│  ├── package.json                     ไฟล์รายละเอียด package ของโปรแกรม Client
│  ├── SampleInput.xlsx                 ไฟล์ข้อมูลของ Sensor
│  ├── tsconfig.json                    ไฟล์ config ของภาษา typescript
│  └── src
│     ├── client.ts                     code หลักของโปรแกรม
│     ├── config.ts                     code สำหรับการอ่าน config.json
│     ├── readData.ts                   code สำหรับการอ่าน SampleInput.xlsx
│     ├── model
│     │  ├── config.model.ts            โครงสร้างของข้อมูล config
│     │  └── data.model.ts              โครงสร้างของข้อมูลจาก Sensor
│     └── utils
│        └── splitStringByLimit.ts      code สำหรับการแบ่งข้อมูลตามขนาดของ Limit
│
├── server                              โฟลเดอร์โปรแกรมของ Server
│  ├── config.json                      ไฟล์ config ของ Server
│  ├── package-lock.json                ไฟล์ log ของ package
│  ├── package.json                     ไฟล์รายละเอียด package ของโปรแกรม Client
│  ├── tsconfig.json                    ไฟล์ config ของภาษา typescript
│  └── src
│     ├── config.ts                     code สำหรับการอ่าน config.json
│     ├── database.ts                   code สำหรับการเชื่อมต่อ Database และการ query
│     ├── server.ts                     code หลักของโปรแกรม
│     ├── model
│     │  ├── config.model.ts            โครงสร้างของข้อมูล config
│     │  └── data.model.ts              โครงสร้างของข้อมูลจาก Broker
│     └── utils
│        └── string2NumArray.ts         code สำหรับการแปลงข้อความเป็นอาร์เลย์ของตัวเลข
├── install.bat                         ไฟล์สำหรับติดตั้ง Package ของโปรแกรม
├── readme.md                           ไฟล์ readme
├── start-client.bat                    ไฟล์สำหรับเปิดตัว client
├── start-mosquitto.bat                 ไฟล์สำหรับเปิดตัว mosquitto
└── start-server.bat                    ไฟล์สำหรับเปิดตัว server
```

### install.bat

สำหรับติดตั้ง Package ของ Client และ Server

```
@echo off

cd client
call npm install

cd ../server
call npm install

echo:
echo Install complete

pause > nul

cmd
```

### start-client.bat

สำหรับเปิดตัว client

```
@echo off

cd client

call npm start

pause > nul

cmd
```

### start-server.bat

สำหรับเปิดตัว Server

```
@echo off

cd client

call npm start

pause > nul

cmd
```

## Config
---

### [Client config](client/config.json)

```
{
  "mosquitto": {
    "port": 1082,
    "broker": "mqtt://localhost",
    "id":"1234"
  }
}
```
**port** : กำหนด Port ของ mosquitto protocal

**broker** : กำหนด IP ของ mosquitto protocal

**id** : กำหนด ID ของ Client หากไม่ได้กำหนดจะทำการ Random 4 ตัวเลขขึ้นมา

### [Server config](server/config.json)

```
{
  "mosquitto": {
    "port": 1082,
    "broker": "mqtt://localhost",
    "id": "6171"
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "user": "",
    "password": "",
    "database": "mosquitto"
  }
}

```
**mosquitto.port** : กำหนด Port ของ mosquitto protocal

**mosquitto.broker** : กำหนด IP ของ mosquitto protocal

**mosquitto.id** : กำหนด ID ของ Client หากไม่ได้กำหนดจะทำการ Random 4 ตัวเลขขึ้นมา

**database.host** : กำหนด IP ของ Postgresql database

**database.port** : กำหนด Port ของ Postgresql database

**database.user** : กำหนด user ของ Postgresql database

**database.password** : กำหนด password ของ Postgresql database

**database.database** : กำหนด database ของ Postgresql database
