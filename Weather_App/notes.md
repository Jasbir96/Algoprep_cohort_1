## Intuition building


### Real life user 
* user -> url -> they see a webpage
* First file that you  -> HTML file  
* HTML file is parsed and converted into humam undersdtanble UI-> Browser
**Parsing** : to read a  file and convert it into a certain format
* HTML , CSS -> Browser
* jpg-> imageviewer -> image
* mp4-> vlc media -> video


## Weather App
* need a `data` -> from an `api` ->`server url -> data`
* that should also provide in `particular format`

### Data representation formats
1. Format: spreadsheet format
  Parser : excel, google sheets



2. XML-> extensible markup language -> you represent data with help of tags
    Parser : XML parser

3. JSON : `Javascript object notation`
JS language has inbuilt capabilities to read json data




## Weather App
* need a `data` -> from an `api` ->`server url -> data`
* that should also provide in `particular format`

```json
{
    "location": {
        "name": "New Delhi",
        "region": "Delhi",
        "country": "India",
        "lat": 28.6,
        "lon": 77.2,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1720977662,
        "localtime": "2024-07-14 22:51"
    },
    "current": {
        "last_updated_epoch": 1720977300,
        "last_updated": "2024-07-14 22:45",
        "temp_c": 32.0,
        "temp_f": 89.6,
        "is_day": 0,
        "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
            "code": 1030
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 80,
        "wind_dir": "E",
        "pressure_mb": 999.0,
        "pressure_in": 29.5,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 75,
        "cloud": 25,
        "feelslike_c": 32.5,
        "feelslike_f": 90.6,
        "windchill_c": 36.7,
        "windchill_f": 98.0,
        "heatindex_c": 40.6,
        "heatindex_f": 105.0,
        "dewpoint_c": 20.1,
        "dewpoint_f": 68.1,
        "vis_km": 4.0,
        "vis_miles": 2.0,
        "uv": 1.0,
        "gust_mph": 5.3,
        "gust_kph": 8.6,
        "air_quality": {
            "co": 3311.2,
            "no2": 100.1,
            "o3": 0.1,
            "so2": 57.7,
            "pm2_5": 178.7,
            "pm10": 266.2,
            "us-epa-index": 5,
            "gb-defra-index": 10
        }
    }
}
```


