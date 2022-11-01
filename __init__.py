from SGF.Captacao.gerar_graficos import GraficosCaptacao
from SGF.Captacao.web import web_content
from gevent.pywsgi import WSGIServer
from flask_cors import cross_origin
from flask import Flask


class AppCaptacao:
    
    def __init__(self):
        app = Flask(__name__)

        @app.route("/captacao")
        @cross_origin()
        def working():
            return "<h1>Working</h1>"

        @app.route("/captacao/graficos",methods=['GET'])
        @cross_origin()
        def bucar_graficos():
            graficos= GraficosCaptacao()
            return graficos.Carregar_graficos()
        
        ficha = web_content()
        @app.route("/captacao/save_ficha", methods=['POST'])
        @cross_origin()
        def registrar_ficha():
            return ficha.save_ficha()

        @app.route("/captacao/get_data")
        @cross_origin()
        def coletar_ficha():
            ficha = web_content()
            return ficha.get_data()

        print('working...')
        http_server = WSGIServer(("127.0.0.1", 8001), app)
        http_server.serve_forever()

if __name__ == "__main__":
    AppCaptacao()