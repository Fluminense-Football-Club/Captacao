from SGF.Captacao.gerar_graficos import GraficosCaptacao
from SGF.Captacao.salvar_ficha import SalvarFicha
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

        @app.route("/captacao/graficos")
        @cross_origin()
        def bucar_graficos():
            graficos= GraficosCaptacao()
            return graficos.Carregar_graficos()
        
        @app.route("/captacao/salvar_ficha", methods=['POST'])
        @cross_origin()
        def registrar_ficha():
            ficha = SalvarFicha()
            print(ficha.send())
            return ficha.send()

        print('working...')
        http_server = WSGIServer(("127.0.0.1", 8001), app)
        http_server.serve_forever()

if __name__ == "__main__":
    AppCaptacao()