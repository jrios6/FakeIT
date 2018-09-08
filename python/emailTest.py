import emailHandler as eh
import getpass

login_email = 'gamefakeit6@gmail.com'
login_password = 'facebookrejects'
mailserver = eh.login(login_email, login_password)
# recepient_email = 'contactjrios@gmail.com'
recepient_email = 'yang025@e.ntu.edu.sg'
eh.send_mail(mailserver, login_email, recepient_email)
