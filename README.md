# API0

# 📑 Guia Rápido de Comandos Git

### ⚙️ Configuração Inicial
git config --global user.name "GersonESantos"      # Define seu nome global
git config --global user.email "seu@email.com"      # Define seu e-mail global
git config --list                                   # Lista todas as configurações ativos

### 🚀 Iniciando e Clonando
git init                                            # Inicializa um repositório na pasta atual
git clone <url-do-repositorio>                      # Clona um repositório remoto

### 🔄 Fluxo de Trabalho (O "Arroz com Feijão")
git status                                          # Verifica o estado dos arquivos
git add .                                           # Adiciona todas as mudanças ao Stage
git commit -m "Sua mensagem aqui"                   # Grava as alterações localmente
git push origin main                                # Envia as alterações para o GitHub

### 🌿 Branches (Ramificações)
git branch                                          # Lista as branches locais
git checkout -b nome-da-branch                      # Cria e muda para uma nova branch
git switch main                                     # Volta para a branch principal
git merge nome-da-branch                            # Une as mudanças da branch à atual

### 📥 Sincronização e Histórico
git pull                                            # Baixa e mescla mudanças do servidor
git fetch                                           # Baixa o que há de novo sem mesclar
git log --oneline                                   # Mostra o histórico de commits resumido

### 🛠️ Correções e Desfazer
git checkout -- nome-do-arquivo                     # Descarta mudanças em um arquivo
git reset --soft HEAD~1                             # Desfaz o último commit mantendo os arquivos
git commit --amend -m "Nova mensagem"               # Corrige a mensagem do último commit