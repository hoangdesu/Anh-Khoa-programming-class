import requests
import json

API_key = '88a27f54021ec751dbdb0d7000e59f4f'
city_name = input('Enter a city name: ')

URL = f'https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric'

response = requests.get(URL)

print(response.status_code)

if response.ok:
    
    # response.json()
    # print(response.text)
    # data = json.loads(response.text)
    # pretty_json = json.dumps(data, indent=2)
    # print(pretty_json)
    
    data = response.json()
    print(data)

    
    # Output:
        
    # Hanoi, VN
    # Weather: Clouds
    # Temperature: 26°C
    # Humidity: 43%
    # Wind speed: 3.36 km/h
    