FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend/
COPY characterManager/requirements.txt /app/backend/
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt
COPY . /app/backend/
EXPOSE 8000

