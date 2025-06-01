from flask import Flask
import mysql.connector
import os

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASS', 'Sql@054003'),
        database=os.getenv('DB_NAME', 'flask_db')
    )

@app.route('/')
def index():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT VERSION();")
        version = cursor.fetchone()
        return f"Connected to MySQL!<br>Version: {version[0]}"
    except mysql.connector.Error as err:
        return f"Error: {err}"
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)