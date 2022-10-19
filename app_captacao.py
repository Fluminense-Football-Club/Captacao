from flask import Flask, request
from flask_cors import cross_origin
from gevent.pywsgi import WSGIServer

from SGF.Fisiologia.web import web_content


app = Flask(__name__)
# cors = CORS(app)

@app.route("/captacao")
@cross_origin()
def working():
    return "<h1>Working</h1>"





#development
# app.run()

#production
if __name__ == "__main__":
    http_server = WSGIServer(("127.0.0.1", 8001), app)
    http_server.serve_forever()
