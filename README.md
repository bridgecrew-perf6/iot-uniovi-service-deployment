# Description
IoT Deployment Uniovi PoC

## Create and start service
```shell
docker-compose up -d
```

## Stop service
```shell
docker-compose stop
```

## Restart service
```shell
docker-compose start
```

## Remove service resources
```shell
docker-compose down
```

## Get service logs
```shell
docker-compose logs
```

## Some PoC IoT UIs

- **Uniovi network** from [portainer](https://localhost:9443) we could check the uniovi network

![Uniovi net](captures/iot_network.png "Uniovi net")

- **API Explorer** from [Loopback Explorer](http://localhost:3000/explorer) we could check the backend API

![API Explorer](captures/api-explorer.png "API Explorer")

- **node-RED Designer** from [node-RED Designer](http://localhost:1880) we could check the iot flows:

![node-RED Designer](captures/node-RED_designer.png "node-RED Designer")

- **node-RED Dashboard** from [IoT Dashboard](http://localhost:1880/ui) we could check the iot sensors graphs:
 
![IoT Frontend Realtime](captures/iot_ui_RT.png "IoT Frontend Realtime")

- **node-RED Dashboard** from [IoT Dashboard](http://localhost:1880/ui) we could check the iot sensors historic:
 
![IoT Frontend Historic](captures/iot_ui_historic.png "IoT Frontend Historic")