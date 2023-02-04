## ROUTES

from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/labs')
def labs():
    return render_template("PortSwiggerLabs.html")

################## SQLI LABS #####################

@views.route('labs/apprentice/sqli01')
def Alab_sqli01():
    return render_template("sqli-vulnerability-in-where-clause.html")

@views.route('labs/apprentice/sqli02')
def Alab_sqli02():
    return render_template("sqli-vulnerability-login-bypass.html")

################ BUS LOGIC LABS ##################

@views.route('labs/apprentice/buslogic01')
def Alab_buslogic01():
    return render_template("excessuve-trust-in-client-side-controls.html")

@views.route('labs/apprentice/buslogic02')
def Alab_buslogic02():
    return render_template("high-level-logic-flaw.html")

############### PRIV ESC LABS ####################

@views.route('labs/apprentice/priv-esc01')
def Alab_priv_esc01():
    return render_template("unprotected-admin-functionality.html")

@views.route('labs/apprentice/priv-esc02')
def Alab_priv_esc02():
    return render_template("unprotected-admin-functionality-2.html")

@views.route('labs/apprentice/priv-esc03')
def Alab_priv_esc03():
    return render_template("user-role-controlled-by-request-parameter.html")

@views.route('labs/apprentice/priv-esc04')
def Alab_priv_esc04():
    return render_template("user-role-can-be-modified-in-user-profile.html")

@views.route('labs/apprentice/priv-esc05')
def Alab_priv_esc05():
    return render_template("user-id-controlled-by-request-parameter.html")

@views.route('labs/practioner/priv-esc11')
def Plab_priv_esc11():
    return render_template("url-based-access-control-can-be-circumvented.html")