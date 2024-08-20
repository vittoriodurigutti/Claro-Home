Se sube a la VM 10.4.26.13 la APP Flask y el HTML para la redirección.

APP Flask: /home/Noc_Fija/pablotaricco/Proveedores
HTML: /var/www/html/Salidas

Se abre el puerto 5000 para Flask:
    sudo firewall-cmd --zone=public --add-port=5000/tcp --permanent
    sudo firewall-cmd --reload

Para ejecutar la APP:
    scl enable rh-python36 bash
    "entrar al directorio pablotaricco\Proveedores"
    python3 index.py

