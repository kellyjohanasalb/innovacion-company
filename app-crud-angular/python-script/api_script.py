import requests
import json

# 🔑 API Key de OpenWeather
API_KEY = "TU_API_KEY_AQUI"  # Reemplaza con tu clave real

# 📍 Solicitar ciudad al usuario
ciudad = input("Ingrese la ciudad para consultar el clima: ").strip()

# 🌐 URL de la API
url = f"https://api.openweathermap.org/data/2.5/weather?q={ciudad}&appid={API_KEY}&units=metric&lang=es"

try:
    # 📤 Solicitud a la API
    response = requests.get(url, timeout=10)

    # ✅ Respuesta exitosa
    if response.status_code == 200:
        data = response.json()
        clima = {
            "ciudad": data.get("name"),
            "temperatura": data["main"]["temp"],
            "humedad": data["main"]["humidity"],
            "descripcion": data["weather"][0]["description"],
            "pais": data["sys"]["country"]
        }

        # 💾 Guardar en archivo JSON
        with open("clima.json", "w", encoding="utf-8") as f:
            json.dump(clima, f, ensure_ascii=False, indent=4)

        print(f"✅ Datos de clima de {ciudad} guardados en clima.json")

    # ❌ Ciudad no encontrada
    elif response.status_code == 404:
        print("⚠ Ciudad no encontrada. Verifique el nombre.")

    # ❌ Error con API Key
    elif response.status_code == 401:
        print("⚠ Error de autenticación. Verifique su API Key.")

    else:
        print(f"⚠ Error {response.status_code}: {response.text}")

except requests.exceptions.RequestException as e:
    print(f"❌ Error de conexión: {e}")
