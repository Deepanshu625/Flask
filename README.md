# Flask web app

This web app is used to get data from database and visualize it in Bar graph, Pie chart and table rows by using Flask app.
So, If a user open the page by default, it displays two graphs.
a) distribution of number of males and females.
b) number of people in each relationship status.
and a link to next page.
![alt text](https://github.com/Deepanshu625/Flask/blob/master/screenshot/Screenshot%20from%202018-07-15%2019-10-38.png)

Now if user clicks on the button it will call the route and redirect it to the next screen on which all the data will be shown to the user.
![alt text](https://github.com/Deepanshu625/Flask/blob/master/screenshot/Screenshot%20from%202018-07-15%2019-12-25.png)

User can also apply some filters like in this screenshot i had unchecked male and white. So, the data containing these features will be excluded from the list.
![alt text](https://github.com/Deepanshu625/Flask/blob/master/screenshot/Screenshot%20from%202018-07-15%2019-13-30.png)

User can also fetch the data directly if he wants to by using RESTful URL routing which handle requests from client over HTTP.
for example:
to get complete data on the basis of fields
 ![alt text](https://github.com/Deepanshu625/Flask/blob/master/screenshot/Screenshot2.png)
or get distinct data count on specific field
 ![alt text](https://github.com/Deepanshu625/Flask/blob/master/screenshot/Screenshot1.png)
           
To Run this app on local you need to run Following commands on your Ubuntu terminal. clone the code in your local directory.
    ```python
    sudo apt-get update```
    
required dependices

    sudo apt-get install -y build-essential libssl-dev libffi-dev python-dev 
    
Install pip & virtualenv

    apt-get install -y python-pip
    
    apt-get install -y python-virtualenv
    
    virtualenv --version
    
    pip install virtualenvwrapper
    
Configure the virtualenv wrapper

    USER_HOME=/home/vagrant
    echo "export WORKON_HOME=$USER_HOME/.virtualenvs" >> ~/.bashrc
    echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
    echo "inside else"
    source ~/.bashrc
Also install mysql server and client

    sudo apt-get install mysql-server
    sudo apt-get install libmysqlclient-dev

and then run the requirenment file given in the Flask directory with the following command:

    pip install -Ur requirements.txt

You are all set to go. Just update the configurations of your mysql in the config.py file. and execute "run.py" file.
Open the browser and enter this url:
    http://33.33.33.33:5000/
 and you will get the first screen.
 
 
 If you have digital ocean ssh ip and password, then ssh to my server and 
 just type these commands
 
    workon data_visualization_flask
    cd my_assignment/Flask/Data_visualization/
    python run.py
   
 and type following url on the browser
    http://206.189.140.163:5000/

    
