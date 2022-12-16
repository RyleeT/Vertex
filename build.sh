#!/usr/bin/env bash
set -e # exit on error

pip3 install -r requirements.txt
npm install
npm run build

python manage.py collectstatic --no-input
python manage.py migrate --no-input
