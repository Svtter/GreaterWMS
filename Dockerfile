FROM python:3.8

ENV PYTHONPATH piu-backend

WORKDIR /app

COPY requirements.txt requirements.txt
RUN python -m pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && \
    python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

COPY . .
EXPOSE 8008

RUN ["/app/entrypoint.sh"]