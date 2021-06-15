from django.shortcuts import render
from django.http import HttpResponse

from . import returnhtml


def index(request):
#     htmlcode = returnhtml.html_convert('templates/testsite/testsite.html')
#     csscode = returnhtml.html_convert('static/testsite/style.css')
#     print("Resp1: \n" + htmlcode)
# #    htmlcode = htmlcode.strip()
# #   resp2 = "\nTesttext, ich will nur etwas testen \nHallo test"
#     print("Resp2: \n" + htmlcode)
#
#     context = {
#         'editablehtml': htmlcode,
#         'editablecss':  csscode
#     }
#     return render(request, 'htmleditor/htmleditortemplate.html', context)
    return render(request, 'htmleditor/pageselection.html')


def testsite(request, page):
    htmlpage = "templates/ikindo/" + page
    htmlcode = returnhtml.html_convert(htmlpage)
    csscode = returnhtml.html_convert('static/testsite/style.css')
    context = {
        'editablehtml': htmlcode,
        'editablecss': csscode
    }
    return render(request, 'htmleditor/htmleditortemplate.html', context)


def editcode(request):
    context = {
        'success': "it worked successfully"
    }

    return render(request, 'htmleditor/htmleditortemplate.html', context)


def external(request):
    inp = request.POST.get('htmlcode')
    # for i in range (len(inp)):
    #     print("Character: %c = %d" %(inp[i], ord(inp[i])))
#    inp = inp.replace("\r", "")
    inp = inp.replace("\n", "")
    print("Test{ \n" + inp)
    context = {
        'success': inp
    }
    filex = open('templates/testsite/testsite.html', 'w')
    filex.write(inp)
    return render(request, 'htmleditor/htmleditortemplate.html', context)



def about(request):
    return HttpResponse("ja moin")