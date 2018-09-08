import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# function to login to outlook server
def login_to_server(mailserver, FROM, password):
    # secure our email with tls encryption
    mailserver.ehlo()
    print("secured email with tls encryption...")

    # re-identify ourselves as an encrypted connection
    mailserver.starttls()
    print("reidentified as encrypted connection...")

    mailserver.ehlo()
    print("logging in as",FROM,"...")

    try:
        mailserver.login(FROM, password)
        print('logged in as ',FROM)
    except smtplib.SMTPAuthenticationError:
        print('Wrong password entered. Please try again.')
        mailserver.quit()

# function to login to outlook client, returns True if logged in, False if not logged in
def login(FROM, password):
    # identify ourselves to smtp outlook client
    try:
        mailserver = smtplib.SMTP('smtp.gmail.com',587)
        print('connected to smtp outlook host...')
    except smtplib.socket.gaierror:
        print('Could not connect to server')
        pass

    FROM = FROM
    password = password

    login_to_server(mailserver, FROM, password)

    return mailserver

# function to send the mail
def send_mail(mailserver, FROM, recipient_email):
    print('Attaching message to email...')

    msg = create_msg(recipient_email,FROM)
    mailserver.sendmail(FROM,recipient_email,msg.as_string())
    print('email sent')

# function to create email msg
def create_msg(recipient_email,FROM):
    # Create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['From'] = FROM
    msg['To'] = recipient_email
    print("message container created.")
    msg['Subject'] = 'fake.IT level report'

    html_path = 'emailNewsletter/emailTemplate.html'

    with open(html_path) as f:
        email_template = f.read()

    email = MIMEText(email_template, 'html')
    msg.attach(email)

    return msg

# function to quit the mailserver, du-uh
def mailserver_quit(mailserver):
    mailserver.quit()
