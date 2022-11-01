#!/usr/bin/python
# coding: UTF-8
from SGF.dependencias_bancos import BD
from flask import request
import plotly.express as px
import plotly.io as io
import plotly.graph_objects as go
import numpy as np 
import pandas as pd


class GraficosCaptacao:
    def __init__(self) -> None:
        self.tabela = self._buscar_dados()


    def _buscar_dados(self):
        ficha_avaliacao = BD('ficha_entrada')
        tabela = ficha_avaliacao.visualizar()
        tabela = pd.DataFrame(tabela,columns=['numero_ficha', 'id', 'nome', 'identidade', 'data_nascimento', 'telefone1', 'telefone2', 'estado_origem', 'lateralidade', 'categoria', 'posicao', 'etapa', 'situacao', 'captador', 'indicacao_externa', 'indicacao_interna', 'ultimo_clube', 'departamento_medico', 'atestado_medico', 'necessidade_alojamento', 'necessidade_transporte', 'necessidade_alimentacao', 'componentes_tecnicos', 'componentes_taticos', 'fundamentos_goleiros'])
        ficha_avaliacao.finalizar()
        return tabela


    def Grafico_pie_aprovados(self):
        #Vermelho - Reprovados
        #Verde Claro - Aprovados
        aprovados = self.tabela['situacao'].value_counts(sort=False).reset_index()
        total_inscritos = aprovados['situacao'].sum()
        cores = ['#900c0c','#13CE66']
        fig = go.Figure()
        fig.add_trace( go.Pie(labels=aprovados['index'], values=aprovados['situacao'], marker_colors=cores ))
        annotations = []
        annotations.append({
            'text': f'Total de {total_inscritos} insritos',

            'xanchor':'center', 
            'y':1.2,
            'showarrow':False,

            'font':{
                'family':"Nunito",
                'size':20,
                'color':"White"
            },
            'bgcolor':'#c55a11',
            'borderwidth':1,
            'borderpad':5
        })
        fig.update_layout(annotations=annotations)
        aprovados = io.to_html(fig,full_html=True)
        return ['aprovados',aprovados]


    def Grafico_bar_aprovados_estado(self):
        aprovados_estado = self.tabela[['estado_origem','situacao']].value_counts(sort=False).reset_index()
        cores = ['#13CE66','#900c0c']
        fig = px.bar(aprovados_estado, x='estado_origem', y=0, color = 'situacao',color_discrete_sequence=cores, barmode='group')
        aprovados_estado = io.to_html(fig,full_html=True)
        return ['aprovados_estado',aprovados_estado]


    def _porcentagem_lateral(self, data): 
        fig = go.Figure()
        annotations = []
        #---
        for coluna in data:
            annotations.append(dict(
                xref='paper', 
                yref='y',                        
                x=0.14, 
                y=coluna,
                xanchor='right',
                text=coluna,
                font=dict(
                    family='Arial', 
                    size=14,
                    color='rgb(67, 67, 67)'
                ),
                showarrow=False, 
                align='right'
            ))
            space = 0
            for cor,percentual, label in data[coluna]:
                fig.add_trace(go.Bar(
                    x=[percentual], 
                    y=[coluna],
                    orientation='h',
                    marker=dict(
                        color=cor,
                        line=dict(
                            color='rgb(255, 255, 249)', 
                            width=1
                        )
                    )
                ))
                # labeling the rest of percentages for each bar (x_axis)
                annotations.append(dict(
                    xref='x', 
                    yref='y',
                    x=space + (percentual/2), 
                    y=coluna,
                    text=str(percentual) + '%',
                    font=dict(
                        family='Arial', 
                        size=14,
                        color='rgb(255, 255, 255)'
                    ),
                    showarrow=False,
                    bgcolor = '#14400e',
                    borderpad=5
                    
                ))
                # labeling the Likert scale
                if coluna == list(data.keys())[0]:
                    annotations.append(dict(
                        xref='x', 
                        yref='paper',
                        x=space + (percentual/2), 
                        y=1.1,
                        text=label,
                        font=dict(
                            family='Arial', 
                            size=14,
                            color='rgb(67, 67, 67)'
                        ),
                        showarrow=False
                    ))
                space += percentual
        #---
        fig.update_layout(
            xaxis=dict(
                showgrid=False,
                showline=False,
                showticklabels=False,
                zeroline=False,
                domain=[0.15, 1]
            ),
            yaxis=dict(
                showgrid=False,
                showline=False,
                showticklabels=False,
                zeroline=False,
            ),
            barmode='stack',
            plot_bgcolor='rgb(255, 255, 255)',
            showlegend=False,
        )
        fig.update_layout(annotations=annotations)
        return fig


    def Grafico_bar_horizontal_aprovados_posicao(self):
        #Greens
        aprovados_posicao = self.tabela[(self.tabela['situacao']=='aprovado')]
        aprovados_posicao = aprovados_posicao[['posicao','situacao']].value_counts(sort=False).reset_index()
        top_labels = aprovados_posicao['posicao'].values
        cores = ['#DDF2D8', '#BAE4B3','#88CD86', '#4DB163','#248C45']
        percentual = list(np.round(100*(aprovados_posicao[0]/aprovados_posicao[0].sum()), decimals=2).values)
        data =  {
            'Atletas aprovados':  list(zip(cores,percentual,top_labels)),
        }
        fig = self._porcentagem_lateral(data)
        aprovados_posicao = io.to_html(fig,full_html=True)
        return ['aprovados_posicao',aprovados_posicao]
    

    def Grafico_bar_aprovados_captador(self):
        captador_aprovados_posicao = self.tabela[(self.tabela['situacao']=='aprovado')]
        captador_aprovados_posicao = captador_aprovados_posicao[['captador','posicao']].value_counts().reset_index().sort_values(by='captador')
        captador_aprovados = self.tabela[(self.tabela['situacao']=='aprovado')]
        captador_aprovados = captador_aprovados[['captador']].value_counts(sort=True).reset_index().sort_values(by='captador')
        posicoes = sorted(captador_aprovados_posicao['posicao'].unique())
        cores = ['#DDF2D8', '#BAE4B3',
                '#88CD86', '#4DB163',
                '#248C45']
        escala_cor = {}
        for i in range(len(posicoes)):
            escala_cor[f'{posicoes[i]}'] = cores[i]
        #---
        fig = px.bar(
            captador_aprovados_posicao, 
            x='captador', 
            y=0, 
            color='posicao', 
            color_discrete_map=escala_cor
            )
        #---
        fig.add_trace(
            go.Scatter(
                x=captador_aprovados['captador'],
                y=captador_aprovados[0]-2,
                line=go.scatter.Line(color="gray"),
                showlegend=False)
        )
        #---
        atributos = []
        for aprovacoes in captador_aprovados.values:
            atributos.append({
                'text': f' {aprovacoes[1]} aprovados',
            
                'x':aprovacoes[0], 
                'y':aprovacoes[1]-2,
                'showarrow':False,

                'font':dict(
                        family="Nunito",
                        size=20,
                        color="Black"
                        ),
                'bgcolor':'#eff3f2',
                'bordercolor':'Black',
                'borderwidth':1,
            })
        fig.update_layout(annotations=atributos)
        captador_aprovados = io.to_html(fig,full_html=True)
        return ['captador_aprovados',captador_aprovados]
         


    def Carregar_graficos(self):
        
        dados_ficha = {}

        decisao = {
            '1':self.Grafico_pie_aprovados(),
            '2':self.Grafico_bar_aprovados_estado(),
            '3':self.Grafico_bar_horizontal_aprovados_posicao(),
            '4': self.Grafico_bar_aprovados_captador()
        }
        
        dados_ficha['grafico'] = decisao[str(request.args.get('grafico'))]       

        return dados_ficha




