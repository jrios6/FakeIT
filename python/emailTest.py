import emailHandler as eh
import getpass

login_email = 'gamefakeit6@gmail.com'
login_password = 'facebookrejects'
mailserver = eh.login(login_email, login_password)
recepient_email = input('Email of receipient: ')
eh.send_mail(mailserver, login_email, recepient_email)
