from flask import Flask

import json
from db_wrapper import db
from flask import request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def get_index():
    return render_template("index.html")

@app.route("/data_row", methods = ["GET"])
def get_data_row():
    db_obj = db()
    catagory = {}
    catagory["sex"] = db_obj.get_catagory("sex")
    catagory["relationship"] = db_obj.get_catagory("relationship")
    catagory["race"] = db_obj.get_catagory("race")
    print catagory
    return render_template("data_row.html", catagory=catagory)

@app.route("/data", methods = ["GET"])
def get_all_data():
    db_obj = db()
    data = db_obj.get_all_data()
    return jsonify(data)

@app.route("/data_by_field", methods = ["GET"])
def get_data_by_field():
    db_obj = db()
    field = request.args.get("field")
    if field is None:
        return jsonify(status="error",
                       message="please add some fields")
    data = db_obj.get_data_by_field(field.split(","))
    return jsonify(data)

@app.route("/data_count_by_field", methods = ["GET"])
def get_data_by_field_count():
    db_obj = db()
    field = request.args.get("field")
    if field is None:
        return jsonify(status="error",
                       message="please add some fields")
    if len(field.split(","))>1:
        return jsonify(status="error",
                       message="Only one field can be passed")
    count_by = select = group_by = field 
    data = db_obj.get_data_by_count(count_by,select,group_by)
    results = []
    for i in data:
        temp_result = {
            "type" : i[0],
            "count" : i[1]
        }
        results.append(temp_result)
    return jsonify(results)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)