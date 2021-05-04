import html


def html_convert(file):
    fr = open(file)
    f_contents = fr.read()
    print("vor strip: \n" + f_contents + "\n Ende")
#    f_contents.strip()
    print("nach Strip: \n" + f_contents + "\n Ende")
#   f_contents = html.escape(f_contents)
    fr.close()
    return f_contents

