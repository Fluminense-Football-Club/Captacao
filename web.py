#!/usr/bin/python
# coding: UTF-8
from SGF.dependencias_bancos import BD 
from flask import request
import numpy 

class web_content:
    def __init__(self) -> None:
        pass

    def save_ficha(self):
        form = request.form

        ficha_avaliacao = BD('ficha_entrada')


        while True:
            id = numpy.random.randint(low = 10000, high = 99999)
            if ficha_avaliacao.verificar_registro({'id':id}) == 0:
                break

        try: 
            form['nome']    
        except:
            nome = ''
        else:
            nome = form['nome']

        try: 
            form['identidade']    
        except:
            identidade = ''
        else:
            identidade = form['identidade']

        try: 
            form['data_nascimento']    
        except:
            data_nascimento = ''
        else:
            data_nascimento = form['data_nascimento']

        try: 
            form['telefone1']    
        except:
            telefone1 = ''
        else:
            telefone1 = form['telefone1']

        try: 
            form['telefone2']    
        except:
            telefone2 = ''
        else:
            telefone2 = form['telefone2']

        try: 
            form['estados_brasil']    
        except:
            estado_origem = ''
        else:
            estado_origem = form['estados_brasil']

        try: 
            form['lateralidade']    
        except:
            lateralidade = ''
        else:
            lateralidade = form['lateralidade']

        try: 
            form['categoriaFrm1']    
        except:
            categoria = ''
        else:
            categoria = form['categoriaFrm1']

        try: 
            form['posicao']    
        except:
            posicao = ''
        else:
            posicao = form['posicao']

        try: 
            form['etapaFrm1']    
        except:
            etapa = ''
        else:
            etapa = form['etapaFrm1']

        try: 
            form['situacao']    
        except:
            situacao = ''
        else:
            situacao = form['situacao']

        try: 
            form['captador']    
        except:
            captador = ''
        else:
            captador = form['captador']

        try: 
            form['indicacao_externa']    
        except :
            indicacao_externa = ''
        else:
            indicacao_externa = form['indicacao_externa']

        try: 
            form['indicacao_interna']    
        except:
            indicacao_interna = ''
        else:
            indicacao_interna = form['indicacao_interna']

        try: 
            form['ultimo_clube']    
        except:
            ultimo_clube = ''
        else:
            ultimo_clube = form['ultimo_clube']

        try: 
            form['departamento_medico']    
        except:
            departamento_medico = ''
        else:
            departamento_medico = form['departamento_medico']

        try: 
            form['atestado_medico']    
        except:
            atestado_medico = ''
        else:
            atestado_medico = form['atestado_medico']

        try: 
            form['necessidade_alojamento']    
        except:
            necessidade_alojamento = ''
        else:
            necessidade_alojamento = form['necessidade_alojamento']
            if necessidade_alojamento == 'on':
                necessidade_alojamento = 1
            else: necessidade_alojamento = 0

        try: 
            form['necessidade_transporte']    
        except:
            necessidade_transporte = ''
        else:
            necessidade_transporte = form['necessidade_transporte']
            if necessidade_transporte == 'on':
                necessidade_transporte = 1
            else: necessidade_transporte = 0

        try: 
            form['necessidade_alimentacao']    
        except:
            necessidade_alimentacao = ''
        else:
            necessidade_alimentacao = form['necessidade_alimentacao']
            if necessidade_alimentacao == 'on':
                necessidade_alimentacao = 1
            else: necessidade_alimentacao = 0


        try: 
            form['componentes_tecnicos']    
        except:
            componentes_tecnicos = ''
        else:
            componentes_tecnicos = form['componentes_tecnicos']
            
        try: 
            form['componentes_taticos']    
        except:
            componentes_taticos = ''
        else:
            componentes_taticos = form['componentes_taticos']

        try: 
            form['fundamentos_goleiros']    
        except:
            fundamentos_goleiros = ''
        else:
            fundamentos_goleiros = form['fundamentos_goleiros']



        dados_ficha= {
        'nome':nome,
        'id':id,
        'identidade':identidade,
        'data_nascimento':data_nascimento,
        'telefone1':telefone1,
        'telefone2':telefone2,
        'estado_origem':estado_origem,
        'lateralidade':lateralidade,

        'categoria':categoria,
        'posicao':posicao,
        'etapa':etapa,
        'situacao':situacao,

        'captador':captador,
        'indicacao_externa':indicacao_externa,
        'indicacao_interna':indicacao_interna,
        'ultimo_clube':ultimo_clube,

        'departamento_medico':departamento_medico,
        'atestado_medico':atestado_medico,

        'necessidade_alojamento':necessidade_alojamento,
        'necessidade_transporte':necessidade_transporte,
        'necessidade_alimentacao':necessidade_alimentacao,

        'componentes_tecnicos':componentes_tecnicos,
        'componentes_taticos':componentes_taticos,
        'fundamentos_goleiros':fundamentos_goleiros,
        }
        return dados_ficha

    def get_data(self):
        ficha_avaliacao = BD('ficha_entrada')
        fichas = ficha_avaliacao.visualizar()
        ficha_avaliacao.finalizar()

        json_list = []
        for ficha in fichas:
            dados_ficha= {
            'numero_ficha':ficha[0],
            'id':ficha[1],
            'nome':ficha[2],
            'identidade':ficha[3],
            'data_nascimento':ficha[4],
            'telefone1':ficha[5],
            'telefone2':ficha[6],
            'estado_origem':ficha[7],
            'lateralidade':ficha[8],
            'categoria':ficha[9],
            'posicao':ficha[10],
            'etapa':ficha[11],
            'situacao':ficha[12],
            'captador':ficha[13],
            'indicacao_externa':ficha[14],
            'indicacao_interna':ficha[15],
            'ultimo_clube':ficha[16],
            'departamento_medico':ficha[17],
            'atestado_medico':ficha[18],
            'necessidade_alojamento':ficha[19],
            'necessidade_transporte':ficha[20],
            'necessidade_alimentacao':ficha[21],
            'componentes_tecnicos':ficha[22],
            'componentes_taticos':ficha[23],
            'fundamentos_goleiros':ficha[24],
            }
            json_list.append(dados_ficha)

        json_dict = {'fichas':json_list}
        return json_dict