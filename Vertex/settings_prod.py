from .settings import *

DEBUG = False
MIDDLEWARE.insert(1, "whitenoise.middleware.WhiteNoiseMiddleware")
ALLOWED_HOSTS.insert(0, "ryleet-app2.herokuapp.com")
