## ROUTES

from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/labs')
def labs():
    return render_template("PortSwiggerLabs.html")

################## APPRENTICE SQLI LABS #####################

@views.route('labs/apprentice/sqli01')
def Alab_sqli01():
    return render_template("sqli-vulnerability-in-where-clause.html")