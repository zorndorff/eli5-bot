## Overview 
An extremely simple example of usin OpenAi's gpt3 to explain complex license, legal text.

Usage:

`OPENAI_API_KEY=YOUR API KEY HERE node eli5.mjs --preamble "Summarize the following text for a 2nd grade student:" -d ./test/gpl_half.txt`

This results in a somewhat easier to understand version of the GPL license:


>This License refers to version 3 of the GNU General Public License. 
This License gives you permission to copy, distribute, and make modifications to a software program under certain conditions. 
This software program is called the "Program." You are addressed as "you" in the License. "Licensees" and "recipients" in the License are either individuals or organizations. 
"Modifying" a work in the License refers to copying from or adapting all or part of the work in a way that requires copyright permission. The resulting work is called a "modified version" of the earlier work or a work "based on" the earlier work. 
> A "covered work" is either the unmodified Program or a work based on the Program. "Propagating" a work in the License refers to doing anything with it that, without permission, would make you directly or secondarily liable for infringement under copyright law. "Conveying" a work in the License refers to any kind of propagation that enables other parties to make or receive copies. The "source code" for a work is the preferred form of the work for making modifications to it. "Object code" is any non-source form of the work. 
> A "Standard Interface" is an interface that is an official standard defined by a recognized standards body or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language. "System Libraries" in the License are anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. 
> A "Major Component" is a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it. 
"Corresponding Source" for a work in object code form is all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. "Installation Information" for a User Product is any methods, procedures, authorization keys, or other information required to install and execute modified versions"

And somewhat more interesting than that, prompting gpt to summarize as a JSON document:
`Summarize the following text as a json document: ${gpl_license_text}`


``` 

{
  "0. Definitions": {\n        \"This License\": \"refers to version 3 of the GNU General Public License\",\n        \"Copyright\": \"also means copyright-like laws that apply to other kinds of works, such as semiconductor masks\",\n        \"The Program\": \"refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations\",\n        \"To “modify” a work\": \"means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work\",\n        \"A “covered work”\": \"means either the unmodified Program or a work based on the Program\",\n        \"To “propagate” a work\": \"means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well\",\n        \"To “convey” a work\": \"means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying\",\n        \"An interactive user interface\": \"displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion\"\n    },\n    \"1. Source Code\": {\n        \"The “source code” for a work\": \"means the preferred form of the work for making modifications to it. “Object code"
```
