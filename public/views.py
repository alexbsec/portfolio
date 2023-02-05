## ROUTES

from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html", user=current_user)

@views.route('/labs')
@login_required
def labs():
    return render_template("PortSwiggerLabs.html", user=current_user)       # reference current user to check if it is authenticated

################## PROJECTS ######################

@views.route('/projects')
def projects():
    return render_template("projects.html", user=current_user)

@views.route('/projects/keylogger')
def keylogger():
    return render_template("keylogger.html", user=current_user)

################## SQLI LABS #####################

@views.route('labs/apprentice/sqli01')
def Alab_sqli01():
    return render_template("sqli-vulnerability-in-where-clause.html", user=current_user)

@views.route('labs/apprentice/sqli02')
def Alab_sqli02():
    return render_template("sqli-vulnerability-login-bypass.html", user=current_user)

################ BUS LOGIC LABS ##################

@views.route('labs/apprentice/buslogic01')
def Alab_buslogic01():
    return render_template("excessive-trust-in-client-side-controls.html", user=current_user)

@views.route('labs/apprentice/buslogic02')
def Alab_buslogic02():
    return render_template("high-level-logic-flaw.html", user=current_user)

############### PRIV ESC LABS ####################

@views.route('labs/apprentice/priv-esc01')
def Alab_priv_esc01():
    return render_template("unprotected-admin-functionality.html", user=current_user)

@views.route('labs/apprentice/priv-esc02')
def Alab_priv_esc02():
    return render_template("unprotected-admin-functionality-2.html", user=current_user)

@views.route('labs/apprentice/priv-esc03')
def Alab_priv_esc03():
    return render_template("user-role-controlled-by-request-parameter.html", user=current_user)

@views.route('labs/apprentice/priv-esc04')
def Alab_priv_esc04():
    return render_template("user-role-can-be-modified-in-user-profile.html", user=current_user)

@views.route('labs/apprentice/priv-esc05')
def Alab_priv_esc05():
    return render_template("user-id-controlled-by-request-parameter.html", user=current_user)

@views.route('labs/practioner/priv-esc11')
def Plab_priv_esc11():
    return render_template("url-based-access-control-can-be-circumvented.html", user=current_user)
    