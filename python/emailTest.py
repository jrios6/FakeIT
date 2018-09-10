import emailHandler as eh

def send_email():
    login_email = ''
    login_password = ''
    mailserver = eh.login(login_email, login_password)
    recepient_email = 'contactjrios@gmail.com'
    # recepient_email = 'yang025@e.ntu.edu.sg'
    # recepient_email = 'leowyaoyang@gmail.com'
    eh.send_mail(mailserver, login_email, recepient_email)
