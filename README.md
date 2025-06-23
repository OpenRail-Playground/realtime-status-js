# realtime-status-js

Sample client for reading realtime status XML messages from JavaScript.

## Background

<p align="center">
  <img alt="Hack4Rail Logo" src="img/hack4rail-logo.jpg" width="220"/>
</p>

This project has been initiated during the [Hack4Rail 2025](https://hack4rail.event.sbb.ch/en/), a joint hackathon organised by the railway companies SBB, ÖBB, and DB in partnership with the OpenRail Association.

## Usage

### Redis Node.js Client

Connects to a local Redis server and listens for messages on channel `hack4rail`.

#### Run

```bash
npm install
node index.js
```

## License

The content of this repository is licensed under the [Apache 2.0 license](LICENSE).
