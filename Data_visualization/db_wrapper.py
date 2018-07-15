import MySQLdb
import db_conf as conf

class db():
    """get configuration from conf file """
    __db_name = conf.DB_NAME
    __db_u_name = conf.DB_USERNAME
    __db_u_pwd = conf.DB_PASSWORD
    __db_localhost = conf.DB_LOCALHOST
    __db_port = conf.DB_PORT

    table_name = "data_visualization"

    def __init__(self):
        try:
            self.database = MySQLdb.connect( db.__db_localhost, db.__db_u_name, db.__db_u_pwd, db.__db_name, db.__db_port)
            self.cursor = self.database.cursor()
        except Exception, e:
            raise e

    def execute_query(self, query):
        try:
            print self.cursor.execute(query)
            self.database.commit()
            results = self.cursor.fetchall()
            return results
        except Exception,e:
            print e
            self.database.rollback()
            return False

    def get_all_data(self):
        """get all the data of given table """
        query = "SELECT * FROM " + self.table_name
        print query
        return self.execute_query(query)

    def get_data_by_field(self, select):
        """get data from table according to given fields """

        query = "SELECT " + ",".join(select) + " FROM " + self.table_name
        print query
        return self.execute_query(query)
    
    def get_data_by_count(self, count_by, select, group_by=None):
        """get data according to count of given fields """
        query = "SELECT " + select + ", count(" + count_by+ ") FROM " + self.table_name + " GROUP BY " +group_by
        print query
        return self.execute_query(query)

    def get_catagory(self, field):
        query = "SELECT DISTINCT " + field + " FROM " + self.table_name
        return self.execute_query(query)
