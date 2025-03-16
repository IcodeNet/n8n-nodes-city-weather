# n8n-nodes-city-weather

This is an n8n community node. It lets you use OpenWeather API in your n8n workflows.

OpenWeather provides weather data, forecasts, and historical weather information through their API services.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)

## Installation

### Local Installation

1. Open your n8n installation directory in my case on Win11 was `C:\Program Files\nodejs\node_modules\n8n` and run:

```bash
pnpm install n8n-nodes-city-weather
```

### Manual Installation

1. Go to your custom nodes folder:

```bash
cd ~/.n8n/custom
```

2. Clone the repository:

```bash
git clone https://github.com/icodenet/n8n-nodes-city-weather.git
```

3. Install dependencies:

```bash
cd n8n-nodes-city-weather
pnpm install
```

4. Build the project:

```bash
pnpm build
```

5. Restart n8n

For more details, follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Get current weather by city name
- Support for metric, imperial, and Kelvin units

## Credentials

1. Sign up for an [OpenWeather API key](https://openweathermap.org/api)
2. Copy your API key
3. Use the API key in n8n credentials for the City Weather node

## Compatibility

Requires n8n version 1.0.0 or later

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [OpenWeather API Documentation](https://openweathermap.org/api)
