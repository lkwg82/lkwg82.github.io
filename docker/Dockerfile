FROM ubuntu:16.10

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y npm
RUN npm install -g grunt-cli
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN mkdir /src

# install mozjpeg
# instructions taken from https://www.robertwalter.de/2015/04/08/mozjpeg-3-0-0-on-debian-and-ubuntu/
RUN apt-get install -y autoconf automake libtool nasm make pkg-config git \
    && git clone https://github.com/mozilla/mozjpeg.git \
    && cd mozjpeg \
    && git checkout v3.1 \
    && autoreconf -fiv \
    && ./configure -prefix=/usr \
    && make \
    && make install \
    && cjpeg -version # check

#RUN apt-get remove -y autoconf automake libtool nasm make pkg-config git \
#    && apt-get autoremove -y

RUN apt-get install -y phantomjs

WORKDIR /src

EXPOSE 9000

CMD grunt serve