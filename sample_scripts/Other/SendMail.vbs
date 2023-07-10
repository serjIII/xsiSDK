'------------------------------------------------
' SendMail.vbs
' This is a simple vbs script subroutine which sends an 
' email from xsi using Microsoft Outlook, it can be used 
' for example to notify someone when a render is completed. 
' It could be modified to page someone.
'
' USAGE
' Parameters:
' dst = the recipient email
' subj = the subject of the email
' body = the body of the email
'
' To test the script, make sure to replace toto@softimage.com 
' with an actual email adress and hit run from the script editor.
'
' Author : Claude Cajolet
'------------------------------------------------
sub msg( dst, subj, body )

    dim a
    dim b 

    set a = createobject( "outlook.application" )
    set b = a.createitem( olMailitem )

    b.to = dst
    b.subject = subj
    b.body = body

    b.send()

end sub

msg "toto@softimage.com","Mail from XSI!","Test - This mail has been sent automaticly from XSI"