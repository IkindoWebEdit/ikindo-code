# Ikindo WebEdit - An Online Website Editor
Ikindo WebEdit is a Django project which allows for easy design changes in already existing websites.
For demonstration purposes, a sample website is included in the repository files.

## Setup
### Prerequisites
- Windows (or linux, but this guide was made for Windows 10)
- A browser (please use Edge if you encounter any problems)
- [Git for Windows](https://git-scm.com/downloads)
- [Python 3](https://www.python.org/downloads/) (We use version 3.8.0)

### Installation
1. Install the dependencies from above.

Using Windows Command Line or Powershell:

3. Clone the ikindo-code Git repository
```
> git clone https://github.com/IkindoWebEdit/ikindo-code.git
> cd .\ikindo-code\ikindo   #Change to the ikindo-code\ikindo directory for the next steps to work
```
3. Create a Python virtual environment (optional)
```
> py -m venv venv
> .\venv\Scripts\Activate.bat   #If Command Line is used
> .\venv\Scripts\Activate.ps1   #If Powershell is used
```

4. Install Django
```
> pip install django
```

5. Create a user
```
> py manage.py migrate
> py manage.py createsuperuser  #Enter a username, email address(does not need to be real) and password when prompted
```

6. Run the local server
```
> py manage.py runserver
```

Congrats, you've (hopefully)successfully run your own local Ikindo WebEdit server!

Connect to it using your browser and the url `localhost:8000`.

Get a feel for our website by using the navigation links at the top of the startpage.

### Using the editor

1. Login using the account that you created earlier at the url `/login/`.
2. Use the controls on `/adminpage/` and which page you want to edit and whether you want to edit it using the visual editor or using the HTML editor.

Disclaimer: Changes made will not be locally saved(only cached) in the current state of the project, since our database is not yet up and running. We still need information from our client to be able to set up a database.
