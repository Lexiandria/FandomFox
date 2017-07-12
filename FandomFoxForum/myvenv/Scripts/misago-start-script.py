#!"C:\Users\Girls Who Code\Desktop\FandomFox\FandomFoxForum\myvenv\Scripts\python.exe"
# EASY-INSTALL-ENTRY-SCRIPT: 'Misago==0.9.0','console_scripts','misago-start'
__requires__ = 'Misago==0.9.0'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('Misago==0.9.0', 'console_scripts', 'misago-start')()
    )
