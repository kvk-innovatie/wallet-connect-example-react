from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_KEY = 'c26369a948c6e287905fc5d292e65083a496a43b387bda48dbc14924099d1315'
# UPSTREAM = 'https://wallet-connect.eu'
UPSTREAM = 'http://localhost:5021'


@app.route('/api/<path:path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def proxy_to_wallet_connect(path):
    try:
        target_url = f'{UPSTREAM}/api/{path}'

        response = requests.request(
            method=request.method,
            url=target_url,
            headers={
                'Authorization': f'Bearer {API_KEY}',
                'Content-Type': 'application/json'
            },
            params=request.args,
            json=request.get_json(silent=True),
            verify=False  # Disable SSL verification due to Python venv SSL config issue. Do not use in production
        )

        try:
            return jsonify(response.json()), response.status_code
        except ValueError:
            return response.text, response.status_code

    except Exception as e:
        print(f"Request error: {e}")
        return jsonify({'error': 'Proxy error', 'message': str(e)}), 500


if __name__ == '__main__':
    print('Backend running on port 5030')
    app.run(port=5030)
