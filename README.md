*****************************************************************************

Configuración de Git bash
.- git config --global user.name "nombres de usuario de github"
.- git config --global user.email xxxxxx@inacapmail.cl o el correo asociado a github
.- git config --global core.editor "code --wait"
.- git config --global -e
.- git config --global core.autocrfl true

******************************************************************************
mkdir = crea una carpeta
cd= permite ingresa a una carpeta
git init = inicializa el proyecto
ls= lista los archivos que hay en el proyecto
pwd= indica el directorio donde se está posicionado actualmente.

git add . = agrega todos los archivos que se encuentran en nuestro proyecto
git add .html o .txt etc= Agrega todos los archivos con la extensión especificada.
git add xxx.html, xxx.css etc= Permite agregar los archivos especificados.

git commit -m "Agregar archivos creado" = Permite comprometer los archivos que ya fueron agregados.

rm nombre_archivo = Permite borrar un archivo especifico

git restore --staged nombre del archivo   -> git restore nombre del archivo = Permite recuperar un archivo borrado.

mv = Permite renombrar o cambiar el nombre de un archivo
    mv nombre_original nombre_cambiado

.gitignore = Archivo que permite ignorar archivos.

git diff = Muestra las diferencias que encuentra en nuestro archivo.
git log = Muestra el historial del repositorio.
git branch = Muestra la rama en la cual estamos trabajando.
git checkout –b nombre_rama.
git log --oneline = Indica en que rama nos encontramos.

cat nombre_archivo = Muestra el contenido del archivo.
git checkout nombre_rama = Nos permite volver a la rama indicada.
git merge nombre_rama = Los cambios realizados en la rama xxxx se actualizan en la rama principal.



******************************************************************

…or create a new repository on the command line
echo "# new" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yalenigp/new.git(aqui va el link del repositorio que se encuentra en su github)

git push -u origin main

*************************************
**************************************
…or push an existing repository from the command line

git remote add origin https://github.com/yalenigp/new.git(aqui va el link del repositorio que se encuentra en su github)
git branch -M main
git push -u origin main

*****************
git remote -v
git remote set-url origin https://github.com/yalenigp/New_Proyect.git
git branch -M main
git push -u origin main
*****************************************************************************************
renombrar una rama
git branch -m master
_____________________________**

Si estás en una rama diferente a la que deseas renombrar, puedes añadir el nombre de la rama que deseas renombrar después del nuevo nombre, por 

ejemplo: git branch -m nombre_actual nuevo_nombre.
