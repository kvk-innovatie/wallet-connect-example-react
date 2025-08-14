from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/disclosed-attributes', methods=['GET'])
@app.route('/api/disclosed-attributes/<path:path>', methods=['GET'])
def proxy_disclosed_attributes(path=''):
    api_key = '27ff4d0ceb03b0cd02a4b4d6fe4fe6436791223be38823bc97b8319a5991c769'
    
    try:
        # Construct the target URL
        if path:
            target_url = f"https://wallet-connect.eu/api/disclosed-attributes/{path}"
        else:
            target_url = "https://wallet-connect.eu/api/disclosed-attributes"
        
        # Prepare headers
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
        
        # Make the request to the target server
        response = requests.request(
            method=request.method,
            url=target_url,
            headers=headers,
            params=request.args,
            json=request.get_json() if request.is_json else None,
            verify=False  # Disable SSL verification due to Python venv SSL config issue
        )
        
        # Return the response
        return jsonify(response.json()), response.status_code
        
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Proxy error', 'message': str(e)}), 500
    except Exception as e:
        return jsonify({'error': 'Proxy error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=4000, debug=True)
    print('Python backend running on port 4000')