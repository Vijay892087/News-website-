import os
from pathlib import Path

# 1. Base Directories Setup
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. Security Settings (Production ready using Environment Variables)
# Agar server par SECRET_KEY set nahi hai, toh yeh fallback key use karega
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-universal-fallback-key-change-this')

# Render/Production par DEBUG ko False rakhne ke liye env me DJANGO_DEBUG=False set karein
DEBUG = os.environ.get('DJANGO_DEBUG', 'True') == 'True'

# Sabhi servers/domains par chalane ke liye wildcard '*' allowed hai
ALLOWED_HOSTS = ['*']


# 3. Application Definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Aapke project ki apps auto-detect ho jayengi agar wo project directory me hain
    # Yahan apni custom app ka naam add kar sakte hain, jaise: 'news_app',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # Production par static files handle karne ke liye (Render par zaroori hai)
    'white扩展.middleware.WhiteNoiseMiddleware' if 'whitenoise' in os.environ.get('SHARED_DEPENDENCIES', '') else 'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Auto-detect routing dynamically based on parent directory name
ROOT_URLCONF = f"{Path(__file__).resolve().parent.name}.urls"

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], # Sabhi standard templates folders ke liye
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = f"{Path(__file__).resolve().parent.name}.wsgi.application"


# 4. Database Configuration (Auto-fallback to SQLite for easy hosting)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# 5. Password Validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# 6. Internationalization (Language & Time)
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# 7. Static & Media Files Settings (Universal Paths)
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Agar templates me custom static assets folders use ho rahe hain
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
] if os.path.exists(os.path.join(BASE_DIR, 'static')) else []

MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

