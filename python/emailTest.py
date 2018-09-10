import emailHandler as eh

def send_email():
    login_email = ''
    login_password = ''
    mailserver = eh.login(login_email, login_password)
    recepient_email = ''
    eh.send_mail(mailserver, login_email, recepient_email)
