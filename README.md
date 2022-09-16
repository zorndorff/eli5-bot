## Overview 
An extremely simple example of usin OpenAi's gpt3 to explain complex license, legal text.

Usage:

`OPENAI_API_KEY=YOUR API KEY HERE node eli5.mjs --preamble "Summarize the following text for a 2nd grade student:" -d ./test/gpl_half.txt`

This results in a somewhat easier to understand version of the GPL license:
```
This License refers to version 3 of the GNU General Public License. 
This License gives you permission to copy, distribute, and make modifications to a software program under certain conditions. 
This software program is called the "Program." You are addressed as "you" in the License. "Licensees" and "recipients" in the License are either individuals or organizations. 
"Modifying" a work in the License refers to copying from or adapting all or part of the work in a way that requires copyright permission. The resulting work is called a "modified version" of the earlier work or a work "based on" the earlier work. 
A "covered work" is either the unmodified Program or a work based on the Program. "Propagating" a work in the License refers to doing anything with it that, without permission, would make you directly or secondarily liable for infringement under copyright law. "Conveying" a work in the License refers to any kind of propagation that enables other parties to make or receive copies. The "source code" for a work is the preferred form of the work for making modifications to it. "Object code" is any non-source form of the work. 
A "Standard Interface" is an interface that is an official standard defined by a recognized standards body or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language. "System Libraries" in the License are anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. 
A "Major Component" is a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it. 
"Corresponding Source" for a work in object code form is all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. "Installation Information" for a User Product is any methods, procedures, authorization keys, or other information required to install and execute modified versions"
```
