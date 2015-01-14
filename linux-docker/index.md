---
layout: default
tags: machineinfo
---


# Machine Info
Generated at Wed Jan 14 13:06:20 UTC 2015.

## Hostname
    localhost

## sudo
Available


## Kernel
    Linux version 2.6.32-042stab090.5 (root@kbuild-rh6-x64) (gcc version 4.4.6 20120305 (Red Hat 4.4.6-4) (GCC) ) #1 SMP Sat Jun 21 00:15:09 MSK 2014

## Distro Info
    DISTRIB_ID=Ubuntu
    DISTRIB_RELEASE=12.04
    DISTRIB_CODENAME=precise
    DISTRIB_DESCRIPTION="Ubuntu 12.04 LTS"

    wheezy/sid


## Free memory
                 total       used       free     shared    buffers     cached
    Mem:          3072        675       2396          0          0          0
    -/+ buffers/cache:        675       2396
    Swap:         1536          0       1536
    Total:        4608        675       3932

## Filesystem Info
    Filesystem             Size  Used Avail Use% Mounted on
    /vz/private/198692290  120G   90G   31G  75% /
    none                   1.5G  8.0K  1.5G   1% /dev
    none                   308M   56K  308M   1% /run
    none                   5.0M   12K  5.0M   1% /run/lock
    none                   1.5G     0  1.5G   0% /run/shm
    /dev/null              768M  133M  636M  18% /var/ramfs

    /vz/private/198692290 on / type simfs (rw)
    /dev/null on /var/ramfs type tmpfs (rw,noatime,size=768m)

## Network Configuration
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN 
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
        inet6 ::1/128 scope host 
           valid_lft forever preferred_lft forever
    2: venet0: <BROADCAST,POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1500 qdisc noqueue state UNKNOWN 
        link/void 
        inet 127.0.0.2/32 scope host venet0
        inet 172.30.236.191/32 scope global venet0:0
        inet6 2607:f700:8001:132:117:3d30:fa10:c4a1/128 scope global 
           valid_lft forever preferred_lft forever

## Environment
                                         CI = true
                    COMPOSER_NO_INTERACTION = 1
                     CONTINUOUS_INTEGRATION = true
                            DEBIAN_FRONTEND = noninteractive
                          DYLD_LIBRARY_PATH = /home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib:
                                   GEM_HOME = /home/travis/.rvm/gems/ruby-1.9.3-p551
                                   GEM_PATH = /home/travis/.rvm/gems/ruby-1.9.3-p551:/home/travis/.rvm/gems/ruby-1.9.3-p551@global
                                GIT_ASKPASS = echo
                                     GOPATH = /home/travis/.gvm/pkgsets/go1.3.3/global
                                     GOROOT = /home/travis/.gvm/gos/go1.3.3
                         GVM_OVERLAY_PREFIX = /home/travis/.gvm/pkgsets/go1.3.3/global/overlay
                            GVM_PATH_BACKUP = /home/travis/.gvm/bin:/usr/local/clang-3.4/bin:/home/travis/.rvm/gems/ruby-1.9.3-p551/bin:/home/travis/.rvm/gems/ruby-1.9.3-p551@global/bin:/home/travis/.rvm/rubies/ruby-1.9.3-p551/bin:/usr/local/phantomjs/bin:/home/travis/perl5/perlbrew/bin:/home/travis/.nvm/v0.10.33/bin:./node_modules/.bin:/usr/local/maven-3.2.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/bin:/home/travis/.gvm/gos/go1.3.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/clang-3.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/travis/.rvm/bin:/home/travis/.rvm/bin
                                   GVM_ROOT = /home/travis/.gvm
                                GVM_VERSION = 1.0.22
    HAS_ANTARES_THREE_LITTLE_FRONZIES_BADGE = true
                HAS_JOSH_K_SEAL_OF_APPROVAL = true
                                       HOME = /home/travis
                                      IRBRC = /home/travis/.rvm/rubies/ruby-1.9.3-p551/.irbrc
                                  JAVA_HOME = /usr/lib/jvm/java-7-oracle
                                 JRUBY_OPTS = --client -J-XX:+TieredCompilation -J-XX:TieredStopAtLevel=1 -Xcext.enabled=false -J-Xss2m -Xcompile.invokedynamic=false
                                       LANG = en_US.UTF-8
                                     LC_ALL = en_US.UTF-8
                                   LC_CTYPE = en_US.UTF-8
                            LD_LIBRARY_PATH = /home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib:
                                    LOGNAME = travis
                                       MAIL = /var/mail/travis
                                    MANPATH = /home/travis/perl5/perlbrew/perls/5.20/man:/home/travis/.nvm/v0.10.33/share/man:/usr/local/clang-3.4/share/man:/usr/local/man:/usr/local/share/man:/usr/share/man
                                   MERB_ENV = test
                               MY_RUBY_HOME = /home/travis/.rvm/rubies/ruby-1.9.3-p551
                                  NODE_PATH = /home/travis/.nvm/v0.10.33/lib/node_modules
                                    NVM_BIN = /home/travis/.nvm/v0.10.33/bin
                                    NVM_DIR = /home/travis/.nvm
                      NVM_NODEJS_ORG_MIRROR = https://nodejs.org/dist
                                   NVM_PATH = /home/travis/.nvm/v0.10.33/lib/node
                                       PATH = /home/travis/perl5/perlbrew/bin:/home/travis/perl5/perlbrew/perls/5.20/bin:/usr/local/phantomjs/bin:/home/travis/.nvm/v0.10.33/bin:./node_modules/.bin:/usr/local/maven-3.2.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/bin:/home/travis/.gvm/gos/go1.3.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/clang-3.4/bin:/home/travis/.rvm/gems/ruby-1.9.3-p551/bin:/home/travis/.rvm/gems/ruby-1.9.3-p551@global/bin:/home/travis/.rvm/rubies/ruby-1.9.3-p551/bin:/usr/local/phantomjs/bin:./node_modules/.bin:/usr/local/maven-3.2.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/bin:/home/travis/.gvm/gos/go1.3.3/bin:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/clang-3.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/travis/.rvm/bin:/home/travis/.rvm/bin
                    PERLBREW_BASHRC_VERSION = 0.71
                              PERLBREW_HOME = /home/travis/.perlbrew
                           PERLBREW_MANPATH = /home/travis/perl5/perlbrew/perls/5.20/man
                              PERLBREW_PATH = /home/travis/perl5/perlbrew/bin:/home/travis/perl5/perlbrew/perls/5.20/bin
                              PERLBREW_PERL = 5.20
                              PERLBREW_ROOT = /home/travis/perl5/perlbrew
                           PERLBREW_VERSION = 0.71
                            PKG_CONFIG_PATH = /home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib/pkgconfig:/home/travis/.gvm/pkgsets/go1.3.3/global/overlay/lib/pkgconfig:
                                        PS4 = +
                                        PWD = /home/travis/build/travis-perl/machineinfo
                                   RACK_ENV = test
                                  RAILS_ENV = test
                               RUBY_VERSION = ruby-1.9.3-p551
                                      SHELL = /bin/bash
                                      SHLVL = 5
                                 SSH_CLIENT = 2607:f700:8000:12d:83c4:430f:bcf2:f536 44572 22
                             SSH_CONNECTION = 2607:f700:8000:12d:83c4:430f:bcf2:f536 44572 2607:f700:8001:132:117:3d30:fa10:c4a1 22
                                    SSH_TTY = /dev/pts/0
                                       TERM = xterm
                                     TRAVIS = true
                              TRAVIS_BRANCH = master
                           TRAVIS_BUILD_DIR = /home/travis/build/travis-perl/machineinfo
                            TRAVIS_BUILD_ID = 46980411
                        TRAVIS_BUILD_NUMBER = 29
                              TRAVIS_COMMIT = 16821b452c01c9d9787047e07c20d4243979d543
                        TRAVIS_COMMIT_RANGE = d22822c4a99e...16821b452c01
                              TRAVIS_JOB_ID = 46980413
                          TRAVIS_JOB_NUMBER = 29.1
                            TRAVIS_LANGUAGE = perl
                             TRAVIS_OS_NAME = linux
                        TRAVIS_PERL_VERSION = 5.20
                        TRAVIS_PULL_REQUEST = false
                           TRAVIS_REPO_SLUG = travis-perl/machineinfo
                     TRAVIS_SECURE_ENV_VARS = true
                                 TRAVIS_TAG = 
                                       USER = travis
                                          _ = /home/travis/perl5/perlbrew/perls/5.20/bin/perl
                               _system_arch = x86_64
                               _system_name = Ubuntu
                               _system_type = Linux
                            _system_version = 12.04
                                gvm_go_name = go1.3.3
                            gvm_pkgset_name = global
                        rvm_autoupdate_flag = 0
                               rvm_bin_path = /home/travis/.rvm/bin
                                   rvm_path = /home/travis/.rvm
                                 rvm_prefix = /home/travis
       rvm_silence_path_mismatch_check_flag = 1
                                rvm_version = 1.26.3 (1.26.3)

## CPU Info

Processor count: 32

    processor	: 0
    vendor_id	: AuthenticAMD
    cpu family	: 21
    model		: 2
    model name	: AMD Opteron(tm) Processor 6376                 
    stepping	: 0
    cpu MHz		: 2299.882
    cache size	: 2048 KB
    physical id	: 0
    siblings	: 16
    core id		: 0
    cpu cores	: 8
    apicid		: 32
    initial apicid	: 0
    fpu		: yes
    fpu_exception	: yes
    cpuid level	: 13
    wp		: yes
    flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nonstop_tsc extd_apicid amd_dcm aperfmperf pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 popcnt aes xsave avx f16c lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs xop skinit wdt lwp fma4 tce nodeid_msr tbm topoext perfctr_core arat cpb npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold bmi1
    bogomips	: 4599.76
    TLB size	: 1536 4K pages
    clflush size	: 64
    cache_alignment	: 64
    address sizes	: 48 bits physical, 48 bits virtual
    power management: ts ttp tm 100mhzsteps hwpstate cpb eff_freq_ro

## Processes
    USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
    root         1  2.8  0.0  24148  2144 ?        Ss   13:06   0:00 init
    root         2  0.0  0.0      0     0 ?        S    13:06   0:00 [kthreadd/198692]
    root         3  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [khelper/1986922]
    root         4  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root         5  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root         6  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root         7  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root         8  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root         9  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        10  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        11  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        12  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        13  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        14  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        15  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        16  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        17  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        18  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        19  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        20  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        21  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        22  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        23  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        24  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        25  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        26  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        27  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        28  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        29  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        30  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        31  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        32  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        33  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        34  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        35  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [rpciod/19869229]
    root        36  0.0  0.0      0     0 ?        S    13:06   0:00  \_ [nfsiod/19869229]
    root       149  0.0  0.0  17180   720 ?        S    13:06   0:00 upstart-udev-bridge --daemon
    root       154  0.0  0.0  21284  1092 ?        Ss   13:06   0:00 /sbin/udevd --daemon
    root       196  0.0  0.0  21280   656 ?        S    13:06   0:00  \_ /sbin/udevd --daemon
    root       198  0.0  0.0  21280   656 ?        S    13:06   0:00  \_ /sbin/udevd --daemon
    112        185  0.0  0.0  23768   756 ?        Ss   13:06   0:00 dbus-daemon --system --fork --activation=upstart
    syslog     248  1.5  0.0 177696  1636 ?        Sl   13:06   0:00 rsyslogd -c5
    root       275  0.0  0.0  15136   548 ?        S    13:06   0:00 upstart-socket-bridge --daemon
    root       278  0.0  0.0   4344   496 ?        S    13:06   0:00 /bin/sh /etc/network/if-up.d/ntpdate
    root       286  0.0  0.0   6304   544 ?        S    13:06   0:00  \_ lockfile-touch /var/lock/ntpdate-ifup
    root       290  0.0  0.0  14940  1076 ?        S<   13:06   0:00  \_ /usr/sbin/ntpdate -s ntp.ubuntu.com
    root       279  0.0  0.0   4348   464 ?        S    13:06   0:00 /bin/sh /etc/network/if-up.d/ntpdate
    root       283  0.0  0.0   6304   584 ?        S    13:06   0:00  \_ lockfile-create /var/lock/ntpdate-ifup
    root       358  0.0  0.0   4348   464 ?        S    13:06   0:00 /bin/sh /etc/network/if-up.d/ntpdate
    root       361  0.0  0.0   6304   584 ?        S    13:06   0:00  \_ lockfile-create /var/lock/ntpdate-ifup
    root       391  0.0  0.0  19060   920 ?        Ss   13:06   0:00 cron
    root       397  0.0  0.0  49980  2920 ?        Ss   13:06   0:00 /usr/sbin/sshd -D
    root       629  0.6  0.1  73384  3620 ?        Ss   13:06   0:00  \_ sshd: travis [priv] 
    travis     633  0.0  0.0  73384  1980 ?        S    13:06   0:00      \_ sshd: travis@pts/0  
    travis    1276 24.0  0.1  15208  4584 pts/0    Ss+  13:06   0:00          \_ /bin/bash /home/travis/build.sh
    travis    1749  0.0  0.0  12288  1444 pts/0    S+   13:06   0:00              \_ /bin/bash ./build
    travis    1750  0.0  0.0  12376  1572 pts/0    S+   13:06   0:00                  \_ /bin/bash ./info
    travis    1801  0.0  0.0  12376   712 pts/0    S+   13:06   0:00                      \_ /bin/bash ./info
    travis    1802  0.0  0.0  12376   744 pts/0    S+   13:06   0:00                          \_ /bin/bash ./info
    travis    1803  0.0  0.0  18224  1220 pts/0    R+   13:06   0:00                              \_ ps fuxawww
    mysql      423  3.2  3.4 908892 107024 ?       Ssl  13:06   0:00 /usr/sbin/mysqld
    root       463  0.0  0.0  14724  1268 ?        S    13:06   0:00 ping6 -c 1 2607:f700:0:ffff::6
    root       465  0.0  0.0  14724  1276 ?        S    13:06   0:00 ping6 -c 1 2a04:1b80:0:ffff::1
    root       467  0.0  0.0  14724  1272 ?        S    13:06   0:00 ping6 -c 1 2607:f700:8000::5
    root       469  0.0  0.0  14724  1264 ?        S    13:06   0:00 ping6 -c 1 2607:f700:8000::6
    postgres   489  5.3  0.4 135584 15680 ?        S    13:06   0:00 /usr/lib/postgresql/9.1/bin/postgres -D /var/ramfs/postgresql/9.1/main -c config_file=/etc/postgresql/9.1/main/postgresql.conf
    postgres   491  0.0  0.0 135584  1900 ?        Ss   13:06   0:00  \_ postgres: writer process                                                                                                      
    postgres   492  0.0  0.0 135584  1808 ?        Ss   13:06   0:00  \_ postgres: wal writer process                                                                                                  
    postgres   493  0.0  0.0 136456  2996 ?        Ss   13:06   0:00  \_ postgres: autovacuum launcher process                                                                                         
    postgres   494  0.0  0.0  96384  1760 ?        Ss   13:06   0:00  \_ postgres: stats collector process                                                                                             
    root       622  1.7  0.0   4344   740 ?        S    13:06   0:00 /bin/sh /etc/init.d/ondemand background
    root       628  0.0  0.0   4256   536 ?        S    13:06   0:00  \_ sleep 60


## Services
     [ - ]  bootlogd
     [ - ]  cassandra
     [ ? ]  console-setup
     [ ? ]  couchdb
     [ ? ]  cron
     [ ? ]  dbus
     [ ? ]  dmesg
     [ - ]  elasticsearch
     [ ? ]  hostname
     [ ? ]  hwclock
     [ ? ]  hwclock-save
     [ ? ]  killprocs
     [ - ]  memcached
     [ ? ]  module-init-tools
     [ - ]  mongodb
     [ ? ]  mysql
     [ - ]  neo4j
     [ ? ]  network-interface
     [ ? ]  network-interface-container
     [ ? ]  network-interface-security
     [ ? ]  networking
     [ ? ]  ondemand
     [ ? ]  plymouth
     [ ? ]  plymouth-log
     [ ? ]  plymouth-splash
     [ ? ]  plymouth-stop
     [ ? ]  plymouth-upstart-bridge
     [ + ]  postgresql
     [ ? ]  procps
     [ - ]  rabbitmq-server
     [ ? ]  rc.local
     [ ? ]  redis-server
     [ ? ]  resolvconf
     [ - ]  riak
     [ - ]  rsync
     [ ? ]  rsyslog
     [ ? ]  sendsigs
     [ ? ]  setvtrgb
     [ + ]  ssh
     [ - ]  stop-bootlogd
     [ - ]  stop-bootlogd-single
     [ ? ]  sudo
     [ ? ]  udev
     [ ? ]  udev-fallback-graphics
     [ ? ]  udev-finish
     [ ? ]  udevmonitor
     [ ? ]  udevtrigger
     [ ? ]  umountfs
     [ ? ]  umountnfs.sh
     [ ? ]  umountroot
     [ - ]  unattended-upgrades
     [ - ]  urandom
     [ - ]  x11-common


## Perls
      5.8 (5.8.9)
      5.10 (5.10.1)
      5.12 (5.12.5)
      5.14 (5.14.4)
      5.16 (5.16.3)
      5.18 (5.18.2)
      5.18-extras (5.18.2)
      5.18-shrplib (5.18.2)
    * 5.20 (5.20.0)
      5.20-extras (5.20.0)
      5.20-shrplib (5.20.0)
      5.21 (5.21.0)

## Packages

    Desired=Unknown/Install/Remove/Purge/Hold
    | Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
    |/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
    ||/ Name                                Version                                             Description
    +++-===================================-===================================================-===============================================================================
    ii  adduser                             3.113ubuntu2                                        add and remove users and groups
    ii  ant                                 1.8.2-4build1                                       Java based build tool like make
    ii  ant-contrib                         1.0~b3+svn177-4                                     collection of tasks, types and other tools for Apache Ant
    ii  ant-optional                        1.8.2-4build1                                       Java based build tool like make - optional libraries
    ii  apt                                 0.8.16~exp12ubuntu10                                commandline package manager
    ii  apt-utils                           0.8.16~exp12ubuntu10                                package managment related utility programs
    ii  autoconf                            2.68-1ubuntu2                                       automatic configure script builder
    ii  autogen                             1:5.12-0.1ubuntu1                                   automated text file generator
    ii  automake                            1:1.11.3-1ubuntu2                                   Tool for generating GNU Standards-compliant Makefiles
    ii  autotools-dev                       20120210.1ubuntu1                                   Update infrastructure for config.{guess,sub} files
    ii  base-files                          6.5ubuntu6                                          Debian base system miscellaneous files
    ii  base-passwd                         3.5.24                                              Debian base system master password and group files
    ii  bash                                4.2-2ubuntu2.6                                      GNU Bourne Again SHell
    ii  binutils                            2.22-6ubuntu1                                       GNU assembler, linker and binary utilities
    ii  binutils-doc                        2.22-6ubuntu1.1                                     Documentation for the GNU assembler, linker and binary utilities
    ii  bison                               1:2.5.dfsg-2.1                                      YACC-compatible parser generator
    ii  bsdmainutils                        8.2.3ubuntu1                                        collection of more utilities from FreeBSD
    ii  bsdutils                            1:2.20.1-1ubuntu3                                   Basic utilities from 4.4BSD-Lite
    ii  build-essential                     11.5ubuntu2                                         Informational list of build-essential packages
    ii  busybox-initramfs                   1:1.18.5-1ubuntu4                                   Standalone shell setup for initramfs
    ii  bzip2                               1.0.6-1                                             high-quality block-sorting file compressor - utilities
    ii  bzr                                 2.5.1-0ubuntu2                                      easy to use distributed version control system
    ii  ca-certificates                     20130906ubuntu0.12.04.1                             Common CA certificates
    ii  ca-certificates-java                20110912ubuntu6                                     Common CA certificates (JKS keystore)
    ii  chef                                11.8.2-1.ubuntu.12.04                               The full stack of chef
    ii  chromium-browser                    37.0.2062.120-0ubuntu0.12.04.1~pkg917               Chromium browser
    ii  chromium-browser-l10n               37.0.2062.120-0ubuntu0.12.04.1~pkg917               chromium-browser language packages
    ii  chromium-codecs-ffmpeg-extra        37.0.2062.120-0ubuntu0.12.04.1~pkg917               Extra ffmpeg codecs for the Chromium Browser
    ii  cmake                               2.8.7-0ubuntu5                                      cross-platform, open-source make system
    ii  cmake-data                          2.8.7-0ubuntu5                                      CMake data files (modules, templates and documentation)
    ii  cmap-adobe-japan1                   0+20090930-2                                        CMaps for Adobe-Japan1
    ii  comerr-dev                          2.1-1.42-1ubuntu2                                   common error description library - headers and static libraries
    ii  console-setup                       1.70ubuntu5                                         console font and keymap setup program
    ii  coreutils                           8.13-3ubuntu3                                       GNU core utilities
    ii  couchdb                             1.6.1-0ubuntu1                                      RESTful document oriented database - system-wide instance
    ii  couchdb-bin                         1.6.1-0ubuntu1                                      RESTful document oriented database
    ii  couchdb-common                      1.6.1-0ubuntu1                                      RESTful document oriented database - common data
    ii  cpio                                2.11-7ubuntu3                                       GNU cpio -- a program to manage archives of files
    ii  cpp                                 4:4.6.3-1ubuntu5                                    GNU C preprocessor (cpp)
    ii  cpp-4.6                             4.6.3-1ubuntu5                                      GNU C preprocessor
    ii  cron                                3.0pl1-120ubuntu3                                   process scheduling daemon
    ii  curl                                7.22.0-3ubuntu4                                     Get a file from an HTTP, HTTPS or FTP server
    ii  dash                                0.5.7-2ubuntu2                                      POSIX-compliant shell
    ii  dbus                                1.4.18-1ubuntu1.7                                   simple interprocess messaging system (daemon and utilities)
    ii  dbus-x11                            1.4.18-1ubuntu1.7                                   simple interprocess messaging system (X11 deps)
    ii  dconf-gsettings-backend             0.12.0-0ubuntu1.1                                   simple configuration storage system - GSettings back-end
    ii  dconf-service                       0.12.0-0ubuntu1.1                                   simple configuration storage system - D-Bus service
    ii  debconf                             1.5.42ubuntu1                                       Debian configuration management system
    ii  debconf-i18n                        1.5.42ubuntu1                                       full internationalization support for debconf
    ii  debconf-utils                       1.5.42ubuntu1                                       debconf utilities
    ii  debhelper                           9.20120115ubuntu3                                   helper programs for debian/rules
    ii  debianutils                         4.2.1ubuntu2                                        Miscellaneous utilities specific to Debian
    ii  dh-apparmor                         2.7.102-0ubuntu3.10                                 AppArmor debhelper routines
    ii  diffutils                           1:3.2-1ubuntu1                                      File comparison utilities
    ii  dmsetup                             2:1.02.48-4ubuntu7                                  The Linux Kernel Device Mapper userspace library
    ii  dpkg                                1.16.1.2ubuntu7                                     Debian package management system
    ii  dpkg-dev                            1.16.1.2ubuntu7                                     Debian package development tools
    ii  e2fslibs                            1.42-1ubuntu2                                       ext2/ext3/ext4 file system libraries
    ii  e2fsprogs                           1.42-1ubuntu2                                       ext2/ext3/ext4 file system utilities
    ii  eject                               2.1.5+deb1+cvs20081104-9                            ejects CDs and operates CD-Changers under Linux
    ii  elasticsearch                       1.4.0                                               Open Source, Distributed, RESTful Search Engine
    ii  emacs23-bin-common                  23.3+1-1ubuntu9.2                                   The GNU Emacs editor's shared, architecture dependent files
    ii  emacs23-common                      23.3+1-1ubuntu9.2                                   The GNU Emacs editor's shared, architecture independent infrastructure
    ii  emacs23-nox                         23.3+1-1ubuntu9.2                                   The GNU Emacs editor (without X support)
    ii  emacsen-common                      1.4.22ubuntu1                                       Common facilities for all emacsen
    ii  erlang-asn1                         1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP modules for ASN.1 support
    ii  erlang-base-hipe                    1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP HiPE enabled virtual machine and base applications
    ii  erlang-corba                        1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP applications for CORBA support
    ii  erlang-crypto                       1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP cryptographic modules
    ii  erlang-dev                          1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP development libraries and headers
    ii  erlang-diameter                     1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP implementation of RFC 3588 protocol
    ii  erlang-docbuilder                   1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP application for building HTML documentation
    ii  erlang-edoc                         1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP module for generating documentation
    ii  erlang-erl-docgen                   1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP documentation stylesheets
    ii  erlang-eunit                        1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP module for unit testing
    ii  erlang-ic                           1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP IDL compiler
    ii  erlang-inets                        1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP Internet clients and servers
    ii  erlang-inviso                       1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP trace tool
    ii  erlang-mnesia                       1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP distributed relational/object hybrid database
    ii  erlang-nox                          1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP applications that don't require X Window System
    ii  erlang-odbc                         1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP interface to SQL databases
    ii  erlang-os-mon                       1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP operating system monitor
    ii  erlang-parsetools                   1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP parsing tools
    ii  erlang-percept                      1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP concurrency profiling tool
    ii  erlang-public-key                   1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP public key infrastructure
    ii  erlang-runtime-tools                1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP runtime tracing/debugging tools
    ii  erlang-snmp                         1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP SNMP applications
    ii  erlang-ssh                          1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP implementation of SSH protocol
    ii  erlang-ssl                          1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP implementation of SSL
    ii  erlang-syntax-tools                 1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP modules for handling abstract Erlang syntax trees
    ii  erlang-tools                        1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP various tools
    ii  erlang-webtool                      1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP helper for web-based tools
    ii  erlang-xmerl                        1:14.b.4-dfsg-1ubuntu1                              Erlang/OTP XML tools
    ii  fakeroot                            1.18.2-1                                            tool for simulating superuser privileges
    ii  file                                5.09-2                                              Determines file type using "magic" numbers
    ii  findutils                           4.4.2-4ubuntu1                                      utilities for finding files--find, xargs
    ii  firefox-locale-en                   11.0+build1-0ubuntu4                                English language pack for Firefox
    ii  flex                                2.5.35-10ubuntu3                                    A fast lexical analyzer generator.
    ii  fontconfig                          2.8.0-3ubuntu9.1                                    generic font configuration library - support binaries
    ii  fontconfig-config                   2.8.0-3ubuntu9.1                                    generic font configuration library - configuration
    ii  g++                                 4:4.6.3-1ubuntu5                                    GNU C++ compiler
    ii  g++-4.6                             4.6.3-1ubuntu5                                      GNU C++ compiler
    ii  gawk                                1:3.1.8+dfsg-0.1ubuntu1                             GNU awk, a pattern scanning and processing language
    ii  gcc                                 4:4.6.3-1ubuntu5                                    GNU C compiler
    ii  gcc-4.6                             4.6.3-1ubuntu5                                      GNU C compiler
    ii  gcc-4.6-base                        4.6.3-1ubuntu5                                      GCC, the GNU Compiler Collection (base package)
    ii  gconf-service                       3.2.5-0ubuntu2                                      GNOME configuration database system (D-Bus service)
    ii  gconf-service-backend               3.2.5-0ubuntu2                                      GNOME configuration database system (D-Bus service)
    ii  gconf2                              3.2.5-0ubuntu2                                      GNOME configuration database system (support tools)
    ii  gconf2-common                       3.2.5-0ubuntu2                                      GNOME configuration database system (common files)
    ii  gettext                             0.18.1.1-5ubuntu3                                   GNU Internationalization utilities
    ii  gettext-base                        0.18.1.1-5ubuntu3                                   GNU Internationalization utilities for the base system
    ii  ghostscript                         9.05~dfsg-0ubuntu4.2                                interpreter for the PostScript language and for PDF
    ii  gir1.2-atk-1.0                      2.4.0-0ubuntu1                                      ATK accessibility toolkit (GObject introspection)
    ii  gir1.2-freedesktop                  1.32.0-1                                            Introspection data for some FreeDesktop components
    ii  gir1.2-gdkpixbuf-2.0                2.26.1-1ubuntu1.1                                   GDK Pixbuf library - GObject-Introspection
    ii  gir1.2-glib-2.0                     1.32.0-1                                            Introspection data for GLib, GObject, Gio and GModule
    ii  gir1.2-gtk-2.0                      2.24.10-0ubuntu6.1                                  GTK+ graphical user interface library -- gir bindings
    ii  gir1.2-pango-1.0                    1.30.0-0ubuntu3.1                                   Layout and rendering of internationalized text - gir bindings
    ii  gir1.2-rsvg-2.0                     2.36.1-0ubuntu1.1                                   gir files for renderer library for SVG files
    ii  git                                 1:1.8.5.5-0ppa2~precise1                            fast, scalable, distributed revision control system
    ii  git-man                             1:1.8.5.5-0ppa2~precise1                            fast, scalable, distributed revision control system (manual pages)
    ii  gnupg                               1.4.11-3ubuntu2                                     GNU privacy guard - a free PGP replacement
    ii  gpgv                                1.4.11-3ubuntu2                                     GNU privacy guard - signature verification tool
    ii  grep                                2.10-1                                              GNU grep, egrep and fgrep
    ii  groff-base                          1.21-7                                              GNU troff text-formatting system (base system components)
    ii  gs-cjk-resource                     1.20100103-3                                        Resource files for gs-cjk, ghostscript CJK-TrueType extension
    ii  gsfonts                             1:8.11+urwcyr1.0.7~pre44-4.2ubuntu1                 Fonts for the Ghostscript interpreter(s)
    ii  gsfonts-x11                         0.22                                                Make Ghostscript fonts available to X11
    ii  guile-1.8-libs                      1.8.8+1-6ubuntu2                                    Core Guile libraries
    ii  gzip                                1.4-1ubuntu2                                        GNU compression utilities
    ii  hicolor-icon-theme                  0.12-1ubuntu2                                       default fallback theme for FreeDesktop.org icon themes
    ii  hostname                            3.06ubuntu1                                         utility to set/show the host name or domain name
    ii  html2text                           1.3.2a-15                                           advanced HTML to text converter
    ii  icedtea-6-jre-cacao                 6b33-1.13.5-1ubuntu0.12.04                          Alternative JVM for OpenJDK, using Cacao
    ii  icedtea-6-jre-jamvm                 6b33-1.13.5-1ubuntu0.12.04                          Alternative JVM for OpenJDK, using JamVM
    ii  ifupdown                            0.7~beta2ubuntu8                                    high level tools to configure network interfaces
    ii  imagemagick                         8:6.6.9.7-5ubuntu3.3                                image manipulation programs
    ii  imagemagick-common                  8:6.6.9.7-5ubuntu3.3                                image manipulation programs -- infrastructure
    ii  initramfs-tools                     0.99ubuntu13                                        tools for generating an initramfs
    ii  initramfs-tools-bin                 0.99ubuntu13                                        binaries used by initramfs-tools
    ii  initscripts                         2.88dsf-13.10ubuntu11                               scripts for initializing and shutting down the system
    ii  insserv                             1.14.0-2.1ubuntu2                                   Tool to organize boot sequence using LSB init.d script dependencies
    ii  intltool-debian                     0.35.0+20060710.1                                   Help i18n of RFC822 compliant config files
    ii  iproute                             20111117-1ubuntu2                                   networking and traffic control tools
    ii  iptables                            1.4.12-1ubuntu4                                     administration tools for packet filtering and NAT
    ii  iputils-ping                        3:20101006-1ubuntu1                                 Tools to test the reachability of network hosts
    ii  isc-dhcp-client                     4.1.ESV-R4-0ubuntu5                                 ISC DHCP client
    ii  isc-dhcp-common                     4.1.ESV-R4-0ubuntu5                                 common files used by all the isc-dhcp* packages
    ii  iso-codes                           3.31-1                                              ISO language, territory, currency, script codes and their translations
    ii  ivy                                 2.2.0-2                                             The agile dependency manager
    ii  java-common                         0.43ubuntu2                                         Base of all Java packages
    ii  jsvc                                1.0.8-1                                             wrapper to launch Java applications as daemons
    ii  kbd                                 1.15.2-3ubuntu4                                     Linux console font and keytable utilities
    ii  keyboard-configuration              1.70ubuntu5                                         system-wide keyboard preferences
    ii  klibc-utils                         1.5.25-1ubuntu2                                     small utilities built with klibc for early boot
    ii  krb5-multidev                       1.10+dfsg~beta1-2ubuntu0.5                          Development files for MIT Kerberos without Heimdal conflict
    ii  language-pack-en                    1:12.04+20120417                                    translation updates for language English
    ii  language-pack-en-base               1:12.04+20120417                                    translations for language English
    ii  less                                444-1ubuntu1                                        pager program similar to more
    ii  libacl1                             2.2.51-5ubuntu1                                     Access control list shared library
    ii  libalgorithm-diff-perl              1.19.02-2                                           module to find differences between files
    ii  libalgorithm-diff-xs-perl           0.04-2build2                                        module to find differences between files (XS accelerated)
    ii  libalgorithm-merge-perl             0.08-2                                              Perl module for three-way merge of textual data
    ii  libapr1                             1.4.6-1                                             Apache Portable Runtime Library
    ii  libaprutil1                         1.3.12+dfsg-3                                       Apache Portable Runtime Utility Library
    ii  libapt-inst1.4                      0.8.16~exp12ubuntu10                                deb package format runtime library
    ii  libapt-pkg4.12                      0.8.16~exp12ubuntu10                                package managment runtime library
    ii  libarchive12                        3.0.3-6ubuntu1                                      Multi-format archive and compression library (shared library)
    ii  libarmadillo2                       1:2.4.2+dfsg-2                                      streamlined C++ linear algebra library
    ii  libasn1-8-heimdal                   1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - ASN.1 library
    ii  libasound2                          1.0.25-1ubuntu10.2                                  shared library for ALSA applications
    ii  libatk1.0-0                         2.4.0-0ubuntu1                                      ATK accessibility toolkit
    ii  libatk1.0-data                      2.4.0-0ubuntu1                                      Common files for the ATK accessibility toolkit
    ii  libatk1.0-dev                       2.4.0-0ubuntu1                                      Development files for the ATK accessibility toolkit
    ii  libattr1                            1:2.4.46-5ubuntu1                                   Extended attribute shared library
    ii  libaudio2                           1.9.3-4ubuntu0.1                                    Network Audio System - shared libraries
    ii  libavahi-client3                    0.6.30-5ubuntu2.1                                   Avahi client library
    ii  libavahi-common-data                0.6.30-5ubuntu2.1                                   Avahi common data files
    ii  libavahi-common3                    0.6.30-5ubuntu2.1                                   Avahi common library
    ii  libbison-dev                        1:2.5.dfsg-2.1                                      YACC-compatible parser generator - development library
    ii  libblas3gf                          1.2.20110419-2ubuntu1                               Basic Linear Algebra Reference implementations, shared library
    ii  libblkid1                           2.20.1-1ubuntu3                                     block device id library
    ii  libbsd0                             0.3.0-2                                             utility functions from BSD systems - shared library
    ii  libbz2-1.0                          1.0.6-1                                             high-quality block-sorting file compressor library - runtime
    ii  libbz2-dev                          1.0.6-1                                             high-quality block-sorting file compressor library - development
    ii  libc-bin                            2.15-0ubuntu10                                      Embedded GNU C Library: Binaries
    ii  libc-dev-bin                        2.15-0ubuntu10                                      Embedded GNU C Library: Development binaries
    ii  libc6                               2.15-0ubuntu10                                      Embedded GNU C Library: Shared libraries
    ii  libc6-dev                           2.15-0ubuntu10                                      Embedded GNU C Library: Development Libraries and Header Files
    ii  libcairo-gobject2                   1.10.2-6.1ubuntu3                                   The Cairo 2D vector graphics library (GObject library)
    ii  libcairo-script-interpreter2        1.10.2-6.1ubuntu3                                   The Cairo 2D vector graphics library (script interpreter)
    ii  libcairo2                           1.10.2-6.1ubuntu3                                   The Cairo 2D vector graphics library
    ii  libcairo2-dev                       1.10.2-6.1ubuntu3                                   Development files for the Cairo 2D graphics library
    ii  libcanberra-gtk3-0                  0.28-3ubuntu3                                       GTK+ 3.0 helper for playing widget event sounds with libcanberra
    ii  libcanberra-gtk3-module             0.28-3ubuntu3                                       translates GTK3 widgets signals to event sounds
    ii  libcanberra0                        0.28-3ubuntu3                                       simple abstract interface for playing event sounds
    ii  libcap2                             1:2.22-1ubuntu3                                     support for getting/setting POSIX.1e capabilities
    ii  libcdt4                             2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - cdt library
    ii  libcgraph5                          2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - cgraph library
    ii  libclass-isa-perl                   0.36-3                                              report the search path for a class's ISA tree
    ii  libcomerr2                          1.42-1ubuntu2                                       common error description library
    ii  libcommons-daemon-java              1.0.8-1                                             library to launch Java applications as daemons
    ii  libcroco3                           0.6.5-1ubuntu0.1                                    Cascading Style Sheet (CSS) parsing and manipulation toolkit
    ii  libcups2                            1.5.3-0ubuntu8.5                                    Common UNIX Printing System(tm) - Core library
    ii  libcupsimage2                       1.5.3-0ubuntu8.5                                    Common UNIX Printing System(tm) - Raster image library
    ii  libcurl3                            7.22.0-3ubuntu4.11                                  Multi-protocol file transfer library (OpenSSL)
    ii  libcurl3-gnutls                     7.22.0-3ubuntu4                                     Multi-protocol file transfer library (GnuTLS)
    ii  libcurl4-openssl-dev                7.22.0-3ubuntu4.11                                  Development files and documentation for libcurl (OpenSSL)
    ii  libdap11                            3.11.1-10                                           Open-source Project for a Network Data Access Protocol library
    ii  libdapclient3                       3.11.1-10                                           Client library for the Network Data Access Protocol
    ii  libdatrie1                          0.2.5-3                                             Double-array trie library
    ii  libdb4.8                            4.8.30-11ubuntu1                                    Berkeley v4.8 Database Libraries [runtime]
    ii  libdb5.1                            5.1.25-11build1                                     Berkeley v5.1 Database Libraries [runtime]
    ii  libdbd-mysql-perl                   4.020-1build2                                       Perl5 database interface to the MySQL database
    ii  libdbi-perl                         1.616-1build2                                       Perl Database Interface (DBI)
    ii  libdbus-1-3                         1.4.18-1ubuntu1                                     simple interprocess messaging system (library)
    ii  libdbus-glib-1-2                    0.98-1ubuntu1.1                                     simple interprocess messaging system (GLib-based shared library)
    ii  libdconf0                           0.12.0-0ubuntu1.1                                   simple configuration storage system - runtime library
    ii  libdevmapper1.02.1                  2:1.02.48-4ubuntu7                                  The Linux Kernel Device Mapper userspace library
    ii  libdjvulibre-dev                    3.5.24-9ubuntu0.1                                   Development files for the DjVu image format
    ii  libdjvulibre-text                   3.5.24-9ubuntu0.1                                   Linguistic support files for libdjvulibre
    ii  libdjvulibre21                      3.5.24-9ubuntu0.1                                   Runtime support for the DjVu image format
    ii  libdpkg-perl                        1.16.1.2ubuntu7                                     Dpkg perl modules
    ii  libdrm-dev                          2.4.52-1~precise1                                   Userspace interface to kernel DRM services -- development files
    ii  libdrm-intel1                       2.4.52-1~precise1                                   Userspace interface to intel-specific kernel DRM services -- runtime
    ii  libdrm-nouveau1a                    2.4.52-1~precise1                                   Userspace interface to nouveau-specific kernel DRM services -- runtime
    ii  libdrm-nouveau2                     2.4.52-1~precise1                                   Userspace interface to nouveau-specific kernel DRM services -- runtime
    ii  libdrm-radeon1                      2.4.52-1~precise1                                   Userspace interface to radeon-specific kernel DRM services -- runtime
    ii  libdrm2                             2.4.52-1~precise1                                   Userspace interface to kernel DRM services -- runtime
    ii  libedit2                            2.11-20080614-3ubuntu2                              BSD editline and history libraries
    ii  libelf1                             0.152-1ubuntu3                                      library to read and write ELF files
    ii  libepsilon0                         0.9.1-2build1                                       A library for wavelet image compression
    ii  liberror-perl                       0.17-1                                              Perl module for error/exception handling in an OO-ish way
    ii  libevent-2.0-5                      2.0.16-stable-1                                     Asynchronous event notification library
    ii  libexif-dev                         0.6.20-2ubuntu0.1                                   library to parse EXIF files (development files)
    ii  libexif12                           0.6.20-2ubuntu0.1                                   library to parse EXIF files
    ii  libexpat1                           2.0.1-7.2ubuntu1.1                                  XML parsing C library - runtime library
    ii  libexpat1-dev                       2.0.1-7.2ubuntu1.1                                  XML parsing C library - development kit
    ii  libffi-dev                          3.0.11~rc1-5                                        Foreign Function Interface library (development files)
    ii  libffi6                             3.0.11~rc1-5                                        Foreign Function Interface library runtime
    ii  libfile-basedir-perl                0.03-1fakesync1                                     Perl module to use the freedesktop basedir specification
    ii  libfile-desktopentry-perl           0.04-3                                              Perl module to handle freedesktop .desktop files
    ii  libfile-mimeinfo-perl               0.15-2                                              Perl module to determine file types
    ii  libfl-dev                           2.5.35-10ubuntu3                                    static library for flex (a fast lexical analyzer generator).
    ii  libfontconfig1                      2.8.0-3ubuntu9.1                                    generic font configuration library - runtime
    ii  libfontconfig1-dev                  2.8.0-3ubuntu9.1                                    generic font configuration library - development
    ii  libfontenc1                         1:1.1.0-1                                           X11 font encoding library
    ii  libfreetype6                        2.4.8-1ubuntu2.1                                    FreeType 2 font engine, shared library files
    ii  libfreetype6-dev                    2.4.8-1ubuntu2.1                                    FreeType 2 font engine, development files
    ii  libfreexl1                          1.0.0e-2~precise1                                   library for direct reading of Microsoft Excel spreadsheets
    ii  libfribidi0                         0.19.2-1                                            Free Implementation of the Unicode BiDi algorithm
    ii  libgcc1                             1:4.6.3-1ubuntu5                                    GCC support library
    ii  libgconf-2-4                        3.2.5-0ubuntu2                                      GNOME configuration database system (shared libraries)
    ii  libgcrypt11                         1.5.0-3ubuntu0.3                                    LGPL Crypto library - runtime library
    ii  libgcrypt11-dev                     1.5.0-3ubuntu0.3                                    LGPL Crypto library - development files
    ii  libgd2-noxpm                        2.0.36~rc1~dfsg-6ubuntu2                            GD Graphics Library version 2 (without XPM support)
    ii  libgdal1                            1.9.2-2~precise4                                    Geospatial Data Abstraction Library
    ii  libgdbm-dev                         1.8.3-10                                            GNU dbm database routines (development files)
    ii  libgdbm3                            1.8.3-10                                            GNU dbm database routines (runtime version)
    ii  libgdk-pixbuf2.0-0                  2.26.1-1ubuntu1.1                                   GDK Pixbuf library
    ii  libgdk-pixbuf2.0-common             2.26.1-1ubuntu1.1                                   GDK Pixbuf library - data files
    ii  libgdk-pixbuf2.0-dev                2.26.1-1ubuntu1.1                                   GDK Pixbuf library (development files)
    ii  libgeos-3.2.2                       3.2.2-3ubuntu1                                      Geometry engine for Geographic Information Systems - C++ Library
    ii  libgeos-3.3.8                       3.3.8-2~precise1                                    Geometry engine for Geographic Information Systems - C++ Library
    ii  libgeos-c1                          3.3.8-2~precise1                                    Geometry engine for Geographic Information Systems - C Library
    ii  libgeos-dev                         3.3.8-2~precise1                                    Geometry engine for GIS - Development files
    ii  libgettextpo0                       0.18.1.1-5ubuntu3                                   GNU Internationalization library
    ii  libgfortran3                        4.6.3-1ubuntu5                                      Runtime library for GNU Fortran applications
    ii  libgif4                             4.1.6-9ubuntu1                                      library for GIF images (library)
    ii  libgirepository-1.0-1               1.32.0-1                                            Library for handling GObject introspection data (runtime library)
    ii  libgl1-mesa-dev                     8.0.4-0ubuntu0.7                                    free implementation of the OpenGL API -- GLX development files
    ii  libgl1-mesa-dri                     8.0.4-0ubuntu0.7                                    free implementation of the OpenGL API -- DRI modules
    ii  libgl1-mesa-glx                     8.0.4-0ubuntu0.7                                    free implementation of the OpenGL API -- GLX runtime
    ii  libglapi-mesa                       8.0.4-0ubuntu0.7                                    free implementation of the GL API -- shared library
    ii  libglib2.0-0                        2.32.4-0ubuntu1                                     GLib library of C routines
    ii  libglib2.0-bin                      2.32.4-0ubuntu1                                     Programs for the GLib library
    ii  libglib2.0-data                     2.32.4-0ubuntu1                                     Common files for GLib library
    ii  libglib2.0-dev                      2.32.4-0ubuntu1                                     Development files for the GLib library
    ii  libglu1-mesa                        8.0.4-0ubuntu0.7                                    Mesa OpenGL utility library (GLU)
    ii  libglu1-mesa-dev                    8.0.4-0ubuntu0.7                                    Mesa OpenGL utility library -- development files
    ii  libgmp10                            2:5.0.2+dfsg-2ubuntu1                               Multiprecision arithmetic library
    ii  libgnutls-dev                       2.12.14-5ubuntu3.8                                  GNU TLS library - development files
    ii  libgnutls-openssl27                 2.12.14-5ubuntu3.8                                  GNU TLS library - OpenSSL wrapper
    ii  libgnutls26                         2.12.14-5ubuntu3.8                                  GNU TLS library - runtime library
    ii  libgnutlsxx27                       2.12.14-5ubuntu3.8                                  GNU TLS library - C++ runtime library
    ii  libgomp1                            4.6.3-1ubuntu5                                      GCC OpenMP (GOMP) support library
    ii  libgpg-error-dev                    1.10-2ubuntu1                                       library for common error values and messages in GnuPG components (development)
    ii  libgpg-error0                       1.10-2ubuntu1                                       library for common error values and messages in GnuPG components
    ii  libgpm2                             1.20.4-4                                            General Purpose Mouse - shared library
    ii  libgraph4                           2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - graph library
    ii  libgraphviz-dev                     2.26.3-10ubuntu1.1                                  graphviz libs and headers against which to build applications
    ii  libgs9                              9.05~dfsg-0ubuntu4.2                                interpreter for the PostScript language and for PDF - Library
    ii  libgs9-common                       9.05~dfsg-0ubuntu4.2                                interpreter for the PostScript language and for PDF - common files
    ii  libgssapi-krb5-2                    1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - krb5 GSS-API Mechanism
    ii  libgssapi3-heimdal                  1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - GSSAPI support library
    ii  libgssrpc4                          1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - GSS enabled ONCRPC
    ii  libgstreamer-plugins-base0.10-0     0.10.36-1ubuntu0.1                                  GStreamer libraries from the "base" set
    ii  libgstreamer0.10-0                  0.10.36-1ubuntu1                                    Core GStreamer libraries and elements
    ii  libgtk-3-0                          3.4.2-0ubuntu0.8                                    GTK+ graphical user interface library
    ii  libgtk-3-bin                        3.4.2-0ubuntu0.8                                    programs for the GTK+ graphical user interface library
    ii  libgtk-3-common                     3.4.2-0ubuntu0.8                                    common files for the GTK+ graphical user interface library
    ii  libgtk2.0-0                         2.24.10-0ubuntu6.1                                  GTK+ graphical user interface library
    ii  libgtk2.0-bin                       2.24.10-0ubuntu6.1                                  programs for the GTK+ graphical user interface library
    ii  libgtk2.0-common                    2.24.10-0ubuntu6.1                                  common files for the GTK+ graphical user interface library
    ii  libgtk2.0-dev                       2.24.10-0ubuntu6.1                                  development files for the GTK+ library
    ii  libgvc5                             2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - gvc library
    ii  libgvpr1                            2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - gvpr library
    ii  libhashkit0                         0.44-1.1build1                                      The hashing functions and algorithms used by libmemcached
    ii  libhcrypto4-heimdal                 1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - crypto library
    ii  libhdf4-0-alt                       4.2r4-12build1                                      The Hierarchical Data Format library -- library package
    ii  libhdf5-serial-1.8.4                1.8.4-patch1-3ubuntu2                               Hierarchical Data Format 5 (HDF5) - runtime files - serial version
    ii  libheimbase1-heimdal                1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - Base library
    ii  libheimntlm0-heimdal                1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - NTLM support library
    ii  libhtml-template-perl               2.10-1                                              module for using HTML Templates with Perl
    ii  libhx509-5-heimdal                  1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - X509 support library
    ii  libice-dev                          2:1.0.7-2build1                                     X11 Inter-Client Exchange library (development headers)
    ii  libice6                             2:1.0.7-2build1                                     X11 Inter-Client Exchange library
    ii  libicu48                            4.8.1.1-3ubuntu0.1                                  International Components for Unicode
    ii  libidn11                            1.23-2                                              GNU Libidn library, implementation of IETF IDN specifications
    ii  libidn11-dev                        1.23-2                                              Development files for GNU Libidn, an IDN library
    ii  libijs-0.35                         0.35-8                                              IJS raster image transport protocol: shared library
    ii  libilmbase-dev                      1.0.1-3build2                                       development files for IlmBase
    ii  libilmbase6                         1.0.1-3build2                                       several utility libraries from ILM used by OpenEXR
    ii  libjasper-dev                       1.900.1-13                                          Development files for the JasPer JPEG-2000 library
    ii  libjasper1                          1.900.1-13                                          JasPer JPEG-2000 runtime library
    ii  libjbig2dec0                        0.11-1ubuntu1                                       JBIG2 decoder library - shared libraries
    ii  libjpeg-dev                         8c-2ubuntu7                                         Independent JPEG Group's JPEG runtime library (dependency package)
    ii  libjpeg-turbo8                      1.1.90+svn733-0ubuntu4.4                            IJG JPEG compliant runtime library.
    ii  libjpeg-turbo8-dev                  1.1.90+svn733-0ubuntu4.4                            Development files for the IJG JPEG library
    ii  libjpeg8                            8c-2ubuntu7                                         Independent JPEG Group's JPEG runtime library (dependency package)
    ii  libjpeg8-dev                        8c-2ubuntu7                                         Independent JPEG Group's JPEG runtime library (dependency package)
    ii  libjs-jquery                        1.7.1-1ubuntu1                                      JavaScript library for dynamic web applications
    ii  libjson0                            0.9-1ubuntu1.1                                      JSON manipulation library - shared library
    ii  libk5crypto3                        1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - Crypto Library
    ii  libkadm5clnt-mit8                   1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - Administration Clients
    ii  libkadm5srv-mit8                    1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - KDC and Admin Server
    ii  libkdb5-6                           1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - Kerberos database
    ii  libkeyutils1                        1.5.2-2                                             Linux Key Management Utilities (library)
    ii  libklibc                            1.5.25-1ubuntu2                                     minimal libc subset for use with initramfs
    ii  libkrb5-26-heimdal                  1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - libraries
    ii  libkrb5-3                           1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries
    ii  libkrb5-dev                         1.10+dfsg~beta1-2ubuntu0.5                          Headers and development libraries for MIT Kerberos
    ii  libkrb5support0                     1.10+dfsg~beta1-2ubuntu0.5                          MIT Kerberos runtime libraries - Support library
    ii  liblapack3gf                        3.3.1-1                                             library of linear algebra routines 3 - shared version
    ii  liblcms1                            1.19.dfsg-1ubuntu3                                  Little CMS color management library
    ii  liblcms1-dev                        1.19.dfsg-1ubuntu3                                  Litle CMS color management library development headers
    ii  liblcms2-2                          2.2+git20110628-2ubuntu3.1                          Little CMS 2 color management library
    ii  libldap-2.4-2                       2.4.28-1.1ubuntu4.4                                 OpenLDAP libraries
    ii  libldap2-dev                        2.4.28-1.1ubuntu4.4                                 OpenLDAP development libraries
    ii  libllvm3.0                          3.0-4ubuntu1                                        Low-Level Virtual Machine (LLVM), runtime library
    ii  liblocale-gettext-perl              1.05-7build1                                        module using libc functions for internationalization in Perl
    ii  liblockfile-bin                     1.09-3                                              support binaries for and cli utilities based on liblockfile
    ii  liblockfile1                        1.09-3                                              NFS-safe locking library
    ii  liblqr-1-0                          0.4.1-1.1                                           converts plain array images into multi-size representation
    ii  liblqr-1-0-dev                      0.4.1-1.1                                           converts plain array images into multi-size representation (developments files)
    ii  libltdl-dev                         2.4.2-1ubuntu1                                      A system independent dlopen wrapper for GNU libtool
    ii  libltdl7                            2.4.2-1ubuntu1                                      A system independent dlopen wrapper for GNU libtool
    ii  liblwgeom-2.1.4                     2.1.4+dfsg-1.pgdg12.4+2                             PostGIS "Lightweight Geometry" library
    ii  liblzma5                            5.1.1alpha+20110809-3                               XZ-format compression library
    ii  libmagic1                           5.09-2                                              File type determination library using "magic" numbers
    ii  libmagickcore-dev                   8:6.6.9.7-5ubuntu3.3                                low-level image manipulation library - development files
    ii  libmagickcore4                      8:6.6.9.7-5ubuntu3.3                                low-level image manipulation library
    ii  libmagickcore4-extra                8:6.6.9.7-5ubuntu3.3                                low-level image manipulation library - extra codecs
    ii  libmagickwand-dev                   8:6.6.9.7-5ubuntu3.3                                image manipulation library - development files
    ii  libmagickwand4                      8:6.6.9.7-5ubuntu3.3                                image manipulation library
    ii  libmail-sendmail-perl               0.79.16-1                                           Send email from a perl script
    ii  libmemcached-dev                    0.44-1.1build1                                      Development files for libmemcached
    ii  libmemcached6                       0.44-1.1build1                                      A C and C++ client library to the memcached server
    ii  libmemcachedprotocol0               0.44-1.1build1                                      A library implementing the memcached protocol
    ii  libmemcachedutil1                   0.44-1.1build1                                      A library implementing connection pooling for libmemcached
    ii  libmng1                             1.0.10-3                                            Multiple-image Network Graphics library
    ii  libmount1                           2.20.1-1ubuntu3                                     block device id library
    ii  libmozjs185-1.0                     1.8.5-1.0.0-0ubuntu8                                Spidermonkey javascript engine
    ii  libmpc2                             0.9-4                                               multiple precision complex floating-point library
    ii  libmpfr4                            3.1.0-3ubuntu2                                      multiple precision floating-point computation
    ii  libmysql++-dev                      3.1.0-2                                             MySQL C++ library bindings (development)
    ii  libmysql++3                         3.1.0-2                                             MySQL C++ library bindings (runtime)
    ii  libmysql-ruby                       2.8.2+gem2deb-1build1                               Transitional package for ruby-mysql
    ii  libmysqlclient-dev                  5.5.40-0ubuntu0.12.04.1                             MySQL database development files
    ii  libmysqlclient18                    5.5.40-0ubuntu0.12.04.1                             MySQL database client library
    ii  libncurses5                         5.9-4                                               shared libraries for terminal handling
    ii  libncurses5-dev                     5.9-4                                               developer's libraries for ncurses
    ii  libncursesw5                        5.9-4                                               shared libraries for terminal handling (wide character support)
    ii  libncursesw5-dev                    5.9-4                                               developer's libraries for ncursesw
    ii  libneon27-gnutls                    0.29.6-1ubuntu1                                     HTTP and WebDAV client library (GnuTLS enabled)
    ii  libnet-daemon-perl                  0.48-1                                              Perl module for building portable Perl daemons easily
    ii  libnetcdf6                          1:4.1.1-6                                           An interface for scientific data access to large binary data
    ii  libnetpbm10                         2:10.0-15                                           Graphics conversion tools shared libraries
    ii  libnettle4                          2.4-1                                               low level cryptographic library (symmetric and one-way cryptos)
    ii  libnewt0.52                         0.52.11-2ubuntu10                                   Not Erik's Windowing Toolkit - text mode windowing with slang
    ii  libnfnetlink0                       1.0.0-1                                             Netfilter netlink library
    ii  libnih-dbus1                        1.0.3-4ubuntu9                                      NIH D-Bus Bindings Library
    ii  libnih1                             1.0.3-4ubuntu9                                      NIH Utility Library
    ii  libnotify4                          0.7.5-1                                             sends desktop notifications to a notification daemon
    ii  libnspr4                            4.10.7-0ubuntu0.12.04.1                             NetScape Portable Runtime Library
    ii  libnss3                             3.17.1-0ubuntu0.12.04.1                             Network Security Service libraries
    ii  libnss3-1d                          3.17.1-0ubuntu0.12.04.1                             Network Security Service libraries
    ii  libodbc1                            2.2.14p2-5ubuntu3                                   ODBC library for Unix
    ii  libogg0                             1.2.2~dfsg-1ubuntu1                                 Ogg bitstream library
    ii  libopenexr-dev                      1.6.1-4.1                                           development files for the OpenEXR image library
    ii  libopenexr6                         1.6.1-4.1                                           runtime files for the OpenEXR image library
    ii  libopts25                           1:5.12-0.1ubuntu1                                   automated option processing library based on autogen
    ii  libopts25-dev                       1:5.12-0.1ubuntu1                                   automated option processing library based on autogen
    ii  liborc-0.4-0                        1:0.4.16-1ubuntu2                                   Library of Optimized Inner Loops Runtime Compiler
    ii  libossp-uuid-dev                    1.6.2-1.1build3                                     OSSP uuid ISO-C and C++ - headers and static libraries
    ii  libossp-uuid16                      1.6.2-1.1build3                                     OSSP uuid ISO-C and C++ - shared library
    ii  libp11-kit-dev                      0.12-2ubuntu1                                       Library for loading and coordinating access to PKCS#11 modules - development
    ii  libp11-kit0                         0.12-2ubuntu1                                       Library for loading and coordinating access to PKCS#11 modules - runtime
    ii  libpam-modules                      1.1.3-7ubuntu2                                      Pluggable Authentication Modules for PAM
    ii  libpam-modules-bin                  1.1.3-7ubuntu2                                      Pluggable Authentication Modules for PAM - helper binaries
    ii  libpam-runtime                      1.1.3-7ubuntu2                                      Runtime support for the PAM library
    ii  libpam0g                            1.1.3-7ubuntu2                                      Pluggable Authentication Modules library
    ii  libpango1.0-0                       1.30.0-0ubuntu3.1                                   Layout and rendering of internationalized text
    ii  libpango1.0-dev                     1.30.0-0ubuntu3.1                                   Development files for the Pango
    ii  libpaper-utils                      1.1.24+nmu1build1                                   library for handling paper characteristics (utilities)
    ii  libpaper1                           1.1.24+nmu1build1                                   library for handling paper characteristics
    ii  libpathplan4                        2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - pathplan library
    ii  libpciaccess0                       0.12.902-1                                          Generic PCI access library for X
    ii  libpcre3                            8.12-4                                              Perl 5 Compatible Regular Expression Library - runtime files
    ii  libpcre3-dev                        8.12-4                                              Perl 5 Compatible Regular Expression Library - development files
    ii  libpcrecpp0                         8.12-4                                              Perl 5 Compatible Regular Expression Library - C++ runtime files
    ii  libpcsclite1                        1.7.4-2ubuntu2                                      Middleware to access a smart card using PC/SC (library)
    ii  libpgm-5.1-0                        5.1.116~dfsg-2                                      OpenPGM shared library
    ii  libpipeline1                        1.2.1-1                                             pipeline manipulation library
    ii  libpixman-1-0                       0.30.2-1ubuntu0.0.0.0.1                             pixel-manipulation library for X and cairo
    ii  libpixman-1-dev                     0.30.2-1ubuntu0.0.0.0.1                             pixel-manipulation library for X and cairo (development files)
    ii  libplrpc-perl                       0.2020-2                                            Perl extensions for writing PlRPC servers and clients
    ii  libplymouth2                        0.8.2-2ubuntu30                                     graphical boot animation and logger - shared libraries
    ii  libpng12-0                          1.2.46-3ubuntu4                                     PNG library - runtime
    ii  libpng12-dev                        1.2.46-3ubuntu4                                     PNG library - development
    ii  libpoppler19                        0.18.4-1ubuntu3.1                                   PDF rendering library
    ii  libpopt0                            1.16-3ubuntu1                                       lib for parsing cmdline parameters
    ii  libpq-dev                           9.3.5-1.pgdg12.4+1                                  header files for libpq5 (PostgreSQL library)
    ii  libpq5                              9.3.5-1.pgdg12.4+1                                  PostgreSQL C client library
    ii  libproj0                            4.8.0-3~precise2                                    Cartographic projection library
    ii  libpthread-stubs0                   0.3-3                                               pthread stubs not provided by native libc
    ii  libpthread-stubs0-dev               0.3-3                                               pthread stubs not provided by native libc, development files
    ii  libpython2.7                        2.7.3-0ubuntu3.5                                    Shared Python runtime library (version 2.7)
    ii  libqt4-dbus                         4:4.8.1-0ubuntu4.8                                  Qt 4 D-Bus module
    ii  libqt4-declarative                  4:4.8.1-0ubuntu4.8                                  Qt 4 Declarative module
    ii  libqt4-designer                     4:4.8.1-0ubuntu4.8                                  Qt 4 designer module
    ii  libqt4-dev                          4:4.8.1-0ubuntu4.8                                  Qt 4 development files
    ii  libqt4-help                         4:4.8.1-0ubuntu4.8                                  Qt 4 help module
    ii  libqt4-network                      4:4.8.1-0ubuntu4.8                                  Qt 4 network module
    ii  libqt4-opengl                       4:4.8.1-0ubuntu4.8                                  Qt 4 OpenGL module
    ii  libqt4-opengl-dev                   4:4.8.1-0ubuntu4.8                                  Qt 4 OpenGL library development files
    ii  libqt4-qt3support                   4:4.8.1-0ubuntu4.8                                  Qt 3 compatibility library for Qt 4
    ii  libqt4-script                       4:4.8.1-0ubuntu4.8                                  Qt 4 script module
    ii  libqt4-scripttools                  4:4.8.1-0ubuntu4.8                                  Qt 4 script tools module
    ii  libqt4-sql                          4:4.8.1-0ubuntu4.8                                  Qt 4 SQL module
    ii  libqt4-sql-mysql                    4:4.8.1-0ubuntu4.8                                  Qt 4 MySQL database driver
    ii  libqt4-svg                          4:4.8.1-0ubuntu4.8                                  Qt 4 SVG module
    ii  libqt4-test                         4:4.8.1-0ubuntu4.8                                  Qt 4 test module
    ii  libqt4-xml                          4:4.8.1-0ubuntu4.8                                  Qt 4 XML module
    ii  libqt4-xmlpatterns                  4:4.8.1-0ubuntu4.8                                  Qt 4 XML patterns module
    ii  libqtcore4                          4:4.8.1-0ubuntu4.8                                  Qt 4 core module
    ii  libqtgui4                           4:4.8.1-0ubuntu4.8                                  Qt 4 GUI module
    ii  libqtwebkit-dev                     2.2.1-1ubuntu4                                      Web content engine library for Qt - development files
    ii  libqtwebkit4                        2.2.1-1ubuntu4                                      Web content engine library for Qt
    ii  libquadmath0                        4.6.3-1ubuntu5                                      GCC Quad-Precision Math Library
    ii  libreadline-dev                     6.2-8                                               GNU readline and history libraries, development files
    ii  libreadline5                        5.2-11                                              GNU readline and history libraries, run-time libraries
    ii  libreadline6                        6.2-8                                               GNU readline and history libraries, run-time libraries
    ii  libreadline6-dev                    6.2-8                                               GNU readline and history libraries, development files
    ii  libroken18-heimdal                  1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - roken support library
    ii  librsvg2-2                          2.36.1-0ubuntu1.1                                   SAX-based renderer library for SVG files (runtime)
    ii  librsvg2-bin                        2.36.1-0ubuntu1.1                                   command-line and graphical viewers for SVG files
    ii  librsvg2-common                     2.36.1-0ubuntu1.1                                   SAX-based renderer library for SVG files (extra runtime)
    ii  librsvg2-dev                        2.36.1-0ubuntu1.1                                   SAX-based renderer library for SVG files (development)
    ii  librtmp-dev                         2.4~20110711.gitc28f1bab-1                          toolkit for RTMP streams (development files)
    ii  librtmp0                            2.4~20110711.gitc28f1bab-1                          toolkit for RTMP streams (shared library)
    ii  libruby1.8                          1.8.7.352-2ubuntu1.6                                Libraries necessary to run Ruby 1.8
    ii  libsasl2-2                          2.1.25.dfsg1-3ubuntu0.1                             Cyrus SASL - authentication abstraction library
    ii  libsasl2-dev                        2.1.25.dfsg1-3ubuntu0.1                             Cyrus SASL - development files for authentication abstraction library
    ii  libsasl2-modules                    2.1.25.dfsg1-3ubuntu0.1                             Cyrus SASL - pluggable authentication modules
    ii  libsctp1                            1.0.11+dfsg-2                                       user-space access to Linux Kernel SCTP - shared library
    ii  libselinux1                         2.1.0-4.1ubuntu1                                    SELinux runtime shared libraries
    ii  libsigsegv2                         2.9-4ubuntu2                                        Library for handling page faults in a portable way
    ii  libslang2                           2.2.4-3ubuntu1                                      S-Lang programming library - runtime version
    ii  libsm-dev                           2:1.2.0-2build1                                     X11 Session Management library (development headers)
    ii  libsm6                              2:1.2.0-2build1                                     X11 Session Management library
    ii  libspatialite3                      3.1.0~rc2-2~precise3                                Geospatial extension for SQLite - libraries
    ii  libsqlite3-0                        3.7.9-2ubuntu1.1                                    SQLite 3 shared library
    ii  libsqlite3-dev                      3.7.9-2ubuntu1.1                                    SQLite 3 development files
    ii  libss2                              1.42-1ubuntu2                                       command-line interface parsing library
    ii  libssl-dev                          1.0.1-4ubuntu5.20                                   SSL development libraries, header files and documentation
    ii  libssl-doc                          1.0.1-4ubuntu5.20                                   SSL development documentation documentation
    ii  libssl0.9.8                         0.9.8o-7ubuntu3.2                                   SSL shared libraries
    ii  libssl1.0.0                         1.0.1-4ubuntu5.20                                   SSL shared libraries
    ii  libstartup-notification0            0.12-1ubuntu1                                       library for program launch feedback (shared library)
    ii  libstdc++6                          4.6.3-1ubuntu5                                      GNU Standard C++ Library v3
    ii  libstdc++6-4.6-dev                  4.6.3-1ubuntu5                                      GNU Standard C++ Library v3 (development files)
    ii  libsvn1                             1.6.17dfsg-3ubuntu3.4                               Shared libraries used by Subversion
    ii  libswitch-perl                      2.16-2                                              switch statement for Perl
    ii  libsys-hostname-long-perl           1.4-2                                               Figure out the long (fully-qualified) hostname
    ii  libtasn1-3                          2.10-1ubuntu1.2                                     Manage ASN.1 structures (runtime)
    ii  libtasn1-3-dev                      2.10-1ubuntu1.2                                     Manage ASN.1 structures (development)
    ii  libtdb1                             1.2.9-4                                             Trivial Database - shared library
    ii  libterm-readkey-perl                2.30-4build3                                        A perl module for simple terminal control
    ii  libtext-charwidth-perl              0.04-7build1                                        get display widths of characters on the terminal
    ii  libtext-iconv-perl                  1.7-5                                               converts between character sets in Perl
    ii  libtext-wrapi18n-perl               0.06-7                                              internationalized substitute of Text::Wrap
    ii  libthai-data                        0.1.16-3                                            Data files for Thai language support library
    ii  libthai0                            0.1.16-3                                            Thai language support library
    ii  libtiff4                            3.9.5-2ubuntu1.6                                    Tag Image File Format (TIFF) library
    ii  libtiff4-dev                        3.9.5-2ubuntu1.6                                    Tag Image File Format library (TIFF), development files
    ii  libtiffxx0c2                        3.9.5-2ubuntu1.6                                    Tag Image File Format (TIFF) library -- C++ interface
    ii  libtimedate-perl                    1.2000-1                                            collection of modules to manipulate date/time information
    ii  libtinfo-dev                        5.9-4                                               developer's library for the low-level terminfo library
    ii  libtinfo5                           5.9-4                                               shared low-level terminfo library for terminal handling
    ii  libtool                             2.4.2-1ubuntu1                                      Generic library support script
    ii  libudev0                            175-0ubuntu9                                        udev library
    ii  libunistring0                       0.9.3-5                                             Unicode string library for C
    ii  libusb-0.1-4                        2:0.1.12-20                                         userspace USB programming library
    ii  libuuid1                            2.20.1-1ubuntu3                                     Universally Unique ID library
    ii  libvorbis0a                         1.3.2-1ubuntu3                                      The Vorbis General Audio Compression Codec (Decoder library)
    ii  libvorbisfile3                      1.3.2-1ubuntu3                                      The Vorbis General Audio Compression Codec (High Level API)
    ii  libwind0-heimdal                    1.6~git20120311.dfsg.1-2                            Heimdal Kerberos - stringprep implementation
    ii  libwmf-dev                          0.2.8.4-10ubuntu1                                   Windows metafile conversion development
    ii  libwmf0.2-7                         0.2.8.4-10ubuntu1                                   Windows metafile conversion library
    ii  libwrap0                            7.6.q-21                                            Wietse Venema's TCP wrappers library
    ii  libx11-6                            2:1.4.99.1-0ubuntu2.2                               X11 client-side library
    ii  libx11-data                         2:1.4.99.1-0ubuntu2.2                               X11 client-side library
    ii  libx11-dev                          2:1.4.99.1-0ubuntu2.2                               X11 client-side library (development headers)
    ii  libx11-doc                          2:1.4.99.1-0ubuntu2.2                               X11 client-side library (development documentation)
    ii  libx11-xcb1                         2:1.4.99.1-0ubuntu2.2                               Xlib/XCB interface library
    ii  libxau-dev                          1:1.0.6-4                                           X11 authorisation library (development headers)
    ii  libxau6                             1:1.0.6-4                                           X11 authorisation library
    ii  libxaw7                             2:1.0.9-3ubuntu1                                    X11 Athena Widget library
    ii  libxcb-glx0                         1.8.1-1ubuntu0.2                                    X C Binding, glx extension
    ii  libxcb-render0                      1.8.1-1ubuntu0.2                                    X C Binding, render extension
    ii  libxcb-render0-dev                  1.8.1-1ubuntu0.2                                    X C Binding, render extension, development files
    ii  libxcb-shape0                       1.8.1-1ubuntu0.2                                    X C Binding, shape extension
    ii  libxcb-shm0                         1.8.1-1ubuntu0.2                                    X C Binding, shm extension
    ii  libxcb-shm0-dev                     1.8.1-1ubuntu0.2                                    X C Binding, shm extension, development files
    ii  libxcb-util0                        0.3.8-2                                             utility libraries for X C Binding -- atom, aux and event
    ii  libxcb1                             1.8.1-1ubuntu0.2                                    X C Binding
    ii  libxcb1-dev                         1.8.1-1ubuntu0.2                                    X C Binding, development files
    ii  libxcomposite-dev                   1:0.4.3-2build1                                     X11 Composite extension library (development headers)
    ii  libxcomposite1                      1:0.4.3-2build1                                     X11 Composite extension library
    ii  libxcursor-dev                      1:1.1.12-1ubuntu0.1                                 X cursor management library (development files)
    ii  libxcursor1                         1:1.1.12-1ubuntu0.1                                 X cursor management library
    ii  libxdamage-dev                      1:1.1.3-2build1                                     X11 damaged region extension library (development headers)
    ii  libxdamage1                         1:1.1.3-2build1                                     X11 damaged region extension library
    ii  libxdmcp-dev                        1:1.1.0-4                                           X11 authorisation library (development headers)
    ii  libxdmcp6                           1:1.1.0-4                                           X11 Display Manager Control Protocol library
    ii  libxdot4                            2.26.3-10ubuntu1.1                                  rich set of graph drawing tools - xdot library
    ii  libxerces-c28                       2.8.0+deb1-2build3                                  validating XML parser library for C++
    ii  libxerces2-java                     2.11.0-4                                            Validating XML parser for Java with DOM level 3 support
    ii  libxext-dev                         2:1.3.0-3ubuntu0.1                                  X11 miscellaneous extensions library (development headers)
    ii  libxext6                            2:1.3.0-3ubuntu0.1                                  X11 miscellaneous extension library
    ii  libxfixes-dev                       1:5.0-4ubuntu4.2                                    X11 miscellaneous 'fixes' extension library (development headers)
    ii  libxfixes3                          1:5.0-4ubuntu4.2                                    X11 miscellaneous 'fixes' extension library
    ii  libxfont1                           1:1.4.4-1ubuntu0.2                                  X11 font rasterisation library
    ii  libxft-dev                          2.2.0-3ubuntu2                                      FreeType-based font drawing library for X (development files)
    ii  libxft2                             2.2.0-3ubuntu2                                      FreeType-based font drawing library for X
    ii  libxi-dev                           2:1.7.1.901-1ubuntu1~precise1                       X11 Input extension library (development headers)
    ii  libxi6                              2:1.7.1.901-1ubuntu1~precise1                       X11 Input extension library
    ii  libxinerama-dev                     2:1.1.1-3ubuntu0.1                                  X11 Xinerama extension library (development headers)
    ii  libxinerama1                        2:1.1.1-3ubuntu0.1                                  X11 Xinerama extension library
    ii  libxkbfile1                         1:1.0.7-1ubuntu0.1                                  X11 keyboard file manipulation library
    ii  libxml-commons-external-java        1.4.01-2                                            XML Commons external code - DOM, SAX, and JAXP, etc
    ii  libxml-commons-resolver1.1-java     1.2-7                                               XML entity and URI resolver library
    ii  libxml2                             2.7.8.dfsg-5.1ubuntu4.11                            GNOME XML library
    ii  libxml2-dev                         2.7.8.dfsg-5.1ubuntu4.11                            Development files for the GNOME XML library
    ii  libxml2-utils                       2.7.8.dfsg-5.1ubuntu4.11                            XML utilities
    ii  libxmlrpc-core-c3                   1.16.33-3.1ubuntu5.1                                lightweight RPC library based on XML and HTTP [C runtime libraries]
    ii  libxmu6                             2:1.1.0-3                                           X11 miscellaneous utility library
    ii  libxmuu1                            2:1.1.0-3                                           X11 miscellaneous micro-utility library
    ii  libxpm4                             1:3.5.9-4                                           X11 pixmap library
    ii  libxrandr-dev                       2:1.3.2-2ubuntu0.2                                  X11 RandR extension library (development headers)
    ii  libxrandr2                          2:1.3.2-2ubuntu0.2                                  X11 RandR extension library
    ii  libxrender-dev                      1:0.9.6-2ubuntu0.1                                  X Rendering Extension client library (development files)
    ii  libxrender1                         1:0.9.6-2ubuntu0.1                                  X Rendering Extension client library
    ii  libxslt1-dev                        1.1.26-8ubuntu1.3                                   XSLT 1.0 processing library - development kit
    ii  libxslt1.1                          1.1.26-8ubuntu1.3                                   XSLT 1.0 processing library - runtime library
    ii  libxss1                             1:1.2.1-2                                           X11 Screen Saver extension library
    ii  libxt-dev                           1:1.1.1-2ubuntu0.1                                  X11 toolkit intrinsics library (development headers)
    ii  libxt6                              1:1.1.1-2ubuntu0.1                                  X11 toolkit intrinsics library
    ii  libxtst6                            2:1.2.0-4ubuntu0.1                                  X11 Testing -- Record extension library
    ii  libxv1                              2:1.0.6-2ubuntu0.1                                  X11 Video extension library
    ii  libxxf86dga1                        2:1.1.2-1ubuntu0.1                                  X11 Direct Graphics Access extension library
    ii  libxxf86vm1                         1:1.1.1-2ubuntu0.1                                  X11 XFree86 video mode extension library
    ii  libyaml-0-2                         0.1.4-2ubuntu0.12.04.3                              Fast YAML 1.1 parser and emitter library
    ii  libyaml-dev                         0.1.4-2ubuntu0.12.04.3                              Fast YAML 1.1 parser and emitter library (development)
    ii  libzmq3                             3.2.2+dfsg-1~travis1                                lightweight messaging kernel (shared library)
    ii  linux-libc-dev                      3.2.0-23.36                                         Linux Kernel Headers for development
    ii  lksctp-tools                        1.0.11+dfsg-2                                       user-space access to Linux Kernel SCTP - commandline tools
    ii  locales                             2.13+git20120306-3                                  common files for locale support
    ii  lockfile-progs                      0.1.16                                              Programs for locking and unlocking files and mailboxes
    ii  login                               1:4.1.4.2+svn3283-3ubuntu5                          system login tools
    ii  logrotate                           3.7.8-6ubuntu5                                      Log rotation utility
    ii  lsb-base                            4.0-0ubuntu20                                       Linux Standard Base 4.0 init script functionality
    ii  lsb-release                         4.0-0ubuntu20                                       Linux Standard Base version reporting utility
    ii  lsof                                4.81.dfsg.1-1build1                                 List open files
    ii  m4                                  1.4.16-2ubuntu1                                     a macro processing language
    ii  make                                3.81-8.1ubuntu1                                     An utility for Directing compilation.
    ii  makedev                             2.3.1-89ubuntu2                                     creates device files in /dev
    ii  man-db                              2.6.1-2ubuntu2                                      on-line manual pager
    ii  manpages                            3.35-0.1ubuntu1                                     Manual pages about using a GNU/Linux system
    ii  manpages-dev                        3.35-0.1ubuntu1                                     Manual pages about using GNU/Linux for development
    ii  mawk                                1.3.3-17                                            a pattern scanning and text processing language
    ii  md5deep                             3.9.2-1                                             Recursively compute hashsums or piecewise hashings
    ii  memcached                           1.4.13-0ubuntu2.1                                   A high-performance memory object caching system
    ii  mercurial                           2.0.2-1ubuntu1                                      easy-to-use, scalable distributed version control system
    ii  mercurial-common                    2.0.2-1ubuntu1                                      easy-to-use, scalable distributed version control system (common files)
    ii  mesa-common-dev                     8.0.4-0ubuntu0.7                                    Developer documentation for Mesa
    ii  mime-support                        3.51-1ubuntu1                                       MIME files 'mime.types' & 'mailcap', and support programs
    ii  mingw32                             4.2.1.dfsg-2ubuntu1                                 Minimalist GNU win32 (cross) compiler
    ii  mingw32-binutils                    2.20-0.2                                            Minimalist GNU win32 (cross) binutils
    ii  mingw32-runtime                     3.15.2-0ubuntu1                                     Minimalist GNU win32 (cross) runtime
    ii  module-init-tools                   3.16-1ubuntu2                                       tools for managing Linux kernel modules
    ii  mongodb-10gen                       2.4.12                                              An object/document-oriented database
    ii  mount                               2.20.1-1ubuntu3                                     Tools for mounting and manipulating filesystems
    ii  mountall                            2.36                                                filesystem mounting tool
    ii  multiarch-support                   2.15-0ubuntu10                                      Transitional package to ensure multiarch compatibility
    ii  mysql-client                        5.5.40-0ubuntu0.12.04.1                             MySQL database client (metapackage depending on the latest version)
    ii  mysql-client-5.5                    5.5.40-0ubuntu0.12.04.1                             MySQL database client binaries
    ii  mysql-client-core-5.5               5.5.40-0ubuntu0.12.04.1                             MySQL database core client binaries
    ii  mysql-common                        5.5.40-0ubuntu0.12.04.1                             MySQL database common files, e.g. /etc/mysql/my.cnf
    ii  mysql-server                        5.5.40-0ubuntu0.12.04.1                             MySQL database server (metapackage depending on the latest version)
    ii  mysql-server-5.5                    5.5.40-0ubuntu0.12.04.1                             MySQL database server binaries and system database setup
    ii  mysql-server-core-5.5               5.5.40-0ubuntu0.12.04.1                             MySQL database server binaries
    ii  ncurses-base                        5.9-4                                               basic terminal type definitions
    ii  ncurses-bin                         5.9-4                                               terminal-related programs and man pages
    ii  net-tools                           1.60-24.1ubuntu2                                    The NET-3 networking toolkit
    ii  netbase                             4.47ubuntu1                                         Basic TCP/IP networking system
    ii  netcat-openbsd                      1.89-4ubuntu1                                       TCP/IP swiss army knife
    ii  netpbm                              2:10.0-15                                           Graphics conversion tools between image formats
    ii  notification-daemon                 0.7.3-1                                             daemon for displaying passive pop-up notifications
    ii  ntpdate                             1:4.2.6.p3+dfsg-1ubuntu3                            client for setting system time from NTP servers
    ii  odbcinst                            2.2.14p2-5ubuntu3                                   Helper program for accessing odbc ini files
    ii  odbcinst1debian2                    2.2.14p2-5ubuntu3                                   Support library for accessing odbc ini files
    ii  openjdk-6-jre-headless              6b33-1.13.5-1ubuntu0.12.04                          OpenJDK Java runtime, using Hotspot JIT (headless)
    ii  openjdk-6-jre-lib                   6b33-1.13.5-1ubuntu0.12.04                          OpenJDK Java runtime (architecture independent libraries)
    ii  openssh-client                      1:5.9p1-5ubuntu1                                    secure shell (SSH) client, for secure access to remote machines
    ii  openssh-server                      1:5.9p1-5ubuntu1                                    secure shell (SSH) server, for secure access from remote machines
    ii  openssl                             1.0.1-4ubuntu3                                      Secure Socket Layer (SSL) binary and related cryptographic tools
    ii  oracle-java7-installer              7u72+7u60arm-0~webupd8~2                            Oracle Java(TM) Development Kit (JDK) 7
    ii  passwd                              1:4.1.4.2+svn3283-3ubuntu5                          change and administer password and group data
    ii  patch                               2.6.1-3                                             Apply a diff file to an original
    ii  perl                                5.14.2-6ubuntu2                                     Larry Wall's Practical Extraction and Report Language
    ii  perl-base                           5.14.2-6ubuntu2                                     minimal Perl system
    ii  perl-modules                        5.14.2-6ubuntu2                                     Core Perl modules
    ii  pgdg-keyring                        2014.1                                              keyring for apt.postgresql.org
    ii  pkg-config                          0.26-1ubuntu1                                       manage compile and link flags for libraries
    ii  plymouth                            0.8.2-2ubuntu30                                     graphical boot animation and logger - main package
    ii  po-debconf                          1.0.16+nmu2ubuntu1                                  tool for managing templates file translations with gettext
    ii  postgis                             2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL
    ii  postgis-doc                         2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL -- documentation
    ii  postgresql-9.1                      9.1.14-1.pgdg12.4+1                                 object-relational SQL database, version 9.1 server
    ii  postgresql-9.1-postgis-2.1          2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.1
    ii  postgresql-9.1-postgis-scripts      2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.1 -- scripts
    ii  postgresql-9.2                      9.2.9-1.pgdg12.4+1                                  object-relational SQL database, version 9.2 server
    ii  postgresql-9.2-postgis-2.1          2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.2
    ii  postgresql-9.2-postgis-scripts      2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.2 -- scripts
    ii  postgresql-9.3                      9.3.5-1.pgdg12.4+1                                  object-relational SQL database, version 9.3 server
    ii  postgresql-9.3-postgis-2.1          2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.3
    ii  postgresql-9.3-postgis-scripts      2.1.4+dfsg-1.pgdg12.4+2                             Geographic objects support for PostgreSQL 9.3 -- scripts
    ii  postgresql-client                   9.3+154.pgdg12.4+1                                  front-end programs for PostgreSQL (supported version)
    ii  postgresql-client-9.1               9.1.14-1.pgdg12.4+1                                 front-end programs for PostgreSQL 9.1
    ii  postgresql-client-9.2               9.2.9-1.pgdg12.4+1                                  front-end programs for PostgreSQL 9.2
    ii  postgresql-client-9.3               9.3.5-1.pgdg12.4+1                                  front-end programs for PostgreSQL 9.3
    ii  postgresql-client-common            154.pgdg12.4+1                                      manager for multiple PostgreSQL client versions
    ii  postgresql-common                   154.pgdg12.4+1                                      PostgreSQL database-cluster manager
    ii  postgresql-contrib-9.1              9.1.14-1.pgdg12.4+1                                 additional facilities for PostgreSQL
    ii  postgresql-contrib-9.2              9.2.9-1.pgdg12.4+1                                  additional facilities for PostgreSQL
    ii  postgresql-contrib-9.3              9.3.5-1.pgdg12.4+1                                  additional facilities for PostgreSQL
    ii  procps                              1:3.2.8-11ubuntu6                                   /proc file system utilities
    ii  proj-bin                            4.8.0-3~precise2                                    Cartographic projection library (tools)
    ii  proj-data                           4.8.0-3~precise2                                    Cartographic projection filter and library (transitional package)
    ii  psmisc                              22.15-2ubuntu1.1                                    utilities that use the proc file system
    ii  python                              2.7.3-0ubuntu2.2                                    interactive high-level object-oriented language (default version)
    ii  python-apt                          0.8.3ubuntu7                                        Python interface to libapt-pkg
    ii  python-apt-common                   0.8.3ubuntu7                                        Python interface to libapt-pkg (locales)
    ii  python-bzrlib                       2.5.1-0ubuntu2                                      distributed version control system - python library
    ii  python-configobj                    4.7.2+ds-3build1                                    simple but powerful config file reader and writer for Python
    ii  python-crypto                       2.4.1-1ubuntu0.1                                    cryptographic algorithms and protocols for Python
    ii  python-dev                          2.7.3-0ubuntu2.2                                    header files and a static library for Python (default)
    ii  python-gnupginterface               0.3.2-9.1ubuntu3                                    Python interface to GnuPG (GPG)
    ii  python-httplib2                     0.7.2-1ubuntu2.1                                    comprehensive HTTP client library written for Python
    ii  python-keyring                      0.9.2-0ubuntu0.12.04.2                              store and access your passwords safely
    ii  python-launchpadlib                 1.9.12-1                                            Launchpad web services client library
    ii  python-lazr.restfulclient           0.12.0-1ubuntu1.1                                   client for lazr.restful-based web services
    ii  python-lazr.uri                     1.0.3-1                                             library for parsing, manipulating, and generating URIs
    ii  python-minimal                      2.7.3-0ubuntu2.2                                    minimal subset of the Python language (default version)
    ii  python-oauth                        1.0.1-3build1                                       Python library implementing of the OAuth protocol
    ii  python-paramiko                     1.7.7.1-2ubuntu1                                    Make ssh v2 connections with Python
    ii  python-pkg-resources                0.6.24-1ubuntu1                                     Package Discovery and Resource Access using pkg_resources
    ii  python-pycurl                       7.19.0-4ubuntu3                                     Python bindings to libcurl
    ii  python-simplejson                   2.3.2-1                                             simple, fast, extensible JSON encoder/decoder for Python
    ii  python-software-properties          0.82.7                                              manage the repositories that you install software from
    ii  python-wadllib                      1.3.0-2                                             Python library for navigating WADL files
    ii  python-zope.interface               3.6.1-1ubuntu3                                      Interfaces for Python
    ii  python2.7                           2.7.3-0ubuntu3.5                                    Interactive high-level object-oriented language (version 2.7)
    ii  python2.7-dev                       2.7.3-0ubuntu3.5                                    Header files and a static library for Python (v2.7)
    ii  python2.7-minimal                   2.7.3-0ubuntu3.5                                    Minimal subset of the Python language (version 2.7)
    ii  qdbus                               4:4.8.1-0ubuntu4.8                                  Qt 4 D-Bus tool
    ii  qt4-linguist-tools                  4:4.8.1-0ubuntu4.8                                  Qt 4 Linguist tools
    ii  qt4-qmake                           4:4.8.1-0ubuntu4.8                                  Qt 4 qmake Makefile generator tool
    ii  rabbitmq-server                     3.4.2-1                                             AMQP server written in Erlang
    ii  ragel                               6.7-1build1                                         compiles finite state machines into code in various languages
    ii  readline-common                     6.2-8                                               GNU readline and history libraries, common files
    ii  redis-server                        2:2.8.18-rwky1~precise                              Persistent key-value database with network interface
    ii  resolvconf                          1.63ubuntu11                                        name server information handler
    ii  riak                                1.4.12-1                                            Riak is a distributed data store
    ii  rsync                               3.0.9-1ubuntu1                                      fast, versatile, remote (and local) file-copying tool
    ii  rsyslog                             5.8.6-1ubuntu8                                      reliable system and kernel logging daemon
    ii  ruby                                4.8                                                 Transitional package for ruby1.8
    ii  ruby-mysql                          2.8.2+gem2deb-1build1                               MySQL module for Ruby
    ii  ruby1.8                             1.8.7.352-2ubuntu1.6                                Interpreter of object-oriented scripting language Ruby 1.8
    ii  scons                               2.1.0-1                                             replacement for make
    ii  sed                                 4.2.1-9                                             The GNU sed stream editor
    ii  sensible-utils                      0.0.6ubuntu2                                        Utilities for sensible alternative selection
    ii  sgml-base                           1.26+nmu1ubuntu1                                    SGML infrastructure and SGML catalog file support
    ii  shared-mime-info                    1.0-0ubuntu4.1                                      FreeDesktop.org shared MIME database and spec
    ii  sound-theme-freedesktop             0.7.pristine-2                                      freedesktop.org sound theme
    ii  sqlite3                             3.7.9-2ubuntu1.1                                    Command line interface for SQLite 3
    ii  sqlite3-doc                         3.7.9-2ubuntu1.1                                    SQLite 3 documentation
    ii  ssh                                 1:5.9p1-5ubuntu1                                    secure shell client and server (metapackage)
    ii  ssl-cert                            1.0.28ubuntu0.1                                     simple debconf wrapper for OpenSSL
    ii  strace                              4.5.20-2.3ubuntu1                                   A system call tracer
    ii  subversion                          1.6.17dfsg-3ubuntu3.4                               Advanced version control system
    ii  sudo                                1.8.3p1-1ubuntu3                                    Provide limited super user privileges to specific users
    ii  sysv-rc                             2.88dsf-13.10ubuntu11                               System-V-like runlevel change mechanism
    ii  sysvinit-utils                      2.88dsf-13.10ubuntu11                               System-V-like utilities
    ii  tar                                 1.26-4ubuntu1                                       GNU version of the tar archiving utility
    ii  telnet                              0.17-36build1                                       The telnet client
    ii  ttf-dejavu-core                     2.33-2ubuntu1                                       Vera font family derivate with additional characters
    ii  tzdata                              2014i-0ubuntu0.12.04                                time zone and daylight-saving time data
    ii  tzdata-java                         2014i-0ubuntu0.12.04                                time zone and daylight-saving time data for use by java runtimes
    ii  ubuntu-keyring                      2011.11.21                                          GnuPG keys of the Ubuntu archive
    ii  ubuntu-minimal                      1.267                                               Minimal core of Ubuntu
    ii  ucf                                 3.0025+nmu2ubuntu1                                  Update Configuration File: preserve user changes to config files.
    ii  udev                                175-0ubuntu9                                        rule-based device node and kernel event manager
    ii  unattended-upgrades                 0.76                                                automatic installation of security upgrades
    ii  unzip                               6.0-4ubuntu1                                        De-archiver for .zip files
    ii  upstart                             1.5-0ubuntu5                                        event-based init daemon
    ii  ureadahead                          0.100.0-12                                          Read required files in advance
    ii  util-linux                          2.20.1-1ubuntu3                                     Miscellaneous system utilities
    ii  vim                                 2:7.3.429-2ubuntu2                                  Vi IMproved - enhanced vi editor
    ii  vim-common                          2:7.3.429-2ubuntu2                                  Vi IMproved - Common files
    ii  vim-runtime                         2:7.3.429-2ubuntu2                                  Vi IMproved - Runtime files
    ii  vim-tiny                            2:7.3.429-2ubuntu2                                  Vi IMproved - enhanced vi editor - compact version
    ii  wamerican                           7.1-1                                               American English dictionary words for /usr/share/dict
    ii  wget                                1.13.4-2ubuntu1                                     retrieves files from the web
    ii  whiptail                            0.52.11-2ubuntu10                                   Displays user-friendly dialog boxes from shell scripts
    ii  x11-common                          1:7.6+12ubuntu2                                     X Window System (X.Org) infrastructure
    ii  x11-utils                           7.6+4ubuntu0.1                                      X11 utilities
    ii  x11-xkb-utils                       7.6+4                                               X11 XKB utilities
    ii  x11-xserver-utils                   7.6+3                                               X server utilities
    ii  x11proto-composite-dev              1:0.4.2-2                                           X11 Composite extension wire protocol
    ii  x11proto-core-dev                   7.0.22-1ubuntu0.1                                   X11 core wire protocol and auxiliary headers
    ii  x11proto-damage-dev                 1:1.2.1-2                                           X11 Damage extension wire protocol
    ii  x11proto-fixes-dev                  1:5.0-2ubuntu1                                      X11 Fixes extension wire protocol
    ii  x11proto-input-dev                  2.3-1~precise1                                      X11 Input extension wire protocol
    ii  x11proto-kb-dev                     1.0.5-2                                             X11 XKB extension wire protocol
    ii  x11proto-randr-dev                  1.4.0+git20120101.is.really.1.4.0-0ubuntu1~precise2 X11 RandR extension wire protocol
    ii  x11proto-render-dev                 2:0.11.1-2                                          X11 Render extension wire protocol
    ii  x11proto-xext-dev                   7.3.0-1~precise1                                    X11 various extension wire protocol
    ii  x11proto-xinerama-dev               1.2.1-2                                             X11 Xinerama extension wire protocol
    ii  xauth                               1:1.0.6-1                                           X authentication utility
    ii  xdg-utils                           1.1.0~rc1-2ubuntu6                                  desktop integration utilities from freedesktop.org
    ii  xfonts-base                         1:1.0.3                                             standard fonts for X
    ii  xfonts-encodings                    1:1.0.4-1ubuntu1                                    Encodings for X.Org fonts
    ii  xfonts-utils                        1:7.6+1                                             X Window System font utility programs
    ii  xkb-data                            2.5-1ubuntu1                                        X Keyboard Extension (XKB) configuration data
    ii  xml-core                            0.13                                                XML infrastructure and XML catalog file support
    ii  xorg-sgml-doctools                  1:1.10-1                                            Common tools for building X.Org SGML documentation
    ii  xserver-common                      2:1.11.4-0ubuntu10.14                               common files used by various X servers
    ii  xserver-xorg-core                   2:1.11.4-0ubuntu10.14                               Xorg X server - core server
    ii  xtrans-dev                          1.2.6-2                                             X transport library (development files)
    ii  xvfb                                2:1.11.4-0ubuntu10.14                               Virtual Framebuffer 'fake' X server
    ii  xz-lzma                             5.1.1alpha+20110809-3                               XZ-format compression utilities - compatibility commands
    ii  xz-utils                            5.1.1alpha+20110809-3                               XZ-format compression utilities
    ii  zip                                 3.0-4                                               Archiver for .zip files
    ii  zlib1g                              1:1.2.3.4.dfsg-3ubuntu4                             compression library - runtime
    ii  zlib1g-dev                          1:1.2.3.4.dfsg-3ubuntu4                             compression library - development
