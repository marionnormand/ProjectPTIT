from flask import Flask, request, jsonify
import os
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        dbname=os.environ['DB_NAME'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASSWORD'],
        host=os.environ['DB_HOST'],
        port=os.environ['DB_PORT']
    )
    return conn

@app.route('/data', methods=['POST'])
def store_data():
    data = request.json
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO your_table (column1, column2) VALUES (%s, %s)', (data['value1'], data['value2']))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'status': 'Data stored'}), 200

if __name__ == '__main__':
    app.run(debug=True)
