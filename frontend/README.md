# SafeGluten 🛡️🌾  
### IA Aplicada à Saúde: Do Diagnóstico Clínico à Segurança Alimentar na Doença Celíaca

Projeto desenvolvido por **Costanza Pasquotto Assef**  
Engenheira de Software · Estudante de Especialização em Inteligência Artificial Aplicada — UFPR

---

## 📌 Visão Geral

A **doença celíaca** é uma condição autoimune crônica severa, frequentemente subdiagnosticada e, mesmo após o diagnóstico, ainda cercada de riscos no cotidiano — especialmente no consumo de alimentos industrializados.

O **SafeGluten** nasce da interseção entre:

- **Ciência de Dados**
- **Engenharia de Software**
- **Inteligência Artificial Aplicada à Saúde**

O objetivo é **reduzir riscos clínicos e alimentares**, oferecendo:
1. Suporte à análise de dados laboratoriais (contexto acadêmico)
2. Auditoria inteligente de alimentos e ingredientes (contexto cotidiano)

---

## 🎯 Objetivos do Projeto

- Apoiar o entendimento de padrões laboratoriais associados à doença celíaca
- Modelar uma base de conhecimento confiável sobre alimentos e ingredientes
- Evitar classificações perigosas causadas por inferência incorreta
- Criar uma aplicação full stack auditável e ética para segurança alimentar

---

## 🧠 Fundamentos Técnicos

### Por que este projeto não é apenas “IA”?

Antes de qualquer modelo de Machine Learning, o SafeGluten prioriza:

- **Modelagem correta dos dados**
- **Separação clara entre alimentos e ingredientes**
- **Decisão baseada em fatos armazenados**, não em inferência cega

> Em saúde, uma IA só é tão segura quanto o banco de dados que a sustenta.

---

## 🏗️ Arquitetura da Solução

Frontend (React)
↓
Backend (Node.js + Express)
↓
Banco de Dados (PostgreSQL)
↓
Camada de IA (OCR + NLP)

### 🔹 Front-end (React)
- Interface simples e direta
- Foco em UX e redução de fricção cognitiva
- Entrada de dados por texto (e futuramente imagem via OCR)

### 🔹 Back-end (Node.js)
- API REST
- Lógica de decisão centralizada
- Nenhuma inferência sem consulta ao banco

### 🔹 Banco de Dados (PostgreSQL)
Estrutura relacional com entidades bem definidas:

- `foods` → alimentos finais
- `ingredients` → ingredientes individuais
- `food_ingredients` → relação N:N
- `risk_level` → classificação semântica de risco

### 🔹 IA Aplicada
- **OCR** para extração de texto de rótulos
- **NLP** para análise semântica de ingredientes
- A IA **não decide sozinha**: ela consulta a base de conhecimento

---

## 🧪 Um Caso Real de Engenharia: O Problema do Arroz

Durante o desenvolvimento, um erro clássico apareceu:

> Alimentos naturalmente sem glúten (como arroz) foram classificados incorretamente.

🔍 **Causa**:  
Relacionamento mal definido entre alimentos e ingredientes no banco.

✅ **Correção**:
- Diferenciar “alimento” de “ingrediente”
- Evitar herança semântica automática
- Garantir que o banco represente a realidade biológica, não suposições

Esse episódio reforçou um princípio central do projeto:

> Antes de IA, vem a modelagem.

---

## ⚙️ Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js, Express
- **Banco de Dados:** PostgreSQL
- **IA / Dados:** Python, Scikit-learn, OCR, NLP
- **Infra:** Git, GitHub

---

## 🚀 Como Rodar o Projeto (Local)

### Pré-requisitos
- Node.js
- PostgreSQL
- Git

### Backend
```bash
cd backend
npm install
npm run dev
Frontend
bash
Copiar código
cd frontend
npm install
npm start
📖 Artigo Relacionado
Este projeto é acompanhado por um artigo técnico no Medium:

IA Aplicada à Saúde: Do Diagnóstico Clínico à Segurança Alimentar na Doença Celíaca
🔗 (link será adicionado)

⚖️ Considerações Éticas
A aplicação não substitui diagnóstico médico

A IA atua como ferramenta de apoio

Dados clínicos são anonimizados

Decisões críticas sempre priorizam segurança