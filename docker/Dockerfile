FROM ubuntu:16.04

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y npm \
    && ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g grunt-cli \
    && grunt --version
RUN mkdir /src

# needed for phantomjs 2.1 in grunt-module uncss
RUN apt-get install -y libfontconfig1

# install mozjpeg
# instructions taken from https://www.robertwalter.de/2015/04/08/mozjpeg-3-0-0-on-debian-and-ubuntu/
RUN apt-get install -y autoconf automake libtool nasm make pkg-config git \
    && git clone https://github.com/mozilla/mozjpeg.git

    # version > 2.1 is incompatible with grunt-imagemin
RUN cd mozjpeg \
    && git checkout v2.1 \
    && autoreconf -fiv \
    && ./configure -prefix=/usr \
    && make -j16 \
    && make install
#    && apt-get remove -y autoconf automake libtool nasm make pkg-config git \
#    && apt-get autoremove -y


RUN  groupadd --gid 1000 group \
    && useradd --create-home --uid 1000 --gid 1000 user

WORKDIR /src