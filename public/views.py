## ROUTES

from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html", user=current_user)

@views.route('/labs')
def labs():
    return render_template("PortSwiggerLabs.html", user=current_user)       # reference current user to check if it is authenticated

################## TOPICS ######################

@views.route('/topics')
def topics():
    return render_template("topics.html", user=current_user)

@views.route('/topics/intro')
def intro_to_cyber():
    return render_template("intro-to-cyber.html", user=current_user)

@views.route('/topics/intro/offensive')
def intro_to_offensive():
    return render_template("intro-to-offensive.html", user=current_user)

@views.route('/topics/intro/defensive')
def intro_to_os_security():
    return render_template("intro-to-defensive.html", user=current_user)

@views.route('/topics/intro/network')
def intro_to_network():
    return render_template('intro-to-network.html', user=current_user)

@views.route('/topics/intro/web-fundamentals')
def intro_to_web():
    return render_template('intro-to-web.html', user=current_user)


################## PROJECTS ######################

@views.route('/projects')
def projects():
    return render_template("projects.html", user=current_user)

@views.route('/projects/encryption-projects')
def encryption_projects():
    return render_template("encryption-projects.html", user=current_user)

@views.route('/projects/encryption-projects/encryption-malware')
def encryption_malware():
    return render_template("encryption-malware.html", user=current_user)

@views.route('/projects/encryption-projects/one-time-pad-encryption')
def encryption_one_time_pad():
    return render_template("one-time-pad-encryption.html", user=current_user)

@views.route('/projects/encryption-projects/one-time-pad-encryption/crib-dragging-attacks')
def encryption_one_time_pad_exploitation():
    return render_template("one-time-pad-encryption-exploitation.html", user=current_user)

@views.route('/projects/keylogger')
def keylogger():
    return render_template("keylogger.html", user=current_user)

@views.route('/projects/prevent-sqli')
def prevent_sqli():
    return render_template("prevent-sqli.html", user=current_user)

@views.route('/projects/malware-dev')
def malware_dev():
    return render_template("malware-dev.html", user=current_user)

@views.route('/projects/malware-dev/worm-malware')
def worm_malware():
    return render_template("worm-malware.html", user=current_user)

################## SQLI LABS #####################

@views.route('labs/apprentice/sqli01')
def Alab_sqli01():
    return render_template("sqli-vulnerability-in-where-clause.html", user=current_user)

@views.route('labs/apprentice/sqli02')
def Alab_sqli02():
    return render_template("sqli-vulnerability-login-bypass.html", user=current_user)

#################### XSS LABS ####################

@views.route('labs/apprentice/xss01')
def Alab_xss01():
    return render_template("reflected-xss-with-nothing-encoded.html", user=current_user)

@views.route('labs/apprentice/xss02')
def Alab_xss02():
    return render_template("stored-xss-with-nothing-encoded.html", user=current_user)

@views.route('labs/apprentice/xss03')
def Alab_xss03():
    return render_template("dom-xss-in-documentwrite-sink.html", user=current_user)

@views.route('labs/apprentice/xss04')
def Alab_xss04():
    return render_template('dom-xss-in-innerhtml-sink.html', user=current_user)

@views.route('labs/apprentice/xss05')
def Alab_xss05():
    return render_template('dom-xss-in-jquery-anchor.html', user=current_user)

@views.route('labs/apprentice/xss06')
def Alab_xss06():
    return render_template('dom-xss-in-jquery-selector.html', user=current_user)

@views.route('labs/apprentice/xss07')
def Alab_xss07():
    return render_template('reflected-xss-with-angle-brackets-encoded.html', user=current_user)

@views.route('labs/apprentice/xss08')
def Alab_xss08():
    return render_template('stored-xss-with-href-anchor.html', user=current_user)

@views.route('labs/apprentice/xss09')
def Alab_xss09():
    return render_template('reflected-xss-into-js-string.html', user=current_user)

@views.route('labs/practioner/xss11')
def Plab_xss11():
    return render_template('dom-xss-inside-select-element.html', user=current_user)

@views.route('labs/practioner/xss12')
def Plab_xss12():
    return render_template('dom-xss-angular-js.html', user=current_user)

@views.route('labs/practioner/xss13')
def Plab_xss13():
    return render_template('exploiting-xss-to-perform-csrf.html', user=current_user)

@views.route('labs/practioner/xss14')
def Plab_xss14():
    return render_template('xss-to-steal-cookie.html', user=current_user)

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
    