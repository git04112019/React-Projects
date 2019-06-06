# About
A very hacky demo using node with [react-pdf](https://react-pdf.org/repl) to generate pdfs.



# Dockerfile
### DOCKERFILE PARTS
- FROM - The os used. Common is alpine, debian, ubuntu
- ENV - Environment variables
- RUN - Run commands/shell scripts, etc
- EXPOSE - Ports to expose
- CMD - Final command run when you launch a new container from image
- WORKDIR - Sets working directory (also could use 'RUN cd /some/path')
- COPY # Copies files from host to container

# Using React-Pdf with node
### Generate all the pdfs after editing (not working)
``` yarn example ```
### Generate individual pdf examples
``` yarn example -- fractals ```
``` yarn example -- images ```
``` yarn example -- knobs ```
``` yarn example -- mediaQueries ```
``` yarn example -- pageWrap ```
``` yarn example -- resume ```
``` yarn example -- text ```

### Remove all pdfs.


# TODO (maybe)
### Client / Server / Native Boilerplate(s)
* Setup CRA, CNA and RN apps
* Using [pdfviewer](https://react-pdf.org/components#pdfviewer) to preview pdfs before downloading them.
* [Using Debugging](https://react-pdf.org/advanced#debugging)
* [PDFDownloadLink Component](https://react-pdf.org/advanced#on-the-fly-rendering)